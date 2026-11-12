import React, { useState } from 'react';
import { PromptItem } from '../types/prompt';
import {
  Heart,
  ArrowRight,
  Copy,
  Check,
  Maximize2,
  Film,
  Image as ImageIcon
} from 'lucide-react';
import { LivePreviewRenderer } from './LivePreviewRenderer';

interface PromptCardProps {
  prompt: PromptItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (prompt: PromptItem) => void;
  autoPlayOnHover?: boolean;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  isFavorite,
  onToggleFavorite,
  onSelect,
  autoPlayOnHover = false
}) => {
  const { preview } = prompt;
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [forceImageMode, setForceImageMode] = useState(false);

  const hasBothMedia = Boolean(preview.videoUrl && preview.screenshotUrl);

  const handleQuickCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt.promptFr);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = prompt.promptFr;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <article
      onClick={() => onSelect(prompt)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/card relative flex flex-col bg-[#141A29] border border-white/[0.08] rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-950/50 transition-all duration-200 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-indigo-500"
    >
      {/* Visual Preview Stage (16:10 unobstructed frame) */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-slate-950"
        style={{
          background:
            preview.type === 'gradient'
              ? `radial-gradient(circle at top right, ${preview.theme.accent}33, ${preview.theme.bg} 80%)`
              : preview.theme.bg
        }}
      >
        <LivePreviewRenderer
          prompt={prompt}
          size="compact"
          autoPlayOnHover={autoPlayOnHover}
          isHovered={isHovered}
          forceImageMode={forceImageMode}
        />

        {/* Minimal Top-Right Floating Controls (never obscuring the center or bottom) */}
        <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-95 sm:opacity-0 sm:group-hover/card:opacity-100 sm:focus-within:opacity-100 transition-opacity duration-150">
          {hasBothMedia && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setForceImageMode((prev) => !prev);
              }}
              title={forceImageMode ? 'Voir la vidéo démo' : 'Voir la capture HD'}
              aria-label={forceImageMode ? 'Voir la vidéo démo' : 'Voir la capture HD'}
              className="cursor-pointer p-2 rounded-lg bg-slate-950/85 text-slate-200 hover:text-white hover:bg-indigo-600 border border-white/15 backdrop-blur-md transition-colors shadow-md"
            >
              {forceImageMode ? <Film className="w-3.5 h-3.5" /> : <ImageIcon className="w-3.5 h-3.5" />}
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(prompt);
            }}
            title="Agrandir l'aperçu"
            aria-label="Agrandir l'aperçu"
            className="cursor-pointer p-2 rounded-lg bg-slate-950/85 text-slate-200 hover:text-white hover:bg-indigo-600 border border-white/15 backdrop-blur-md transition-colors shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(prompt.id, e);
            }}
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            className={`cursor-pointer p-2 rounded-lg backdrop-blur-md transition-colors border shadow-md ${
              isFavorite
                ? 'bg-pink-500/25 text-pink-400 border-pink-500/50'
                : 'bg-slate-950/85 text-slate-200 hover:text-white hover:bg-slate-800 border-white/15'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-pink-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata (Cleanly separated below the preview) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2.5">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
              {prompt.category}
            </span>
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-800/90 text-slate-300 border border-white/[0.06]">
              {prompt.style}
            </span>
            <span className="ml-auto text-[11px] font-mono text-slate-400 truncate max-w-[110px]">
              {prompt.sources[0]?.name}
            </span>
          </div>

          <h3 className="text-base font-bold text-white group-hover/card:text-indigo-300 transition-colors line-clamp-1">
            {prompt.titleFr}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {prompt.descriptionFr}
          </p>
        </div>

        {/* Action Footer: Direct 1-Click Copy + Explore */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleQuickCopy}
            className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              copied
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white border-white/10 hover:border-indigo-500'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copié !' : 'Copier le prompt'}</span>
          </button>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover/card:text-indigo-300 group-hover/card:translate-x-0.5 transition-all">
            <span>Détails</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
