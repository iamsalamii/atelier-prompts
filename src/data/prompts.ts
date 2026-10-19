import type { PromptItem } from '../types/prompt';
import { ADDITIONAL_PROMPTS_DATA } from './additional_prompts';

const BASE_PROMPTS: PromptItem[] = [
  {
    id: "sd-bento-dark-graphite",
    slug: "bento-dashboard-dark-graphite",
    titleOriginal: "Bento Dashboard Dark Graphite",
    titleFr: "Dashboard Bento Graphite & Néon",
    descriptionOriginal: "High-density analytics bento-grid dashboard with dark graphite surfaces, subtle borders, and neon telemetry widgets.",
    descriptionFr: "Tableau de bord haute densité en grille Bento, surfaces graphite sombre, bordures subtiles et widgets de télémétrie aux accents néon.",
    category: "Dashboard & SaaS",
    style: "Dark Mode High-Contrast",
    pageType: "Dashboard de données / Analytics",
    tags: ["bento-grid", "dark-mode", "analytics", "saas", "dashboard", "superdesign"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 98,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#090A0F",
        accent: "#6366F1",
        text: "#F8FAFC",
        cardBg: "#111422",
        border: "#1E293B"
      },
      badges: ["Bento Grid", "High Density", "Dark Mode"],
      headline: "Console Analytics Cloud",
      subline: "Surveillance temps réel avec métriques de débit, télémétrie de requêtes et cartes de santé système.",
      metrics: [
        { label: "Débit Requêtes", value: "48.2k/s" },
        { label: "Latence p99", value: "14ms" },
        { label: "Disponibilité", value: "99.99%" }
      ]
    },
    promptOriginal: `You are an expert frontend engineer and UI designer specializing in high-density analytics interfaces.

Build a modern, production-grade Bento Grid Dashboard using React, TypeScript, and Tailwind CSS.

DESIGN SYSTEM & AESTHETICS:
- Theme: Ultra-deep graphite (#090A0F) background with subtle micro-borders (border-slate-800/60).
- Surfaces: Multi-level cards with layered elevations (bg-slate-900/50, backdrop-blur-md).
- Typography: Sans-serif (Inter) with tight tracking for metric numerals (JetBrains Mono).
- Palette: Primary neon indigo (#6366F1), cyan accent (#06B6D4), success emerald (#10B981), and muted slate for labels.

LAYOUT SPECIFICATION:
- A responsive 12-column Bento Grid layout:
  1. Header Bar: Workspace selector, date-range picker, search trigger, and user telemetry status.
  2. Hero Metric Card (col-span-8 / row-span-2): Main time-series chart showing traffic throughput and anomaly markers.
  3. Real-time Log Stream (col-span-4 / row-span-2): Monospaced real-time event feed with auto-scroll and status pills.
  4. 3x Key KPI Cards (col-span-4 each): Latency p95/p99, Error rate (<0.01%), and Active instances with sparklines.
  5. Regional Heatmap or Resource Gauge (col-span-6): Memory, CPU core allocation, and bandwidth distribution.
  6. Security & Audit Feed (col-span-6): Recent API token generations and access logs.

MICRO-INTERACTIONS & ACCESSIBILITY:
- Card hover effect: Subtle border highlight (#6366F1) with a soft glow transition (duration-200).
- Fully accessible keyboard navigation with visible focus rings (ring-2 ring-indigo-500).
- Support prefers-reduced-motion: Disable continuous pulsing animations for users with vestibular sensitivities.
- Responsive design: 12-column desktop (1440px), 6-column tablet (768px), and single-column stack on mobile (375px).

Return production-ready, modular React code without placeholders.`,
    promptFr: `Tu agis comme un ingénieur frontend senior et un designer UI expert spécialisé dans les interfaces de télémétrie et d'analytics haute densité.

Construis un tableau de bord moderne de type Bento Grid en React, TypeScript et Tailwind CSS.

SYSTÈME DE DESIGN ET ESTHÉTIQUE :
- Thème : Fond graphite ultra-profond (#090A0F) avec micro-bordures subtiles (border-slate-800/60).
- Surfaces : Cartes multi-niveaux à élévations feutrées (bg-slate-900/50 avec backdrop-blur-md).
- Typographie : Sans-serif contemporaine (Inter) avec titrage précis et chiffres en chasse fixe (JetBrains Mono).
- Palette : Indigo néon primaire (#6366F1), accent cyan (#06B6D4), vert émeraude de succès (#10B981) et teintes d'ardoise pour les libellés secondaires.

SPÉCIFICATION DE LA MISE EN PAGE :
- Grille Bento réactive de 12 colonnes :
  1. Barre d'en-tête : Sélecteur d'espace de travail, filtre de dates, recherche rapide et statut système en direct.
  2. Carte métrique principale (8 colonnes, 2 rangées) : Graphique temporel d'évolution du débit avec détection d'anomalies.
  3. Flux d'événements en direct (4 colonnes, 2 rangées) : Flux de logs typographique avec défilement continu et badges de statut.
  4. 3x Cartes KPI (4 colonnes chacune) : Latence p95/p99, taux d'erreur (<0.01%) et instances actives avec sparklines.
  5. Jauge de ressources (6 colonnes) : Allocation mémoire, charge processeur et bande passante par région.
  6. Journal de sécurité & audit (6 colonnes) : Derniers tokens générés et connexions récentes.

MICRO-INTERACTIONS ET ACCESSIBILITÉ :
- Effet de survol : Éclaircissement subtil de la bordure (#6366F1) avec transition fluide de 200ms.
- Navigation clavier accessible avec anneaux de focus nets (ring-2 ring-indigo-500).
- Respect strict de prefers-reduced-motion pour les animations.
- Responsive fluide : Ordinateur (1440px), tablette (768px) et mobile (375px).

Livre un code React complet, typé et modulaire sans faux placeholders.`,
    specSummary: "Architecture de tableau de bord analytique haute performance en grille Bento 12 colonnes.",
    specStyle: "Dark graphite #090A0F, bordures ardoise subtiles, accents indigo néon et typographie monospace pour les chiffres.",
    specLayout: "En-tête de navigation + Grille Bento asymétrique combinant graphiques temporels, flux de logs et jauges matérielles.",
    specComponents: "BentoCard, MetricSparkline, TimeSeriesChart, LiveLogFeed, StatusBadge, QuickDateFilter.",
    usageGuide: {
      targetProject: "Plateformes SaaS B2B, consoles Cloud, outils de monitoring d'infrastructure, fintech et tableaux de bord d'IA.",
      visualOutcome: "Une interface professionnelle, technique et hautement valorisante inspirée des standards de Vercel, Linear et Datadog.",
      components: ["Header de statut", "Grille Bento modulaire", "Cartes KPI", "Graphique temporel", "Flux de logs en direct"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Recharts ou Lucide-react", "Framer Motion (optionnel)"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser les métriques clés en fonction de votre domaine (e-commerce, serveurs, abonnements).",
        "Remplacer les flux de logs simulés par votre websocket ou client SSE réel.",
        "Ajuster la couleur d'accent (indigo vers émeraude ou violet selon votre charte graphique)."
      ],
      constraints: [
        "Nécessite une bibliothèque d'icônes SVG (Lucide-react recommandée).",
        "Prévoir un conteneur responsive avec overflow-x contrôlé sur mobile."
      ]
    }
  },
  {
    id: "ms-kinetic-ai-hero",
    slug: "kinetic-ai-landing-hero",
    titleOriginal: "Kinetic AI SaaS Landing Hero",
    titleFr: "Hero Section IA & SaaS à Typographie Cinétique",
    descriptionOriginal: "High-conversion full-viewport hero section with kinetic staggered typography, glowing background mesh, and floating glass preview card.",
    descriptionFr: "Section Hero plein écran à haute conversion avec typographie cinétique échelonnée, maillage lumineux d'arrière-plan et carte produit flottante en verre.",
    category: "Hero Section",
    style: "Kinetic & 3D WebGL",
    pageType: "Page d'accueil / Hero Section",
    tags: ["hero", "framer-motion", "kinetic", "glow", "motionsites", "landing-page"],
    sources: [
      {
        name: "MotionSites",
        repo: "zhaosenlin12-creator/MotionSites",
        url: "https://github.com/zhaosenlin12-creator/MotionSites",
        author: "MotionSites Community & zhaosenlin12",
        license: "MIT / Open-Source Archive",
        licenseVerification: "Verified Open Source",
        originalUrl: "https://motionsites.ai"
      },
      {
        name: "MotionSites Collection",
        repo: "XiesRay/motionsites-prompt-collection",
        url: "https://github.com/XiesRay/motionsites-prompt-collection",
        author: "XiesRay",
        license: "Community Curated",
        licenseVerification: "Community"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 95,
    preview: {
      type: "gradient",
      theme: {
        bg: "#050508",
        accent: "#8B5CF6",
        text: "#FFFFFF",
        cardBg: "#0F0F1A",
        border: "#2E1065"
      },
      badges: ["MotionSites", "Framer Motion", "Kinetic Hero"],
      headline: "Concevez le futur du web avec l'IA",
      subline: "Accélérez vos déploiements front-end grâce à des composants cinétiques animés avec fluidité physique.",
      metrics: [
        { label: "Vitesse de rendu", value: "60 FPS" },
        { label: "Composants animés", value: "100+" }
      ]
    },
    promptOriginal: `You are an expert frontend developer and motion UI designer specializing in Framer Motion and modern Tailwind landing pages.

Build an ultra-polished, high-conversion Hero Section for an AI engineering platform.

DESIGN & ATMOSPHERE:
- Backdrop: Pitch black background (#050508) featuring a subtle animated radial gradient mesh (violet #8B5CF6 to fuchsia #D946EF) with 20% opacity and CSS blur-3xl.
- Fine detail: Subtle dotted grid pattern overlay using CSS background-size.
- Visual anchor: A floating 3D-angled glassmorphism card on the right displaying simulated real-time AI code generation with syntax highlighting.

ANIMATION SPECIFICATIONS (Framer Motion):
- Staggered entrance on load:
  1. Announcement pill: "New: Version 3.0 is live" fades in with scale 0.95 -> 1.0 (delay 0.1s).
  2. Massive kinetic headline: Each word or line staggers in with translateY(24px) -> 0, blur(6px) -> 0, and opacity 0 -> 1 (spring damping 22).
  3. Description paragraph: Smooth fade in (delay 0.35s).
  4. Primary & Secondary CTA Buttons: Magnetic hover scale effect (whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}).
  5. Floating preview card: Infinite subtle floating loop (y: [-6, 6, -6], duration: 5s, ease: "easeInOut").

TECHNICAL REQUIREMENTS:
- Framework: React 19 + TypeScript + Tailwind CSS + Framer Motion.
- Accessible fallbacks: When window.matchMedia('(prefers-reduced-motion: reduce)') is true, disable floating and entry transitions.
- Responsive breakpoints: Centered single-column layout on mobile (<768px) and split 2-column layout on desktop (>1024px).
- Zero layout shift (CLS: 0).

Output clean, production-ready TSX code.`,
    promptFr: `Tu agis comme un développeur frontend expert et un designer de mouvement UI spécialisé dans Framer Motion et les landing pages Tailwind modernes.

Conçois une section Hero d'accueil ultra-soignée à haute conversion pour une plateforme d'ingénierie logicielle ou d'IA.

DESIGN ET AMBIANCE :
- Arrière-plan : Fond noir profond (#050508) enrichi d'un maillage radial lumineux animé (violet #8B5CF6 et fuchsia #D946EF) à 20% d'opacité avec un flou de 64px (blur-3xl).
- Textures fines : Trame de points discrets (dotted grid) en surimpression d'arrière-plan.
- Point focal visuel : Carte flottante en verre dépoli (glassmorphism) inclinée à droite, simulant une génération de code IA avec coloration syntaxique.

SPÉCIFICATIONS DES ANIMATIONS (Framer Motion) :
- Apparition échelonnée au chargement :
  1. Badge d'annonce : "Nouveau : Version 3.0 disponible" avec léger zoom (scale: 0.95 -> 1.0, délai 0.1s).
  2. Titre cinétique percutant : Échelonnement des mots ou lignes avec translateY(24px) -> 0, flou(6px) -> 0 et opacité 0 -> 1 (amortissement ressort 22).
  3. Paragraphe descriptif : Fondu fluide avec délai de 0.35s.
  4. Boutons d'action (CTA) : Effet magnétique au survol (scale: 1.03, tap: 0.98).
  5. Carte produit flottante : Lévitation continue subtile (y: [-6, 6, -6] sur 5 secondes, easeInOut).

EXIGENCES TECHNIQUES :
- Technologies : React 19, TypeScript, Tailwind CSS et Framer Motion (ou transitions CSS pures).
- Accessibilité : Désactivation automatique des lévitations si prefers-reduced-motion est activé.
- Responsive : Colonne unique centrée sur mobile (<768px), agencement 2 colonnes équilibré sur grand écran (>1024px).
- Respect du CLS (Cumulative Layout Shift = 0).

Livre le composant TSX complet prêt à l'emploi.`,
    specSummary: "Hero section cinétique moderne pour start-up SaaS/IA avec animations physiques fluides et carte produit flottante.",
    specStyle: "Dark universe #050508, maillage radial violet/fuchsia, typographie sans-serif géométrique et micro-textures.",
    specLayout: "Split 2 colonnes (titre + CTAs à gauche, maquette de code flottante à droite) basculant en pile centrée sur mobile.",
    specComponents: "AnnouncementBadge, KineticHeading, MagneticButton, GlowingMeshBackground, CodePreviewCard.",
    usageGuide: {
      targetProject: "Landing pages de start-ups d'intelligence artificielle, produits SaaS développeur, applications créatives et agences digitales.",
      visualOutcome: "Une première impression visuelle captivante, premium et moderne, qui capte l'attention et maximise le taux de conversion.",
      components: ["Badge d'annonce", "Titre cinétique échelonné", "Boutons CTA magnétiques", "Carte de code animée", "Maillage de fond lumineux"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser le contenu de la carte flottante avec une capture réelle de votre application.",
        "Adapter le titre et les verbes d'action des CTA selon votre proposition de valeur.",
        "Ajuster la teinte des dégradés lumineux (du violet vers le bleu électrique ou l'ambre)."
      ],
      constraints: [
        "Framer Motion est recommandé pour reproduire la physique exacte des ressorts (spring physics).",
        "Vérifier le bon contraste du texte blanc sur les zones lumineuses du dégradé (minimum 4.5:1)."
      ]
    }
  },
  {
    id: "sd-clay-pricing",
    slug: "claymorphism-candy-pricing",
    titleOriginal: "Claymorphism Candy Pricing Table",
    titleFr: "Grille Tarifaire Claymorphism Douce & Tactile",
    descriptionOriginal: "Playful yet structured pricing comparison table with tactile claymorphism surfaces, soft layered inner shadows, and friendly pill buttons.",
    descriptionFr: "Tableau de comparaison tarifaire ludique et structuré avec surfaces claymorphism tactiles, ombres intérieures douces et boutons pilules accueillants.",
    category: "Landing Page",
    style: "Claymorphism",
    pageType: "Section Tarifs / Pricing Page",
    tags: ["claymorphism", "pricing", "tactile", "3d-soft", "superdesign", "light-mode"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 91,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#F0F4F8",
        accent: "#FF6B6B",
        text: "#1E293B",
        cardBg: "#FFFFFF",
        border: "#E2E8F0"
      },
      badges: ["Claymorphism", "Soft 3D", "Friendly UI"],
      headline: "Offres & Abonnements Simples",
      subline: "Des cartes tactiles aux ombres modelées pour rendre la tarification transparente et agréable.",
      metrics: [
        { label: "Formule Starter", value: "0€/mois" },
        { label: "Formule Pro", value: "29€/mois" },
        { label: "Formule Scale", value: "89€/mois" }
      ]
    },
    promptOriginal: `You are an expert UI engineer specializing in tactile 3D styling and claymorphism aesthetics.

Build an accessible, high-converting Pricing Table component using React and Tailwind CSS.

CLAYMORPHISM DESIGN SYSTEM:
- Background: Soft warm porcelain (#F0F4F8).
- Clay Cards: Rounded-3xl (border-radius: 28px) with dual soft shadows:
  - Outer drop shadow: box-shadow: 12px 16px 32px rgba(160, 175, 200, 0.35)
  - Inner highlight shadow: inset 3px 3px 6px rgba(255, 255, 255, 0.9), inset -4px -4px 8px rgba(180, 195, 220, 0.25)
- Color Palette: Soft pastel tones (coral #FF6B6B for the featured badge, gentle sky blue #38BDF8 for accents, slate #1E293B for typography).

FEATURES & STRUCTURE:
1. Billing Toggle: Annual vs. Monthly billing switcher with a playful bounce indicator and "-20% réduction" badge.
2. Three Pricing Tiers:
   - "Gratuit / Découverte" (0€)
   - "Pro / Créateur" (29€/mois) — Highlighted as 'Plus Populaire' with elevated clay card depth.
   - "Entreprise / Équipe" (89€/mois)
3. Feature Comparison Checklist: Clear checkmarks (Lucide 'Check' icon) with muted crossmarks for excluded features.
4. Call-to-Action Pill Buttons: Tactile pressable buttons with active translateY(2px) and shadow reduction.
5. FAQ Accordion section below the table for common billing questions.

ACCESSIBILITY & USABILITY:
- Ensure 4.5:1 text contrast for all descriptions and pricing labels.
- Keyboard accessible toggle switch (aria-checked) and collapsible FAQ items (aria-expanded).
- Fully responsive from 375px mobile screen to 1440px desktop.

Provide full, production-ready React code.`,
    promptFr: `Tu agis comme un ingénieur UI chevronné spécialiste des interfaces tactiles, ludiques et du style Claymorphism.

Développe un composant de grille tarifaire (Pricing Table) accessible et performant en React et Tailwind CSS.

SYSTÈME DE DESIGN CLAYMORPHISM :
- Arrière-plan : Teinte porcelaine douce (#F0F4F8).
- Cartes en argile modelée (Clay Cards) : Coins très arrondis (rounded-3xl / 28px) combinant doubles ombres modelées :
  - Ombre portée extérieure douce : 12px 16px 32px rgba(160, 175, 200, 0.35).
  - Éclat intérieur (lumière haute) : inset 3px 3px 6px rgba(255, 255, 255, 0.9).
  - Modelé intérieur bas : inset -4px -4px 8px rgba(180, 195, 220, 0.25).
- Palette : Teintes pastel vivantes (corail doux #FF6B6B pour l'offre vedette, bleu ciel #38BDF8 pour les accents, ardoise foncée #1E293B pour les textes).

FONCTIONNALITÉS ET STRUCTURE :
1. Sélecteur de facturation : Commutateur Mensuel / Annuel avec animation de rebond et badge « -20% d'économie ».
2. Trois formules tarifaires :
   - « Découverte » (0 €)
   - « Pro » (29 € / mois) — Mis en avant comme « Le plus populaire » avec profondeur accentuée.
   - « Entreprise » (89 € / mois)
3. Liste à puces des fonctionnalités : Icônes de validation nettes (Lucide SVG Check).
4. Boutons d'action tactiles : Boutons pilules interactifs avec sensation d'enfoncement physique au clic (active:translate-y-[2px]).
5. Accordéon FAQ inclus en bas de page pour répondre aux interrogations courantes.

ACCESSIBILITÉ :
- Ratio de contraste minimum 4.5:1 respecté sur tous les textes.
- Support complet de la navigation clavier et attributs ARIA (aria-checked, aria-expanded).
- Adaptation responsive parfaite de 375px à 1440px.

Fournis le code React complet et immédiatement intégrable.`,
    specSummary: "Grille tarifaire tactile et accueillante utilisant l'esthétique Claymorphism pour humaniser les pages de conversion.",
    specStyle: "Claymorphism doux, ombres intérieures inset, boutons bombés, teintes pastel corail/ciel sur fond porcelaine.",
    specLayout: "Sélecteur de fréquence centré + 3 colonnes tarifaires en cartes tactiles avec mise en exergue de l'offre médiane.",
    specComponents: "BillingToggle, PricingCard, FeatureList, ClayButton, PricingBadge, FaqAccordion.",
    usageGuide: {
      targetProject: "Applications mobiles, produits grand public, outils de productivité, éditeurs créatifs et cours en ligne.",
      visualOutcome: "Un rendu chaleureux, amical et tactile qui se démarque immédiatement de la froideur des tableaux de bord d'entreprise traditionnels.",
      components: ["Commutateur mensuel/annuel", "Cartes tarifaires 3D douces", "Badges promotionnels", "Boutons tactiles", "Accordéon FAQ"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Facile",
      customizationTips: [
        "Ajuster le montant et la devise selon votre modèle économique (€, $, CHF, CAD).",
        "Modifier la couleur d'accentuation principale pour correspondre à votre marque.",
        "Activer ou désactiver la carte médiane surélevée selon votre stratégie d'acquisition."
      ],
      constraints: [
        "Éviter les ombres trop sombres ou opaques pour préserver l'effet de pâte à modeler soyeuse.",
        "Tester la lisibilité des textes fins sur les écrans à luminosité élevée."
      ]
    }
  },
  {
    id: "sd-eink-deployments",
    slug: "eink-deployments-console",
    titleOriginal: "E-Ink Deployments Console Dashboard",
    titleFr: "Console de Déploiement Style E-Ink & Monospace",
    descriptionOriginal: "Monochrome, high-legibility developer console inspired by electronic paper displays, strict typography scales, and minimal eye strain.",
    descriptionFr: "Console développeur monochrome à haute lisibilité inspirée des écrans à encre électronique (E-Ink), typographie stricte et fatigue visuelle minimale.",
    category: "Dashboard & SaaS",
    style: "E-Ink & Monospace",
    pageType: "Console technique / Outil Développeur",
    tags: ["e-ink", "monochrome", "developer-tools", "minimalist", "superdesign", "deployments"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 89,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#F5F5F0",
        accent: "#1A1A1A",
        text: "#111111",
        cardBg: "#FFFFFF",
        border: "#111111"
      },
      badges: ["E-Ink Aesthetic", "Pure Monospace", "Zero Fatigue"],
      headline: "Journal des Déploiements Production",
      subline: "Interface typographique ultra-nette conçue pour l'analyse sans distraction et l'inspection de builds.",
      metrics: [
        { label: "Dernier Build", value: "#3849-OK" },
        { label: "Temps de build", value: "42s" },
        { label: "Branche active", value: "main" }
      ]
    },
    promptOriginal: `You are an expert developer tool UI engineer.

Build a minimalist E-Ink inspired Deployment Console using React and Tailwind CSS.

AESTHETIC & PHILOSOPHY:
- Pure Electronic Paper (E-Ink) look: Warm off-white background (#F5F5F0), crisp stark black typography (#111111), and 1px solid black borders.
- Zero decorative gradients, zero blur effects, zero glowing shadows. Every element is deliberate, high-contrast, and readable in direct sunlight.
- Typography: Strict monospaced font hierarchy (JetBrains Mono, Courier, or SF Mono) with crisp uppercase labels and numeric tabular alignment.

INTERFACE MODULES:
1. Status Bar: Current Git commit SHA, active environment (PROD-01), health indicator [ONLINE], and server clock (UTC).
2. Filter Bar: Quick text search, branch filter (main, staging), and status toggles [ALL, SUCCESS, FAILED].
3. Deployment History Table:
   - Columns: Commit hash, author, commit message, duration, environment, and status pill.
   - Clean tabular borders with row hover inversion (black background, white text on hover).
4. Live Build Inspector (Slide-out or inline split panel):
   - Terminal output stream with timestamps.
   - Step-by-step pipeline tracker: Linting -> Typecheck -> Bundle -> Edge Deploy.
5. Keyboard Shortcuts: Press [R] to trigger redeploy, [/] to search, [ESC] to clear filters.

ACCESSIBILITY:
- Exceptional contrast ratio (>10:1) surpassing WCAG AAA standards.
- Full screen reader labels and complete keyboard accessibility.

Provide clean, modular React TSX code.`,
    promptFr: `Tu agis comme un ingénieur UI expert en outils pour développeurs et interfaces d'infrastructure.

Crée une console de gestion des déploiements inspirée de l'esthétique E-Ink (encre électronique) en React et Tailwind CSS.

PHILOSOPHIE ET ESTHÉTIQUE :
- Look papier électronique pur : Fond blanc cassé chaud (#F5F5F0), typographie noir profond (#111111) et bordures nettes de 1px noires sans fioritures.
- Aucun dégradé superflu, aucun effet de flou, aucune ombre superflue. Chaque élément est intentionnel, à fort contraste et parfaitement lisible.
- Typographie : Rigueur absolue de la police à chasse fixe (JetBrains Mono / monospace), libellés en majuscules techniques et alignement tabulaire des chiffres.

MODULES DE L'INTERFACE :
1. Barre d'état système : SHA du commit courant, environnement actif (PROD-01), indicateur de santé [EN LIGNE] et horloge UTC.
2. Barre de filtres : Recherche rapide, sélecteur de branche (main, staging) et bascules de statut [TOUS, RÉUSSIS, ÉCHECS].
3. Tableau de l'historique des builds :
   - Colonnes : Hash du commit, auteur, message, durée, environnement et badge de statut.
   - Bordures nettes avec inversion contrastée au survol (fond noir et texte blanc).
4. Inspecteur de logs en direct :
   - Sortie de console horodatée.
   - Suivi d'étape du pipeline : Lint -> Typecheck -> Bundle -> Déploiement Edge.
5. Raccourcis clavier : Touche [R] pour relancer, [/] pour chercher, [ESC] pour fermer.

ACCESSIBILITÉ :
- Ratio de contraste exceptionnel (>10:1) conforme aux critères WCAG AAA.
- Navigation clavier intégrale et repères visuels clairs.

Fournis un code React TSX propre, modulaire et sans dépendance externe lourde.`,
    specSummary: "Console d'inspection de déploiements et de builds à typographie monospace inspirée de l'encre électronique.",
    specStyle: "E-Ink monochrome #F5F5F0 / #111111, bordures 1px dures, typographie à chasse fixe, inversion de contraste au survol.",
    specLayout: "Barre de statut haute + Filtres de recherche + Tableau d'historique + Panneau latéral d'inspection des logs.",
    specComponents: "EInkStatusBar, DeploymentTable, BuildLogInspector, MonospaceFilterPill, KeyboardHintBadge.",
    usageGuide: {
      targetProject: "Outils de CI/CD, consoles d'hébergement, plateformes DevOps, utilitaires CLI web et applications pour développeurs.",
      visualOutcome: "Une interface sobre, intemporelle et chirurgicale, extrêmement reposante pour les yeux et valorisante pour un public technique.",
      components: ["Barre de statut système", "Tableau d'historique de builds", "Inspecteur de logs de compilation", "Filtres monospaces"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "JetBrains Mono Font"],
      complexity: "Facile",
      customizationTips: [
        "Connecter le tableau à l'API de votre système CI/CD (GitHub Actions, Vercel, GitLab).",
        "Ajouter un mode nuit inversé (fond noir absolu #000 et texte blanc cassé #E5E5E5).",
        "Adapter les étapes du pipeline selon vos processus réels de validation."
      ],
      constraints: [
        "Conserver impérativement une typographie monospace pour préserver la précision de l'alignement tabulaire.",
        "Ne pas ajouter d'ombres diffuses qui trahiraient l'esthétique papier électronique."
      ]
    }
  },
  {
    id: "ms-3d-portfolio-showcase",
    slug: "interactive-3d-portfolio-showcase",
    titleOriginal: "Interactive 3D Portfolio Showcase",
    titleFr: "Portfolio Créatif & Showcase avec Cartes Interactives",
    descriptionOriginal: "Creative agency portfolio with magnetic hover cursors, horizontal project ticker, and smooth stacked case-study cards.",
    descriptionFr: "Portfolio d'agence créative avec curseur magnétique au survol, bandeau défilant de projets et cartes d'études de cas empilables.",
    category: "Portfolio & Créatif",
    style: "Minimalist & Swiss",
    pageType: "Portfolio / Présentation d'Agence",
    tags: ["portfolio", "creative", "framer-motion", "swiss-style", "motionsites", "showcase"],
    sources: [
      {
        name: "MotionSites",
        repo: "RupakThapa/motionsites",
        url: "https://github.com/RupakThapa/motionsites",
        author: "RupakThapa & MotionSites community",
        license: "MIT / Open-Source Archive",
        licenseVerification: "Verified Open Source",
        originalUrl: "https://motionsites.ai"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 94,
    preview: {
      type: "interactive",
      theme: {
        bg: "#0D0D11",
        accent: "#F59E0B",
        text: "#FFFFFF",
        cardBg: "#16161F",
        border: "#2A2A3C"
      },
      badges: ["Swiss Minimalist", "Showcase", "Creative Agency"],
      headline: "Direction Artistique & Code",
      subline: "Présentation des réalisations phares avec transitions d'empilement fluides et typographie éditoriale.",
      metrics: [
        { label: "Projets récompensés", value: "24" },
        { label: "Années d'expertise", value: "8" }
      ]
    },
    promptOriginal: `You are an award-winning creative technologist and agency art director.

Build an interactive Creative Agency Portfolio Showcase using React, Tailwind CSS, and Framer Motion.

SWISS MINIMALIST & EDITORIAL DIRECTION:
- Background: Matte obsidian (#0D0D11) with crisp alabaster typography (#FFFFFF) and amber accent (#F59E0B).
- Typography: Asymmetrical Swiss grid with heavy uppercase headers, tight letter-spacing (-0.03em), and generous negative space.
- Aesthetic details: Minimal 1px border lines, subtle project index numerals (01, 02, 03) in monospace.

CORE INTERACTIVE EXPERIENCES:
1. Editorial Hero: Bold agency statement: "WE SHAPE BRANDS AT THE INTERSECTION OF CODE & VISUAL RESTRAINT".
2. Infinite Marquee Ticker: Continuous smooth horizontal ticker displaying client names and design disciplines.
3. Sticky Stacking Project Cards (Scroll-driven effect):
   - As the user scrolls, featured projects slide and stack neatly with subtle scale down (scale: 0.96) and backdrop blur.
   - Each project card features: Client name, project discipline, year, high-impact imagery placeholder, and "Consulter l'étude de cas" action.
4. Interactive Cursor Follower (Optional desktop enhancement): A custom trailing dot that expands with "Voir" text when hovering over project cards.
5. Minimalist Contact Footer: Large typography email link with magnetic hover underline animation.

PERFORMANCE & COMPATIBILITY:
- Ensure smooth 60fps animations with transform and opacity only.
- Implement accessible keyboard navigation: all cards must be focusable via Tab and activatable with Enter.
- Disable custom cursor and card stacking on touch/mobile devices to maintain native scrolling performance.

Return clean, production-ready TSX code.`,
    promptFr: `Tu agis comme un technologue créatif primé et un directeur artistique de studio web de premier rang.

Développe une vitrine de portfolio interactive pour agence créative en React, Tailwind CSS et Framer Motion.

DIRECTION SUISSE MINIMALISTE ET ÉDITORIALE :
- Arrière-plan : Noir mat obsidienne (#0D0D11), typographie albâtre franche (#FFFFFF) et touche d'ambre lumineuse (#F59E0B).
- Typographie : Grille suisse asymétrique, titrage en majuscules affirmées, crénage resserré (-0.03em) et espaces blancs généreux.
- Détails de style : Fines lignes de séparation de 1px et numérotation des projets en monospace sobre (01, 02, 03).

EXPÉRIENCES INTERACTIVES CLÉS :
1. Hero éditorial : Déclaration manifeste : « NOUS CRÉONS DES EXPÉRIENCES NUMÉRIQUES ENTRE EXIGENCE VISUELLE ET PRÉCISION DU CODE ».
2. Bandeau défilant infini (Marquee) : Défilement horizontal continu présentant les clients récents et les disciplines du studio.
3. Cartes d'études de cas empilables au défilement (Sticky Stacking Cards) :
   - Au fil du scroll, les projets s'empilent avec un léger rétrécissement d'échelle (scale: 0.96) et flou arrière-plan.
   - Chaque carte comprend : Nom du client, domaine d'intervention, année, visuel soigné et lien d'accès à l'étude.
4. Suivi de curseur interactif (sur ordinateur) : Pastille fluide qui s'agrandit avec la mention « Voir » au survol des projets.
5. Pied de page de contact épuré : Lien email géant avec soulignement animé magnétique au survol.

PERFORMANCE ET ACCESSIBILITÉ :
- Fluidité garantie à 60 FPS basée sur transform et opacity.
- Accessibilité clavier : Chaque carte est sélectionnable au Tab et ouvrable avec Entrée.
- Désactivation automatique du curseur personnalisé sur mobile et écran tactile.

Livre un code TSX propre, complet et prêt pour la production.`,
    specSummary: "Vitrine de portfolio haut de gamme avec empilement de cartes au défilement et typographie de style suisse.",
    specStyle: "Obsidienne mat #0D0D11, typographie suisse asymétrique, accents ambrés et micro-interactions de survol.",
    specLayout: "Hero éditorial percutant + Bandeau défilant infini + Série de cartes d'études de cas empilables + Contact épuré.",
    specComponents: "AgencyManifestoHero, InfiniteTicker, StackingCaseCard, MagneticCursor, ContactFooter.",
    usageGuide: {
      targetProject: "Portfolios de designers, studios de création graphique, directeurs artistiques, agences de développement web haut de gamme.",
      visualOutcome: "Une présence en ligne digne des agences primées sur Awwwards et FWA, alliant sobriété suisse et dynamisme interactif.",
      components: ["Manifeste éditorial", "Bandeau défilant de marques", "Cartes de cas empilables", "Curseur interactif", "Pied de page de contact"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide-react"],
      complexity: "Avancé",
      customizationTips: [
        "Remplacer les titres d'études de cas par vos propres réalisations et clients.",
        "Ajouter vos propres photographies ou vidéos de maquettes pour les visuels de projets.",
        "Régler la vitesse du bandeau défilant pour un rendu discret et non intrusif."
      ],
      constraints: [
        "Prévoir des images légères et optimisées en WebP pour éviter les saccades au défilement.",
        "Garantir que le défilement tactile naturel sur smartphone reste fluide sans interception agressive."
      ]
    }
  },
  {
    id: "sd-y2k-chrome-hero",
    slug: "y2k-chrome-landing-hero",
    titleOriginal: "Y2K Chrome Retro-Futuristic Landing Hero",
    titleFr: "Hero Y2K Chrome Cyber-Futuriste",
    descriptionOriginal: "Iridescent metallic typography, liquid chrome visual cues, cyber gridlines, and high-energy retro-futuristic vibes.",
    descriptionFr: "Typographie métallique irisée, reflets de chrome liquide, trames cybernétiques et énergie rétro-futuriste des années 2000.",
    category: "Hero Section",
    style: "Y2K Cyber Chrome",
    pageType: "Landing Page / Hero Section",
    tags: ["y2k", "chrome", "retro-futuristic", "cyber", "superdesign", "metallic"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 92,
    preview: {
      type: "gradient",
      theme: {
        bg: "#08060E",
        accent: "#EC4899",
        text: "#FFFFFF",
        cardBg: "#171026",
        border: "#A855F7"
      },
      badges: ["Y2K Cyber", "Liquid Chrome", "Retro-Future"],
      headline: "La Renaissance du Design Web An 2000",
      subline: "Reflets chromés, textures liquides irisées et typographie cybernétique au service d'une identité marquante.",
      metrics: [
        { label: "Style Visuel", value: "Cyber Chrome" },
        { label: "Énergie", value: "Maximale" }
      ]
    },
    promptOriginal: `You are an elite motion and creative web developer with expertise in Y2K cyber aesthetics and futuristic shaders.

Build a show-stopping Y2K Chrome Landing Page Hero using React, Tailwind CSS, and CSS shaders.

VISUAL AESTHETIC:
- Theme: Midnight purple-black background (#08060E) with iridescent liquid metallic gradients (silver #E2E8F0, electric pink #EC4899, cyan #06B6D4, violet #A855F7).
- Typography: Bold condensed display typeface with metallic gradient text-fill and liquid reflection simulation using CSS linear-gradient and background-clip: text.
- Retro Elements: Cyber starburst icons (✦), wireframe globe outlines, and subtle CRT scanline effect (pointer-events: none).

INTERACTIVE FEATURES:
1. Liquid Chrome Headline: "CYBER PROTOCOL 2000" with a dynamic shimmer shine effect that traverses the letters on mouse move.
2. Floating Cyber Badges: Pill badges featuring iridescent holographic borders and retro monospace tags.
3. Dual Action Triggers:
   - Primary: High-gloss chrome button with metallic sheen and click pulse.
   - Secondary: Wireframe border button with glowing hover state.
4. Interactive Cyber Portal Preview: Central 3D-angled glass container showcasing an animated glowing mesh or audio visualizer wave.

TECHNICAL SPECIFICATIONS:
- High performance CSS animations avoiding heavy WebGL dependencies for universal browser compatibility.
- Full responsive support down to 375px mobile viewports.
- Keyboard accessible buttons with prominent focus indicators.

Provide complete, copy-pasteable React code.`,
    promptFr: `Tu agis comme un développeur créatif d'élite expert des styles rétro-futuristes, des esthétiques cyberpunk et de la tendance Y2K.

Conçois une section Hero d'accueil percutante au style Y2K Cyber Chrome en React et Tailwind CSS.

ESTHÉTIQUE VISUELLE :
- Thème : Fond violet nuit profond (#08060E) combiné à des dégradés métalliques irisés (argent #E2E8F0, rose électrique #EC4899, cyan #06B6D4 et violet #A855F7).
- Typographie : Titrage condensé puissant avec remplissage en dégradé de chrome métallique et simulation de reflet liquide (background-clip: text).
- Éléments rétro : Étoiles cybernétiques à 4 branches (✦), sphères filaires et micro-lignes de balayage CRT discrètes.

FONCTIONNALITÉS INTERACTIVES :
1. Titre Chrome Liquide : « NOUVELLE ÈRE CYBER » avec effet de lueur métallique dynamique qui traverse les lettres.
2. Badges holographiques : Pastilles flottantes avec bordures irisées et mentions techniques en police monospace.
3. Deux boutons d'action :
   - Principal : Bouton à brillance chromée haute brillance avec pulsation au clic.
   - Secondaire : Bouton à bordure filaire lumineuse réagissant au survol.
4. Vitrine centrale interactive : Conteneur angulaire avec effet de verre irisé et aperçu d'ondes cybernétiques stylisées.

EXIGENCES TECHNIQUES :
- Utilisation d'animations CSS haute performance sans alourdir le projet avec des moteurs 3D lourds.
- Compatibilité responsive assurée jusqu'au smartphone (375px).
- Boutons accessibles au clavier avec indicateurs de focus visibles.

Fournis le code React complet, typé et immédiatement exploitable.`,
    specSummary: "Hero section rétro-futuriste Y2K avec typographie effet chrome liquide et badges holographiques.",
    specStyle: "Chrome liquide, dégradés métalliques argent/rose/cyan, étoiles cybernétiques et fond nuit violet.",
    specLayout: "Titre imposant centré + Badges holographiques en lévitation + Vitrine cybernétique centrale + CTAs métalliques.",
    specComponents: "LiquidChromeHeadline, CyberBadge, ChromeButton, WireframeVisualizer, ScanlineOverlay.",
    usageGuide: {
      targetProject: "Marques de mode contemporaines, festivals de musique électronique, projets Web3/crypto, jeux vidéo indé et drops créatifs.",
      visualOutcome: "Une ambiance visuelle électrique, mémorable et provocante qui casse net les codes des templates SaaS génériques.",
      components: ["Titre chromé irisé", "Badges holographiques", "Boutons haute brillance", "Trame cybernétique", "Effet de reflet"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser le texte du grand titre avec le nom de votre marque ou de votre événement.",
        "Ajuster l'intensité des reflets métalliques selon le degré d'audace souhaité.",
        "Désactiver l'effet de balayage cathodique si votre audience recherche une sobriété accrue."
      ],
      constraints: [
        "Assurer un bon niveau de contraste sur les textes secondaires par rapport au fond sombre.",
        "Garder les animations CSS légères pour garantir une fluidité totale sur les smartphones d'entrée de gamme."
      ]
    }
  },
  {
    id: "sd-neubrutalism-saas-dashboard",
    slug: "neubrutalism-saas-dashboard",
    titleOriginal: "Neubrutalism SaaS Management Dashboard",
    titleFr: "Dashboard SaaS Neubrutaliste aux Lignes Tranchées",
    descriptionOriginal: "Bold black borders, hard offset drop shadows, saturated accent colors, and unapologetic brutalist hierarchy for modern apps.",
    descriptionFr: "Bordures noires épaisses, ombres décalées franches (hard shadows), couleurs primaires saturées et hiérarchie affirmée sans compromis.",
    category: "Dashboard & SaaS",
    style: "Neubrutalism",
    pageType: "Application SaaS / Dashboard d'administration",
    tags: ["neubrutalism", "dashboard", "bold-borders", "hard-shadows", "superdesign", "saas"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 93,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#FFFBEB",
        accent: "#FDE047",
        text: "#000000",
        cardBg: "#FFFFFF",
        border: "#000000"
      },
      badges: ["Neubrutalism", "Hard Shadows", "Raw Energy"],
      headline: "Gestionnaire de Projets Brutal",
      subline: "Des bordures d'acier et des contrastes nets pour une expérience utilisateur énergique et ultra-lisible.",
      metrics: [
        { label: "Tâches Finies", value: "142" },
        { label: "Vélocité Sprint", value: "+34%" }
      ]
    },
    promptOriginal: `You are an expert product designer and frontend engineer specializing in the Neo-Brutalism web movement.

Build a full-featured, accessible Neo-Brutalist SaaS Workspace Dashboard using React and Tailwind CSS.

NEO-BRUTALISM DESIGN RULES:
- Background: Warm pale cream (#FFFBEB or #FEF08A).
- Borders: Solid, unrelenting 2.5px or 3px pure black borders (border-[3px] border-black) on all cards, buttons, badges, and inputs.
- Hard Shadows (No blur!): High-contrast offset shadows: box-shadow: 4px 4px 0px 0px #000000.
- Color Palette: Punchy primary accents (canary yellow #FDE047, electric lime #A3E635, soft lilac #E9D5FF, coral red #F87171) on bright white card backgrounds.
- Typography: Bold grotesque headers with tight tracking and black badges with uppercase text.

KEY DASHBOARD SECTIONS:
1. Sidebar: Distinct brutalist brand logo, bold navigation buttons that shift down on active click (translate-x-[2px] translate-y-[2px] shadow-none).
2. Top Bar: Search field with thick black border, notification bell with unread badge counter, and user avatar in a square black frame.
3. Summary Metric Cards (4 cards): Total revenue, active subscribers, open tickets, and completion rate with contrasting colorful backgrounds.
4. Interactive Kanban or Task Board: Drag-ready columns with cards featuring priority tags and assignee initials.
5. Action Button: "Créer un nouveau projet" button with bright yellow fill and chunky hover state.

ACCESSIBILITY & USABILITY:
- Highest tier legibility with contrast ratios exceeding 12:1.
- Clear visible focus states (outline-3 outline-offset-2 outline-black).
- Keyboard friendly interactions for all actionable cards and buttons.

Deliver complete, production-ready React code.`,
    promptFr: `Tu agis comme un designer de produit senior et un ingénieur frontend spécialisé dans le mouvement web Néo-Brutaliste (Neubrutalism).

Construis un tableau de bord SaaS complet, accessible et percutant dans le style Néo-Brutaliste en React et Tailwind CSS.

RÈGLES DU DESIGN NÉO-BRUTALISTE :
- Fond : Crème chaud doux (#FFFBEB) ou jaune pâle revigorant.
- Bordures : Lignes noires pures épaisses de 3px (border-[3px] border-black) sur chaque carte, bouton, badge et champ de saisie.
- Ombres franches sans flou (Hard Shadows) : Décalage franc à 100% d'opacité : box-shadow: 4px 4px 0px 0px #000000.
- Palette de couleurs : Accents pop vifs (jaune canari #FDE047, vert lime #A3E635, lilas doux #E9D5FF et rouge corail #F87171) sur cartes blanches nettes.
- Typographie : Titres gras affirmés avec libellés en majuscules franches.

SECTIONS DU TABLEAU DE BORD :
1. Barre latérale de navigation : Logo de marque stylisé et boutons de navigation qui s'enfoncent au clic physique (translate-x-1 translate-y-1 shadow-none).
2. Barre supérieure : Champ de recherche à bordure noire franche, cloche de notifications et avatar utilisateur cadré de noir.
3. 4 Cartes métriques de synthèse : Chiffre d'affaires, abonnés actifs, tickets ouverts et taux de complétion avec fonds colorés distincts.
4. Tableau de bord des tâches : Colonnes structurées contenant des cartes de projets avec étiquettes de priorité.
5. Bouton d'action principal : « Créer un nouveau projet » sur fond jaune vif avec effet d'enfoncement dynamique.

ACCESSIBILITÉ :
- Lisibilité exceptionnelle avec des ratios de contraste supérieurs à 12:1.
- États de focus clavier ultra-visibles (outline-3 outline-black).
- Adapté aux mobiles avec empilement naturel des blocs.

Fournis un code React complet, typé et immédiatement utilisable.`,
    specSummary: "Tableau de bord SaaS néobrutaliste aux bordures noires franches, ombres portées nettes et couleurs saturées.",
    specStyle: "Neubrutalism, bordures 3px noir pur, ombres décalées 4px 4px sans flou, fond crème #FFFBEB et accents jaunes/lime.",
    specLayout: "Barre latérale de navigation + Barre d'outils haute + 4 Cartes statistiques colorées + Grille de projets / tâches.",
    specComponents: "BrutalistCard, HardShadowButton, MetricTile, TaskItem, TagBadge, SearchInput.",
    usageGuide: {
      targetProject: "Outils de gestion de projets, applications de prise de notes, CRM pour créateurs, plateformes éducatives et SaaS modernes.",
      visualOutcome: "Une identité visuelle explosive, ludique et ultra-engageante qui inspire la confiance par sa clarté sans artifice.",
      components: ["Barre latérale à boutons poussoirs", "Cartes statistiques à ombres dures", "Champs de recherche cadrés", "Badges colorés"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Facile",
      customizationTips: [
        "Personnaliser les couleurs d'accentuation selon l'ambiance de votre produit (bleu primaire, orange vif, violet).",
        "Ajuster l'épaisseur de la bordure (de 2px à 3.5px selon le niveau d'audace souhaité).",
        "Remplacer les tâches par vos propres entités métier (commandes, factures, utilisateurs)."
      ],
      constraints: [
        "Ne jamais adoucir les ombres avec du flou (blur) sous peine de perdre l'authenticité brutaliste.",
        "Veiller à ce que les boutons pressés réduisent leur ombre à zéro pour créer la sensation mécanique."
      ]
    }
  },
  {
    id: "ms-flowing-menu-nav",
    slug: "flowing-menu-kinetic-studio-nav",
    titleOriginal: "Flowing Menu Kinetic Studio Navigation",
    titleFr: "Menu Plein Écran Cinétique avec Galerie au Survol",
    descriptionOriginal: "Full-screen studio navigation menu with kinetic typography, image reveal on hover, and magnetic link interactions.",
    descriptionFr: "Menu de navigation plein écran avec typographie cinétique, révélation d'images au survol et interactions de liens magnétiques.",
    category: "Composant & Formulaire",
    style: "Kinetic & 3D WebGL",
    pageType: "Menu de navigation / Composant d'interface",
    tags: ["menu", "navigation", "framer-motion", "image-reveal", "motionsites", "kinetic"],
    sources: [
      {
        name: "MotionSites Prompt Collection",
        repo: "XiesRay/motionsites-prompt-collection",
        url: "https://github.com/XiesRay/motionsites-prompt-collection",
        author: "XiesRay & MotionSites community",
        license: "Community Curated",
        licenseVerification: "Community"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 90,
    preview: {
      type: "interactive",
      theme: {
        bg: "#0B0C10",
        accent: "#66FCF1",
        text: "#FFFFFF",
        cardBg: "#1F2833",
        border: "#45A29E"
      },
      badges: ["MotionSites", "Kinetic Menu", "Image Reveal"],
      headline: "Navigation Fluide & Dévoilement Visuel",
      subline: "Survolez les rubriques pour faire émerger dynamiquement les projets phares en arrière-plan.",
      metrics: [
        { label: "Rubriques actives", value: "5" },
        { label: "Expérience", value: "Immersive" }
      ]
    },
    promptOriginal: `You are an expert creative frontend engineer specializing in motion-rich agency navigation.

Build an interactive Full-screen Kinetic Flowing Menu using React, Tailwind CSS, and Framer Motion.

DESIGN & INTERACTION CONCEPT:
- Backdrop: Deep charcoal (#0B0C10) with crisp white menu items and a cyan neon indicator (#66FCF1).
- Menu Items: Massive typography links (Projets, Agence, Savoir-faire, Actualités, Contact) stacked vertically with tight spacing.
- Image Reveal on Hover:
  - When the user hovers over any menu item, an associated preview image smoothly tracks the cursor and fades in with a gentle spring tilt.
  - The hovered link shifts slightly to the right with an animated counter pill (e.g., "12 PROJETS").
  - Non-hovered links smoothly dim their opacity to 0.3 for focused depth.

MENU TOGGLE & TRANSITION:
- Floating hamburger / close button with smooth SVG morphing transition.
- Full-screen curtain reveal animation (scaleY: 0 -> 1, origin: top, ease: [0.76, 0, 0.24, 1]).
- Menu items stagger into view from bottom to top on open.

ACCESSIBILITY:
- Complete keyboard focus management: trap focus inside menu when open, release on ESC or close button.
- Disable cursor-tracking image on mobile and touch devices; display static inline preview thumbnails instead.

Provide complete, self-contained TSX code.`,
    promptFr: `Tu agis comme un ingénieur frontend créatif chevronné spécialiste des navigations immersives et des menus de studio web.

Développe un composant de Menu Plein Écran Cinétique avec révélation visuelle au survol en React, Tailwind CSS et Framer Motion.

CONCEPT DE DESIGN ET D'INTERACTION :
- Arrière-plan : Noir charbon profond (#0B0C10), typographie blanche nette et accentuation cyan lumineuse (#66FCF1).
- Liens du menu : Typographie géante affirmée (Projets, Agence, Expertises, Journal, Contact) alignée verticalement.
- Révélation d'image au survol (Image Reveal) :
  - Au survol de chaque lien, une image d'aperçu du projet lié suit fluidement le mouvement avec un léger amortissement physique.
  - Le lien survolé se décale doucement vers la droite tandis qu'un compteur d'articles s'affiche (ex. : « 12 PROJETS »).
  - Les autres liens non survolés s'estompent doucement à 30% d'opacité pour focaliser l'attention.

OUVERTURE ET TRANSITION :
- Bouton déclencheur burger / croix avec morphing d'icône fluide.
- Déploiement en rideau plein écran avec transition élégante (courbe de Bézier [0.76, 0, 0.24, 1]).
- Apparition échelonnée des liens de bas en haut lors de l'ouverture.

ACCESSIBILITÉ :
- Piégeage accessible du focus clavier dans le menu lorsqu'il est ouvert et fermeture instantanée via la touche Échap (Escape).
- Désactivation du suivi de souris sur smartphone et tactile au profit de miniatures statiques lisibles.

Fournis le code TSX complet, autonome et prêt pour la production.`,
    specSummary: "Menu plein écran cinétique pour studio de design avec révélation d'images au survol et gestion du focus.",
    specStyle: "Noir charbon #0B0C10, typographie d'envergure, accent cyan #66FCF1, estompage dynamique des liens secondaires.",
    specLayout: "Bouton déclencheur flottant + Volet plein écran en rideau + Liste verticale de liens géants + Image flottante.",
    specComponents: "MenuTriggerButton, FullscreenOverlay, KineticMenuItem, HoverImageReveal, SocialFooterLinks.",
    usageGuide: {
      targetProject: "Sites d'agences créatives, portfolios de photographes, studios de production vidéo, marques de luxe et vitrines d'architecture.",
      visualOutcome: "Une navigation mémorable et théâtrale qui transforme un simple menu en un véritable moment d'exploration créative.",
      components: ["Bouton déclencheur morphant", "Volet plein écran en rideau", "Liens typographiques dynamiques", "Aperçu d'image au survol"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide-react"],
      complexity: "Avancé",
      customizationTips: [
        "Remplacer les liens et visuels de démonstration par les projets phares de votre portfolio.",
        "Ajouter les liens vers vos réseaux sociaux (LinkedIn, GitHub, X) dans le bas du panneau.",
        "Ajuster la teinte lumineuse (du cyan vers un blanc chaud ou un orange incandescent)."
      ],
      constraints: [
        "Vérifier le chargement préalable (preload) des visuels de survol pour éviter tout délai d'affichage.",
        "S'assurer que la touche Échap referme systématiquement le menu pour les utilisateurs au clavier."
      ]
    }
  },
  {
    id: "sd-fintech-mobile-home",
    slug: "fintech-mobile-midnight-mint",
    titleOriginal: "Fintech Mobile Midnight Mint App Home",
    titleFr: "Application Mobile Fintech Menthe & Nuit Étoilée",
    descriptionOriginal: "Sleek mobile-first finance interface featuring midnight backdrop, glowing emerald card balances, and swift transaction carousels.",
    descriptionFr: "Interface bancaire mobile-first raffinée alliant fond nuit minérale, carte bancaire lumineuse vert menthe et carrousel d'opérations rapides.",
    category: "Mobile & Fintech",
    style: "Dark Mode High-Contrast",
    pageType: "Application Mobile / Écran d'Accueil Financier",
    tags: ["fintech", "mobile", "banking", "dark-mode", "superdesign", "cards"],
    sources: [
      {
        name: "Superdesign Prompts",
        repo: "superdesigndev/superdesign-prompts",
        url: "https://github.com/superdesigndev/superdesign-prompts",
        author: "superdesigndev",
        license: "MIT (Code) & CC0-1.0 (Prompts)",
        licenseVerification: "CC0-1.0"
      }
    ],
    importDate: "2026-10-19",
    validationStatus: "Validé",
    translationStatus: "Fidèle & Validée",
    popularityScore: 96,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#0A0D14",
        accent: "#10B981",
        text: "#FFFFFF",
        cardBg: "#121824",
        border: "#1E293B"
      },
      badges: ["Mobile-First", "Fintech", "Midnight Mint"],
      headline: "Compte Épargne & Cartes Virtuelles",
      subline: "Visualisation immédiate du solde disponible, transferts instantanés et répartition des dépenses mensuelles.",
      metrics: [
        { label: "Solde Total", value: "12 450,80 €" },
        { label: "Rendement Livret", value: "+3.8%" }
      ]
    },
    promptOriginal: `You are a world-class mobile app UI/UX engineer specializing in high-trust fintech experiences.

Build a mobile-first Banking & Portfolio Home screen using React and Tailwind CSS.

FINTECH DESIGN SYSTEM:
- Backdrop: Deep luxury obsidian (#0A0D14) with subtle slate card backgrounds (#121824).
- Brand Accents: Mint emerald (#10B981) for positive yields and transactions, soft electric blue (#38BDF8) for transfers.
- Typography: Clear tabular numbers for currency amounts, uppercase labels with tracked letter spacing.

SCREEN STRUCTURE:
1. Top Bar: User greeting ("Bonjour, Alexandre"), profile photo with verification tick, and notification bell.
2. Virtual Holographic Card:
   - High-contrast black card with glowing mint diagonal gradient mesh.
   - Shows masked card number (•••• 4892), expiry, contactless chip icon, and visible balance (toggleable hide/show with eye icon).
3. Quick Actions Row: 4 circular action buttons: "Envoyer", "Recharger", "Épargne", "Plus".
4. Spending Breakdown (Interactive mini-chart): Categorized expense breakdown (Alimentation, Logement, Loisirs) with percentage progress bars.
5. Recent Transactions List:
   - Merchant avatar, merchant name, category, timestamp, and colored amount (+250,00 € in green, -34,50 € in white).
6. Bottom Navigation Bar: Floating frosted bar with 4 tabs: Accueil, Cartes, Bourse, Paramètres.

ACCESSIBILITY & INTERACTIONS:
- Touch target sizes minimum 44x44px.
- Subtle tactile active states (active:scale-95).
- Masking sensitive financial numbers for privacy on demand.

Provide complete, responsive React TSX code.`,
    promptFr: `Tu agis comme un ingénieur UI/UX d'élite spécialisé dans les applications bancaires mobiles et les fintechs de nouvelle génération.

Développe un écran d'accueil bancaire mobile-first élégant et hautement sécurisant en React et Tailwind CSS.

SYSTÈME DE DESIGN FINTECH :
- Fond : Noir minéral de luxe (#0A0D14) et cartes ardoise élégantes (#121824).
- Accents de marque : Vert menthe émeraude (#10B981) pour les gains et rendements, bleu électrique doux (#38BDF8) pour les virements.
- Typographie : Nombres en alignement tabulaire pour les devises, libellés en majuscules précises et aérées.

COMPOSITION DE L'ÉCRAN :
1. Barre supérieure : Salutation personnalisée (« Bonjour, Alexandre »), pastille de profil vérifiée et cloche de notifications.
2. Carte bancaire virtuelle holographique :
   - Carte noir profond avec dégradé diagonal vert menthe lumineux.
   - Numéro masqué (•••• 4892), date d'expiration, puce sans contact et solde masquable/affichable d'un clic (icône œil).
3. Rangée d'actions rapides : 4 boutons d'action circulaires : « Envoyer », « Recharger », « Épargne », « Plus ».
4. Répartition des dépenses mensuelles : Barres de progression stylisées par catégorie (Alimentation, Logement, Loisirs).
5. Flux des transactions récentes :
   - Logo du marchand, intitulé, catégorie, date et montant contrasté (+250,00 € en vert, -34,50 € en blanc).
6. Barre de navigation basse flottante : Menu effet verre dépoli avec 4 onglets : Accueil, Cartes, Bourse, Profil.

ACCESSIBILITÉ ET EXPÉRIENCE UTILISATEUR :
- Zones de clic tactiles d'au moins 44x44px conformes aux normes iOS et Android.
- Rétroaction tactile subtile (active:scale-95).
- Option de masquage des données sensibles pour consultation dans les transports publics.

Livre un code React TSX complet, modulaire et parfaitement responsive.`,
    specSummary: "Écran d'accueil d'application bancaire mobile haut de gamme avec carte virtuelle holographique et suivi des dépenses.",
    specStyle: "Noir minéral #0A0D14, accents vert menthe #10B981, carte bancaire holographique et barre de navigation flottante.",
    specLayout: "Barre haute utilisateur + Carte bancaire virtuelle + Actions rapides + Jauges de budget + Flux des opérations.",
    specComponents: "VirtualBankCard, BalanceToggle, QuickActionCircle, ExpenseBudgetBar, TransactionList, FloatingBottomNav.",
    usageGuide: {
      targetProject: "Applications bancaires mobiles, portefeuilles crypto, néobanques, outils de gestion budgétaire personnelle et fintech B2B.",
      visualOutcome: "Une sensation de sécurité absolue, de modernité technologique et de raffinement comparable à Revolut, Apple Card ou Cash App.",
      components: ["Carte virtuelle holographique", "Boutons d'action rapides", "Graphique de budget par catégorie", "Liste des opérations"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser les marchands et logos de la liste de transactions.",
        "Ajuster la devise et le formatage (€, $, CHF, CAD).",
        "Modifier la couleur de la carte virtuelle selon les différents niveaux de cartes de votre offre (Standard, Gold, Metal)."
      ],
      constraints: [
        "Respecter impérativement les zones de toucher minimales de 44px pour l'ergonomie mobile.",
        "Garantir la lisibilité sous forte luminosité ambiante."
      ]
    }
  }
];

export const PROMPTS_DATA: PromptItem[] = [
  ...BASE_PROMPTS,
  ...ADDITIONAL_PROMPTS_DATA
];
