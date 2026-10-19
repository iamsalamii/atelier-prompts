import type { PromptItem } from '../types/prompt';

export const ADDITIONAL_PROMPTS_DATA: PromptItem[] = [
  {
    id: "sd-animated-aurora-hero",
    slug: "animated-aurora-hero-background",
    titleOriginal: "Animated Aurora Background Hero: Dark Developer-Tool Landing Page",
    titleFr: "Hero Aurore Boréale Animée pour Landing Page DevTool",
    descriptionOriginal: "Developer-focused landing page hero featuring a fluid animated aurora borealis gradient mesh, subtle glow, and code terminal preview.",
    descriptionFr: "Section Hero pour outil développeur avec maillage fluide en aurore boréale animée, lueur éthérée et terminal interactif.",
    category: "Hero Section",
    style: "Aurora Mesh & Glow",
    pageType: "Page d'accueil / Hero DevTool",
    tags: ["aurora", "mesh-gradient", "devtool", "dark-mode", "superdesign", "landing"],
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
    popularityScore: 97,
    preview: {
      type: "gradient",
      theme: {
        bg: "#04060C",
        accent: "#10B981",
        text: "#FFFFFF",
        cardBg: "#0C101D",
        border: "#1E293B"
      },
      badges: ["Aurora Glow", "DevTool", "Mesh Gradient"],
      headline: "Plateforme Développeur Nouvelle Génération",
      subline: "Accélérez vos déploiements Edge avec une télémétrie ultra-rapide sous une aurore boréale lumineuse.",
      metrics: [
        { label: "Temps d'exécution", value: "8ms" },
        { label: "Couverture globale", value: "300+ PoPs" }
      ]
    },
    promptOriginal: `You are an elite developer tool frontend engineer.

Build an atmospheric Developer-Tool Hero Section featuring an Animated Aurora Gradient Mesh in React and Tailwind CSS.

AESTHETIC & LIGHTING:
- Deep obsidian backdrop (#04060C) with fluid animated Aurora radial glows (emerald #10B981, indigo #6366F1, and cyan #06B6D4) with 30% opacity and blur-3xl.
- Fine technical dotted background overlay for texture.
- Typography: High-contrast Inter sans-serif paired with JetBrains Mono for command snippets.

HERO COMPONENTS:
1. Release Badge: "V4.2 déployée sur le réseau mondial" with animated emerald ping indicator.
2. Value Proposition Headline: "L'INFRASTRUCTURE SERVERLESS SANS LATENCE".
3. Copyable CLI Quickstart: A sleek command snippet \`npx create-edge-app@latest\` with an instant copy button and feedback tick.
4. Floating Code Sandbox Card: Displaying real-time TypeScript edge function execution with syntax highlighting.
5. Dual CTAs: "Démarrer gratuitement" (gradient border and glow) + "Lire la documentation".

ACCESSIBILITY:
- Respect prefers-reduced-motion: Freeze the continuous aurora animation into a subtle static gradient.
- High-contrast text exceeding 5:1 ratio.

Output clean, production-ready TSX code.`,
    promptFr: `Tu agis comme un ingénieur frontend d'élite spécialisé dans les plateformes et outils pour développeurs.

Conçois une section Hero d'ambiance pour produit DevTool avec un dégradé en Aurore Boréale animée en React et Tailwind CSS.

ESTHÉTIQUE ET ÉCLAIRAGE :
- Fond noir minéral (#04060C) réhaussé de lueurs fluides en aurore boréale (émeraude #10B981, indigo #6366F1 et cyan #06B6D4) à 30% d'opacité avec flou étendu (blur-3xl).
- Trame fine de points techniques en surimpression d'arrière-plan.
- Typographie : Inter sans-serif contrastée combinée à JetBrains Mono pour les extraits de code.

COMPOSITION DU HERO :
1. Badge de version : « V4.2 déployée sur le réseau mondial » avec pastille émeraude pulsante.
2. Titre d'impact : « L'INFRASTRUCTURE SERVERLESS SANS LATENCE ».
3. Bloc de commande CLI copiable : Ligne de commande interactive \`npx create-edge-app@latest\` avec bouton de copie immédiat.
4. Carte de code flottante : Affichage en direct d'une fonction Edge TypeScript avec coloration syntaxique.
5. Deux boutons d'action : « Démarrer gratuitement » (lueur d'accentuation) et « Consulter la documentation ».

ACCESSIBILITÉ :
- Prise en compte de prefers-reduced-motion : Fige l'aurore boréale en dégradé statique doux pour éviter tout inconfort vestibulaire.
- Contraste de texte supérieur à 5:1.

Fournis le code TSX propre, typé et prêt pour la production.`,
    specSummary: "Hero section d'outil développeur avec dégradé d'aurore boréale animée et commande CLI copiable.",
    specStyle: "Noir obsidienne #04060C, aurore émeraude/cyan/indigo, typographie monospace technique et micro-textures.",
    specLayout: "Titre centré percutant + Commande CLI rapide + Carte de code TypeScript + Boutons CTA jumeaux.",
    specComponents: "AuroraBackground, ReleasePill, CliSnippetBox, CodeExecutionCard, DocsButton.",
    usageGuide: {
      targetProject: "Outils de déploiement Cloud, frameworks open source, API développeur, bases de données serverless et CLI modernes.",
      visualOutcome: "Une atmosphère technologique captivante et moderne qui inspire immédiatement une haute technicité et du raffinement.",
      components: ["Fond aurore boréale", "Badge de release", "Boîte CLI copiable", "Éditeur de code flottant", "Boutons CTA"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser la commande d'installation (npm, pnpm, yarn, brew, cargo).",
        "Ajuster le snippet de code pour montrer un cas concret d'utilisation de votre SDK.",
        "Adapter la teinte de l'aurore aux couleurs de votre logo."
      ],
      constraints: [
        "Conserver l'atténuation du flou sur les cartes pour préserver une lisibilité maximale du code.",
        "Veiller à ce que le bouton de copie dispose d'un retour visuel clair."
      ]
    }
  },
  {
    id: "sd-editorial-broadsheet-agency",
    slug: "editorial-broadsheet-agency-website",
    titleOriginal: "Editorial Broadsheet Agency Website",
    titleFr: "Site d'Agence Format Gazette & Grand Quotidien (Broadsheet)",
    descriptionOriginal: "Striking newspaper broadsheet aesthetic with razor-sharp hairline borders, high-contrast serif typography, and zero border radius.",
    descriptionFr: "Esthétique de grand journal imprimé avec filets typographiques ultra-fins de 1px, typographie avec empattements percutante et angles droits rigoureux.",
    category: "Landing Page",
    style: "Broadsheet & Newsprint",
    pageType: "Site d'Agence / Éditorial",
    tags: ["broadsheet", "editorial", "newspaper", "serif", "superdesign", "high-contrast"],
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
    popularityScore: 94,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#FAF7F2",
        accent: "#000000",
        text: "#1A1A1A",
        cardBg: "#FFFFFF",
        border: "#000000"
      },
      badges: ["Broadsheet", "Editorial Serif", "Zero Radius"],
      headline: "Chronique du Design & Typographie Numérique",
      subline: "Mise en page architecturée selon les règles des grands tirages de presse internationale.",
      metrics: [
        { label: "Format", value: "Grand Quotidien" },
        { label: "Édition", value: "N° 104" }
      ]
    },
    promptOriginal: `You are an elite editorial art director and web typographer.

Build a sophisticated Broadsheet Newspaper Agency Landing Page using React and Tailwind CSS.

BROADSHEET PRINT SPECIFICATION:
- Background: Authentic newsprint paper warm off-white (#FAF7F2).
- Typography: High-contrast classic serif headlines (Playfair Display, Merriweather, or Georgia) paired with crisp sans-serif column metadata (Inter).
- Borders: Razor-sharp 1px black rules (border-black) and traditional double-line headers (border-double border-b-4 border-black).
- Corner radius: Strict 0px (rounded-none) across all elements, inputs, and images.

PAGE SECTIONS:
1. Masthead Header: "LA GAZETTE DU DESIGN" with issue date, volume number, edition location (Paris - Londres - Tokyo), and price note.
2. Lead Headline: "RÉVOLUTION DU VISUEL NUMÉRIQUE : LE RETOUR À LA MATÉRIALITÉ ÉDITORIALE".
3. 3-Column Newspaper Grid:
   - Column 1: Featured Editorial Article with drop cap (lettrine) and stylized author byline.
   - Column 2: Large black & white showcase photography placeholder with photo caption and credits.
   - Column 3: "Dépêches et Réalisations Récentes" with compact numbered story items.
4. Interactive Ticker: Bottom bar with breaking design news and client testimonials styled as classified ads.

ACCESSIBILITY:
- Exemplary contrast ratio (>10:1).
- Clear semantic HTML (header, main, article, section, footer).

Deliver complete, modular React TSX code.`,
    promptFr: `Tu agis comme un directeur artistique éditorial de renom et un maître typographe web.

Développe une page d'accueil d'agence au style grand quotidien imprimé (Broadsheet Newspaper) en React et Tailwind CSS.

SPÉCIFICATIONS D'IMPRIMERIE DE PRESSE :
- Fond : Papier journal blanc cassé chaud authentique (#FAF7F2).
- Typographie : Titrage à empattements classique à fort contraste (Playfair Display / Serif) associé à une police sans-serif sobre pour les métadonnées de colonnes.
- Filets typographiques : Lignes noires dures de 1px (border-black) et double filet traditionnel sous le bandeau titre (border-double border-b-4).
- Angles droits stricts : Rayon de courbure nul (rounded-none) sur l'ensemble des conteneurs, blocs et visuels.

COMPOSITION DE LA PAGE :
1. En-tête de manchette (Masthead) : « LA GAZETTE DU DESIGN » avec date de parution, numéro de volume, villes d'implantation (Paris, Londres, Tokyo) et mention de tirage.
2. Titre de Une à fort impact : « RÉVOLUTION DU VISUEL NUMÉRIQUE : LE RETOUR À L'EXIGENCE ÉDITORIALE ».
3. Grille de presse en 3 colonnes :
   - Colonne 1 : Article manifeste avec lettrine ouvragée et signature de l'auteur.
   - Colonne 2 : Grand visuel de projet en noir et blanc avec légende typographique.
   - Colonne 3 : « Dépêches et Réalisations » listant les travaux récents avec numérotation d'époque.
4. Bandeau de bas de page : Témoignages de commanditaires mis en page sous forme de petites annonces classées.

ACCESSIBILITÉ :
- Ratio de contraste optimal (>10:1) respectant les critères stricts de lisibilité.
- Balisage sémantique rigoureux (header, main, article, section, footer).

Livre le code React TSX complet, prêt pour l'intégration.`,
    specSummary: "Landing page d'agence inspirée des grands quotidiens de presse avec lettrines, filets noirs et typographie serif.",
    specStyle: "Papier journal #FAF7F2, filets noirs 1px, typographie Playfair/Serif à fort contraste, angles droits 0px.",
    specLayout: "Manchette de Une + Grille en 3 colonnes de presse + Encart photo légendé + Témoignages en petites annonces.",
    specComponents: "NewspaperMasthead, DropCapArticle, PressShowcaseCard, ClassifiedTestimonial, BreakingTicker.",
    usageGuide: {
      targetProject: "Agences de communication, maisons d'édition, revues culturelles, studios de design graphique et cabinets de conseil stratégique.",
      visualOutcome: "Une élégance intemporelle, intellectuelle et prestigieuse qui tranche radicalement avec les interfaces logicielles standardisées.",
      components: ["Manchette de journal", "Article avec lettrine", "Encart visuel légendé", "Rubrique dépêches", "Petites annonces"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Google Fonts Playfair Display"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser le titre de manchette avec le nom de votre agence ou de votre marque.",
        "Intégrer vos propres photographies traitées en noir et blanc contrasté pour magnifier l'effet papier.",
        "Adapter les articles de colonnes pour résumer vos études de cas majeures."
      ],
      constraints: [
        "Ne jamais introduire d'arrondis (border-radius) sous peine de détruire le cachet authentique de presse.",
        "Conserver impérativement une lettrine élégante sur le premier paragraphe."
      ]
    }
  },
  {
    id: "sd-retro-terminal-portfolio",
    slug: "terminal-portfolio-website",
    titleOriginal: "Terminal Portfolio Website: Retro CRT Phosphor Green",
    titleFr: "Portfolio Développeur Terminal CRT Vert Phosphore",
    descriptionOriginal: "Authentic retro hacker terminal with CRT scanlines, command parser, interactive bash prompt, and phosphor green glow.",
    descriptionFr: "Portfolio développeur façon terminal rétro hacker des années 80 avec balayage cathodique CRT, interpréteur de commandes et lueur vert phosphore.",
    category: "Portfolio & Créatif",
    style: "Retro Terminal",
    pageType: "Portfolio / Terminal Interactif",
    tags: ["terminal", "retro-crt", "hacker", "phosphor-green", "superdesign", "developer-portfolio"],
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
    popularityScore: 95,
    preview: {
      type: "wireframe",
      theme: {
        bg: "#0A0D08",
        accent: "#4AF626",
        text: "#4AF626",
        cardBg: "#050804",
        border: "#4AF626"
      },
      badges: ["Retro CRT", "Phosphor Green", "Interactive Bash"],
      headline: "Console Développeur VTY-100",
      subline: "Explorez mes projets, mon parcours et mes compétences via des commandes shell Unix réelles.",
      metrics: [
        { label: "Baud Rate", value: "9600 bps" },
        { label: "Shell", value: "zsh 5.9" }
      ]
    },
    promptOriginal: `You are an expert creative frontend engineer and retro-computing enthusiast.

Build a fully interactive Retro CRT Terminal Portfolio in React and Tailwind CSS.

RETRO CRT VISUAL SPECIFICATION:
- Backdrop: Pitch monitor black (#0A0D08) with electric phosphor green text (#4AF626) and a faint green text-shadow bloom (text-shadow: 0 0 8px rgba(74,246,38,0.6)).
- CRT Scanlines Effect: Subtle horizontal scanline overlay using repeating linear-gradient with pointer-events: none.
- Typography: Pure monospaced font (VT323, JetBrains Mono, or Courier New).

INTERACTIVE TERMINAL SYSTEM:
1. Boot Sequence: Simulated nostalgic BIOS boot logs on load: memory check, CPU architecture, mounting file systems.
2. Interactive Command Prompt: User can type real commands:
   - \`help\` : Lists available commands (projects, about, stack, contact, clear).
   - \`projects\` : Displays ASCII art table of featured projects with live clickable URLs.
   - \`about\` : Outputs developer bio and experience summary.
   - \`stack\` : Renders skill matrix with progress bars in ASCII ([████████░░] 80%).
   - \`contact\` : Prompts interactive mailto link or form.
   - \`clear\` : Clears terminal buffer.
3. Fallback GUI Toggle: A retro top-right toggle switch allowing users who prefer standard visual browsing to view cards normally.

ACCESSIBILITY:
- Screen reader accessible transcript of terminal outputs via aria-live="polite".
- Accessible input field with autofocus and clear command history navigation (Up/Down arrow keys).

Output clean, production-ready TSX code.`,
    promptFr: `Tu agis comme un développeur frontend créatif d'élite et un passionné d'informatique rétro des années 80.

Développe un portfolio interactif façon terminal cathodique CRT vert phosphore en React et Tailwind CSS.

SPÉCIFICATIONS DU MONITEUR CRT :
- Fond : Noir moniteur cathodique profond (#0A0D08) avec texte vert phosphore éclatant (#4AF626) et halo de lueur textuelle subtil (text-shadow: 0 0 8px rgba(74,246,38,0.6)).
- Lignes de balayage CRT (Scanlines) : Trame horizontale de lignes de balayage cathodique via dégradé CSS fin (sans interférence tactile).
- Typographie : Monospace pur et rigoureux (JetBrains Mono / VT323).

SYSTÈME DE COMMANDES SHELL INTERACTIF :
1. Séquence de démarrage (Boot) : Défilement simulé de logs BIOS au chargement (vérification mémoire, montage des volumes, chargement du profil).
2. Invite de commande interactive (Prompt Bash) : L'utilisateur peut taper de véritables commandes :
   - \`help\` : Affiche la liste des commandes utiles (projets, profil, stack, contact, clear).
   - \`projets\` : Présente un tableau en caractères ASCII avec liens d'accès aux dépôts.
   - \`profil\` : Affiche le parcours et la biographie professionnelle.
   - \`stack\` : Génère des jauges de compétences en barres ASCII ([████████░░] 80%).
   - \`contact\` : Déclenche l'envoi d'un email ou affiche les coordonnées.
   - \`clear\` : Nettoie l'écran du terminal.
3. Bascule vers affichage graphique : Commutateur permettant aux recruteurs qui préfèrent une lecture classique de basculer en cartes graphiques.

ACCESSIBILITÉ :
- Zone aria-live="polite" pour retranscrire fidèlement les sorties console aux lecteurs d'écran.
- Historique des commandes au clavier via les flèches Haut et Bas.

Livre le code TSX complet, typé et prêt pour la production.`,
    specSummary: "Portfolio développeur sous forme de terminal interactif avec balayage cathodique vert phosphore et historique de commandes.",
    specStyle: "Vert phosphore #4AF626 sur fond noir #0A0D08, lignes CRT, typographie monospace et barres ASCII.",
    specLayout: "En-tête de session VTY-100 + Zone de défilement des logs + Ligne de saisie interactive permanente.",
    specComponents: "CrtTerminalContainer, ScanlineFilter, CommandParser, AsciiSkillMatrix, HistoryBuffer.",
    usageGuide: {
      targetProject: "Portfolios de développeurs backend, ingénieurs en cybersécurité, administrateurs systèmes DevOps et passionnés d'open source.",
      visualOutcome: "Une immersion rétro-futuriste saisissante qui démontre immédiatement l'amour du code et des fondations de l'informatique.",
      components: ["Conteneur CRT avec halo", "Interpréteur de commandes", "Jauges de compétences en ASCII", "Bouton d'aide instantanée"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "JetBrains Mono Font"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser les sorties des commandes \`projets\` et \`profil\` avec vos propres réalisations.",
        "Ajouter des commandes secrètes (*easter eggs*) comme \`matrix\` ou \`sudo\`.",
        "Possibilité de changer la couleur du phosphore (vert ambre #FFB000 ou bleu cyan #00FFFF)."
      ],
      constraints: [
        "Prévoir impérativement la commande \`help\` visible dès le premier écran pour ne pas dérouter les visiteurs profanes.",
        "Garantir la bonne gestion du clavier virtuel sur mobile."
      ]
    }
  },
  {
    id: "sd-wall-of-love-testimonials",
    slug: "dark-editorial-testimonial-wall-of-love",
    titleOriginal: "Dark Editorial Testimonial Wall of Love",
    titleFr: "Mur d'Amour & Témoignages Éditorial Sombre (Wall of Love)",
    descriptionOriginal: "High-trust social proof masonry wall combining authentic user quotes, verified company badges, amber star ratings, and subtle hover glows.",
    descriptionFr: "Mur de preuves sociales en maçonnerie asymétrique combinant avis vérifiés, étoiles ambrées, badges d'entreprises et lueurs discrètes au survol.",
    category: "Landing Page",
    style: "Dark Mode High-Contrast",
    pageType: "Section Témoignages / Preuve Sociale",
    tags: ["wall-of-love", "testimonials", "social-proof", "masonry", "superdesign", "dark-mode"],
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
        bg: "#0B0E17",
        accent: "#F59E0B",
        text: "#FFFFFF",
        cardBg: "#131926",
        border: "#1F293D"
      },
      badges: ["Social Proof", "Masonry Wall", "Verified Quotes"],
      headline: "Ce que disent nos utilisateurs",
      subline: "Des retours d'expérience concrets d'ingénieurs et de fondateurs déployant quotidiennement en production.",
      metrics: [
        { label: "Avis vérifiés", value: "4.9 / 5" },
        { label: "Clients actifs", value: "12 000+" }
      ]
    },
    promptOriginal: `You are an expert conversion-rate optimization (CRO) UI designer.

Build an authentic, high-converting "Wall of Love" Social Proof section using React and Tailwind CSS.

AESTHETIC & MOOD:
- Deep luxury dark canvas (#0B0E17) with layered elevation cards (#131926) and subtle border outlines (border-slate-800).
- Accent: Warm amber gold (#F59E0B) for verified review stars and user satisfaction badges.
- Authentic typography: Inter sans-serif with emphasized author titles and verified company pill badges.

COMPONENTS & MASONRY GRID:
1. Section Header: "Approuvé par plus de 12 000 ingénieurs et créateurs de produits", with overall satisfaction rating (4.9/5 stars) and active user metric.
2. Dynamic Filter Pills: Filter reviews by persona ("Tous", "Fondateurs", "Tech Leads", "Designers UI").
3. 3-Column Responsive Masonry Layout:
   - Cards vary in height naturally based on quote length.
   - Each card features: Verified user avatar, full name, role, company logo badge, star rating (5x Lucide Star in amber), detailed quote, and timestamp.
   - Highlight Card: A featured large card with an elevated gradient border and customer video placeholder or metrics snapshot (+340% de conversion).
4. Micro-interactions: Cards subtly scale on hover with a soft amber border illumination transition (duration-250).

ACCESSIBILITY:
- Contrast ratio above 4.5:1.
- Full ARIA markup for filter buttons (aria-pressed).

Deliver complete, modular React TSX code.`,
    promptFr: `Tu agis comme un designer UI senior spécialisé dans l'optimisation des taux de conversion (CRO) et la preuve sociale.

Développe une section « Mur d'Amour » (Wall of Love) de témoignages clients authentiques et percutants en React et Tailwind CSS.

ESTHÉTIQUE ET AMBIANCE :
- Toile de fond sombre haut de gamme (#0B0E17) avec cartes à élévations subtiles (#131926) et bordures ardoise fines (border-slate-800).
- Accentuation : Ambre doré chaud (#F59E0B) pour les étoiles de notation et les badges de validation.
- Typographie rigoureuse : Inter sans-serif avec mise en exergue du rôle des intervenants et logos d'entreprises.

COMPOSANTS ET GRILLE EN MAÇONNERIE :
1. En-tête de section : « Approuvé par plus de 12 000 ingénieurs et créateurs », avec note globale de satisfaction (4.9/5) et volume d'utilisateurs actifs.
2. Filtres par profil : Boutons pilules interactifs (« Tous », « Fondateurs », « Tech Leads », « Designers UI »).
3. Grille en maçonnerie sur 3 colonnes :
   - Hauteur naturelle des cartes selon la longueur du témoignage.
   - Chaque carte comprend : Avatar de l'auteur, nom complet, fonction, entreprise, 5 étoiles ambrées (Lucide SVG Star), citation détaillée et date.
   - Carte mise en exergue : Carte plus vaste avec bordure dégradée et métrique de réussite client (+340% de conversion).
4. Micro-interactions : Léger soulèvement des cartes au survol avec halo ambré discret (transition fluide de 250ms).

ACCESSIBILITÉ :
- Contrastes nets supérieurs à 4.5:1.
- Accessibilité clavier des filtres avec indicateurs d'état (aria-pressed).

Fournis le code React TSX complet et modulaire sans dépendance superflue.`,
    specSummary: "Section Wall of Love en grille de maçonnerie 3 colonnes avec filtres de profils, étoiles ambrées et avis vérifiés.",
    specStyle: "Sombre feutré #0B0E17, étoiles ambrées #F59E0B, cartes multi-hauteurs et badges de validation.",
    specLayout: "Titre de réassurance + Filtres par rôle + Grille de maçonnerie asymétrique 3 colonnes avec carte vedette.",
    specComponents: "SectionRatingHeader, PersonaFilterPills, MasonryTestimonialCard, StarRatingGroup, CompanyBadge.",
    usageGuide: {
      targetProject: "Landing pages de start-ups SaaS, applications mobiles payantes, agences de services et plateformes de formation.",
      visualOutcome: "Un sentiment immédiat d'autorité et de confiance mutuelle qui lève les doutes des visiteurs avant l'acte d'achat ou d'inscription.",
      components: ["En-tête de notation globale", "Filtres par métier", "Cartes d'avis asymétriques", "Badges d'entreprises"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Remplacer les citations par les avis authentiques de vos premiers clients ou utilisateurs bêta.",
        "Ajuster les filtres de profils en adéquation avec votre cible commerciale.",
        "Intégrer les liens vers les profils LinkedIn ou Twitter réels des auteurs pour une crédibilité maximale."
      ],
      constraints: [
        "Éviter les avis inventés ou stéréotypés qui dégradent la confiance.",
        "S'assurer que la grille de maçonnerie s'adapte en colonne unique sur mobile."
      ]
    }
  },
  {
    id: "sd-memphis-animated-hero",
    slug: "memphis-animated-landing-hero",
    titleOriginal: "Memphis Animated Landing Hero: Bold Postmodern Geometry",
    titleFr: "Hero Section Postmoderne Memphis aux Formes Géométriques Colorées",
    descriptionOriginal: "Playful 1980s Memphis movement aesthetic with squiggles, floating geometric solids, saturated pastel pops, and energetic layouts.",
    descriptionFr: "Mouvement postmoderne Memphis des années 80 avec zigzags dynamiques, solides géométriques en lévitation, couleurs pop et énergie créative.",
    category: "Hero Section",
    style: "Memphis & Pop Art",
    pageType: "Landing Page / Hero Énergique",
    tags: ["memphis", "pop-art", "geometry", "80s-retro", "superdesign", "playful"],
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
        bg: "#FFE600",
        accent: "#FF007F",
        text: "#000000",
        cardBg: "#FFFFFF",
        border: "#000000"
      },
      badges: ["Memphis Style", "Pop Geometry", "Bold Contrast"],
      headline: "Design Explosif & Géométrie Ludique",
      subline: "Rompez avec la monotonie grâce aux motifs zigzag, formes flottantes et teintes saturées du groupe Memphis.",
      metrics: [
        { label: "Style", value: "Memphis Milano" },
        { label: "Impact Visuel", value: "100%" }
      ]
    },
    promptOriginal: `You are an expert creative frontend engineer celebrating the legendary Memphis Milano design movement.

Build a joyful, highly-distinctive Memphis Landing Page Hero using React and Tailwind CSS.

MEMPHIS DESIGN LANGUAGE:
- Background: Vibrant sunny yellow (#FFE600) or bold pattern backdrops.
- Graphic Elements: High-contrast black squiggles, floating 3D geometric shapes (cyan cones, pink spheres, lavender pyramids, striped cylinders).
- Color Palette: Unapologetic pop accents (shocking pink #FF007F, bright cyan #00E5FF, electric purple #9900FF, crisp white) bordered by heavy black outlines.
- Typography: Punchy ultra-bold grotesque typography with letter collision and playful rotations (-2deg / +3deg).

HERO ARCHITECTURE:
1. Dynamic Floating Shapes: Decorative floating SVG squiggles and checkerboard triangles positioned absolute with subtle CSS float animations.
2. Headline: "LE DESIGN SANS ENNUI" with a rotated badge "ÉDITION LIMITÉE".
3. Chunky Action Buttons: High-impact buttons with thick 3px black borders and contrasting cyan/pink drop shadows.
4. Interactive Product Showcase Card: A tilted white canvas card displaying a creative product demo surrounded by pop-art confetti icons.

ACCESSIBILITY:
- High contrast compliant typography against bright backgrounds.
- prefers-reduced-motion respected for all floating geometric SVGs.

Deliver complete, production-ready TSX code.`,
    promptFr: `Tu agis comme un développeur frontend créatif célébrant l'audace et l'énergie du légendaire mouvement de design Memphis Milano.

Conçois une section Hero d'accueil joyeuse, ultra-distinctive et géométrique dans le style Memphis en React et Tailwind CSS.

LANGAGE DU DESIGN MEMPHIS :
- Fond : Jaune éclatant revigorant (#FFE600) ou fond à motifs graphiques contrastés.
- Éléments géométriques : Zigzags noirs dynamiques, solides géométriques en lévitation (cônes cyan, sphères roses, pyramides lavande, cylindres à rayures).
- Palette de couleurs : Accents pop vifs et assumés (rose choc #FF007F, cyan électrique #00E5FF, violet saturé #9900FF, blanc pur) cerclés de bordures noires épaisses.
- Typographie : Titrage extra-gras impactant avec légères inclinaisons déstructurées (-2° / +3°).

ARCHITECTURE DE LA SECTION HERO :
1. Formes flottantes animées : Zigzags SVG et triangles à damier animés avec une douce lévitation CSS.
2. Titre principal : « LE DESIGN SANS ENNUI » surmonté d'une pastille inclinée « CRÉATIVITÉ PURE ».
3. Boutons d'action épais : Boutons à bordure noire franche de 3px et ombres décalées cyan/rose franches.
4. Vitrine produit centrale : Carte blanche inclinée présentant le produit entouré de confettis géométriques pop.

ACCESSIBILITÉ :
- Ratios de contraste préservés entre les textes et les fonds vifs.
- Prise en compte de prefers-reduced-motion pour stabiliser les formes décoratives.

Fournis le code React TSX complet, prêt pour l'intégration.`,
    specSummary: "Hero section ludique et audacieuse inspirée du mouvement Memphis Milano des années 80.",
    specStyle: "Jaune éclatant #FFE600, rose choc #FF007F, cyan #00E5FF, bordures noires 3px et formes en damier.",
    specLayout: "Titre incliné déstructuré + Formes SVG flottantes + Vitrine produit pop + Boutons épais à ombres dures.",
    specComponents: "MemphisFloatingShape, RotatedBadgeTitle, ChunkyPopButton, GeometricShowcaseCard.",
    usageGuide: {
      targetProject: "Marques pour jeunes créateurs, studios de jeux vidéo indépendants, podcasts créatifs, festivals d'art et boutiques de mode décalée.",
      visualOutcome: "Une joie visuelle communicative et une identité inoubliable qui suscite immédiatement le sourire et la curiosité.",
      components: ["Zigzags et damiers flottants", "Titre typographique incliné", "Boutons poussoirs pop", "Vitrine déstructurée"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Ajuster la couleur dominante du fond (du jaune vers le lilas ou le vert menthe selon votre marque).",
        "Remplacer la vitrine centrale par vos créations, vos illustrations ou votre produit vedette.",
        "Régler la vitesse de flottement des formes pour un dynamisme harmonieux."
      ],
      constraints: [
        "Veiller à ce que l'exubérance graphique ne nuise pas à la lisibilité de la proposition de valeur principale.",
        "Désactiver impérativement les rotations complexes sur petits écrans pour éviter les dépassements de page."
      ]
    }
  },
  {
    id: "sd-glassmorphism-executive-dashboard",
    slug: "glassmorphism-dashboard-prompt",
    titleOriginal: "Glassmorphism Executive Analytics Dashboard",
    titleFr: "Dashboard Analytique Exécutif en Verre Dépoli (Glassmorphism)",
    descriptionOriginal: "Translucent frosted glass layers, soft ambient background blurs, glowing telemetry indicators, and sleek executive metrics.",
    descriptionFr: "Surfaces translucides en verre dépoli (frosted glass), flous d'arrière-plan soyeux, indicateurs de télémétrie lumineux et métriques exécutives.",
    category: "Dashboard & SaaS",
    style: "Glassmorphism",
    pageType: "Application SaaS / Dashboard Exécutif",
    tags: ["glassmorphism", "frosted-glass", "dashboard", "analytics", "superdesign", "translucent"],
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
      type: "gradient",
      theme: {
        bg: "#0B0D1B",
        accent: "#A855F7",
        text: "#FFFFFF",
        cardBg: "#171B30",
        border: "#3B4268"
      },
      badges: ["Frosted Glass", "Backdrop Blur", "Executive SaaS"],
      headline: "Console Financière & Revenus Récurrents",
      subline: "Superposition de panneaux translucides découpant les flux de trésorerie avec élégance et profondeur.",
      metrics: [
        { label: "MRR Actuel", value: "84 200 €" },
        { label: "Croissance", value: "+18.4%" }
      ]
    },
    promptOriginal: `You are an expert luxury UI engineer specializing in advanced glassmorphism and modern translucent interface architecture.

Build a high-end Glassmorphism Executive SaaS Dashboard using React and Tailwind CSS.

GLASSMORPHISM DESIGN FOUNDATIONS:
- Background: Deep cosmic indigo (#0B0D1B) with ambient blurred color orbs (violet #A855F7 and cyan #06B6D4 with 35% opacity and blur-3xl).
- Glass Cards: Translucent panels (bg-white/10 or bg-slate-900/40) with backdrop-blur-xl and delicate 1px crystalline borders (border-white/20).
- Subtle inner specular reflection: box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.25).
- Typography: Ultra-clean sans-serif with tracked numerals and glowing status badges.

DASHBOARD LAYOUT:
1. Frosted Navigation Bar: Brand mark, workspace switcher, and interactive date-range toggle with soft glass pill highlights.
2. 4x Key Revenue Cards: Monthly Recurring Revenue (MRR), Net Retention, Churn rate (<1.2%), and Customer Lifetime Value (LTV) with sparkline trends.
3. Central Revenue Flow Chart: Interactive time-series area chart with gradient fills and glass hover tooltip.
4. Transaction Feed: Translucent table rows with payment status pills and customer avatar stacks.
5. Quick Actions Panel: Glass buttons with active:scale-98 and soft specular reflections.

ACCESSIBILITY & PERFORMANCE:
- Contrast ratio verified with white-on-dark text ensuring legibility across translucent zones.
- CSS backdrop-filter hardware accelerated via will-change: transform.

Provide production-grade React TSX code.`,
    promptFr: `Tu agis comme un ingénieur UI de premier plan spécialisé dans le design Glassmorphism haut de gamme et les architectures translucides modernes.

Développe un tableau de bord exécutif en verre dépoli (Glassmorphism) en React et Tailwind CSS.

FONDATIONS DU STYLE GLASSMORPHISM :
- Toile de fond : Indigo cosmique profond (#0B0D1B) traversé d'orbes lumineux aux teintes violet (#A855F7) et cyan (#06B6D4) à 35% d'opacité avec flou d'envergure (blur-3xl).
- Cartes en verre : Panneaux translucides (bg-white/10 ou bg-slate-900/40) avec flou d'arrière-plan haute définition (backdrop-blur-xl) et fines bordures cristallines de 1px (border-white/20).
- Reflet spéculaire intérieur subtil : inset 0 1px 0 0 rgba(255, 255, 255, 0.25).
- Typographie : Sans-serif contemporaine avec chiffres alignés et badges d'état lumineux.

COMPOSITION DU TABLEAU DE BORD :
1. Barre de navigation en verre dépoli : Logo de l'application, sélecteur d'espace de travail et filtre de dates avec surbrillances douces.
2. 4 Cartes métriques financières : Revenus récurrents mensuels (MRR), rétention nette, taux d'attrition (<1.2%) et valeur vie client (LTV) avec courbes de tendance.
3. Graphique d'évolution des flux : Graphique temporel avec dégradé translucide et infobulle en verre au survol.
4. Journal des opérations récentes : Tableau aux lignes translucides avec pastilles de paiement et avatars clients.
5. Panneau d'actions rapides : Boutons à brillance de verre réagissant au clic.

ACCESSIBILITÉ ET FLUIDITÉ :
- Lisibilité garantie grâce à des contrastes texte/fond supérieurs à 4.5:1 sur toutes les zones translucides.
- Accélération matérielle des filtres de flou CSS.

Fournis le code React TSX complet, élégant et sans artifices superflus.`,
    specSummary: "Tableau de bord de pilotage exécutif utilisant des panneaux de verre dépoli translucides et des orbes lumineux.",
    specStyle: "Glassmorphism cosmique #0B0D1B, bordures de verre 1px cristal, flou backdrop-blur-xl et accents violet/cyan.",
    specLayout: "Barre haute en verre + 4 Cartes de métriques financières + Graphique de flux de revenus + Journal des opérations.",
    specComponents: "FrostedGlassCard, SpecularReflectButton, RevenueFlowChart, GlassmorphismTable, AmbientOrbsBackground.",
    usageGuide: {
      targetProject: "Consoles de direction, plateformes fintech haut de gamme, applications crypto/Web3, CRM d'agences et logiciels de reporting.",
      visualOutcome: "Une sensation de luxe technologique, de pureté et d'élégance cristalline qui valorise considérablement les données présentées.",
      components: ["Panneaux en verre dépoli", "Graphique à infobulle translucide", "Cartes statistiques de trésorerie", "Orbes lumineux d'ambiance"],
      suggestedStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide-react"],
      complexity: "Intermédiaire",
      customizationTips: [
        "Personnaliser les métriques selon les indicateurs clés de votre entreprise (ventes, utilisateurs, conversions).",
        "Ajuster la puissance du flou (blur-md à blur-2xl) selon les performances visées.",
        "Modifier la couleur des orbes de fond pour matcher votre identité de marque."
      ],
      constraints: [
        "Tester le contraste du texte blanc lorsque les cartes passent au-dessus d'orbes très lumineux.",
        "Conserver une opacité de fond d'au moins 10-15% pour préserver la lisibilité du contenu."
      ]
    }
  }
];
