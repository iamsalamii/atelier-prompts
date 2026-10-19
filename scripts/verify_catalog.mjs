import { PROMPTS_DATA } from '../src/data/prompts.ts';
import assert from 'node:assert';

console.log("=== TESTS UNITAIRES ET D'INTÉGRITÉ DU CATALOGUE ===");

// Test 1: Nombre de prompts
console.log(`[Test 1] Vérification du nombre de prompts : ${PROMPTS_DATA.length} trouvés`);
assert(PROMPTS_DATA.length > 0, "Le catalogue ne doit pas être vide");

// Test 2: Unicité des IDs et des slugs
const ids = new Set();
const slugs = new Set();
for (const p of PROMPTS_DATA) {
  assert(!ids.has(p.id), `ID en doublon détecté : ${p.id}`);
  assert(!slugs.has(p.slug), `Slug en doublon détecté : ${p.slug}`);
  ids.add(p.id);
  slugs.add(p.slug);
}
console.log("[Test 2] Unicité des identifiants et slugs validée.");

// Test 3: Présence obligatoire du prompt français et du prompt original
for (const p of PROMPTS_DATA) {
  assert(p.promptFr && p.promptFr.length > 50, `Prompt FR manquant ou trop court pour ${p.id}`);
  assert(p.promptOriginal && p.promptOriginal.length > 50, `Prompt original manquant pour ${p.id}`);
  assert(p.titleFr && p.titleOriginal, `Titres manquants pour ${p.id}`);
  assert(p.descriptionFr, `Description française manquante pour ${p.id}`);
}
console.log("[Test 3] Intégrité bilingue validée pour l'ensemble des fiches.");

// Test 4: Traçabilité des licences et des sources
for (const p of PROMPTS_DATA) {
  assert(p.sources && p.sources.length > 0, `Source manquante pour ${p.id}`);
  for (const s of p.sources) {
    assert(s.name && s.url && s.license, `Métadonnée de source incomplète dans ${p.id}`);
  }
}
console.log("[Test 4] Traçabilité des sources, licences et auteurs validée.");

// Test 5: Guide contextuel d'utilisation
for (const p of PROMPTS_DATA) {
  assert(p.usageGuide, `Guide manquant pour ${p.id}`);
  assert(p.usageGuide.targetProject, `targetProject manquant pour ${p.id}`);
  assert(p.usageGuide.suggestedStack.length > 0, `Stack suggérée manquante pour ${p.id}`);
}
console.log("[Test 5] Guides contextuels 'Quand utiliser ce prompt' validés.");

console.log("\n>>> TOUS LES TESTS SONT PASSÉS AVEC SUCCÈS (5/5) ! <<<");
