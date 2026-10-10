import{ARTICLE_IDS,type ArticleId,type LocalizedArticle}from'../../content/types';

export interface TopicSeed{title:string;focus:string;facts:[string,string,string];limit:string}
export interface TopicChrome{
 description:(seed:TopicSeed)=>string;intro:(seed:TopicSeed)=>string;
 actionTitle:string;factTitle:string;limitTitle:string;limitLabel:string;
 actions:(seed:TopicSeed)=>[string,string,string];
 faqAction:(seed:TopicSeed)=>string;faqLimit:(seed:TopicSeed)=>string;sourceNote:string;
}
export function buildTopicLibrary(
 seeds:Record<Exclude<ArticleId,'anime-dice-codes'>,TopicSeed>,
 codes:LocalizedArticle,
 chrome:TopicChrome,
):Record<ArticleId,LocalizedArticle>{
 const entries=ARTICLE_IDS.map(id=>{
  if(id==='anime-dice-codes')return[id,codes]as const;
  const seed=seeds[id];
  if(!seed)throw new Error(`Missing intent content: ${id}`);
  const actions=chrome.actions(seed);
  const article:LocalizedArticle={
   title:seed.title,description:chrome.description(seed),
   intro:[chrome.intro(seed),seed.facts.join(' ')],
   sections:[
    {id:'steps',title:chrome.actionTitle,blocks:[{type:'list',style:'ordered',items:actions}]},
    {id:'confirmed-details',title:chrome.factTitle,blocks:[{type:'list',style:'unordered',items:seed.facts}]},
    {id:'important-limit',title:chrome.limitTitle,blocks:[{type:'callout',tone:'unverified',title:chrome.limitLabel,body:seed.limit}]},
   ],
   faq:[
    {question:chrome.faqAction(seed),answer:actions[0]},
    {question:chrome.faqLimit(seed),answer:seed.limit},
   ],
   sourceNote:chrome.sourceNote,
  };
  return[id,article]as const;
 });
 return Object.fromEntries(entries)as Record<ArticleId,LocalizedArticle>;
}
