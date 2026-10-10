import type{ArticleId,LocalizedArticle}from'../../content/types';
const sourceNote='Reviewed against the linked official game page and the editorial references listed for this topic; volatile details should be rechecked in game.';
type Faq=[string,string];
function guide(title:string,description:string,intro:string,steps:string[],facts:string[],limit:string,faqs:Faq[]):LocalizedArticle{return{
 title,description,
 intro:[intro,'This guide stays within the supplied game information, separates confirmed controls from changeable details, and avoids unsupported numbers or promises.'],
 sections:[
  {id:'steps',title:'What to do',blocks:[{type:'list',style:'ordered',items:steps}]},
  {id:'confirmed-details',title:'Confirmed details',blocks:[{type:'list',style:'unordered',items:facts}]},
  {id:'important-limit',title:'Important limit',blocks:[{type:'callout',tone:'unverified',title:'Check the current game',body:limit}]},
 ],
 faq:faqs.map(([question,answer])=>({question,answer})),sourceNote,
};}
export const EN_ARTICLE_COPY:Partial<Record<ArticleId,LocalizedArticle>>={
'anime-dice-codes':{
 title:'Anime Dice Codes: Working Rewards',
 description:'Check the Anime Dice codes UPDATE7 and UPDATE6, see their conservatively documented rewards, and follow the exact in-game redemption path.',
 intro:['Anime Dice codes can add useful resources without changing the normal roll-and-upgrade loop. This page records only codes supported by the supplied references and avoids guessing at expiry dates.','The list was reviewed on October 5, 2026. A code can change after review, so enter it exactly as shown and treat the in-game response as final.'],
 sections:[
  {id:'current-codes',title:'Current Anime Dice codes',blocks:[{type:'table',headers:['Code','Documented reward'],rows:[['UPDATE7','UPD 7 free reward bundle'],['UPDATE6','Lucky Spins, Trait Rerolls, Tickets and Gems']]},{type:'callout',tone:'volatile',title:'Status changes',body:'Reviewed on October 5, 2026. No unverified expiry date is stated.'}]},
  {id:'redeem',title:'How to redeem codes',blocks:[{type:'list',style:'ordered',items:['Open Anime Dice and select the Shop button.','Scroll to the bottom of the Shop panel.','Enter the exact code, then select Redeem.','Read the in-game response.']}]},
  {id:'problems',title:'If a code does not work',blocks:[{type:'paragraph',text:'Check capitalization, remove spaces, and confirm the full code. A previously redeemed or retired code can also be rejected.'}]},
 ],
 faq:[{question:'What does UPDATE6 give?',answer:'The supplied reference documents Lucky Spins, Trait Rerolls, Tickets and Gems.'},{question:'When was this list checked?',answer:'It was reviewed on October 5, 2026; the game response remains authoritative.'}],sourceNote,
},
'anime-dice-guide':guide(
 'Anime Dice Guide for New Players',
 'Learn the verified Anime Dice gameplay loop, from rolling and equipping a team to upgrades, keeper units, mutations, and offline earnings.',
 'Anime Dice centers on rolling for characters, comparing results, and improving a team over time. Stronger rolls become keeper units while upgrades make later sessions more efficient.',
 ['Roll several units.','Use Equip Best.','Protect useful units before selling.','Prioritize Money and Luck, then Roll Speed.'],
 ['Grades and traits are separate systems.','Mutations can affect unit evaluation.','The official description confirms offline earnings.'],
 'Progress speed varies, so no guaranteed timeline is stated.',
 [['What should I upgrade first?','Money and Luck are practical early priorities, followed by Roll Speed.'],['Are grades and traits the same?','No. Compare them as separate unit systems.']]
),
'anime-dice-tips':guide(
 'Anime Dice Tips for Faster Progress',
 'Use practical Anime Dice tips for upgrade order, unit safety, automated rolling, selling thresholds, and more consistent resource decisions.',
 'Reliable progress comes from reducing wasted rolls and protecting results that improve the team. A repeatable routine is safer than spending every resource immediately.',
 ['Use Equip Best before selling.','Keep units you plan to level.','Set a cautious sell threshold.','Review new keepers before cleanup.'],
 ['Money and Luck are strong early priorities.','Roll Speed helps after the economy is stable.','Grade, trait, and mutation need separate checks.'],
 'Rare outcomes and a fixed progression pace cannot be promised.',
 [['Should I sell immediately?','Use Equip Best first and choose a cautious threshold.'],['Does Hide stop rolling?','No. Hide removes the roll animation while rolls continue.']]
),
'anime-dice-auto-roll':guide(
 'Anime Dice Auto Roll Guide',
 'Turn on Anime Dice Auto Roll from the Roll panel, use Hide to reduce the visible animation, and combine it with safer team checks.',
 'Anime Dice includes an Auto control in the Roll interface. It continues the normal rolling loop without selecting the roll action every time during a longer session.',
 ['Open the Roll panel.','Enable Auto.','Confirm new rolls continue.','Select Hide if the animation is not wanted.'],
 ['Hide affects the repeated roll presentation.','Rolls continue while that animation is hidden.','Keeper units should still be reviewed.'],
 'Hide is not evidence of a universal option for unrelated scenes.',
 [['Where is Auto Roll?','Open the Roll panel and enable Auto.'],['Can hidden rolls continue?','Yes. Hide removes the animation while rolling continues.']]
),
'anime-dice-auto-sell':guide(
 'Anime Dice Auto Sell Settings',
 'Configure Anime Dice Auto Sell at the Sell Units stand, choose a cautious threshold, and protect team upgrades before clearing extras.',
 'Auto Sell reduces inventory cleanup, but an aggressive threshold can remove a useful result. The documented settings are available from the Sell Units stand in the game area.',
 ['Go to the Sell Units stand.','Select “Edit auto sell settings!”.','Use Equip Best.','Enter a conservative threshold.'],
 ['Grades, traits, and mutations can matter independently.','The threshold should stay below units you actively use.','Recheck the setting as the team improves.'],
 'Keep an uncertain unit until its properties have been compared.',
 [['Where is Auto Sell?','Use the Sell Units stand and select “Edit auto sell settings!”.'],['What should I do first?','Use Equip Best and review keeper units.']]
),
'anime-dice-how-to-level-up':guide(
 'Anime Dice: How to Level Up Units',
 'Plan Anime Dice unit leveling around keeper units, separate levels from grades and traits, and avoid wasting resources on temporary results.',
 'Unit leveling is most useful when resources go to characters that remain on the active team. Rolling can replace an early result, so upgrading every unit evenly can slow progress.',
 ['Use Equip Best.','Compare the active team.','Check grade, trait, and mutation separately.','Reserve leveling resources for keepers.'],
 ['Level is one part of unit evaluation.','Grades and traits are separate systems.','A stronger roll may replace an early keeper.'],
 'The supplied references do not establish one universal maximum level, so no number is invented.',
 [['Which unit should I level first?','Start with a unit you expect to keep after using Equip Best.'],['What is the maximum level?','A universal maximum is not confirmed by the supplied references.']]
),
'anime-dice-how-to-skip-cutscenes':guide(
 'Anime Dice: How to Hide Roll Animations',
 'Use the verified Anime Dice Hide control for roll animations and understand why this guide does not claim a universal cutscene toggle exists.',
 'Players searching to skip Anime Dice cutscenes are often trying to remove the repeated roll animation. The documented control for that specific need is Hide inside the Roll interface.',
 ['Open the Roll panel.','Enable Auto if continuous rolling is wanted.','Select Hide.','Confirm rolls continue without the repeated animation.'],
 ['Hide covers the roll presentation.','It does not stop the rolling process.','Other scenes can have different controls.'],
 'No supplied source confirms a setting that skips every intro, update, event, or story scene.',
 [['Can I hide the roll animation?','Yes. Open the Roll interface and select Hide.'],['Is there a global skip option?','A universal option for every scene is not confirmed.']]
),
'anime-dice-how-to-join-group':guide(
 'Anime Dice: How to Join the Official Group',
 'Find and join the verified Anime Dice developer group, avoid impersonation pages, and understand the cautiously documented group chest rewards.',
 'Anime Dice is connected to the Roblox community More & More Games. Joining through the verified developer link is safer than choosing a similarly named group from search results.',
 ['Sign in to Roblox.','Open the verified More & More Games page.','Select Join Community.','Return to Anime Dice and check the group chest.'],
 ['The supplied guide says the chest may provide spins.','Gems or rerolls may also be available.','Exact availability should be checked in game.'],
 'Avoid lookalike communities and confirm the Roblox destination before joining.',
 [['What is the official group?','The verified community is More & More Games.'],['What can the chest give?','The reference says it may provide spins, gems, or rerolls.']]
),
};