import { Bot, CheckCircle2 } from 'lucide-react';

export const UsageGuideSection: React.FC = () => {

  const steps = [
    {
      num: 1,
      title: "Décrire mon projet et mon objectif",
      desc: "Clarifiez le type de site (SaaS B2B, e-commerce, portfolio d'agence, console technique) et l'action principale attendue des visiteurs (inscription, achat, prise de contact)."
    },
    {
      num: 2,
      title: "Explorer les styles et les catégories appropriés",
      desc: "Utilisez les filtres par style (Bento Dark, Suisse Minimaliste, Claymorphism, Neubrutalism, Y2K) pour cibler l'esthétique adaptée à votre image de marque."
    },
    {
      num: 3,
      title: "Examiner plusieurs aperçus visuels",
      desc: "Chaque fiche propose un aperçu visuel structuré sans fausses captures d'écran, pour valider la disposition et la hiérarchie avant d'engager du temps de développement."
    },
    {
      num: 4,
      title: "Ouvrir le prompt retenu et lire ses contraintes",
      desc: "Consultez l'onglet « Quand utiliser ce prompt ? » pour connaître les technologies suggérées (React, Tailwind CSS, Framer Motion) et le niveau de complexité estimé."
    },
    {
      num: 5,
      title: "Personnaliser le prompt pour mon projet",
      desc: "Accédez à l'onglet « Préparer mon prompt » pour injecter le nom de votre produit, votre secteur et vos couleurs dominantes sans jamais altérer le prompt original."
    },
    {
      num: 6,
      title: "Copier le texte en un clic",
      desc: "Cliquez sur « Copier le prompt » pour charger l'intégralité du prompt fidèlement traduit ou de la version personnalisée dans votre presse-papiers."
    },
    {
      num: 7,
      title: "Le transmettre à Antigravity ou à votre agent de code",
      desc: "Collez directement le prompt dans le chat avec Antigravity, Claude Code, Cursor ou votre assistant de développement préféré pour démarrer la génération."
    },
    {
      num: 8,
      title: "Vérifier le résultat obtenu dans mon projet",
      desc: "Exécutez votre serveur local, testez l'accessibilité au clavier, le responsive sur mobile (375px) et ajustez les micro-interactions selon vos retours utilisateurs."
    }
  ];

  return (
    <div className="bg-[#101524] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <BookOpenGuideIcon />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">
            Guide d'Utilisation : M'Aider à Choisir & Exploiter le Bon Prompt
          </h2>
          <p className="text-sm text-slate-400">
            La méthodologie en 8 étapes pour transformer une intention de design en code de production fiable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((s) => (
          <div 
            key={s.num}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs">
                {s.num}
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <div className="text-xs text-slate-300">
            <strong className="text-white">Prêt pour Antigravity & assistants IA :</strong> Tous les prompts respectent les règles de code propre, TypeScript, et éliminent le design générique.
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
          <CheckCircle2 className="w-4 h-4" />
          Zéro Clé API Requise
        </div>
      </div>
    </div>
  );
};

const BookOpenGuideIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
