export interface SourceReference {
  name: string;
  repo: string;
  url: string;
  author: string;
  license: string;
  licenseVerification: 'MIT' | 'CC0-1.0' | 'Community' | 'Verified Open Source';
  originalUrl?: string;
  demoUrl?: string;
}

export type Category = 
  | 'Hero Section'
  | 'Landing Page'
  | 'Dashboard & SaaS'
  | 'Portfolio & Créatif'
  | 'Composant & Formulaire'
  | 'E-Commerce'
  | 'Mobile & Fintech';

export type DesignStyle = 
  | 'Minimalist & Swiss'
  | 'Dark Mode High-Contrast'
  | 'Claymorphism'
  | 'Neubrutalism'
  | 'Glassmorphism'
  | 'Y2K Cyber Chrome'
  | 'E-Ink & Monospace'
  | 'Editorial & Typographique'
  | 'Kinetic & 3D WebGL'
  | 'Aurora Mesh & Glow'
  | 'Retro Terminal'
  | 'Memphis & Pop Art'
  | 'Broadsheet & Newsprint'
  | 'Risograph & Print';

export interface GuideContext {
  targetProject: string; // Type de projet adapté
  visualOutcome: string; // Résultat visuel attendu
  components: string[];  // Pages ou composants concernés
  suggestedStack: string[]; // Technologies recommandées
  complexity: 'Facile' | 'Intermédiaire' | 'Avancé' | 'Expert'; // Niveau de complexité estimé
  customizationTips: string[]; // Éléments à personnaliser avant utilisation
  constraints: string[]; // Contraintes ou prérequis
}

export interface PromptItem {
  id: string;
  slug: string;
  titleOriginal: string;
  titleFr: string;
  descriptionOriginal: string;
  descriptionFr: string;
  category: Category;
  style: DesignStyle;
  tags: string[];
  pageType: string;
  sources: SourceReference[];
  importDate: string;
  validationStatus: 'Validé' | 'Vérifié' | 'En revue';
  translationStatus: 'Fidèle & Validée' | 'Partielle' | 'Automatique révisée';

  // Aperçu visuel légal / capture ou miniature vectorielle
  preview: {
    type: 'gradient' | 'wireframe' | 'screenshot' | 'interactive';
    theme: {
      bg: string;
      accent: string;
      text: string;
      cardBg: string;
      border: string;
    };
    badges: string[];
    headline: string;
    subline: string;
    metrics?: { label: string; value: string }[];
    interactiveType?: string;
    screenshotUrl?: string;
  };

  // Prompts complets
  promptOriginal: string;
  promptFr: string;

  // Spécifications structurées (selon modèle Superdesign & MotionSites)
  specSummary?: string;
  specStyle?: string;
  specLayout?: string;
  specComponents?: string;

  // Aide contextuelle "Quand utiliser ce prompt ?"
  usageGuide: GuideContext;

  // Métriques réelles
  popularityScore?: number;
}
