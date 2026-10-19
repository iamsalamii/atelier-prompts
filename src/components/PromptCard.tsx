import React from 'react';
import { PromptItem } from '../types/prompt';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';

interface PromptCardProps {
  prompt: PromptItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (prompt: PromptItem) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  const { preview } = prompt;

  return (
    <div
      onClick={() => onSelect(prompt)}
      className="group relative flex flex-col bg-[#111625] border border-slate-800/80 rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Visual Preview Header */}
      <div 
        className="relative h-44 w-full p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/60"
        style={{
          background: preview.type === 'gradient'
            ? `radial-gradient(circle at top right, ${preview.theme.accent}33, ${preview.theme.bg} 80%)`
            : preview.theme.bg
        }}
      >
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Badges & Favorite Action */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {prompt.category}
            </span>
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
              {prompt.style}
            </span>
          </div>

          <button
            onClick={(e) => onToggleFavorite(prompt.id, e)}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            className={`p-2 rounded-full backdrop-blur-md transition-colors ${
              isFavorite
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-400' : ''}`} />
          </button>
        </div>

        {/* Live Simulation Card inside Preview */}
        <div 
          className="relative z-10 p-3 rounded-xl border backdrop-blur-md shadow-sm"
          style={{
            backgroundColor: `${preview.theme.cardBg}CC`,
            borderColor: preview.theme.border
          }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-slate-200 truncate">
              {preview.headline}
            </span>
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: preview.theme.accent }}
            />
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1">
            {preview.subline}
          </p>

          {preview.metrics && preview.metrics.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
              {preview.metrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span className="text-slate-400">{m.label}:</span>
                  <span className="font-mono font-medium text-slate-200">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content & Metadata */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-indigo-400">
              {prompt.sources[0]?.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">
              {prompt.pageType}
            </span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
            {prompt.titleFr}
          </h3>

          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {prompt.descriptionFr}
          </p>
        </div>

        {/* Footer info: Licence, Auteur, CTA */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="truncate max-w-[140px]">{prompt.sources[0]?.license}</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all">
            <span>Explorer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
