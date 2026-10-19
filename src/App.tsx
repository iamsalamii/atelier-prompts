import React, { useState, useEffect, useMemo } from 'react';
import { PROMPTS_DATA } from './data/prompts';
import { PromptItem } from './types/prompt';
import { PromptCard } from './components/PromptCard';
import { PromptDetailModal } from './components/PromptDetailModal';
import { UsageGuideSection } from './components/UsageGuideSection';
import { 
  Search, SlidersHorizontal, Sparkles, Heart, Clock, 
  ArrowUpDown, CheckCircle2, ShieldCheck
} from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [selectedStyle, setSelectedStyle] = useState<string>('Tous');
  const [selectedSource, setSelectedSource] = useState<string>('Toutes');
  const [sortBy, setSortBy] = useState<'relevance' | 'alpha' | 'popularity'>('popularity');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  // Local storage for Favorites & Recently Viewed
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_recent');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [viewFilter, setViewFilter] = useState<'all' | 'favorites' | 'recent'>('all');

  useEffect(() => {
    try {
      localStorage.setItem('atelier_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_recent', JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error(e);
    }
  }, [recentlyViewed]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleOpenPrompt = (prompt: PromptItem) => {
    setSelectedPrompt(prompt);
    setRecentlyViewed(prev => {
      const filtered = prev.filter(id => id !== prompt.id);
      return [prompt.id, ...filtered].slice(0, 8); // Keep top 8 recent
    });
  };

  // Distinct Filter options
  const categories: string[] = ['Toutes', ...Array.from(new Set(PROMPTS_DATA.map(p => p.category)))];
  const styles: string[] = ['Tous', ...Array.from(new Set(PROMPTS_DATA.map(p => p.style)))];
  const sources: string[] = ['Toutes', 'Superdesign Prompts', 'MotionSites', 'MotionSites Prompt Collection'];

  // Filtered & Sorted Prompts
  const filteredPrompts = useMemo(() => {
    return PROMPTS_DATA.filter(item => {
      // View tab filter
      if (viewFilter === 'favorites' && !favorites.includes(item.id)) return false;
      if (viewFilter === 'recent' && !recentlyViewed.includes(item.id)) return false;

      // Category filter
      if (selectedCategory !== 'Toutes' && item.category !== selectedCategory) return false;

      // Style filter
      if (selectedStyle !== 'Tous' && item.style !== selectedStyle) return false;

      // Source filter
      if (selectedSource !== 'Toutes') {
        const matchesSource = item.sources.some(s => s.name.toLowerCase().includes(selectedSource.toLowerCase()));
        if (!matchesSource) return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitleFr = item.titleFr.toLowerCase().includes(q);
        const matchesTitleOrig = item.titleOriginal.toLowerCase().includes(q);
        const matchesDesc = item.descriptionFr.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        const matchesStyle = item.style.toLowerCase().includes(q);
        if (!matchesTitleFr && !matchesTitleOrig && !matchesDesc && !matchesTags && !matchesStyle) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alpha') {
        return a.titleFr.localeCompare(b.titleFr);
      }
      if (sortBy === 'popularity') {
        return (b.popularityScore || 0) - (a.popularityScore || 0);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedStyle, selectedSource, sortBy, viewFilter, favorites, recentlyViewed]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100 selection:bg-indigo-500 selection:text-white">
      
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-black text-lg">
              A
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Atelier Prompts
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  v1.0 Francophone
                </span>
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
                Bibliothèque de prompts web & aperçus visuels
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setViewFilter(viewFilter === 'favorites' ? 'all' : 'favorites')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                viewFilter === 'favorites'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${viewFilter === 'favorites' ? 'fill-rose-400' : ''}`} />
              <span>Favoris ({favorites.length})</span>
            </button>

            <button
              onClick={() => setViewFilter(viewFilter === 'recent' ? 'all' : 'recent')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                viewFilter === 'recent'
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Récents ({recentlyViewed.length})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        
        {/* Editorial Hero Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Consolidation de 4 Dépôts Sources (MotionSites & Superdesign)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            La Première Bibliothèque <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-amber-300">
              Francophone de Prompts Web
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Trouvez le prompt exact pour générer des interfaces contemporaines de haut niveau avec vos agents de code (Antigravity, Cursor, Claude Code). Aperçus visuels sans artifice et copie en un clic.
          </p>

          {/* Quick Search Bar */}
          <div className="pt-2">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par style (bento, claymorphism), catégorie ou mot-clé..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-xl text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filter Controls & Bar */}
        <section className="bg-[#101524] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
              <span>Filtres & Affichage</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-white">{filteredPrompts.length}</span> prompt{filteredPrompts.length > 1 ? 's' : ''} disponible{filteredPrompts.length > 1 ? 's' : ''}
              
              <div className="h-4 w-[1px] bg-slate-700" />

              <div className="flex items-center gap-1.5">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option value="popularity">Popularité & Recommandation</option>
                  <option value="alpha">Ordre Alphabétique (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/80 text-xs">
            <div>
              <label className="block text-slate-400 font-medium mb-1">Catégorie :</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 font-medium mb-1">Style de Design :</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {styles.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 font-medium mb-1">Dépôt Source :</label>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {sources.map(src => (
                  <option key={src} value={src}>{src}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="space-y-6">
          {filteredPrompts.length === 0 ? (
            <div className="text-center py-16 bg-[#101524] border border-slate-800 rounded-2xl p-8 space-y-3">
              <p className="text-slate-300 font-medium">
                Aucun prompt ne correspond à vos filtres actuels.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Toutes');
                  setSelectedStyle('Tous');
                  setSelectedSource('Toutes');
                  setViewFilter('all');
                }}
                className="px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map(prompt => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  isFavorite={favorites.includes(prompt.id)}
                  onToggleFavorite={toggleFavorite}
                  onSelect={handleOpenPrompt}
                />
              ))}
            </div>
          )}
        </section>

        {/* Usage Guide Methodology Section */}
        <section className="pt-6">
          <UsageGuideSection />
        </section>

      </main>

      {/* Modal Detail & Prompt Drawer */}
      <PromptDetailModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
        isFavorite={selectedPrompt ? favorites.includes(selectedPrompt.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800 bg-[#090D16] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <div className="font-bold text-white text-sm">Atelier Prompts</div>
            <p className="text-slate-500 mt-1">
              Bibliothèque francophone sous licences ouvertes (MIT & CC0 1.0).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Attributions préservées
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              Totalement déployable sur Vercel
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
