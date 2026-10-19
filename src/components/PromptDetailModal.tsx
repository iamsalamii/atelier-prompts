import React, { useState } from 'react';
import { PromptItem } from '../types/prompt';
import { 
  X, Copy, Check, ExternalLink, Heart, Sparkles, BookOpen, 
  Code2, AlertTriangle, ShieldCheck, Download, Languages, Sliders
} from 'lucide-react';

interface PromptDetailModalProps {
  prompt: PromptItem | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  prompt,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  if (!prompt) return null;

  const [activeLang, setActiveLang] = useState<'fr' | 'original'>('fr');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'guide' | 'customize'>('prompt');

  // Customizer state
  const [customProjectName, setCustomProjectName] = useState('');
  const [customSector, setCustomSector] = useState('');
  const [customBrandColor, setCustomBrandColor] = useState('');
  const [customConstraints, setCustomConstraints] = useState('');

  const currentPromptText = activeLang === 'fr' ? prompt.promptFr : prompt.promptOriginal;

  // Build customized prompt without overwriting original
  const getCustomizedPrompt = () => {
    let customized = currentPromptText;
    const additions: string[] = [];

    if (customProjectName.trim()) {
      additions.push(`NOM DU PROJET : ${customProjectName.trim()}`);
    }
    if (customSector.trim()) {
      additions.push(`SECTEUR D'ACTIVITÉ : ${customSector.trim()}`);
    }
    if (customBrandColor.trim()) {
      additions.push(`COULEUR PRIMAIRE DE MARQUE : ${customBrandColor.trim()}`);
    }
    if (customConstraints.trim()) {
      additions.push(`CONTRAINTES SPÉCIFIQUES DU CLIENT : ${customConstraints.trim()}`);
    }

    if (additions.length > 0) {
      return `/* CONTEXTE PROJET PERSONNALISÉ */\n${additions.join('\n')}\n\n/* SPÉCIFICATION DE DESIGN ORIGINALE */\n${customized}`;
    }
    return customized;
  };

  const handleCopy = async () => {
    const textToCopy = activeTab === 'customize' ? getCustomizedPrompt() : currentPromptText;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const handleExportMarkdown = () => {
    const mdContent = `# ${prompt.titleFr} (${prompt.titleOriginal})
> Source : ${prompt.sources.map(s => `[${s.name}](${s.url})`).join(', ')}
> Catégorie : ${prompt.category} | Style : ${prompt.style} | Licence : ${prompt.sources[0]?.license}

## Description
${prompt.descriptionFr}

---

## Prompt Français Recommandé
\`\`\`markdown
${prompt.promptFr}
\`\`\`

---

## Prompt Original
\`\`\`markdown
${prompt.promptOriginal}
\`\`\`

---

## Guide d'Utilisation
- **Projet adapté** : ${prompt.usageGuide.targetProject}
- **Résultat visuel attendu** : ${prompt.usageGuide.visualOutcome}
- **Technologies suggérées** : ${prompt.usageGuide.suggestedStack.join(', ')}
- **Niveau de complexité** : ${prompt.usageGuide.complexity}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${prompt.slug}-prompt.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0F1422] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-[#141B2D]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {prompt.category}
              </span>
              <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                {prompt.style}
              </span>
              <span className="px-2 py-0.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {prompt.sources[0]?.license}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {prompt.titleFr}
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Titre original : {prompt.titleOriginal}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => onToggleFavorite(prompt.id, e)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isFavorite
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white border-slate-700'
              }`}
              title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-400' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Grand Aperçu Visuel Réel */}
          <div 
            className="w-full rounded-2xl border p-6 overflow-hidden relative"
            style={{
              backgroundColor: prompt.preview.theme.bg,
              borderColor: prompt.preview.theme.border
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">Aperçu Visuel Structuré</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                {prompt.preview.badges.join(' • ')}
              </span>
            </div>

            <div 
              className="p-6 rounded-xl border backdrop-blur-md"
              style={{
                backgroundColor: `${prompt.preview.theme.cardBg}EE`,
                borderColor: prompt.preview.theme.border
              }}
            >
              <h3 
                className="text-xl sm:text-2xl font-bold mb-2"
                style={{ color: prompt.preview.theme.text }}
              >
                {prompt.preview.headline}
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {prompt.preview.subline}
              </p>

              {prompt.preview.metrics && prompt.preview.metrics.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {prompt.preview.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-lg font-bold font-mono text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description & Sources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                Description & Intention
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {prompt.descriptionFr}
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Provenance & Licence
              </h4>
              {prompt.sources.map((src, i) => (
                <div key={i} className="text-xs space-y-1">
                  <div className="font-medium text-slate-200">{src.name}</div>
                  <div className="text-slate-400">Auteur : {src.author}</div>
                  <div className="text-indigo-400 flex items-center gap-1 hover:underline">
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Consulter le dépôt source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {src.originalUrl && (
                    <div className="text-slate-400 pt-1">
                      <a href={src.originalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 underline">
                        Démo originale officielle
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Selector: Prompt / Guide d'utilisation / Préparer mon prompt */}
          <div className="flex border-b border-slate-800 gap-4">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`pb-3 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'prompt'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Prompt Complet
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`pb-3 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'guide'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Quand utiliser ce prompt ?
            </button>

            <button
              onClick={() => setActiveTab('customize')}
              className={`pb-3 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'customize'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Préparer mon prompt (Personnalisation)
            </button>
          </div>

          {/* TAB 1: PROMPT COMPLET */}
          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveLang('fr')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                      activeLang === 'fr'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5" />
                    Français (Fidèle & Validée)
                  </button>
                  <button
                    onClick={() => setActiveLang('original')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
                      activeLang === 'original'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Original (Anglais)
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportMarkdown}
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Exporter .md
                  </button>
                </div>
              </div>

              <div className="relative">
                <pre className="p-4 bg-[#090D16] border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96">
                  {currentPromptText}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: GUIDE D'UTILISATION (QUAND UTILISER CE PROMPT ?) */}
          {activeTab === 'guide' && (
            <div className="space-y-5 bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
                  <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                    Type de projet adapté
                  </h5>
                  <p className="text-sm text-slate-200">
                    {prompt.usageGuide.targetProject}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
                  <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                    Niveau de complexité estimé
                  </h5>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {prompt.usageGuide.complexity}
                    </span>
                    <span className="text-xs text-slate-400">(Estimation basée sur la structure et les animations)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
                <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                  Résultat visuel attendu
                </h5>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {prompt.usageGuide.visualOutcome}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies suggérées
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {prompt.usageGuide.suggestedStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Composants impliqués
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {prompt.usageGuide.components.map((comp, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg space-y-2">
                <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Éléments à personnaliser avant utilisation
                </h5>
                <ul className="text-xs text-amber-200/90 list-disc list-inside space-y-1">
                  {prompt.usageGuide.customizationTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: PRÉPARER MON PROMPT (OUTIL SANS CLÉ API) */}
          {activeTab === 'customize' && (
            <div className="space-y-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  Personnalisation sans écraser le contenu original
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Remplissez vos paramètres projet. Le bouton de copie récupérera automatiquement le prompt enrichi avec votre contexte.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nom de votre projet / produit
                  </label>
                  <input
                    type="text"
                    value={customProjectName}
                    onChange={(e) => setCustomProjectName(e.target.value)}
                    placeholder="Ex: SaaS FlowMetrics"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Secteur d'activité
                  </label>
                  <input
                    type="text"
                    value={customSector}
                    onChange={(e) => setCustomSector(e.target.value)}
                    placeholder="Ex: Télémétrie Cloud & DevOps"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Couleur de marque dominante
                  </label>
                  <input
                    type="text"
                    value={customBrandColor}
                    onChange={(e) => setCustomBrandColor(e.target.value)}
                    placeholder="Ex: Indigo électrique (#4F46E5)"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Contraintes spécifiques ou pages
                  </label>
                  <input
                    type="text"
                    value={customConstraints}
                    onChange={(e) => setCustomConstraints(e.target.value)}
                    placeholder="Ex: Doit intégrer Recharts et Dark mode"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Aperçu du prompt prêt à être transmis à Antigravity ou votre assistant :
                </label>
                <pre className="p-4 bg-[#090D16] border border-slate-800 rounded-xl text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap max-h-60">
                  {getCustomizedPrompt()}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Primary Copy Action */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#141B2D] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {copied && (
              <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                <Check className="w-4 h-4" />
                Prompt copié dans le presse-papiers avec succès !
              </span>
            )}
            {copyError && (
              <span className="text-xs font-medium text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Accès au presse-papiers refusé. Veuillez sélectionner le texte manuellement.
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              Fermer
            </button>

            <button
              onClick={handleCopy}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl flex items-center gap-2 transition-all shadow-lg ${
                copied
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25 active:scale-95'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Copier le prompt'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
