import{describe,expect,it}from'vitest';import{ARTICLE_IDS,CATEGORY_IDS}from'../../src/content/types';import{SUPPORTED_LOCALES}from'../../src/config/site';import{ARTICLES}from'../../src/data/articles';import{CATEGORIES}from'../../src/data/categories';import{EXPLORE_MODULES}from'../../src/data/modules';import{ARTICLE_FACTS}from'../../src/data/article-facts';import{LOCALIZED_FACT_ASSERTIONS}from'../../src/data/localized-fact-assertions';import{getArticleCopy}from'../../src/i18n/content';import{validateReleaseContent}from'../../src/lib/content-validation';import{getIndexableRoutes}from'../../src/lib/seo';
describe('release integrity',()=>{
 it('locks the approved 8/40/4/196 inventory',()=>{expect(CATEGORY_IDS).toHaveLength(8);expect(CATEGORIES).toHaveLength(8);expect(ARTICLE_IDS).toHaveLength(40);expect(ARTICLES).toHaveLength(40);expect(SUPPORTED_LOCALES).toHaveLength(4);expect(getIndexableRoutes()).toHaveLength(196);});
 it('requires complete source-constrained locale content',()=>{expect(validateReleaseContent()).toEqual([]);for(const locale of SUPPORTED_LOCALES){const titles=new Set<string>(),descriptions=new Set<string>();for(const id of ARTICLE_IDS){const copy=getArticleCopy(locale,id);titles.add(copy.title);descriptions.add(copy.description);const visible=JSON.stringify(copy);expect(visible,id).not.toMatch(/\b(?:TODO|TBD|PLACEHOLDER|rideapetwiki|keyless|autofarm)\b/i);}expect(titles.size).toBe(40);expect(descriptions.size).toBe(40);}});
 it('keeps every article sourced, reviewed, and internally related',()=>{const ids=new Set(ARTICLE_IDS);for(const article of ARTICLES){expect(article.sources.length).toBeGreaterThan(0);expect(article.sources.every(source=>source.startsWith('https://'))).toBe(true);expect(article.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);expect(article.relatedIds.length).toBeGreaterThanOrEqual(2);expect(article.relatedIds.every(id=>ids.has(id))).toBe(true);}});

 it('keeps every localized intent body distinct and rejects category-wide source leakage',()=>{for(const locale of SUPPORTED_LOCALES){const details=ARTICLE_IDS.map(id=>JSON.stringify(getArticleCopy(locale,id).sections[1]?.blocks));expect(new Set(details).size,locale).toBe(40);}const byId=new Map(ARTICLES.map(article=>[article.id,article]));expect(byId.get('anime-dice-potion')?.sources.join(' ')).toContain('every-gear-in-anime-dice');expect(byId.get('anime-dice-potion')?.sources.join(' ')).not.toContain('anime-dice-codes');expect(byId.get('anime-dice-update-7')?.sources.join(' ')).toContain('anime-dice-update-7');expect(byId.get('anime-dice-reddit')?.sources).toEqual(['https://www.roblox.com/games/113290951185459/Anime-Dice']);});
});

function articleBodyText(locale:(typeof SUPPORTED_LOCALES)[number],id:(typeof ARTICLE_IDS)[number]):string{
 const copy=getArticleCopy(locale,id);
 return [...copy.intro,...copy.sections.flatMap(section=>[section.title,...section.blocks.flatMap(block=>block.type==='paragraph'?[block.text]:block.type==='list'?block.items:block.type==='table'?[...block.headers,...block.rows.flat()]:[block.title,block.body])])].join(' ');
}

it('rejects repeated editorial scaffolding and thin non-code articles',()=>{
 for(const locale of SUPPORTED_LOCALES){
  const repeated=new Map<string,string[]>();
  for(const id of ARTICLE_IDS.filter(id=>id!=='anime-dice-codes')){
   const copy=getArticleCopy(locale,id);
   expect(articleBodyText(locale,id).length,id).toBeGreaterThanOrEqual(1400);
   expect(copy.sections.length,id).toBeGreaterThanOrEqual(5);
   const sentences=[...copy.intro,...copy.sections.flatMap(section=>section.blocks.flatMap(block=>block.type==='paragraph'?[block.text]:[]))];
   for(const sentence of sentences){if(sentence.length<55)continue;const key=sentence.replace(/^.*?:\s*/u,'').toLocaleLowerCase(locale);repeated.set(key,[...(repeated.get(key)??[]),id]);}
  }
  const collisions=[...repeated.entries()].filter(([,ids])=>ids.length>1);
  expect(collisions,locale).toEqual([]);
  const faqQuestions=ARTICLE_IDS.filter(id=>id!=='anime-dice-codes').flatMap(id=>getArticleCopy(locale,id).faq.map(item=>item.question.replace(/^.*?:\s*/u,'').toLocaleLowerCase(locale)));
  expect(new Set(faqQuestions).size,locale).toBe(faqQuestions.length);
 }
});

it('fully localizes non-English article bodies and homepage tier labels',()=>{
 for(const locale of SUPPORTED_LOCALES.filter(locale=>locale!=='en')){const visible=JSON.stringify(ARTICLE_IDS.map(id=>getArticleCopy(locale,id)));expect(visible,locale).not.toMatch(/review item: preserve|decision item: compare|boundary item: leave unsupported/i);}
 const tier=EXPLORE_MODULES.find(module=>module.id==='tier-list');expect(tier?.highlights.map(item=>item.label)).not.toEqual(['S','A','B','C']);
});

it('binds every localized assertion to its canonical claim and uses facts in FAQ answers',()=>{
 for(const locale of SUPPORTED_LOCALES)for(const id of ARTICLE_IDS){const assertions=LOCALIZED_FACT_ASSERTIONS[locale][id];const claims=ARTICLE_FACTS[id].claims;expect(assertions.map(item=>item.canonicalClaim),locale+'/'+id).toEqual(claims);if(id!=='anime-dice-codes')for(const faq of getArticleCopy(locale,id).faq)expect(assertions.some(item=>item.texts.some(text=>faq.answer.includes(text))),locale+'/'+id+' FAQ: '+faq.question).toBe(true);}
});
it('does not present an invented S/A/B/C unit ranking as supplied evidence',()=>{
 for(const locale of SUPPORTED_LOCALES){const copy=getArticleCopy(locale,'anime-dice-tier-list');const visible=JSON.stringify(copy);expect(visible,locale).not.toContain('Galactic pull rarity; Heavenly and Secret II Dice Shop bands');expect(copy.sections.find(section=>section.id==='tier-list-verified-data')?.blocks.some(block=>block.type==='table')).not.toBe(true);}
});
it('publishes supplied Dice, Trait, Rebirth, Gear, Tower, and Update 7 evidence',()=>{
 const required:Record<string,readonly string[]>={
  'anime-dice-luck':['Normal','$1','2x','Radiant','$100 octillion','5,000,000,000x'],
  'anime-dice-traits':['Eternal','27x','Transcendent','0.006%','Monarch','0.025%','Shogun','0.12%','Samurai','0.5%'],
  'anime-dice-rebirth':['Rebirth Upgrade Point'],
  'anime-dice-gear':["Angel's Halo",'0.02%','Sakuna','Enol','Obita','Mazun'],
  'anime-dice-tower':['Dragon','Cursed','Pirate','Hidden Leaf','Slayer'],
  'anime-dice-update-7':['Galactic'],
 };
 for(const locale of SUPPORTED_LOCALES)for(const[id,tokens]of Object.entries(required)){const visible=JSON.stringify(getArticleCopy(locale,id as (typeof ARTICLE_IDS)[number]));for(const token of tokens)expect(visible,locale+'/'+id+' missing '+token).toContain(token);}
 const localizedUpdate7:Record<(typeof SUPPORTED_LOCALES)[number],readonly string[]>={
  en:['7 new units','6 rebirth upgrade paths','a third base floor','a new Tower','gamepass trading'],
  'pt-br':['7 novas unidades','6 caminhos de upgrade de rebirth','um terceiro andar da base','uma nova Tower','troca de gamepasses'],
  es:['7 unidades nuevas','6 rutas de mejora de rebirth','un tercer piso de la base','una Tower nueva','intercambio de gamepasses'],
  id:['7 unit baru','6 jalur upgrade rebirth','lantai dasar ketiga','Tower baru','trading gamepass'],
 };
 for(const locale of SUPPORTED_LOCALES){const visible=JSON.stringify(getArticleCopy(locale,'anime-dice-update-7'));for(const token of localizedUpdate7[locale])expect(visible,locale+'/anime-dice-update-7 missing '+token).toContain(token);}
 const suppliedFactCounts:Record<string,number>={'anime-dice-luck':5,'anime-dice-traits':5,'anime-dice-rebirth':5,'anime-dice-gear':5,'anime-dice-tower':5,'anime-dice-update-7':6};
 for(const[id,count]of Object.entries(suppliedFactCounts)){const keys=ARTICLE_FACTS[id as keyof typeof ARTICLE_FACTS].factKeys.filter(key=>key.includes(':supplied-'));expect(keys,id).toHaveLength(count);for(const locale of SUPPORTED_LOCALES){expect(getArticleCopy(locale,id as (typeof ARTICLE_IDS)[number]).factKeys.filter(key=>key.includes(':supplied-'))).toEqual(keys);expect(LOCALIZED_FACT_ASSERTIONS[locale][id as (typeof ARTICLE_IDS)[number]].filter(item=>item.key.includes(':supplied-'))).toHaveLength(count);}}
});