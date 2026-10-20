import React from 'react';
import { PromptItem } from '../types/prompt';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { LivePreviewRenderer } from './LivePreviewRenderer';

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
        className="relative h-48 w-full overflow-hidden border-b border-slate-800/60 bg-slate-950"
        style={{
          background: preview.type === 'gradient'
            ? `radial-gradient(circle at top right, ${preview.theme.accent}33, ${preview.theme.bg} 80%)`
            : preview.theme.bg
        }}
      >
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Full background live preview (Video or Image or Style Sandbox) */}
        <div className="absolute inset-0 z-0">
          <LivePreviewRenderer prompt={prompt} size="compact" />
        </div>

        {/* Top Floating Badges & Favorite Action */}
        <div className="relative z-10 p-3 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex flex-wrap gap-1.5 items-center pointer-events-auto">
            <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 backdrop-blur-md shadow-sm">
              {prompt.category}
            </span>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/80 backdrop-blur-md">
              {prompt.style}
            </span>
            {prompt.preview.videoUrl && (
              <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-rose-500/90 text-white shadow-sm flex items-center gap-1 backdrop-blur-md">
                🎥 Vidéo
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(prompt.id, e);
            }}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            className={`p-2 rounded-full backdrop-blur-md pointer-events-auto transition-all ${
              isFavorite
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-sm'
                : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/70'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-400' : ''}`} />
          </button>
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
