import React, { useState } from 'react';
import { PromptItem } from '../types/prompt';
import { Play, Image as ImageIcon, Film } from 'lucide-react';

interface LivePreviewRendererProps {
  prompt: PromptItem;
  size?: 'compact' | 'full';
}

export const LivePreviewRenderer: React.FC<LivePreviewRendererProps> = ({ prompt, size = 'compact' }) => {
  const { style, preview } = prompt;
  const isCompact = size === 'compact';
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [viewMode, setViewMode] = useState<'video' | 'image'>(preview.videoUrl ? 'video' : 'image');

  // PRIORITY 1: VIDEO PREVIEW (High-demand feature requested by user)
  if (preview.videoUrl && !videoError && (isCompact || viewMode === 'video')) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center group/preview">
        {/* Toggle bar in full modal mode if both video and image are available */}
        {!isCompact && preview.screenshotUrl && !imageError && (
          <div className="absolute top-3 right-3 z-30 flex items-center bg-black/70 backdrop-blur-md border border-white/20 rounded-lg p-1 text-xs gap-1">
            <button
              onClick={() => setViewMode('video')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                viewMode === 'video' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Vidéo démo</span>
            </button>
            <button
              onClick={() => setViewMode('image')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                viewMode === 'image' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Capture HD</span>
            </button>
          </div>
        )}

        <video
          src={preview.videoUrl}
          poster={preview.screenshotUrl || undefined}
          autoPlay
          muted
          loop
          playsInline
          controls={!isCompact}
          onError={() => setVideoError(true)}
          className={`w-full ${isCompact ? 'h-full object-cover object-top' : 'max-h-[500px] object-contain'} transition-transform duration-500`}
        />

        {isCompact && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-rose-500/80 text-white backdrop-blur-md shadow-sm border border-rose-400/40 pointer-events-none">
              <Play className="w-2.5 h-2.5 fill-white" />
              <span>DÉMO</span>
            </div>
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] pointer-events-none">
              <span className="font-semibold text-white/95 drop-shadow truncate">
                {preview.headline}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/70 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                {style}
              </span>
            </div>
          </>
        )}
      </div>
    );
  }

  // PRIORITY 2: SCREENSHOT / IMAGE PREVIEW
  if (preview.screenshotUrl && !imageError) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center group/preview">
        {!isCompact && preview.videoUrl && !videoError && (
          <div className="absolute top-3 right-3 z-30 flex items-center bg-black/70 backdrop-blur-md border border-white/20 rounded-lg p-1 text-xs gap-1">
            <button
              onClick={() => setViewMode('video')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                viewMode === 'video' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Vidéo démo</span>
            </button>
            <button
              onClick={() => setViewMode('image')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                viewMode === 'image' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Capture HD</span>
            </button>
          </div>
        )}

        <img 
          src={preview.screenshotUrl} 
          alt={preview.headline || prompt.titleFr} 
          className={`w-full ${isCompact ? 'h-full object-cover object-top' : 'max-h-[500px] object-contain'} transition-transform duration-500 group-hover/preview:scale-105`}
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] pointer-events-none">
          <span className="font-semibold text-white/90 drop-shadow truncate">
            {preview.headline}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/60 text-white border border-white/20 backdrop-blur-md">
            {style}
          </span>
        </div>
      </div>
    );
  }

  // 1. NEUBRUTALISM
  if (style === 'Neubrutalism') {
    return (
      <div className={`w-full h-full p-4 flex flex-col justify-between font-sans ${isCompact ? 'text-xs' : 'text-sm'}`} style={{ backgroundColor: preview.theme.bg }}>
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 font-black uppercase text-[10px] bg-[#FDE047] text-black border-2 border-black shadow-[2px_2px_0px_#000]">
            NEU-BRUTAL
          </span>
          <span className="font-mono font-bold text-[11px] text-black bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
            SYS.v2
          </span>
        </div>
        
        <div className="bg-white p-3 border-2 border-black shadow-[4px_4px_0px_#000] space-y-2">
          <div className="flex items-center justify-between font-black text-black">
            <span className="truncate">{preview.headline}</span>
            <span className="w-2.5 h-2.5 bg-[#A3E635] border border-black inline-block"></span>
          </div>
          <p className="text-[11px] font-medium text-slate-800 line-clamp-1">{preview.subline}</p>
          <div className="flex gap-1.5 pt-1">
            <button className="px-3 py-1 font-black text-[10px] uppercase bg-[#FDE047] text-black border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              Valider
            </button>
            <button className="px-3 py-1 font-bold text-[10px] uppercase bg-white text-black border-2 border-black shadow-[2px_2px_0px_#000]">
              Action
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. CLAYMORPHISM
  if (style === 'Claymorphism') {
    return (
      <div className={`w-full h-full p-4 flex flex-col justify-between ${isCompact ? 'text-xs' : 'text-sm'}`} style={{ backgroundColor: '#EEF2F6' }}>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full font-bold text-[10px] bg-white text-[#FF6B6B] shadow-[3px_3px_6px_#cbd5e1,-3px_-3px_6px_#ffffff]">
            CLAY SOFT 3D
          </span>
          <div className="w-3 h-3 rounded-full bg-[#38BDF8] shadow-[2px_2px_4px_#94a3b8]"></div>
        </div>

        <div className="bg-white/95 rounded-2xl p-3.5 shadow-[8px_8px_16px_rgba(160,175,200,0.4),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-3px_-3px_6px_rgba(180,195,220,0.3)] space-y-2">
          <div className="font-extrabold text-slate-800 text-xs truncate">{preview.headline}</div>
          <p className="text-[11px] text-slate-500 line-clamp-1">{preview.subline}</p>
          <div className="flex items-center justify-between pt-1">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#FF6B6B] text-white shadow-[2px_2px_5px_rgba(255,107,107,0.4)]">
              Essai Gratuit
            </span>
            <span className="text-[11px] font-bold text-slate-600">0€ / mois</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. E-INK & MONOSPACE
  if (style === 'E-Ink & Monospace') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono bg-[#F5F5F0] text-[#111111] border-b border-black">
        <div className="flex items-center justify-between text-[10px] font-bold border-b border-black pb-1">
          <span>[SYSTEM: E-INK]</span>
          <span>STATUS: OK</span>
        </div>
        <div className="bg-white p-3 border border-black space-y-1.5 shadow-[2px_2px_0px_#000]">
          <div className="text-xs font-bold uppercase truncate">{preview.headline}</div>
          <div className="text-[10px] text-slate-600 line-clamp-1">&gt; {preview.subline}</div>
          <div className="flex justify-between items-center text-[10px] pt-1 border-t border-dotted border-slate-400">
            <span>COMMIT #3849</span>
            <span className="bg-black text-white px-1.5 py-0.5 font-bold">PROD-01</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Y2K CYBER CHROME
  if (style === 'Y2K Cyber Chrome') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#08060E] relative overflow-hidden">
        {/* Iridescent shimmer background */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 blur-xl"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-200">
            ✦ Y2K.CYBER.PROTOCOL
          </span>
          <span className="text-[10px] font-mono text-cyan-300 border border-cyan-500/40 px-1.5 rounded">
            2000-X
          </span>
        </div>

        <div className="relative z-10 p-3 rounded-xl border border-pink-500/40 bg-purple-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.3)] space-y-1.5">
          <div className="text-xs font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-pink-300 uppercase truncate">
            {preview.headline}
          </div>
          <p className="text-[11px] text-pink-200/80 line-clamp-1">{preview.subline}</p>
          <div className="flex gap-2 pt-1">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm">
              Launch Web3
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 5. KINETIC & 3D / MOTION
  if (style === 'Kinetic & 3D WebGL') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#050508] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-600/30 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-600/20 blur-2xl"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping"></span>
            FRAMER MOTION
          </span>
          <span className="text-[10px] font-mono text-slate-400">60 FPS</span>
        </div>

        <div className="relative z-10 p-3 rounded-xl bg-slate-900/80 border border-violet-500/30 backdrop-blur-md shadow-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white truncate">{preview.headline}</span>
            <span className="text-[10px] font-mono text-violet-400">#kinetic</span>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1">{preview.subline}</p>
          <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono">whileHover scale: 1.04</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. EDITORIAL & MINIMALIST SWISS
  if (style === 'Editorial & Typographique' || style === 'Minimalist & Swiss') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0D0D11] text-white font-sans border-b border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
          <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
            SWISS GRID // 01
          </span>
          <span className="text-[10px] text-slate-400">EDITION 2026</span>
        </div>

        <div className="p-3 bg-[#16161F] border border-slate-700/80 rounded-lg space-y-1.5">
          <h4 className="text-xs font-extrabold tracking-tight uppercase text-white truncate">
            {preview.headline}
          </h4>
          <p className="text-[11px] text-slate-400 line-clamp-1 font-serif italic">
            "{preview.subline}"
          </p>
          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>DISCIPLINE: CODE & ART</span>
            <span className="text-amber-400 font-bold">VOIR PROJET &rarr;</span>
          </div>
        </div>
      </div>
    );
  }

  // 7. GLASSMORPHISM
  if (style === 'Glassmorphism') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500/20 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md">
            GLASSFROST UI
          </span>
          <span className="text-[10px] text-purple-200">blur-xl</span>
        </div>
        <div className="relative z-10 p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg space-y-1.5">
          <div className="text-xs font-bold text-white truncate">{preview.headline}</div>
          <p className="text-[11px] text-slate-200 line-clamp-1">{preview.subline}</p>
          <div className="flex gap-2 pt-1">
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-white/20 text-white border border-white/30">
              Translucide
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 8. AURORA MESH & GLOW
  if (style === 'Aurora Mesh & Glow') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#04060C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/40 via-emerald-500/20 to-transparent blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            AURORA MESH
          </span>
          <span className="text-[10px] text-emerald-400 font-mono">#gradient</span>
        </div>
        <div className="relative z-10 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/30 backdrop-blur-md space-y-1.5">
          <div className="text-xs font-bold text-white truncate">{preview.headline}</div>
          <p className="text-[11px] text-slate-300 line-clamp-1">{preview.subline}</p>
          <div className="flex items-center gap-2 pt-1 text-[10px] font-mono text-emerald-300">
            <span>Mesh: Emerald &amp; Indigo</span>
          </div>
        </div>
      </div>
    );
  }

  // 9. RETRO TERMINAL
  if (style === 'Retro Terminal') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono bg-[#0A0D08] text-[#4AF626] border-b border-[#4AF626]/40">
        <div className="flex items-center justify-between text-[10px] border-b border-[#4AF626]/30 pb-1">
          <span>TERM://vty100</span>
          <span className="animate-pulse">● REC</span>
        </div>
        <div className="p-2.5 bg-[#050804] border border-[#4AF626]/40 rounded space-y-1 text-xs">
          <div className="font-bold text-[#4AF626] truncate">&gt; {preview.headline}</div>
          <p className="text-[10px] text-[#4AF626]/80 line-clamp-1">{preview.subline}</p>
          <div className="text-[10px] text-slate-400 pt-1">$ root@local:~ run portfolio.sh</div>
        </div>
      </div>
    );
  }

  // 10. BROADSHEET & NEWSPRINT
  if (style === 'Broadsheet & Newsprint') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-serif bg-[#FAF7F2] text-[#1A1A1A] border-b border-black">
        <div className="flex items-center justify-between border-b-2 border-black pb-1 text-[10px] font-sans font-bold uppercase tracking-wider">
          <span>GAZETTE &bull; VOL. LXXII</span>
          <span>PRIX: 2,50 €</span>
        </div>
        <div className="bg-white p-3 border border-slate-300 space-y-1">
          <h4 className="text-xs font-black uppercase tracking-tight text-black line-clamp-1 font-sans">
            {preview.headline}
          </h4>
          <p className="text-[11px] text-slate-700 italic line-clamp-1">
            {preview.subline}
          </p>
          <div className="text-[9px] font-sans font-bold text-slate-500 uppercase pt-1 border-t border-slate-200">
            Éditorial de Une &bull; Lecture 3 min
          </div>
        </div>
      </div>
    );
  }

  // 11. MEMPHIS & POP ART
  if (style === 'Memphis & Pop Art') {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#FFE600] font-sans text-black relative overflow-hidden border-b-2 border-black">
        <div className="flex items-center justify-between font-black text-[10px] uppercase">
          <span className="bg-black text-white px-2 py-0.5">MEMPHIS '81</span>
          <span className="bg-[#FF007F] text-white px-2 py-0.5 border border-black">POP!</span>
        </div>
        <div className="bg-white p-3 border-2 border-black shadow-[3px_3px_0px_#00E5FF] space-y-1.5">
          <div className="text-xs font-black uppercase truncate text-black">{preview.headline}</div>
          <p className="text-[11px] font-bold text-slate-800 line-clamp-1">{preview.subline}</p>
          <div className="flex gap-1.5 pt-1">
            <span className="px-2 py-0.5 text-[10px] font-black bg-[#00E5FF] border border-black">EXPLORE</span>
          </div>
        </div>
      </div>
    );
  }

  // 12. DEFAULT: DARK HIGH-CONTRAST BENTO
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-[#090A0F] text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          BENTO TELEMETRY
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] font-mono text-slate-400">LIVE</span>
        </div>
      </div>

      <div className="relative z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-md space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-white">
          <span className="truncate">{preview.headline}</span>
          <span className="text-[10px] font-mono text-indigo-400">99.99%</span>
        </div>
        <p className="text-[11px] text-slate-400 line-clamp-1">{preview.subline}</p>
        
        {preview.metrics && preview.metrics.length > 0 && (
          <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-300">
            {preview.metrics.slice(0, 2).map((m, i) => (
              <span key={i}><span className="text-slate-500">{m.label}:</span> {m.value}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
