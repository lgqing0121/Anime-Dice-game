import type { ArticleId } from '../content/types';
export interface ArticleFactContract { factKeys: readonly string[]; claims: readonly string[] }
export const ARTICLE_FACTS = {
  "anime-dice-codes": {
    "factKeys": [
      "codes:update7",
      "codes:update6",
      "codes:redeem-path",
      "codes:reviewed-2026-10-05"
    ],
    "claims": [
      "UPDATE7 and UPDATE6 are documented codes.",
      "UPDATE6 names Lucky Spins, Trait Rerolls, Tickets and Gems.",
      "Redemption uses Shop.",
      "Reviewed October 5, 2026."
    ]
  },
  "anime-dice-guide": {
    "factKeys": [
      "anime-dice-guide:confirmed-1",
      "anime-dice-guide:confirmed-2",
      "anime-dice-guide:confirmed-3",
      "anime-dice-guide:evidence-boundary"
    ],
    "claims": [
      "Grades and traits are separate systems.",
      "Mutations can affect unit evaluation.",
      "The official description confirms offline earnings.",
      "Progress speed varies, so no guaranteed timeline is stated."
    ]
  },
  "anime-dice-tips": {
    "factKeys": [
      "anime-dice-tips:confirmed-1",
      "anime-dice-tips:confirmed-2",
      "anime-dice-tips:confirmed-3",
      "anime-dice-tips:evidence-boundary"
    ],
    "claims": [
      "Money and Luck are strong early priorities.",
      "Roll Speed helps after the economy is stable.",
      "Grade, trait, and mutation need separate checks.",
      "Rare outcomes and a fixed progression pace cannot be promised."
    ]
  },
  "anime-dice-auto-roll": {
    "factKeys": [
      "anime-dice-auto-roll:confirmed-1",
      "anime-dice-auto-roll:confirmed-2",
      "anime-dice-auto-roll:confirmed-3",
      "anime-dice-auto-roll:evidence-boundary"
    ],
    "claims": [
      "Hide affects the repeated roll presentation.",
      "Rolls continue while that animation is hidden.",
      "Keeper units should still be reviewed.",
      "Hide is not evidence of a universal option for unrelated scenes."
    ]
  },
  "anime-dice-auto-sell": {
    "factKeys": [
      "anime-dice-auto-sell:confirmed-1",
      "anime-dice-auto-sell:confirmed-2",
      "anime-dice-auto-sell:confirmed-3",
      "anime-dice-auto-sell:evidence-boundary"
    ],
    "claims": [
      "Grades, traits, and mutations can matter independently.",
      "The threshold should stay below units you actively use.",
      "Recheck the setting as the team improves.",
      "Keep an uncertain unit until its properties have been compared."
    ]
  },
  "anime-dice-how-to-level-up": {
    "factKeys": [
      "anime-dice-how-to-level-up:confirmed-1",
      "anime-dice-how-to-level-up:confirmed-2",
      "anime-dice-how-to-level-up:confirmed-3",
      "anime-dice-how-to-level-up:evidence-boundary"
    ],
    "claims": [
      "Level is one part of unit evaluation.",
      "Grades and traits are separate systems.",
      "A stronger roll may replace an early keeper.",
      "The supplied references do not establish one universal maximum level, so no number is invented."
    ]
  },
  "anime-dice-how-to-skip-cutscenes": {
    "factKeys": [
      "anime-dice-how-to-skip-cutscenes:confirmed-1",
      "anime-dice-how-to-skip-cutscenes:confirmed-2",
      "anime-dice-how-to-skip-cutscenes:confirmed-3",
      "anime-dice-how-to-skip-cutscenes:evidence-boundary"
    ],
    "claims": [
      "Hide covers the roll presentation.",
      "It does not stop the rolling process.",
      "Other scenes can have different controls.",
      "No supplied source confirms a setting that skips every intro, update, event, or story scene."
    ]
  },
  "anime-dice-how-to-join-group": {
    "factKeys": [
      "anime-dice-how-to-join-group:confirmed-1",
      "anime-dice-how-to-join-group:confirmed-2",
      "anime-dice-how-to-join-group:confirmed-3",
      "anime-dice-how-to-join-group:evidence-boundary"
    ],
    "claims": [
      "The supplied guide says the chest may provide spins.",
      "Gems or rerolls may also be available.",
      "Exact availability should be checked in game.",
      "Avoid lookalike communities and confirm the Roblox destination before joining."
    ]
  },
  "anime-dice-tier-list": {
    "factKeys": [
      "anime-dice-tier-list:confirmed-1",
      "anime-dice-tier-list:confirmed-2",
      "anime-dice-tier-list:confirmed-3",
      "anime-dice-tier-list:evidence-boundary"
    ],
    "claims": [
      "A useful ranking depends on the current game version.",
      "Grade, trait, mutation, and level are separate considerations.",
      "Equip Best is a starting check rather than a permanent ranking.",
      "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
    ]
  },
  "anime-dice-units": {
    "factKeys": [
      "anime-dice-units:confirmed-1",
      "anime-dice-units:confirmed-2",
      "anime-dice-units:confirmed-3",
      "anime-dice-units:evidence-boundary"
    ],
    "claims": [
      "Characters are obtained through the roll loop.",
      "Keeper units deserve resources before temporary results.",
      "Offline earnings are identified by the official game description.",
      "Unit availability and balance can change; confirm the current roster in game."
    ]
  },
  "anime-dice-traits": {
    "factKeys": [
      "anime-dice-traits:confirmed-1",
      "anime-dice-traits:confirmed-2",
      "anime-dice-traits:confirmed-3",
      "anime-dice-traits:evidence-boundary"
    ],
    "claims": [
      "Traits are a separate unit property.",
      "Trait Rerolls are named by the confirmed UPDATE6 reward.",
      "A trait should be evaluated with the unit it belongs to.",
      "Exact trait effects and rankings are not confirmed for every current version."
    ]
  },
  "anime-dice-mutation": {
    "factKeys": [
      "anime-dice-mutation:confirmed-1",
      "anime-dice-mutation:confirmed-2",
      "anime-dice-mutation:confirmed-3",
      "anime-dice-mutation:evidence-boundary"
    ],
    "claims": [
      "Mutations are part of the documented character loop.",
      "Mutation, grade, and trait are separate labels.",
      "A mutated result should be reviewed before selling.",
      "Exact mutation odds and a complete live mutation list are not confirmed."
    ]
  },
  "anime-dice-rarity": {
    "factKeys": [
      "anime-dice-rarity:confirmed-1",
      "anime-dice-rarity:confirmed-2",
      "anime-dice-rarity:confirmed-3",
      "anime-dice-rarity:evidence-boundary"
    ],
    "claims": [
      "Rarity helps describe a roll result.",
      "Rarity does not replace grade, trait, mutation, or level checks.",
      "Luck belongs to progression rather than being a unit rarity.",
      "Exact roll probabilities are not confirmed by the supplied references."
    ]
  },
  "anime-dice-grades": {
    "factKeys": [
      "anime-dice-grades:confirmed-1",
      "anime-dice-grades:confirmed-2",
      "anime-dice-grades:confirmed-3",
      "anime-dice-grades:evidence-boundary"
    ],
    "claims": [
      "Grades are separate from traits and mutations.",
      "A grade should be read alongside the underlying unit.",
      "Keep uncertain results until they have been compared.",
      "A complete current grade table and exact modifiers are not confirmed."
    ]
  },
  "anime-dice-max-level": {
    "factKeys": [
      "anime-dice-max-level:confirmed-1",
      "anime-dice-max-level:confirmed-2",
      "anime-dice-max-level:confirmed-3",
      "anime-dice-max-level:evidence-boundary"
    ],
    "claims": [
      "Leveling resources are best focused on keeper units.",
      "Level, grade, trait, and mutation remain separate.",
      "A stronger roll can change which unit deserves investment.",
      "One universal maximum level is not confirmed by the supplied references."
    ]
  },
  "anime-dice-luck": {
    "factKeys": [
      "anime-dice-luck:confirmed-1",
      "anime-dice-luck:confirmed-2",
      "anime-dice-luck:confirmed-3",
      "anime-dice-luck:evidence-boundary"
    ],
    "claims": [
      "Luck is a practical early upgrade priority.",
      "Money and Luck can be improved before Roll Speed.",
      "Luck does not guarantee a particular roll.",
      "Exact probabilities at each Luck value are not confirmed."
    ]
  },
  "anime-dice-max-luck": {
    "factKeys": [
      "anime-dice-max-luck:confirmed-1",
      "anime-dice-max-luck:confirmed-2",
      "anime-dice-max-luck:confirmed-3",
      "anime-dice-max-luck:evidence-boundary"
    ],
    "claims": [
      "Luck is an upgrade priority in the supplied progression guide.",
      "Rebirth and other systems can affect long-term progression.",
      "Current upgrade panels are the authority for available steps.",
      "A permanent universal maximum Luck value is not confirmed."
    ]
  },
  "anime-dice-gems": {
    "factKeys": [
      "anime-dice-gems:confirmed-1",
      "anime-dice-gems:confirmed-2",
      "anime-dice-gems:confirmed-3",
      "anime-dice-gems:evidence-boundary"
    ],
    "claims": [
      "Gems are included in the documented UPDATE6 rewards.",
      "The group chest may provide gems according to the supplied guide.",
      "Resources should be reserved for deliberate progression choices.",
      "Current prices, offers, and best purchases are not confirmed and can change."
    ]
  },
  "anime-dice-jackpot-roll": {
    "factKeys": [
      "anime-dice-jackpot-roll:confirmed-1",
      "anime-dice-jackpot-roll:confirmed-2",
      "anime-dice-jackpot-roll:confirmed-3",
      "anime-dice-jackpot-roll:evidence-boundary"
    ],
    "claims": [
      "Jackpot Roll is treated as a progression search intent.",
      "Luck and normal rolling remain distinct considerations.",
      "The current interface should be checked before spending resources.",
      "Activation requirements, rewards, and exact odds are not confirmed."
    ]
  },
  "anime-dice-lucky-spin": {
    "factKeys": [
      "anime-dice-lucky-spin:confirmed-1",
      "anime-dice-lucky-spin:confirmed-2",
      "anime-dice-lucky-spin:confirmed-3",
      "anime-dice-lucky-spin:evidence-boundary"
    ],
    "claims": [
      "Lucky Spins are named in the documented UPDATE6 reward.",
      "The group chest may provide spins.",
      "A spin result should be reviewed before selling units.",
      "Exact outcomes, odds, and current availability are not confirmed."
    ]
  },
  "anime-dice-rebirth": {
    "factKeys": [
      "anime-dice-rebirth:confirmed-1",
      "anime-dice-rebirth:confirmed-2",
      "anime-dice-rebirth:confirmed-3",
      "anime-dice-rebirth:evidence-boundary"
    ],
    "claims": [
      "Rebirth belongs to long-term progression.",
      "Update 7 is documented as adding six rebirth upgrade paths.",
      "A reset decision should be checked against the current interface.",
      "Exact costs and reset effects for every step are not confirmed here."
    ]
  },
  "anime-dice-max-rebirth": {
    "factKeys": [
      "anime-dice-max-rebirth:confirmed-1",
      "anime-dice-max-rebirth:confirmed-2",
      "anime-dice-max-rebirth:confirmed-3",
      "anime-dice-max-rebirth:evidence-boundary"
    ],
    "claims": [
      "Update 7 is documented as adding six rebirth upgrade paths.",
      "A path count is not the same as a universal rebirth cap.",
      "The current game panel should be used for limits.",
      "A permanent maximum rebirth number is not confirmed."
    ]
  },
  "anime-dice-quest-shop": {
    "factKeys": [
      "anime-dice-quest-shop:confirmed-1",
      "anime-dice-quest-shop:confirmed-2",
      "anime-dice-quest-shop:confirmed-3",
      "anime-dice-quest-shop:evidence-boundary"
    ],
    "claims": [
      "Quest progress and shop choices should be checked in game.",
      "Gems, Tickets, and spins are separate named resources.",
      "Prioritize purchases that support the current team plan.",
      "Live inventory, prices, and refresh timing are not confirmed."
    ]
  },
  "anime-dice-tower": {
    "factKeys": [
      "anime-dice-tower:confirmed-1",
      "anime-dice-tower:confirmed-2",
      "anime-dice-tower:confirmed-3",
      "anime-dice-tower:evidence-boundary"
    ],
    "claims": [
      "Review the active team before a run.",
      "Gear, potions, and Tickets are separate preparation resources.",
      "Tower details were reviewed with the supplied progression sources.",
      "Current floors, enemies, and reward rotations are not confirmed."
    ]
  },
  "anime-dice-gear": {
    "factKeys": [
      "anime-dice-gear:confirmed-1",
      "anime-dice-gear:confirmed-2",
      "anime-dice-gear:confirmed-3",
      "anime-dice-gear:evidence-boundary"
    ],
    "claims": [
      "Gear belongs to Tower preparation in the supplied sources.",
      "Compare a gear item with the unit and goal it supports.",
      "Keep acquisition notes tied to reviewed sources.",
      "A complete live gear list and exact modifiers are not confirmed."
    ]
  },
  "anime-dice-potion": {
    "factKeys": [
      "anime-dice-potion:confirmed-1",
      "anime-dice-potion:confirmed-2",
      "anime-dice-potion:confirmed-3",
      "anime-dice-potion:evidence-boundary"
    ],
    "claims": [
      "Potions are treated as a Tower preparation resource.",
      "Check the current item text before use.",
      "Save limited items for a defined progression goal.",
      "Live potion inventory, duration, and exact effects are not confirmed."
    ]
  },
  "anime-dice-tickets": {
    "factKeys": [
      "anime-dice-tickets:confirmed-1",
      "anime-dice-tickets:confirmed-2",
      "anime-dice-tickets:confirmed-3",
      "anime-dice-tickets:evidence-boundary"
    ],
    "claims": [
      "Tickets are included in the documented UPDATE6 reward.",
      "Ticket use should be checked in the current interface.",
      "Reviewed sources do not support an unlimited supply claim.",
      "Current costs, uses, and event availability are not confirmed."
    ]
  },
  "anime-dice-trading": {
    "factKeys": [
      "anime-dice-trading:confirmed-1",
      "anime-dice-trading:confirmed-2",
      "anime-dice-trading:confirmed-3",
      "anime-dice-trading:evidence-boundary"
    ],
    "claims": [
      "Confirm the item or unit offered on both sides.",
      "Recheck grade, trait, mutation, and level separately.",
      "Use verified official destinations for current community context.",
      "Trading availability and live demand are volatile and not confirmed as permanent."
    ]
  },
  "anime-dice-trade-value": {
    "factKeys": [
      "anime-dice-trade-value:confirmed-1",
      "anime-dice-trade-value:confirmed-2",
      "anime-dice-trade-value:confirmed-3",
      "anime-dice-trade-value:evidence-boundary"
    ],
    "claims": [
      "Compare unit identity and rarity.",
      "Review grade, trait, mutation, and level separately.",
      "Record the review date and source of any community estimate.",
      "No verified live price dataset is supplied, so guaranteed values are not published."
    ]
  },
  "anime-dice-value-calculator": {
    "factKeys": [
      "anime-dice-value-calculator:confirmed-1",
      "anime-dice-value-calculator:confirmed-2",
      "anime-dice-value-calculator:confirmed-3",
      "anime-dice-value-calculator:confirmed-4",
      "anime-dice-value-calculator:evidence-boundary"
    ],
    "claims": [
      "List each unit on both sides.",
      "Compare rarity, grade, trait, mutation, and level.",
      "Note the source and date for any community estimate.",
      "Reject pressure to finish before verification.",
      "This page is a transparent worksheet; a numeric market formula is not confirmed."
    ]
  },
  "anime-dice-market": {
    "factKeys": [
      "anime-dice-market:confirmed-1",
      "anime-dice-market:confirmed-2",
      "anime-dice-market:confirmed-3",
      "anime-dice-market:evidence-boundary"
    ],
    "claims": [
      "Separate observed offers from completed exchanges.",
      "Record dates because demand can move.",
      "Compare multiple verified community observations.",
      "There is no verified live market feed or authoritative fixed price list in the supplied sources."
    ]
  },
  "anime-dice-new-update": {
    "factKeys": [
      "anime-dice-new-update:confirmed-1",
      "anime-dice-new-update:confirmed-2",
      "anime-dice-new-update:confirmed-3",
      "anime-dice-new-update:evidence-boundary"
    ],
    "claims": [
      "The supplied research identifies Update 7.",
      "Update 7 adds Galactic rarity and six rebirth upgrade paths.",
      "The article record was reviewed on October 5, 2026.",
      "A newer release is not verified by the supplied sources; check official destinations."
    ]
  },
  "anime-dice-next-update": {
    "factKeys": [
      "anime-dice-next-update:confirmed-1",
      "anime-dice-next-update:confirmed-2",
      "anime-dice-next-update:confirmed-3",
      "anime-dice-next-update:evidence-boundary"
    ],
    "claims": [
      "Use the official Roblox game page and verified Discord for announcements.",
      "Separate a developer announcement from community speculation.",
      "Record the date when information is checked.",
      "No next-update date or feature list is verified by the supplied sources."
    ]
  },
  "anime-dice-update-7": {
    "factKeys": [
      "anime-dice-update-7:confirmed-1",
      "anime-dice-update-7:confirmed-2",
      "anime-dice-update-7:confirmed-3",
      "anime-dice-update-7:evidence-boundary"
    ],
    "claims": [
      "Update 7 adds Galactic rarity.",
      "The update adds six rebirth upgrade paths.",
      "UPDATE7 is a documented reward code.",
      "Exact balance values beyond the supplied Update 7 source are not verified."
    ]
  },
  "anime-dice-event": {
    "factKeys": [
      "anime-dice-event:confirmed-1",
      "anime-dice-event:confirmed-2",
      "anime-dice-event:confirmed-3",
      "anime-dice-event:evidence-boundary"
    ],
    "claims": [
      "Check the official game page and verified Discord.",
      "Confirm start and end information in the current game.",
      "Treat community posts as unverified until matched to an official destination.",
      "No current event schedule is verified by the supplied sources."
    ]
  },
  "anime-dice-admin-abuse-time": {
    "factKeys": [
      "anime-dice-admin-abuse-time:confirmed-1",
      "anime-dice-admin-abuse-time:confirmed-2",
      "anime-dice-admin-abuse-time:confirmed-3",
      "anime-dice-admin-abuse-time:evidence-boundary"
    ],
    "claims": [
      "Look for a dated announcement in verified official destinations.",
      "Confirm timezone and date together.",
      "Ignore reposts that do not link to the original announcement.",
      "No recurring admin event time is verified by the supplied sources."
    ]
  },
  "anime-dice-discord": {
    "factKeys": [
      "anime-dice-discord:confirmed-1",
      "anime-dice-discord:confirmed-2",
      "anime-dice-discord:confirmed-3",
      "anime-dice-discord:evidence-boundary"
    ],
    "claims": [
      "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site.",
      "Check announcement context and timestamps.",
      "Do not trust lookalike invites from unrelated pages.",
      "Channel names and current announcements can change after review."
    ]
  },
  "anime-dice-reddit": {
    "factKeys": [
      "anime-dice-reddit:confirmed-1",
      "anime-dice-reddit:confirmed-2",
      "anime-dice-reddit:confirmed-3",
      "anime-dice-reddit:evidence-boundary"
    ],
    "claims": [
      "Compare claims with the official game page.",
      "Look for a direct developer source.",
      "Treat user posts as community discussion rather than confirmation.",
      "An official Anime Dice Reddit community is not verified by the supplied sources."
    ]
  },
  "anime-dice-trello": {
    "factKeys": [
      "anime-dice-trello:confirmed-1",
      "anime-dice-trello:confirmed-2",
      "anime-dice-trello:confirmed-3",
      "anime-dice-trello:evidence-boundary"
    ],
    "claims": [
      "Verify any board from an official developer destination.",
      "Check board ownership and update history.",
      "Do not enter account details on a lookalike page.",
      "An official Anime Dice Trello board is not verified by the supplied sources."
    ]
  },
  "anime-dice-group": {
    "factKeys": [
      "anime-dice-group:confirmed-1",
      "anime-dice-group:confirmed-2",
      "anime-dice-group:confirmed-3",
      "anime-dice-group:evidence-boundary"
    ],
    "claims": [
      "The verified developer community is More & More Games.",
      "The group chest may provide spins, gems, or rerolls.",
      "Join through the verified Roblox destination.",
      "Chest availability and exact rewards can change and should be checked in game."
    ]
  }
} satisfies Record<ArticleId, ArticleFactContract>;
