import React, { useState } from 'react';
import { X, ShieldCheck, FileCheck, RefreshCw, CheckCircle, Upload, Award } from 'lucide-react';

interface VerimediaDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerimediaDemoModal: React.FC<VerimediaDemoModalProps> = ({ isOpen, onClose }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [fileName, setFileName] = useState('media_sample_verification.mp4');
  const [fileSize, setFileSize] = useState('6.4 MB');
  const [mediaType, setMediaType] = useState<'video' | 'audio' | 'image'>('video');
  const [result, setResult] = useState<{
    hash: string;
    integrityScore: number;
    status: 'Authentic' | 'Verified' | 'Flagged';
    metadataClean: boolean;
    timestamp: string;
    details: string[];
  } | null>({
    hash: '9a7f34c2810a48b3941ec920b7548a734e569c73b0638102b48e6c491295db28',
    integrityScore: 98,
    status: 'Verified',
    metadataClean: true,
    timestamp: '2026-10-16 02:59 UTC',
    details: [
      'Audio & Video bitstream integrity analysis verified',
      'No deepfake or synthesis generative artifacts detected in keyframes',
      'EXIF & container metadata sequence verified against SQLite integrity index',
      'Tamper-evident hash registered via Express / SQLite backend pipeline',
    ],
  });

  if (!isOpen) return null;

  const handleSimulateAnalysis = (customName?: string) => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 5) + 95; // 95 - 99
      const generatedHash = Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');

      setResult({
        hash: generatedHash,
        integrityScore: randomScore,
        status: 'Verified',
        metadataClean: true,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
        details: [
          'VERIMEDIA AI inspection: zero frame-level manipulation markers detected',
          'Acoustic spectrum continuity verified with no spectral splicing',
          'Media metadata authenticated against verified recording parameters',
          'Registered to SQLite local database store with cryptographic signature',
        ],
      });
      setAnalyzing(false);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');
      if (file.type.includes('audio')) setMediaType('audio');
      else if (file.type.includes('video')) setMediaType('video');
      else setMediaType('image');
      handleSimulateAnalysis(file.name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B132B] border-2 border-[#80FFDB] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C2541] border-b border-[#344563]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#80FFDB] text-[#0B132B] rounded-lg">
              <ShieldCheck className="w-6 h-6 text-[#0B132B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-[#F1FAF9] tracking-tight">VERIMEDIA Live Demo</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#0B132B] border border-[#80FFDB]/40 text-[10px] font-mono text-[#80FFDB] font-bold">
                  IBM SkillsBuild Finalist
                </span>
              </div>
              <p className="text-xs text-[#B8C7D9]">
                Media-Investigation Platform for Image, Video &amp; Audio Authenticity
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#B8C7D9] hover:text-[#F1FAF9] hover:bg-[#0B132B] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* File Selector & Test Trigger */}
          <div className="p-4 bg-[#1C2541] rounded-xl border border-[#344563] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#80FFDB] font-semibold">Active Investigation Target</span>
                <p className="text-sm font-mono text-[#F1FAF9] font-medium">{fileName} ({fileSize})</p>
              </div>
              <label className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#0B132B] bg-[#80FFDB] hover:bg-[#5EEAD4] rounded-lg cursor-pointer transition-colors shrink-0">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Media Asset</span>
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#344563]">
              <button
                onClick={() => handleSimulateAnalysis()}
                disabled={analyzing}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0B132B] bg-[#80FFDB] hover:bg-[#5EEAD4] rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${analyzing ? 'animate-spin' : ''}`} />
                {analyzing ? 'Inspecting Media Streams...' : 'Run VERIMEDIA Inspection'}
              </button>
              <button
                onClick={() => {
                  setFileName('press_release_keyframe.png');
                  setFileSize('3.2 MB');
                  setMediaType('image');
                  handleSimulateAnalysis('press_release_keyframe.png');
                }}
                className="px-3 py-2 text-xs font-medium text-[#B8C7D9] hover:text-[#F1FAF9] bg-[#0B132B] hover:bg-[#344563] rounded-lg transition-colors"
              >
                Sample Image
              </button>
              <button
                onClick={() => {
                  setFileName('interview_audio_track.wav');
                  setFileSize('14.8 MB');
                  setMediaType('audio');
                  handleSimulateAnalysis('interview_audio_track.wav');
                }}
                className="px-3 py-2 text-xs font-medium text-[#B8C7D9] hover:text-[#F1FAF9] bg-[#0B132B] hover:bg-[#344563] rounded-lg transition-colors"
              >
                Sample Audio
              </button>
            </div>
          </div>

          {/* Loading Animation */}
          {analyzing && (
            <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-12 h-12 border-4 border-[#80FFDB] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-mono text-[#80FFDB]">
                Analyzing potential manipulation signatures via React + Express backend...
              </p>
            </div>
          )}

          {/* Results Display */}
          {!analyzing && result && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#1C2541] rounded-xl border border-[#344563]">
                  <span className="text-xs text-[#B8C7D9]">Authenticity Confidence</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-[#80FFDB] font-mono">{result.integrityScore}%</span>
                    <span className="text-xs text-emerald-400 font-semibold">Genuine</span>
                  </div>
                </div>

                <div className="p-4 bg-[#1C2541] rounded-xl border border-[#344563]">
                  <span className="text-xs text-[#B8C7D9]">Analysis Result</span>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-base font-bold text-[#F1FAF9] font-mono">{result.status}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#1C2541] rounded-xl border border-[#344563]">
                  <span className="text-xs text-[#B8C7D9]">Database Sync</span>
                  <div className="flex items-center gap-2 mt-2">
                    <FileCheck className="w-5 h-5 text-[#80FFDB]" />
                    <span className="text-sm font-semibold text-[#F1FAF9]">SQLite Record Created</span>
                  </div>
                </div>
              </div>

              {/* Cryptographic Hash */}
              <div className="p-4 bg-[#0B132B] rounded-xl border border-[#80FFDB]/40 space-y-1">
                <div className="flex items-center justify-between text-xs text-[#80FFDB] font-mono">
                  <span>SHA-256 MEDIA FINGERPRINT</span>
                  <span>{result.timestamp}</span>
                </div>
                <p className="text-xs font-mono text-[#F1FAF9] break-all bg-[#1C2541] p-2 rounded border border-[#344563]">
                  {result.hash}
                </p>
              </div>

              {/* Diagnostic Log */}
              <div className="p-4 bg-[#1C2541] rounded-xl border border-[#344563] space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#80FFDB] font-semibold">
                  Investigation Audit Trail
                </h4>
                <ul className="space-y-1.5 text-xs text-[#B8C7D9] font-mono">
                  {result.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#80FFDB]">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#1C2541] border-t border-[#344563] flex items-center justify-between">
          <p className="text-xs text-[#B8C7D9]">
            Team Member: <span className="text-[#F1FAF9] font-semibold">Neelapala Satya Sudheer</span> • Pragati University
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#F1FAF9] bg-[#0B132B] hover:bg-[#344563] border border-[#344563] rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
