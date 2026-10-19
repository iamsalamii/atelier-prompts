# Atelier Prompts — Bibliothèque Francophone de Prompts de Design Web

Application web moderne, rapide et autonome permettant d'explorer, de prévisualiser, de personnaliser et d'exploiter les meilleurs prompts de design web contemporains (Bento Grids, MotionSites, Superdesign, Claymorphism, Neubrutalism, Y2K Chrome, E-Ink) avec une expérience entièrement en français.

---

## 1. Origine & Consolidation des Dépôts Sources

Le projet agrège et consolide les données publiques issues de 4 dépôts GitHub :
1. **[zhaosenlin12-creator/MotionSites](https://github.com/zhaosenlin12-creator/MotionSites)** : Archive communautaire de templates cinétiques et composants Framer Motion.
2. **[RupakThapa/motionsites](https://github.com/RupakThapa/motionsites)** : Collections de landing pages interactives et portfolios animés.
3. **[XiesRay/motionsites-prompt-collection](https://github.com/XiesRay/motionsites-prompt-collection)** : Bibliothèque de prompts et composants pour générateurs IA.
4. **[superdesigndev/superdesign-prompts](https://github.com/superdesigndev/superdesign-prompts)** : Catalogue de prompts de design UI anti-slop sous double licence (MIT pour la structure et CC0 1.0 Universal pour le contenu des prompts).

---

## 2. Fonctionnalités Principales

- **Galerie Visuelle d'Aperçus** : Chaque fiche propose un aperçu structuré fidèle (thème, métriques, hiérarchie de cartes) sans captures trompeuses.
- **Bilingue & Fidèle** : Accès instantané à la version originale en anglais et à la traduction française fidèle et révisée.
- **Bouton Copier en Un Clic** : Copie du prompt complet avec confirmation visuelle et fallback pour les environnements restreints.
- **Guide « Quand utiliser ce prompt ? »** : Contexte d'usage, type de projet adapté, composants requis, technologies suggérées et niveau de complexité estimé.
- **Outil « Préparer mon prompt »** : Injecteur de contexte personnalisé (nom du projet, secteur d'activité, couleur de marque, contraintes) sans écraser le contenu original.
- **Zéro Clé API Requise** : Fonctionne 100% côté client sans coût récurrent ni service tiers payant.
- **Recherche & Multi-Filtres** : Recherche en temps réel par mots-clés, catégories, styles et sources.
- **Favoris & Historique Récents** : Persistance automatique dans le `localStorage`.
- **Export Markdown** : Téléchargement d'une fiche prompt complète au format `.md`.

---

## 3. Prérequis

- **Node.js** >= 18 (testé et validé avec Node.js v22.14.0)
- **npm** ou gestionnaire de paquets compatible
- Navigateur web moderne

---

## 4. Commandes de Développement & Exécution

### Installation des dépendances
```bash
npm install
```

### Lancement du serveur de développement local
```bash
npm run dev
```
L'application démarre sur `http://localhost:3000`.

### Vérification TypeScript & Tests d'intégrité
```bash
# Vérification des types
node ./node_modules/typescript/bin/tsc -b

# Tests d'intégrité du catalogue (unicité, bilinguisme, licences)
node --experimental-strip-types scripts/verify_catalog.mjs
```

### Compilation de Production (Build Vercel)
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans le dossier `dist/`.

---

## 5. Déploiement sur Vercel

Le projet est configuré pour un déploiement Vercel sans configuration serveur complexe :

### Option A : Déploiement via GitHub (Recommandé)
1. Publiez ce dépôt sur votre compte GitHub.
2. Rendez-vous sur votre tableau de bord [Vercel](https://vercel.com).
3. Cliquez sur **« Add New Project »** et sélectionnez le dépôt `atelier-prompts`.
4. Vercel détecte automatiquement le framework **Vite** :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquez sur **Deploy**.

### Option B : Déploiement via Vercel CLI
```bash
# Installation de Vercel CLI
npm install -g vercel

# Connexion et déploiement
vercel login
vercel
vercel --prod
```

---

## 6. Structure du Projet

```text
atelier-prompts/
├── dist/                  # Fichiers de production prêts pour Vercel
├── scripts/               # Scripts de test et vérification automatique
│   └── verify_catalog.mjs
├── src/
│   ├── components/        # Composants de l'interface
│   │   ├── PromptCard.tsx
│   │   ├── PromptDetailModal.tsx
│   │   └── UsageGuideSection.tsx
│   ├── data/              # Données consolidées et normalisées
│   │   └── prompts.ts
│   ├── types/             # Schémas TypeScript stricts
│   │   └── prompt.ts
│   ├── App.tsx            # Application principale et filtres
│   ├── index.css          # Styles Tailwind et variables du design system
│   └── main.tsx           # Point d'entrée de l'application
├── package.json           # Dépendances et scripts
├── tsconfig.json          # Configuration TypeScript
├── vite.config.ts         # Configuration Vite + Tailwind CSS
└── README.md              # Documentation complète en français
```

---

## 7. Licences et Attributions

- Le code source de l'application est distribué sous licence **MIT**.
- Les prompts issus de `superdesign-prompts` sont placés sous **CC0 1.0 Universal**.
- Les prompts et composants issus de l'écosystème `MotionSites` sont archivés avec mention de leurs auteurs respectifs.
