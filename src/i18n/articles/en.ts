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

function topicArticle(label:string,focus:string,facts:string[],limit:string):LocalizedArticle{
 return guide(
  `Anime Dice ${label} Guide`,
  `Understand Anime Dice ${label.toLowerCase()} with a focused reference for ${focus}, practical checks, and clearly marked limits on unverified values.`,
  `This Anime Dice ${label.toLowerCase()} page focuses on ${focus}. It separates the documented gameplay loop from values that can change or are not established by the supplied references.`,
  ['Review the current team and resources.','Compare the relevant unit or progression property separately.','Confirm changeable details in the current game version.','Spend resources only after the comparison.'],
  facts,
  limit,
  [['What should I check first?',`Start with the current team and compare ${focus} separately from unrelated systems.`],['Are exact values guaranteed?',`No. ${limit}`]]
 );
}
Object.assign(EN_ARTICLE_COPY,{
'anime-dice-tier-list':topicArticle('Tier List','how units fit a current team',['A useful ranking depends on the current game version.','Grade, trait, mutation, and level are separate considerations.','Equip Best is a starting check rather than a permanent ranking.'],'A universal permanent ranking is not confirmed, so no unsupported combat order is published.'),
'anime-dice-units':topicArticle('Units','rolling, keeping, equipping, and improving characters',['Characters are obtained through the roll loop.','Keeper units deserve resources before temporary results.','Offline earnings are identified by the official game description.'],'Unit availability and balance can change; confirm the current roster in game.'),
'anime-dice-traits':topicArticle('Traits','evaluating traits without confusing them with grades or mutations',['Traits are a separate unit property.','Trait Rerolls are named by the confirmed UPDATE6 reward.','A trait should be evaluated with the unit it belongs to.'],'Exact trait effects and rankings are not confirmed for every current version.'),
'anime-dice-mutation':topicArticle('Mutation','recognizing mutation as a separate character property',['Mutations are part of the documented character loop.','Mutation, grade, and trait are separate labels.','A mutated result should be reviewed before selling.'],'Exact mutation odds and a complete live mutation list are not confirmed.'),
'anime-dice-rarity':topicArticle('Rarity','comparing roll rarity with the rest of a unit',['Rarity helps describe a roll result.','Rarity does not replace grade, trait, mutation, or level checks.','Luck belongs to progression rather than being a unit rarity.'],'Exact roll probabilities are not confirmed by the supplied references.'),
'anime-dice-grades':topicArticle('Grades','checking unit grades independently from traits',['Grades are separate from traits and mutations.','A grade should be read alongside the underlying unit.','Keep uncertain results until they have been compared.'],'A complete current grade table and exact modifiers are not confirmed.'),
'anime-dice-max-level':topicArticle('Max Level','planning unit investment without inventing a cap',['Leveling resources are best focused on keeper units.','Level, grade, trait, and mutation remain separate.','A stronger roll can change which unit deserves investment.'],'One universal maximum level is not confirmed by the supplied references.'),
'anime-dice-luck':topicArticle('Luck','prioritizing Luck as part of early progression',['Luck is a practical early upgrade priority.','Money and Luck can be improved before Roll Speed.','Luck does not guarantee a particular roll.'],'Exact probabilities at each Luck value are not confirmed.'),
'anime-dice-max-luck':topicArticle('Max Luck','tracking upgrade limits without publishing an unsupported cap',['Luck is an upgrade priority in the supplied progression guide.','Rebirth and other systems can affect long-term progression.','Current upgrade panels are the authority for available steps.'],'A permanent universal maximum Luck value is not confirmed.'),
'anime-dice-gems':topicArticle('Gems','protecting and spending a named progression resource',['Gems are included in the documented UPDATE6 rewards.','The group chest may provide gems according to the supplied guide.','Resources should be reserved for deliberate progression choices.'],'Current prices, offers, and best purchases are not confirmed and can change.'),
'anime-dice-jackpot-roll':topicArticle('Jackpot Roll','checking the in-game roll feature without claiming odds',['Jackpot Roll is treated as a progression search intent.','Luck and normal rolling remain distinct considerations.','The current interface should be checked before spending resources.'],'Activation requirements, rewards, and exact odds are not confirmed.'),
'anime-dice-lucky-spin':topicArticle('Lucky Spin','handling Lucky Spins as a limited resource',['Lucky Spins are named in the documented UPDATE6 reward.','The group chest may provide spins.','A spin result should be reviewed before selling units.'],'Exact outcomes, odds, and current availability are not confirmed.'),
'anime-dice-rebirth':topicArticle('Rebirth','preparing for a long-term progression reset',['Rebirth belongs to long-term progression.','Update 7 is documented as adding six rebirth upgrade paths.','A reset decision should be checked against the current interface.'],'Exact costs and reset effects for every step are not confirmed here.'),
'anime-dice-max-rebirth':topicArticle('Max Rebirth','checking rebirth limits without inventing a final cap',['Update 7 is documented as adding six rebirth upgrade paths.','A path count is not the same as a universal rebirth cap.','The current game panel should be used for limits.'],'A permanent maximum rebirth number is not confirmed.'),
'anime-dice-quest-shop':topicArticle('Quest Shop','evaluating current quest rewards and purchases',['Quest progress and shop choices should be checked in game.','Gems, Tickets, and spins are separate named resources.','Prioritize purchases that support the current team plan.'],'Live inventory, prices, and refresh timing are not confirmed.'),
} satisfies Partial<Record<ArticleId,LocalizedArticle>>);


Object.assign(EN_ARTICLE_COPY,{
'anime-dice-tower':topicArticle('Tower','preparing a team and resources before entering the Tower',['Review the active team before a run.','Gear, potions, and Tickets are separate preparation resources.','Tower details were reviewed with the supplied progression sources.'],'Current floors, enemies, and reward rotations are not confirmed.'),
'anime-dice-gear':topicArticle('Gear','comparing gear by its documented source and fit',['Gear belongs to Tower preparation in the supplied sources.','Compare a gear item with the unit and goal it supports.','Keep acquisition notes tied to reviewed sources.'],'A complete live gear list and exact modifiers are not confirmed.'),
'anime-dice-potion':topicArticle('Potion','deciding when a temporary resource supports a run',['Potions are treated as a Tower preparation resource.','Check the current item text before use.','Save limited items for a defined progression goal.'],'Live potion inventory, duration, and exact effects are not confirmed.'),
'anime-dice-tickets':topicArticle('Tickets','tracking a named resource before Tower or event use',['Tickets are included in the documented UPDATE6 reward.','Ticket use should be checked in the current interface.','Reviewed sources do not support an unlimited supply claim.'],'Current costs, uses, and event availability are not confirmed.'),
'anime-dice-trading':topicArticle('Trading','checking both sides of a player exchange safely',['Confirm the item or unit offered on both sides.','Recheck grade, trait, mutation, and level separately.','Use verified official destinations for current community context.'],'Trading availability and live demand are volatile and not confirmed as permanent.'),
'anime-dice-trade-value':topicArticle('Trade Value','building a transparent comparison rather than copying a price claim',['Compare unit identity and rarity.','Review grade, trait, mutation, and level separately.','Record the review date and source of any community estimate.'],'No verified live price dataset is supplied, so guaranteed values are not published.'),
'anime-dice-value-calculator':topicArticle('Value Calculator','using a manual evaluation worksheet for a proposed deal',['List each unit on both sides.','Compare rarity, grade, trait, mutation, and level.','Note the source and date for any community estimate.','Reject pressure to finish before verification.'],'This page is a transparent worksheet; a numeric market formula is not confirmed.'),
'anime-dice-market':topicArticle('Market','monitoring changeable community demand cautiously',['Separate observed offers from completed exchanges.','Record dates because demand can move.','Compare multiple verified community observations.'],'There is no verified live market feed or authoritative fixed price list in the supplied sources.'),
} satisfies Partial<Record<ArticleId,LocalizedArticle>>);


Object.assign(EN_ARTICLE_COPY,{
'anime-dice-new-update':topicArticle('New Update','checking the latest confirmed change instead of guessing',['The supplied research identifies Update 7.','Update 7 adds Galactic rarity and six rebirth upgrade paths.','The article record was reviewed on October 5, 2026.'],'A newer release is not verified by the supplied sources; check official destinations.'),
'anime-dice-next-update':topicArticle('Next Update','verifying future news without predicting a date',['Use the official Roblox game page and verified Discord for announcements.','Separate a developer announcement from community speculation.','Record the date when information is checked.'],'No next-update date or feature list is verified by the supplied sources.'),
'anime-dice-update-7':topicArticle('Update 7','reviewing the sourced Update 7 changes',['Update 7 adds Galactic rarity.','The update adds six rebirth upgrade paths.','UPDATE7 is a documented reward code.'],'Exact balance values beyond the supplied Update 7 source are not verified.'),
'anime-dice-event':topicArticle('Event','checking whether a current event has official confirmation',['Check the official game page and verified Discord.','Confirm start and end information in the current game.','Treat community posts as unverified until matched to an official destination.'],'No current event schedule is verified by the supplied sources.'),
'anime-dice-admin-abuse-time':topicArticle('Admin Abuse Time','checking a claimed session without publishing a false schedule',['Look for a dated announcement in verified official destinations.','Confirm timezone and date together.','Ignore reposts that do not link to the original announcement.'],'No recurring admin event time is verified by the supplied sources.'),
'anime-dice-discord':topicArticle('Discord','finding the verified community invite safely',['Use the verified Discord invite linked by this site.','Check announcement context and timestamps.','Do not trust lookalike invites from unrelated pages.'],'Channel names and current announcements can change after review.'),
'anime-dice-reddit':topicArticle('Reddit','evaluating community posts when no official page is established',['Compare claims with the official game page.','Look for a direct developer source.','Treat user posts as community discussion rather than confirmation.'],'An official Anime Dice Reddit community is not verified by the supplied sources.'),
'anime-dice-trello':topicArticle('Trello','checking board claims without endorsing an imitation',['Verify any board from an official developer destination.','Check board ownership and update history.','Do not enter account details on a lookalike page.'],'An official Anime Dice Trello board is not verified by the supplied sources.'),
'anime-dice-group':topicArticle('Group','using the verified More & More Games Roblox community',['The verified developer community is More & More Games.','The group chest may provide spins, gems, or rerolls.','Join through the verified Roblox destination.'],'Chest availability and exact rewards can change and should be checked in game.'),
} satisfies Partial<Record<ArticleId,LocalizedArticle>>);
