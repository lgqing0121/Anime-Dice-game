import type { ArticleId } from '../content/types';
import type { Locale } from '../config/site';
export interface LocalizedFactAssertion { key: string; canonicalClaim: string; texts: readonly string[] }
export const LOCALIZED_FACT_ASSERTIONS = {
  "en": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "texts": [
          "UPDATE7"
        ],
        "canonicalClaim": "UPDATE7 and UPDATE6 are documented codes."
      },
      {
        "key": "codes:update6",
        "texts": [
          "UPDATE6"
        ],
        "canonicalClaim": "UPDATE6 names Lucky Spins, Trait Rerolls, Tickets and Gems."
      },
      {
        "key": "codes:redeem-path",
        "texts": [
          "Shop"
        ],
        "canonicalClaim": "Redemption uses Shop."
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "texts": [
          "2026"
        ],
        "canonicalClaim": "Reviewed October 5, 2026."
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "texts": [
          "Grades and traits are separate systems."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "texts": [
          "Mutations can affect unit evaluation."
        ],
        "canonicalClaim": "Mutations can affect unit evaluation."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "texts": [
          "The official description confirms offline earnings."
        ],
        "canonicalClaim": "The official description confirms offline earnings."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "texts": [
          "Progress speed varies, so no guaranteed timeline is stated."
        ],
        "canonicalClaim": "Progress speed varies, so no guaranteed timeline is stated."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "texts": [
          "Money and Luck are strong early priorities."
        ],
        "canonicalClaim": "Money and Luck are strong early priorities."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "texts": [
          "Roll Speed helps after the economy is stable."
        ],
        "canonicalClaim": "Roll Speed helps after the economy is stable."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "texts": [
          "Grade, trait, and mutation need separate checks."
        ],
        "canonicalClaim": "Grade, trait, and mutation need separate checks."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "texts": [
          "Rare outcomes and a fixed progression pace cannot be promised."
        ],
        "canonicalClaim": "Rare outcomes and a fixed progression pace cannot be promised."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "texts": [
          "Hide affects the repeated roll presentation."
        ],
        "canonicalClaim": "Hide affects the repeated roll presentation."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "texts": [
          "Rolls continue while that animation is hidden."
        ],
        "canonicalClaim": "Rolls continue while that animation is hidden."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "texts": [
          "Keeper units should still be reviewed."
        ],
        "canonicalClaim": "Keeper units should still be reviewed."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "texts": [
          "Hide is not evidence of a universal option for unrelated scenes."
        ],
        "canonicalClaim": "Hide is not evidence of a universal option for unrelated scenes."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "texts": [
          "Grades, traits, and mutations can matter independently."
        ],
        "canonicalClaim": "Grades, traits, and mutations can matter independently."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "texts": [
          "The threshold should stay below units you actively use."
        ],
        "canonicalClaim": "The threshold should stay below units you actively use."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "texts": [
          "Recheck the setting as the team improves."
        ],
        "canonicalClaim": "Recheck the setting as the team improves."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "texts": [
          "Keep an uncertain unit until its properties have been compared."
        ],
        "canonicalClaim": "Keep an uncertain unit until its properties have been compared."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "texts": [
          "Level is one part of unit evaluation."
        ],
        "canonicalClaim": "Level is one part of unit evaluation."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "texts": [
          "Grades and traits are separate systems."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "texts": [
          "A stronger roll may replace an early keeper."
        ],
        "canonicalClaim": "A stronger roll may replace an early keeper."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "texts": [
          "The supplied references do not establish one universal maximum level, so no number is invented."
        ],
        "canonicalClaim": "The supplied references do not establish one universal maximum level, so no number is invented."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "texts": [
          "Hide covers the roll presentation."
        ],
        "canonicalClaim": "Hide covers the roll presentation."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "texts": [
          "It does not stop the rolling process."
        ],
        "canonicalClaim": "It does not stop the rolling process."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "texts": [
          "Other scenes can have different controls."
        ],
        "canonicalClaim": "Other scenes can have different controls."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "texts": [
          "No supplied source confirms a setting that skips every intro, update, event, or story scene."
        ],
        "canonicalClaim": "No supplied source confirms a setting that skips every intro, update, event, or story scene."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "texts": [
          "The supplied guide says the chest may provide spins."
        ],
        "canonicalClaim": "The supplied guide says the chest may provide spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "texts": [
          "Gems or rerolls may also be available."
        ],
        "canonicalClaim": "Gems or rerolls may also be available."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "texts": [
          "Exact availability should be checked in game."
        ],
        "canonicalClaim": "Exact availability should be checked in game."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "texts": [
          "Avoid lookalike communities and confirm the Roblox destination before joining."
        ],
        "canonicalClaim": "Avoid lookalike communities and confirm the Roblox destination before joining."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "texts": [
          "A useful ranking depends on the current game version."
        ],
        "canonicalClaim": "A useful ranking depends on the current game version."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "texts": [
          "Grade, trait, mutation, and level are separate considerations."
        ],
        "canonicalClaim": "Grade, trait, mutation, and level are separate considerations."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "texts": [
          "Equip Best is a starting check rather than a permanent ranking."
        ],
        "canonicalClaim": "Equip Best is a starting check rather than a permanent ranking."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "texts": [
          "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
        ],
        "canonicalClaim": "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "texts": [
          "Characters are obtained through the roll loop."
        ],
        "canonicalClaim": "Characters are obtained through the roll loop."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "texts": [
          "Keeper units deserve resources before temporary results."
        ],
        "canonicalClaim": "Keeper units deserve resources before temporary results."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "texts": [
          "Offline earnings are identified by the official game description."
        ],
        "canonicalClaim": "Offline earnings are identified by the official game description."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "texts": [
          "Unit availability and balance can change; confirm the current roster in game."
        ],
        "canonicalClaim": "Unit availability and balance can change; confirm the current roster in game."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "texts": [
          "Traits are a separate unit property."
        ],
        "canonicalClaim": "Traits are a separate unit property."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "texts": [
          "Trait Rerolls are named by the confirmed UPDATE6 reward."
        ],
        "canonicalClaim": "Trait Rerolls are named by the confirmed UPDATE6 reward."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "texts": [
          "A trait should be evaluated with the unit it belongs to."
        ],
        "canonicalClaim": "A trait should be evaluated with the unit it belongs to."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "texts": [
          "Exact trait effects and rankings are not confirmed for every current version."
        ],
        "canonicalClaim": "Exact trait effects and rankings are not confirmed for every current version."
      },
      {
        "key": "anime-dice-traits:supplied-eternal",
        "texts": [
          "Eternal",
          "27x",
          "Not stated in supplied module"
        ],
        "canonicalClaim": "Eternal shows 27x Income, Damage, and Health; its chance is not stated in the supplied module."
      },
      {
        "key": "anime-dice-traits:supplied-transcendent",
        "texts": [
          "Transcendent",
          "15x",
          "0.006%"
        ],
        "canonicalClaim": "Transcendent shows 15x and a displayed 0.006% chance."
      },
      {
        "key": "anime-dice-traits:supplied-monarch",
        "texts": [
          "Monarch",
          "8x",
          "0.025%"
        ],
        "canonicalClaim": "Monarch shows 8x and a displayed 0.025% chance."
      },
      {
        "key": "anime-dice-traits:supplied-shogun",
        "texts": [
          "Shogun",
          "5x",
          "0.12%"
        ],
        "canonicalClaim": "Shogun shows 5x and a displayed 0.12% chance."
      },
      {
        "key": "anime-dice-traits:supplied-samurai",
        "texts": [
          "Samurai",
          "3x",
          "0.5%"
        ],
        "canonicalClaim": "Samurai shows 3x and a displayed 0.5% chance."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "texts": [
          "Mutations are part of the documented character loop."
        ],
        "canonicalClaim": "Mutations are part of the documented character loop."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "texts": [
          "Mutation, grade, and trait are separate labels."
        ],
        "canonicalClaim": "Mutation, grade, and trait are separate labels."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "texts": [
          "A mutated result should be reviewed before selling."
        ],
        "canonicalClaim": "A mutated result should be reviewed before selling."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "texts": [
          "Exact mutation odds and a complete live mutation list are not confirmed."
        ],
        "canonicalClaim": "Exact mutation odds and a complete live mutation list are not confirmed."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "texts": [
          "Rarity helps describe a roll result."
        ],
        "canonicalClaim": "Rarity helps describe a roll result."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "texts": [
          "Rarity does not replace grade, trait, mutation, or level checks."
        ],
        "canonicalClaim": "Rarity does not replace grade, trait, mutation, or level checks."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "texts": [
          "Luck belongs to progression rather than being a unit rarity."
        ],
        "canonicalClaim": "Luck belongs to progression rather than being a unit rarity."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "texts": [
          "Exact roll probabilities are not confirmed by the supplied references."
        ],
        "canonicalClaim": "Exact roll probabilities are not confirmed by the supplied references."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "texts": [
          "Grades are separate from traits and mutations."
        ],
        "canonicalClaim": "Grades are separate from traits and mutations."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "texts": [
          "A grade should be read alongside the underlying unit."
        ],
        "canonicalClaim": "A grade should be read alongside the underlying unit."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "texts": [
          "Keep uncertain results until they have been compared."
        ],
        "canonicalClaim": "Keep uncertain results until they have been compared."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "texts": [
          "A complete current grade table and exact modifiers are not confirmed."
        ],
        "canonicalClaim": "A complete current grade table and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "texts": [
          "Leveling resources are best focused on keeper units."
        ],
        "canonicalClaim": "Leveling resources are best focused on keeper units."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "texts": [
          "Level, grade, trait, and mutation remain separate."
        ],
        "canonicalClaim": "Level, grade, trait, and mutation remain separate."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "texts": [
          "A stronger roll can change which unit deserves investment."
        ],
        "canonicalClaim": "A stronger roll can change which unit deserves investment."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "texts": [
          "One universal maximum level is not confirmed by the supplied references."
        ],
        "canonicalClaim": "One universal maximum level is not confirmed by the supplied references."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "texts": [
          "Luck is a practical early upgrade priority."
        ],
        "canonicalClaim": "Luck is a practical early upgrade priority."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "texts": [
          "Money and Luck can be improved before Roll Speed."
        ],
        "canonicalClaim": "Money and Luck can be improved before Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "texts": [
          "Luck does not guarantee a particular roll."
        ],
        "canonicalClaim": "Luck does not guarantee a particular roll."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "texts": [
          "Exact probabilities at each Luck value are not confirmed."
        ],
        "canonicalClaim": "Exact probabilities at each Luck value are not confirmed."
      },
      {
        "key": "anime-dice-luck:supplied-normal-die",
        "texts": [
          "Normal",
          "Common",
          "$1",
          "2x"
        ],
        "canonicalClaim": "Normal is Common, costs $1, and shows 2x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-storm-die",
        "texts": [
          "Storm",
          "Epic",
          "$200 million",
          "400x"
        ],
        "canonicalClaim": "Storm is Epic, costs $200 million, and shows 400x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-light-die",
        "texts": [
          "Light",
          "Legendary",
          "$12 billion",
          "1,500x"
        ],
        "canonicalClaim": "Light is Legendary, costs $12 billion, and shows 1,500x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-prismatic-die",
        "texts": [
          "Prismatic",
          "Exotic",
          "$1 quintillion",
          "1,000,000x"
        ],
        "canonicalClaim": "Prismatic is Exotic, costs $1 quintillion, and shows 1,000,000x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-radiant-die",
        "texts": [
          "Radiant",
          "Heavenly",
          "$100 octillion",
          "5,000,000,000x"
        ],
        "canonicalClaim": "Radiant is Heavenly, costs $100 octillion, and shows 5,000,000,000x Luck."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "texts": [
          "Luck is an upgrade priority in the supplied progression guide."
        ],
        "canonicalClaim": "Luck is an upgrade priority in the supplied progression guide."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "texts": [
          "Rebirth and other systems can affect long-term progression."
        ],
        "canonicalClaim": "Rebirth and other systems can affect long-term progression."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "texts": [
          "Current upgrade panels are the authority for available steps."
        ],
        "canonicalClaim": "Current upgrade panels are the authority for available steps."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "texts": [
          "A permanent universal maximum Luck value is not confirmed."
        ],
        "canonicalClaim": "A permanent universal maximum Luck value is not confirmed."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "texts": [
          "Gems are included in the documented UPDATE6 rewards."
        ],
        "canonicalClaim": "Gems are included in the documented UPDATE6 rewards."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "texts": [
          "The group chest may provide gems according to the supplied guide."
        ],
        "canonicalClaim": "The group chest may provide gems according to the supplied guide."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "texts": [
          "Resources should be reserved for deliberate progression choices."
        ],
        "canonicalClaim": "Resources should be reserved for deliberate progression choices."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "texts": [
          "Current prices, offers, and best purchases are not confirmed and can change."
        ],
        "canonicalClaim": "Current prices, offers, and best purchases are not confirmed and can change."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "texts": [
          "Jackpot Roll is treated as a progression search intent."
        ],
        "canonicalClaim": "Jackpot Roll is treated as a progression search intent."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "texts": [
          "Luck and normal rolling remain distinct considerations."
        ],
        "canonicalClaim": "Luck and normal rolling remain distinct considerations."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "texts": [
          "The current interface should be checked before spending resources."
        ],
        "canonicalClaim": "The current interface should be checked before spending resources."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "texts": [
          "Activation requirements, rewards, and exact odds are not confirmed."
        ],
        "canonicalClaim": "Activation requirements, rewards, and exact odds are not confirmed."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "texts": [
          "Lucky Spins are named in the documented UPDATE6 reward."
        ],
        "canonicalClaim": "Lucky Spins are named in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "texts": [
          "The group chest may provide spins."
        ],
        "canonicalClaim": "The group chest may provide spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "texts": [
          "A spin result should be reviewed before selling units."
        ],
        "canonicalClaim": "A spin result should be reviewed before selling units."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "texts": [
          "Exact outcomes, odds, and current availability are not confirmed."
        ],
        "canonicalClaim": "Exact outcomes, odds, and current availability are not confirmed."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "texts": [
          "Rebirth belongs to long-term progression."
        ],
        "canonicalClaim": "Rebirth belongs to long-term progression."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "texts": [
          "Update 7 is documented as adding six rebirth upgrade paths."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "texts": [
          "A reset decision should be checked against the current interface."
        ],
        "canonicalClaim": "A reset decision should be checked against the current interface."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "texts": [
          "Exact costs and reset effects for every step are not confirmed here."
        ],
        "canonicalClaim": "Exact costs and reset effects for every step are not confirmed here."
      },
      {
        "key": "anime-dice-rebirth:supplied-rebuild-ready",
        "texts": [
          "Wait until equipped units can rebuild income after reset."
        ],
        "canonicalClaim": "Wait until equipped units can rebuild income after reset."
      },
      {
        "key": "anime-dice-rebirth:supplied-cash-resets",
        "texts": [
          "Spend remaining cash before rebirth because current cash resets."
        ],
        "canonicalClaim": "Spend remaining cash before rebirth because current cash resets."
      },
      {
        "key": "anime-dice-rebirth:supplied-units-remain",
        "texts": [
          "Collected units, grades, and traits remain."
        ],
        "canonicalClaim": "Collected units, grades, and traits remain."
      },
      {
        "key": "anime-dice-rebirth:supplied-upgrade-point",
        "texts": [
          "Receive one Rebirth Upgrade Point per rebirth in Update 7."
        ],
        "canonicalClaim": "Update 7 gives one Rebirth Upgrade Point per rebirth."
      },
      {
        "key": "anime-dice-rebirth:supplied-six-paths",
        "texts": [
          "Assign points across six Rebirth Upgrade paths, restart Auto Roll, and rebuild income."
        ],
        "canonicalClaim": "Update 7 has six Rebirth Upgrade paths; restart Auto Roll and rebuild income after assigning points."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "texts": [
          "Update 7 is documented as adding six rebirth upgrade paths."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "texts": [
          "A path count is not the same as a universal rebirth cap."
        ],
        "canonicalClaim": "A path count is not the same as a universal rebirth cap."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "texts": [
          "The current game panel should be used for limits."
        ],
        "canonicalClaim": "The current game panel should be used for limits."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "texts": [
          "A permanent maximum rebirth number is not confirmed."
        ],
        "canonicalClaim": "A permanent maximum rebirth number is not confirmed."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "texts": [
          "Quest progress and shop choices should be checked in game."
        ],
        "canonicalClaim": "Quest progress and shop choices should be checked in game."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "texts": [
          "Gems, Tickets, and spins are separate named resources."
        ],
        "canonicalClaim": "Gems, Tickets, and spins are separate named resources."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "texts": [
          "Prioritize purchases that support the current team plan."
        ],
        "canonicalClaim": "Prioritize purchases that support the current team plan."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "texts": [
          "Live inventory, prices, and refresh timing are not confirmed."
        ],
        "canonicalClaim": "Live inventory, prices, and refresh timing are not confirmed."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "texts": [
          "Review the active team before a run."
        ],
        "canonicalClaim": "Review the active team before a run."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "texts": [
          "Gear, potions, and Tickets are separate preparation resources."
        ],
        "canonicalClaim": "Gear, potions, and Tickets are separate preparation resources."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "texts": [
          "Tower details were reviewed with the supplied progression sources."
        ],
        "canonicalClaim": "Tower details were reviewed with the supplied progression sources."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "texts": [
          "Current floors, enemies, and reward rotations are not confirmed."
        ],
        "canonicalClaim": "Current floors, enemies, and reward rotations are not confirmed."
      },
      {
        "key": "anime-dice-tower:supplied-portal",
        "texts": [
          "Enter the Towers portal in the central lobby and choose a challenge such as Dragon Tower."
        ],
        "canonicalClaim": "The Towers portal is in the central lobby."
      },
      {
        "key": "anime-dice-tower:supplied-equip-best",
        "texts": [
          "Use Equip Best before starting the fight."
        ],
        "canonicalClaim": "Use Equip Best before starting the fight."
      },
      {
        "key": "anime-dice-tower:supplied-auto-hide",
        "texts": [
          "Auto and Hide can keep cleared floors moving while rewards are collected."
        ],
        "canonicalClaim": "Auto and Hide can keep cleared floors moving while rewards are collected."
      },
      {
        "key": "anime-dice-tower:supplied-tower-gear",
        "texts": [
          "Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers each have tower-specific Gear."
        ],
        "canonicalClaim": "Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers have tower-specific Gear."
      },
      {
        "key": "anime-dice-tower:supplied-stuck-upgrades",
        "texts": [
          "Improve grades, traits, Damage, and Health when the team cannot clear the next floor."
        ],
        "canonicalClaim": "Improve grades, traits, Damage, and Health when the team cannot clear the next floor."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "texts": [
          "Gear belongs to Tower preparation in the supplied sources."
        ],
        "canonicalClaim": "Gear belongs to Tower preparation in the supplied sources."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "texts": [
          "Compare a gear item with the unit and goal it supports."
        ],
        "canonicalClaim": "Compare a gear item with the unit and goal it supports."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "texts": [
          "Keep acquisition notes tied to reviewed sources."
        ],
        "canonicalClaim": "Keep acquisition notes tied to reviewed sources."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "texts": [
          "A complete live gear list and exact modifiers are not confirmed."
        ],
        "canonicalClaim": "A complete live gear list and exact modifiers are not confirmed."
      },
      {
        "key": "anime-dice-gear:supplied-angels-halo",
        "texts": [
          "Angel's Halo",
          "+30% Luck, +5 Walk Speed; 0.02% from Dragon Tower Floors 90+"
        ],
        "canonicalClaim": "Angel's Halo gives +30% Luck and +5 Walk Speed, with a supplied 0.02% source from Dragon Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-sakunas-sash",
        "texts": [
          "Sakuna's Sash",
          "2x Damage, +30% Luck, +30% Gems; 0.02% from Cursed Tower Floors 90+"
        ],
        "canonicalClaim": "Sakuna's Sash gives 2x Damage, +30% Luck, and +30% Gems, with a supplied 0.02% source from Cursed Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-enols-drums",
        "texts": [
          "Enol's Drums",
          "+40% Luck, 1.5x Cash; 0.02% from Pirate Tower Floors 90+"
        ],
        "canonicalClaim": "Enol's Drums gives +40% Luck and 1.5x Cash, with a supplied 0.02% source from Pirate Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-obitas-mask",
        "texts": [
          "Obita's Mask",
          "+40% Luck, +30% Gems; 0.02% from Hidden Leaf Tower Floors 90+"
        ],
        "canonicalClaim": "Obita's Mask gives +40% Luck and +30% Gems, with a supplied 0.02% source from Hidden Leaf Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-mazuns-coat",
        "texts": [
          "Mazun's Coat",
          "+50% Luck, 2x Cash; 0.02% from Slayer Tower Floors 90+"
        ],
        "canonicalClaim": "Mazun's Coat gives +50% Luck and 2x Cash, with a supplied 0.02% source from Slayer Tower Floors 90+."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "texts": [
          "Potions are treated as a Tower preparation resource."
        ],
        "canonicalClaim": "Potions are treated as a Tower preparation resource."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "texts": [
          "Check the current item text before use."
        ],
        "canonicalClaim": "Check the current item text before use."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "texts": [
          "Save limited items for a defined progression goal."
        ],
        "canonicalClaim": "Save limited items for a defined progression goal."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "texts": [
          "Live potion inventory, duration, and exact effects are not confirmed."
        ],
        "canonicalClaim": "Live potion inventory, duration, and exact effects are not confirmed."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "texts": [
          "Tickets are included in the documented UPDATE6 reward."
        ],
        "canonicalClaim": "Tickets are included in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "texts": [
          "Ticket use should be checked in the current interface."
        ],
        "canonicalClaim": "Ticket use should be checked in the current interface."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "texts": [
          "Reviewed sources do not support an unlimited supply claim."
        ],
        "canonicalClaim": "Reviewed sources do not support an unlimited supply claim."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "texts": [
          "Current costs, uses, and event availability are not confirmed."
        ],
        "canonicalClaim": "Current costs, uses, and event availability are not confirmed."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "texts": [
          "Confirm the item or unit offered on both sides."
        ],
        "canonicalClaim": "Confirm the item or unit offered on both sides."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "texts": [
          "Recheck grade, trait, mutation, and level separately."
        ],
        "canonicalClaim": "Recheck grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "texts": [
          "Use verified official destinations for current community context."
        ],
        "canonicalClaim": "Use verified official destinations for current community context."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "texts": [
          "Trading availability and live demand are volatile and not confirmed as permanent."
        ],
        "canonicalClaim": "Trading availability and live demand are volatile and not confirmed as permanent."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "texts": [
          "Compare unit identity and rarity."
        ],
        "canonicalClaim": "Compare unit identity and rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "texts": [
          "Review grade, trait, mutation, and level separately."
        ],
        "canonicalClaim": "Review grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "texts": [
          "Record the review date and source of any community estimate."
        ],
        "canonicalClaim": "Record the review date and source of any community estimate."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "texts": [
          "No verified live price dataset is supplied, so guaranteed values are not published."
        ],
        "canonicalClaim": "No verified live price dataset is supplied, so guaranteed values are not published."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "texts": [
          "List each unit on both sides."
        ],
        "canonicalClaim": "List each unit on both sides."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "texts": [
          "Compare rarity, grade, trait, mutation, and level."
        ],
        "canonicalClaim": "Compare rarity, grade, trait, mutation, and level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "texts": [
          "Note the source and date for any community estimate."
        ],
        "canonicalClaim": "Note the source and date for any community estimate."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "texts": [
          "Reject pressure to finish before verification."
        ],
        "canonicalClaim": "Reject pressure to finish before verification."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "texts": [
          "This page is a transparent worksheet; a numeric market formula is not confirmed."
        ],
        "canonicalClaim": "This page is a transparent worksheet; a numeric market formula is not confirmed."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "texts": [
          "Separate observed offers from completed exchanges."
        ],
        "canonicalClaim": "Separate observed offers from completed exchanges."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "texts": [
          "Record dates because demand can move."
        ],
        "canonicalClaim": "Record dates because demand can move."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "texts": [
          "Compare multiple verified community observations."
        ],
        "canonicalClaim": "Compare multiple verified community observations."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "texts": [
          "There is no verified live market feed or authoritative fixed price list in the supplied sources."
        ],
        "canonicalClaim": "There is no verified live market feed or authoritative fixed price list in the supplied sources."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "texts": [
          "The supplied research identifies Update 7."
        ],
        "canonicalClaim": "The supplied research identifies Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "texts": [
          "Update 7 adds Galactic rarity and six rebirth upgrade paths."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity and six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "texts": [
          "The article record was reviewed on October 5, 2026."
        ],
        "canonicalClaim": "The article record was reviewed on October 5, 2026."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "texts": [
          "A newer release is not verified by the supplied sources; check official destinations."
        ],
        "canonicalClaim": "A newer release is not verified by the supplied sources; check official destinations."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "texts": [
          "Use the official Roblox game page and verified Discord for announcements."
        ],
        "canonicalClaim": "Use the official Roblox game page and verified Discord for announcements."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "texts": [
          "Separate a developer announcement from community speculation."
        ],
        "canonicalClaim": "Separate a developer announcement from community speculation."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "texts": [
          "Record the date when information is checked."
        ],
        "canonicalClaim": "Record the date when information is checked."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "texts": [
          "No next-update date or feature list is verified by the supplied sources."
        ],
        "canonicalClaim": "No next-update date or feature list is verified by the supplied sources."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "texts": [
          "Update 7 adds Galactic rarity."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "texts": [
          "The update adds six rebirth upgrade paths."
        ],
        "canonicalClaim": "The update adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "texts": [
          "UPDATE7 is a documented reward code."
        ],
        "canonicalClaim": "UPDATE7 is a documented reward code."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "texts": [
          "Exact balance values beyond the supplied Update 7 source are not verified."
        ],
        "canonicalClaim": "Exact balance values beyond the supplied Update 7 source are not verified."
      },
      {
        "key": "anime-dice-update-7:supplied-galactic",
        "texts": [
          "Galactic rarity"
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:supplied-seven-units",
        "texts": [
          "7 new units"
        ],
        "canonicalClaim": "Update 7 adds seven units."
      },
      {
        "key": "anime-dice-update-7:supplied-six-rebirth-paths",
        "texts": [
          "6 rebirth upgrade paths"
        ],
        "canonicalClaim": "Update 7 adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:supplied-third-base-floor",
        "texts": [
          "a third base floor"
        ],
        "canonicalClaim": "Update 7 adds a third base floor."
      },
      {
        "key": "anime-dice-update-7:supplied-new-tower",
        "texts": [
          "a new Tower"
        ],
        "canonicalClaim": "Update 7 adds a new Tower."
      },
      {
        "key": "anime-dice-update-7:supplied-gamepass-trading",
        "texts": [
          "gamepass trading"
        ],
        "canonicalClaim": "Update 7 adds gamepass trading."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "texts": [
          "Check the official game page and verified Discord."
        ],
        "canonicalClaim": "Check the official game page and verified Discord."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "texts": [
          "Confirm start and end information in the current game."
        ],
        "canonicalClaim": "Confirm start and end information in the current game."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "texts": [
          "Treat community posts as unverified until matched to an official destination."
        ],
        "canonicalClaim": "Treat community posts as unverified until matched to an official destination."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "texts": [
          "No current event schedule is verified by the supplied sources."
        ],
        "canonicalClaim": "No current event schedule is verified by the supplied sources."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "texts": [
          "Look for a dated announcement in verified official destinations."
        ],
        "canonicalClaim": "Look for a dated announcement in verified official destinations."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "texts": [
          "Confirm timezone and date together."
        ],
        "canonicalClaim": "Confirm timezone and date together."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "texts": [
          "Ignore reposts that do not link to the original announcement."
        ],
        "canonicalClaim": "Ignore reposts that do not link to the original announcement."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "texts": [
          "No recurring admin event time is verified by the supplied sources."
        ],
        "canonicalClaim": "No recurring admin event time is verified by the supplied sources."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "texts": [
          "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
        ],
        "canonicalClaim": "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "texts": [
          "Check announcement context and timestamps."
        ],
        "canonicalClaim": "Check announcement context and timestamps."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "texts": [
          "Do not trust lookalike invites from unrelated pages."
        ],
        "canonicalClaim": "Do not trust lookalike invites from unrelated pages."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "texts": [
          "Channel names and current announcements can change after review."
        ],
        "canonicalClaim": "Channel names and current announcements can change after review."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "texts": [
          "Compare claims with the official game page."
        ],
        "canonicalClaim": "Compare claims with the official game page."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "texts": [
          "Look for a direct developer source."
        ],
        "canonicalClaim": "Look for a direct developer source."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "texts": [
          "Treat user posts as community discussion rather than confirmation."
        ],
        "canonicalClaim": "Treat user posts as community discussion rather than confirmation."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "texts": [
          "An official Anime Dice Reddit community is not verified by the supplied sources."
        ],
        "canonicalClaim": "An official Anime Dice Reddit community is not verified by the supplied sources."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "texts": [
          "Verify any board from an official developer destination."
        ],
        "canonicalClaim": "Verify any board from an official developer destination."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "texts": [
          "Check board ownership and update history."
        ],
        "canonicalClaim": "Check board ownership and update history."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "texts": [
          "Do not enter account details on a lookalike page."
        ],
        "canonicalClaim": "Do not enter account details on a lookalike page."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "texts": [
          "An official Anime Dice Trello board is not verified by the supplied sources."
        ],
        "canonicalClaim": "An official Anime Dice Trello board is not verified by the supplied sources."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "texts": [
          "The verified developer community is More & More Games."
        ],
        "canonicalClaim": "The verified developer community is More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "texts": [
          "The group chest may provide spins, gems, or rerolls."
        ],
        "canonicalClaim": "The group chest may provide spins, gems, or rerolls."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "texts": [
          "Join through the verified Roblox destination."
        ],
        "canonicalClaim": "Join through the verified Roblox destination."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "texts": [
          "Chest availability and exact rewards can change and should be checked in game."
        ],
        "canonicalClaim": "Chest availability and exact rewards can change and should be checked in game."
      }
    ]
  },
  "pt-br": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "texts": [
          "UPDATE7"
        ],
        "canonicalClaim": "UPDATE7 and UPDATE6 are documented codes."
      },
      {
        "key": "codes:update6",
        "texts": [
          "UPDATE6"
        ],
        "canonicalClaim": "UPDATE6 names Lucky Spins, Trait Rerolls, Tickets and Gems."
      },
      {
        "key": "codes:redeem-path",
        "texts": [
          "Shop"
        ],
        "canonicalClaim": "Redemption uses Shop."
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "texts": [
          "2026"
        ],
        "canonicalClaim": "Reviewed October 5, 2026."
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "texts": [
          "Roll gera personagens para comparação."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "texts": [
          "Equip Best ajuda a revisar a equipe atual."
        ],
        "canonicalClaim": "Mutations can affect unit evaluation."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "texts": [
          "Money e Luck são prioridades iniciais práticas."
        ],
        "canonicalClaim": "The official description confirms offline earnings."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "texts": [
          "O tempo necessário para progredir varia e não é garantido."
        ],
        "canonicalClaim": "Progress speed varies, so no guaranteed timeline is stated."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "texts": [
          "Proteja unidades úteis antes de vender."
        ],
        "canonicalClaim": "Money and Luck are strong early priorities."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "texts": [
          "Revise grade, trait e mutation separadamente."
        ],
        "canonicalClaim": "Roll Speed helps after the economy is stable."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "texts": [
          "Roll Speed é mais útil depois de estabilizar Money e Luck."
        ],
        "canonicalClaim": "Grade, trait, and mutation need separate checks."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "texts": [
          "Resultados raros e velocidade fixa de progresso não podem ser prometidos."
        ],
        "canonicalClaim": "Rare outcomes and a fixed progression pace cannot be promised."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "texts": [
          "Auto repete a rolagem sem clicar a cada vez."
        ],
        "canonicalClaim": "Hide affects the repeated roll presentation."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "texts": [
          "Hide remove a animação repetida de Roll."
        ],
        "canonicalClaim": "Rolls continue while that animation is hidden."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "texts": [
          "As rolagens continuam enquanto a animação está oculta."
        ],
        "canonicalClaim": "Keeper units should still be reviewed."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "texts": [
          "Hide não comprova uma opção universal para outras cenas."
        ],
        "canonicalClaim": "Hide is not evidence of a universal option for unrelated scenes."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "texts": [
          "O estande oferece “Edit auto sell settings!”."
        ],
        "canonicalClaim": "Grades, traits, and mutations can matter independently."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "texts": [
          "Equip Best deve ser usado antes de definir o limite."
        ],
        "canonicalClaim": "The threshold should stay below units you actively use."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "texts": [
          "Grade, trait e mutation podem tornar uma unidade útil."
        ],
        "canonicalClaim": "Recheck the setting as the team improves."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "texts": [
          "Mantenha unidades incertas até concluir a comparação."
        ],
        "canonicalClaim": "Keep an uncertain unit until its properties have been compared."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "texts": [
          "Nível é apenas uma parte da avaliação."
        ],
        "canonicalClaim": "Level is one part of unit evaluation."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "texts": [
          "Uma rolagem melhor pode substituir uma unidade inicial."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "texts": [
          "Grade, trait e mutation são sistemas separados."
        ],
        "canonicalClaim": "A stronger roll may replace an early keeper."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "texts": [
          "As fontes não confirmam um nível máximo universal."
        ],
        "canonicalClaim": "The supplied references do not establish one universal maximum level, so no number is invented."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "texts": [
          "Hide fica na interface de Roll."
        ],
        "canonicalClaim": "Hide covers the roll presentation."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "texts": [
          "A rolagem pode continuar sem a animação repetida."
        ],
        "canonicalClaim": "It does not stop the rolling process."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "texts": [
          "Outras cenas podem usar controles diferentes."
        ],
        "canonicalClaim": "Other scenes can have different controls."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "texts": [
          "Nenhuma fonte confirma um botão que pule todas as cenas."
        ],
        "canonicalClaim": "No supplied source confirms a setting that skips every intro, update, event, or story scene."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "texts": [
          "O grupo ligado ao jogo é More & More Games."
        ],
        "canonicalClaim": "The supplied guide says the chest may provide spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "texts": [
          "A referência diz que o baú pode oferecer spins."
        ],
        "canonicalClaim": "Gems or rerolls may also be available."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "texts": [
          "Gems ou rerolls também podem aparecer no baú."
        ],
        "canonicalClaim": "Exact availability should be checked in game."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "texts": [
          "Confira o destino Roblox e evite grupos imitadores."
        ],
        "canonicalClaim": "Avoid lookalike communities and confirm the Roblox destination before joining."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "texts": [
          "Uma classificação depende da versão do jogo."
        ],
        "canonicalClaim": "A useful ranking depends on the current game version."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "texts": [
          "Grade, trait, mutation e nível mudam a avaliação."
        ],
        "canonicalClaim": "Grade, trait, mutation, and level are separate considerations."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "texts": [
          "Equip Best é um ponto de partida, não um ranking permanente."
        ],
        "canonicalClaim": "Equip Best is a starting check rather than a permanent ranking."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "texts": [
          "Não há ranking universal confirmado nas fontes fornecidas."
        ],
        "canonicalClaim": "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "texts": [
          "Personagens são obtidos pelo ciclo de Roll."
        ],
        "canonicalClaim": "Characters are obtained through the roll loop."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "texts": [
          "Unidades mantidas merecem recursos antes das temporárias."
        ],
        "canonicalClaim": "Keeper units deserve resources before temporary results."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "texts": [
          "A descrição oficial confirma ganhos offline."
        ],
        "canonicalClaim": "Offline earnings are identified by the official game description."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "texts": [
          "Disponibilidade e balanceamento podem mudar."
        ],
        "canonicalClaim": "Unit availability and balance can change; confirm the current roster in game."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "texts": [
          "Trait é uma propriedade separada da unidade."
        ],
        "canonicalClaim": "Traits are a separate unit property."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "texts": [
          "UPDATE6 documenta Trait Rerolls como recompensa."
        ],
        "canonicalClaim": "Trait Rerolls are named by the confirmed UPDATE6 reward."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "texts": [
          "O trait deve ser lido junto da unidade que o recebeu."
        ],
        "canonicalClaim": "A trait should be evaluated with the unit it belongs to."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "texts": [
          "Efeitos e rankings completos não estão confirmados para toda versão."
        ],
        "canonicalClaim": "Exact trait effects and rankings are not confirmed for every current version."
      },
      {
        "key": "anime-dice-traits:supplied-eternal",
        "texts": [
          "Eternal",
          "27x",
          "Não informado no módulo fornecido"
        ],
        "canonicalClaim": "Eternal shows 27x Income, Damage, and Health; its chance is not stated in the supplied module."
      },
      {
        "key": "anime-dice-traits:supplied-transcendent",
        "texts": [
          "Transcendent",
          "15x",
          "0.006%"
        ],
        "canonicalClaim": "Transcendent shows 15x and a displayed 0.006% chance."
      },
      {
        "key": "anime-dice-traits:supplied-monarch",
        "texts": [
          "Monarch",
          "8x",
          "0.025%"
        ],
        "canonicalClaim": "Monarch shows 8x and a displayed 0.025% chance."
      },
      {
        "key": "anime-dice-traits:supplied-shogun",
        "texts": [
          "Shogun",
          "5x",
          "0.12%"
        ],
        "canonicalClaim": "Shogun shows 5x and a displayed 0.12% chance."
      },
      {
        "key": "anime-dice-traits:supplied-samurai",
        "texts": [
          "Samurai",
          "3x",
          "0.5%"
        ],
        "canonicalClaim": "Samurai shows 3x and a displayed 0.5% chance."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "texts": [
          "Mutation faz parte do ciclo documentado de personagens."
        ],
        "canonicalClaim": "Mutations are part of the documented character loop."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "texts": [
          "Mutation, grade e trait são rótulos diferentes."
        ],
        "canonicalClaim": "Mutation, grade, and trait are separate labels."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "texts": [
          "Uma unidade com mutation deve ser revisada antes da venda."
        ],
        "canonicalClaim": "A mutated result should be reviewed before selling."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "texts": [
          "Odds e lista completa de mutations não foram confirmadas."
        ],
        "canonicalClaim": "Exact mutation odds and a complete live mutation list are not confirmed."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "texts": [
          "Rarity descreve o resultado de uma rolagem."
        ],
        "canonicalClaim": "Rarity helps describe a roll result."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "texts": [
          "Ela não substitui grade, trait, mutation ou nível."
        ],
        "canonicalClaim": "Rarity does not replace grade, trait, mutation, or level checks."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "texts": [
          "Luck pertence à progressão e não é uma raridade da unidade."
        ],
        "canonicalClaim": "Luck belongs to progression rather than being a unit rarity."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "texts": [
          "As probabilidades exatas de cada rarity não estão confirmadas."
        ],
        "canonicalClaim": "Exact roll probabilities are not confirmed by the supplied references."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "texts": [
          "Grade é separado de trait e mutation."
        ],
        "canonicalClaim": "Grades are separate from traits and mutations."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "texts": [
          "O grade deve ser comparado com a unidade base."
        ],
        "canonicalClaim": "A grade should be read alongside the underlying unit."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "texts": [
          "Resultados incertos devem ser mantidos até a revisão."
        ],
        "canonicalClaim": "Keep uncertain results until they have been compared."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "texts": [
          "A tabela completa e os modificadores atuais não estão confirmados."
        ],
        "canonicalClaim": "A complete current grade table and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "texts": [
          "Recursos de nível rendem mais em unidades mantidas."
        ],
        "canonicalClaim": "Leveling resources are best focused on keeper units."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "texts": [
          "Nível continua separado de grade, trait e mutation."
        ],
        "canonicalClaim": "Level, grade, trait, and mutation remain separate."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "texts": [
          "Uma nova rolagem pode mudar a prioridade de investimento."
        ],
        "canonicalClaim": "A stronger roll can change which unit deserves investment."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "texts": [
          "As fontes não estabelecem um nível máximo universal."
        ],
        "canonicalClaim": "One universal maximum level is not confirmed by the supplied references."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "texts": [
          "Luck é uma prioridade inicial prática."
        ],
        "canonicalClaim": "Luck is a practical early upgrade priority."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "texts": [
          "Money e Luck podem vir antes de Roll Speed."
        ],
        "canonicalClaim": "Money and Luck can be improved before Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "texts": [
          "Luck melhora o sistema, mas não garante uma unidade específica."
        ],
        "canonicalClaim": "Luck does not guarantee a particular roll."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "texts": [
          "As probabilidades em cada valor de Luck não estão confirmadas."
        ],
        "canonicalClaim": "Exact probabilities at each Luck value are not confirmed."
      },
      {
        "key": "anime-dice-luck:supplied-normal-die",
        "texts": [
          "Normal",
          "Common",
          "$1",
          "2x"
        ],
        "canonicalClaim": "Normal is Common, costs $1, and shows 2x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-storm-die",
        "texts": [
          "Storm",
          "Epic",
          "$200 million",
          "400x"
        ],
        "canonicalClaim": "Storm is Epic, costs $200 million, and shows 400x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-light-die",
        "texts": [
          "Light",
          "Legendary",
          "$12 billion",
          "1,500x"
        ],
        "canonicalClaim": "Light is Legendary, costs $12 billion, and shows 1,500x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-prismatic-die",
        "texts": [
          "Prismatic",
          "Exotic",
          "$1 quintillion",
          "1,000,000x"
        ],
        "canonicalClaim": "Prismatic is Exotic, costs $1 quintillion, and shows 1,000,000x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-radiant-die",
        "texts": [
          "Radiant",
          "Heavenly",
          "$100 octillion",
          "5,000,000,000x"
        ],
        "canonicalClaim": "Radiant is Heavenly, costs $100 octillion, and shows 5,000,000,000x Luck."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "texts": [
          "Luck aparece como prioridade no guia de progressão."
        ],
        "canonicalClaim": "Luck is an upgrade priority in the supplied progression guide."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "texts": [
          "Rebirth pode afetar a progressão de longo prazo."
        ],
        "canonicalClaim": "Rebirth and other systems can affect long-term progression."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "texts": [
          "O painel atual mostra os passos realmente disponíveis."
        ],
        "canonicalClaim": "Current upgrade panels are the authority for available steps."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "texts": [
          "Não há valor máximo permanente de Luck confirmado."
        ],
        "canonicalClaim": "A permanent universal maximum Luck value is not confirmed."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "texts": [
          "UPDATE6 inclui Gems nas recompensas documentadas."
        ],
        "canonicalClaim": "Gems are included in the documented UPDATE6 rewards."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "texts": [
          "O baú do grupo pode fornecer Gems segundo o guia."
        ],
        "canonicalClaim": "The group chest may provide gems according to the supplied guide."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "texts": [
          "Gastos devem apoiar uma meta definida de progressão."
        ],
        "canonicalClaim": "Resources should be reserved for deliberate progression choices."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "texts": [
          "Preços, ofertas e melhor compra podem mudar e não estão confirmados."
        ],
        "canonicalClaim": "Current prices, offers, and best purchases are not confirmed and can change."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "texts": [
          "Jackpot Roll é tratado aqui como um tópico de progresso que deve ser verificado no jogo."
        ],
        "canonicalClaim": "Jackpot Roll is treated as a progression search intent."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "texts": [
          "Luck deve ser avaliada separadamente do acesso ao recurso."
        ],
        "canonicalClaim": "Luck and normal rolling remain distinct considerations."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "texts": [
          "A interface atual é a autoridade para ativação e custo."
        ],
        "canonicalClaim": "The current interface should be checked before spending resources."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "texts": [
          "Requisitos, recompensas e odds exatas não foram confirmados."
        ],
        "canonicalClaim": "Activation requirements, rewards, and exact odds are not confirmed."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "texts": [
          "UPDATE6 cita Lucky Spins como recompensa."
        ],
        "canonicalClaim": "Lucky Spins are named in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "texts": [
          "O baú do grupo também pode fornecer spins."
        ],
        "canonicalClaim": "The group chest may provide spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "texts": [
          "O resultado deve ser revisado antes de qualquer venda."
        ],
        "canonicalClaim": "A spin result should be reviewed before selling units."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "texts": [
          "Resultados, odds e disponibilidade atual não estão confirmados."
        ],
        "canonicalClaim": "Exact outcomes, odds, and current availability are not confirmed."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "texts": [
          "Rebirth pertence à progressão de longo prazo."
        ],
        "canonicalClaim": "Rebirth belongs to long-term progression."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "texts": [
          "Update 7 adicionou seis caminhos de upgrade de rebirth."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "texts": [
          "Os efeitos do reset devem ser lidos no painel atual."
        ],
        "canonicalClaim": "A reset decision should be checked against the current interface."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "texts": [
          "Custos e efeitos de cada etapa não foram confirmados aqui."
        ],
        "canonicalClaim": "Exact costs and reset effects for every step are not confirmed here."
      },
      {
        "key": "anime-dice-rebirth:supplied-rebuild-ready",
        "texts": [
          "Espere até que as unidades equipadas consigam reconstruir a renda após o reset."
        ],
        "canonicalClaim": "Wait until equipped units can rebuild income after reset."
      },
      {
        "key": "anime-dice-rebirth:supplied-cash-resets",
        "texts": [
          "Gaste o dinheiro restante antes do rebirth, pois o saldo atual é reiniciado."
        ],
        "canonicalClaim": "Spend remaining cash before rebirth because current cash resets."
      },
      {
        "key": "anime-dice-rebirth:supplied-units-remain",
        "texts": [
          "Unidades coletadas, grades e traits permanecem."
        ],
        "canonicalClaim": "Collected units, grades, and traits remain."
      },
      {
        "key": "anime-dice-rebirth:supplied-upgrade-point",
        "texts": [
          "Receba um Rebirth Upgrade Point por rebirth no Update 7."
        ],
        "canonicalClaim": "Update 7 gives one Rebirth Upgrade Point per rebirth."
      },
      {
        "key": "anime-dice-rebirth:supplied-six-paths",
        "texts": [
          "Distribua pontos nos seis caminhos de Rebirth Upgrade, reinicie Auto Roll e reconstrua a renda."
        ],
        "canonicalClaim": "Update 7 has six Rebirth Upgrade paths; restart Auto Roll and rebuild income after assigning points."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "texts": [
          "Update 7 documenta seis caminhos de upgrade."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "texts": [
          "Quantidade de caminhos não significa número máximo de rebirths."
        ],
        "canonicalClaim": "A path count is not the same as a universal rebirth cap."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "texts": [
          "O painel atual deve ser usado para verificar limites."
        ],
        "canonicalClaim": "The current game panel should be used for limits."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "texts": [
          "Não há máximo permanente de rebirth confirmado."
        ],
        "canonicalClaim": "A permanent maximum rebirth number is not confirmed."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "texts": [
          "A loja deve ser conferida dentro da versão atual."
        ],
        "canonicalClaim": "Quest progress and shop choices should be checked in game."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "texts": [
          "Gems, Tickets e spins são recursos diferentes."
        ],
        "canonicalClaim": "Gems, Tickets, and spins are separate named resources."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "texts": [
          "A compra deve apoiar o plano atual da equipe."
        ],
        "canonicalClaim": "Prioritize purchases that support the current team plan."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "texts": [
          "Estoque, preços e horário de atualização não estão confirmados."
        ],
        "canonicalClaim": "Live inventory, prices, and refresh timing are not confirmed."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "texts": [
          "A equipe ativa deve ser revisada antes da entrada."
        ],
        "canonicalClaim": "Review the active team before a run."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "texts": [
          "Gear, Potions e Tickets são recursos de preparação distintos."
        ],
        "canonicalClaim": "Gear, potions, and Tickets are separate preparation resources."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "texts": [
          "As fontes fornecidas tratam Tower como progressão."
        ],
        "canonicalClaim": "Tower details were reviewed with the supplied progression sources."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "texts": [
          "Andares, inimigos e rotação de recompensas podem mudar."
        ],
        "canonicalClaim": "Current floors, enemies, and reward rotations are not confirmed."
      },
      {
        "key": "anime-dice-tower:supplied-portal",
        "texts": [
          "Entre no portal Towers no lobby central e escolha um desafio como Dragon Tower."
        ],
        "canonicalClaim": "The Towers portal is in the central lobby."
      },
      {
        "key": "anime-dice-tower:supplied-equip-best",
        "texts": [
          "Use Equip Best antes de iniciar a luta."
        ],
        "canonicalClaim": "Use Equip Best before starting the fight."
      },
      {
        "key": "anime-dice-tower:supplied-auto-hide",
        "texts": [
          "Auto e Hide mantêm os andares liberados em andamento enquanto as recompensas são coletadas."
        ],
        "canonicalClaim": "Auto and Hide can keep cleared floors moving while rewards are collected."
      },
      {
        "key": "anime-dice-tower:supplied-tower-gear",
        "texts": [
          "Dragon, Cursed, Pirate, Hidden Leaf e Slayer Towers têm Gear específico de cada Tower."
        ],
        "canonicalClaim": "Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers have tower-specific Gear."
      },
      {
        "key": "anime-dice-tower:supplied-stuck-upgrades",
        "texts": [
          "Melhore grades, traits, Damage e Health quando a equipe não superar o próximo andar."
        ],
        "canonicalClaim": "Improve grades, traits, Damage, and Health when the team cannot clear the next floor."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "texts": [
          "Gear está ligado à preparação de Tower nas fontes."
        ],
        "canonicalClaim": "Gear belongs to Tower preparation in the supplied sources."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "texts": [
          "Cada item deve ser comparado com a unidade e a meta."
        ],
        "canonicalClaim": "Compare a gear item with the unit and goal it supports."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "texts": [
          "A origem de obtenção deve permanecer ligada à fonte revisada."
        ],
        "canonicalClaim": "Keep acquisition notes tied to reviewed sources."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "texts": [
          "Lista completa e modificadores ao vivo não estão confirmados."
        ],
        "canonicalClaim": "A complete live gear list and exact modifiers are not confirmed."
      },
      {
        "key": "anime-dice-gear:supplied-angels-halo",
        "texts": [
          "Angel's Halo",
          "+30% Luck, +5 Walk Speed; 0.02% from Dragon Tower andares 90+"
        ],
        "canonicalClaim": "Angel's Halo gives +30% Luck and +5 Walk Speed, with a supplied 0.02% source from Dragon Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-sakunas-sash",
        "texts": [
          "Sakuna's Sash",
          "2x Damage, +30% Luck, +30% Gems; 0.02% from Cursed Tower andares 90+"
        ],
        "canonicalClaim": "Sakuna's Sash gives 2x Damage, +30% Luck, and +30% Gems, with a supplied 0.02% source from Cursed Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-enols-drums",
        "texts": [
          "Enol's Drums",
          "+40% Luck, 1.5x Cash; 0.02% from Pirate Tower andares 90+"
        ],
        "canonicalClaim": "Enol's Drums gives +40% Luck and 1.5x Cash, with a supplied 0.02% source from Pirate Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-obitas-mask",
        "texts": [
          "Obita's Mask",
          "+40% Luck, +30% Gems; 0.02% from Hidden Leaf Tower andares 90+"
        ],
        "canonicalClaim": "Obita's Mask gives +40% Luck and +30% Gems, with a supplied 0.02% source from Hidden Leaf Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-mazuns-coat",
        "texts": [
          "Mazun's Coat",
          "+50% Luck, 2x Cash; 0.02% from Slayer Tower andares 90+"
        ],
        "canonicalClaim": "Mazun's Coat gives +50% Luck and 2x Cash, with a supplied 0.02% source from Slayer Tower Floors 90+."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "texts": [
          "Potions são tratadas como preparação para Tower."
        ],
        "canonicalClaim": "Potions are treated as a Tower preparation resource."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "texts": [
          "O texto atual do item deve ser lido antes do uso."
        ],
        "canonicalClaim": "Check the current item text before use."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "texts": [
          "Itens limitados devem apoiar uma meta definida."
        ],
        "canonicalClaim": "Save limited items for a defined progression goal."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "texts": [
          "Inventário, duração e efeitos exatos podem mudar."
        ],
        "canonicalClaim": "Live potion inventory, duration, and exact effects are not confirmed."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "texts": [
          "UPDATE6 inclui Tickets na recompensa documentada."
        ],
        "canonicalClaim": "Tickets are included in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "texts": [
          "O uso deve ser confirmado na interface atual."
        ],
        "canonicalClaim": "Ticket use should be checked in the current interface."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "texts": [
          "Nenhuma fonte sustenta uma oferta ilimitada."
        ],
        "canonicalClaim": "Reviewed sources do not support an unlimited supply claim."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "texts": [
          "Custos, usos e disponibilidade em eventos não estão confirmados."
        ],
        "canonicalClaim": "Current costs, uses, and event availability are not confirmed."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "texts": [
          "Confirme cada unidade ou item oferecido."
        ],
        "canonicalClaim": "Confirm the item or unit offered on both sides."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "texts": [
          "Compare grade, trait, mutation e nível separadamente."
        ],
        "canonicalClaim": "Recheck grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "texts": [
          "Use destinos verificados para contexto atual da comunidade."
        ],
        "canonicalClaim": "Use verified official destinations for current community context."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "texts": [
          "Disponibilidade de trading e demanda não são garantidas."
        ],
        "canonicalClaim": "Trading availability and live demand are volatile and not confirmed as permanent."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "texts": [
          "Identidade e rarity devem ser registradas."
        ],
        "canonicalClaim": "Compare unit identity and rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "texts": [
          "Grade, trait, mutation e nível alteram a comparação."
        ],
        "canonicalClaim": "Review grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "texts": [
          "Toda estimativa precisa de fonte e data."
        ],
        "canonicalClaim": "Record the review date and source of any community estimate."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "texts": [
          "Não há conjunto de preços ao vivo verificado nas fontes."
        ],
        "canonicalClaim": "No verified live price dataset is supplied, so guaranteed values are not published."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "texts": [
          "Liste todas as unidades de cada lado."
        ],
        "canonicalClaim": "List each unit on both sides."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "texts": [
          "Compare rarity, grade, trait, mutation e nível."
        ],
        "canonicalClaim": "Compare rarity, grade, trait, mutation, and level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "texts": [
          "Registre fonte e data de qualquer estimativa comunitária."
        ],
        "canonicalClaim": "Note the source and date for any community estimate."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "texts": [
          "Rejeite pressão para concluir a troca antes da verificação."
        ],
        "canonicalClaim": "Reject pressure to finish before verification."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "texts": [
          "A página não afirma uma fórmula numérica de mercado."
        ],
        "canonicalClaim": "This page is a transparent worksheet; a numeric market formula is not confirmed."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "texts": [
          "Ofertas observadas não são iguais a trocas concluídas."
        ],
        "canonicalClaim": "Separate observed offers from completed exchanges."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "texts": [
          "A data é necessária porque a demanda muda."
        ],
        "canonicalClaim": "Record dates because demand can move."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "texts": [
          "Compare várias observações comunitárias verificáveis."
        ],
        "canonicalClaim": "Compare multiple verified community observations."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "texts": [
          "Não existe feed ao vivo ou tabela oficial fixa nas fontes."
        ],
        "canonicalClaim": "There is no verified live market feed or authoritative fixed price list in the supplied sources."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "texts": [
          "A pesquisa fornecida identifica Update 7."
        ],
        "canonicalClaim": "The supplied research identifies Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "texts": [
          "Update 7 adiciona rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity and six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "texts": [
          "A atualização também adiciona seis caminhos de rebirth."
        ],
        "canonicalClaim": "The article record was reviewed on October 5, 2026."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "texts": [
          "Uma versão posterior não foi confirmada pelas fontes fornecidas."
        ],
        "canonicalClaim": "A newer release is not verified by the supplied sources; check official destinations."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "texts": [
          "Página oficial e Discord verificado são os destinos de anúncio."
        ],
        "canonicalClaim": "Use the official Roblox game page and verified Discord for announcements."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "texts": [
          "Rumor comunitário não equivale a anúncio do desenvolvedor."
        ],
        "canonicalClaim": "Separate a developer announcement from community speculation."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "texts": [
          "Toda verificação deve registrar uma data."
        ],
        "canonicalClaim": "Record the date when information is checked."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "texts": [
          "Nenhuma data ou lista de recursos futura foi confirmada."
        ],
        "canonicalClaim": "No next-update date or feature list is verified by the supplied sources."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "texts": [
          "Update 7 adiciona rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "texts": [
          "Foram adicionados seis caminhos de upgrade de rebirth."
        ],
        "canonicalClaim": "The update adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "texts": [
          "UPDATE7 é um código de recompensa documentado."
        ],
        "canonicalClaim": "UPDATE7 is a documented reward code."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "texts": [
          "Valores de balanceamento além das fontes não são afirmados."
        ],
        "canonicalClaim": "Exact balance values beyond the supplied Update 7 source are not verified."
      },
      {
        "key": "anime-dice-update-7:supplied-galactic",
        "texts": [
          "Galactic rarity"
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:supplied-seven-units",
        "texts": [
          "7 novas unidades"
        ],
        "canonicalClaim": "Update 7 adds seven units."
      },
      {
        "key": "anime-dice-update-7:supplied-six-rebirth-paths",
        "texts": [
          "6 caminhos de upgrade de rebirth"
        ],
        "canonicalClaim": "Update 7 adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:supplied-third-base-floor",
        "texts": [
          "um terceiro andar da base"
        ],
        "canonicalClaim": "Update 7 adds a third base floor."
      },
      {
        "key": "anime-dice-update-7:supplied-new-tower",
        "texts": [
          "uma nova Tower"
        ],
        "canonicalClaim": "Update 7 adds a new Tower."
      },
      {
        "key": "anime-dice-update-7:supplied-gamepass-trading",
        "texts": [
          "troca de gamepasses"
        ],
        "canonicalClaim": "Update 7 adds gamepass trading."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "texts": [
          "Confira a página oficial e o Discord verificado."
        ],
        "canonicalClaim": "Check the official game page and verified Discord."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "texts": [
          "Data inicial e final devem aparecer no jogo ou anúncio original."
        ],
        "canonicalClaim": "Confirm start and end information in the current game."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "texts": [
          "Post comunitário precisa corresponder a uma fonte oficial."
        ],
        "canonicalClaim": "Treat community posts as unverified until matched to an official destination."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "texts": [
          "Nenhum calendário de evento atual foi confirmado."
        ],
        "canonicalClaim": "No current event schedule is verified by the supplied sources."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "texts": [
          "Procure anúncio datado em destino oficial verificado."
        ],
        "canonicalClaim": "Look for a dated announcement in verified official destinations."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "texts": [
          "Data e fuso horário devem ser lidos juntos."
        ],
        "canonicalClaim": "Confirm timezone and date together."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "texts": [
          "Repost sem link original não confirma o horário."
        ],
        "canonicalClaim": "Ignore reposts that do not link to the original announcement."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "texts": [
          "Nenhum horário recorrente foi confirmado pelas fontes."
        ],
        "canonicalClaim": "No recurring admin event time is verified by the supplied sources."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "texts": [
          "O catálogo aponta para discord.com/invite/ag5MCCu5aQ."
        ],
        "canonicalClaim": "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "texts": [
          "Anúncios podem mudar e devem ser lidos no servidor atual."
        ],
        "canonicalClaim": "Check announcement context and timestamps."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "texts": [
          "Nunca compartilhe senha ou token com supostos moderadores."
        ],
        "canonicalClaim": "Do not trust lookalike invites from unrelated pages."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "texts": [
          "Cargos, canais e calendário atual podem mudar."
        ],
        "canonicalClaim": "Channel names and current announcements can change after review."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "texts": [
          "Nenhum subreddit oficial foi confirmado nas fontes."
        ],
        "canonicalClaim": "Compare claims with the official game page."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "texts": [
          "Posts podem ajudar a descobrir perguntas, não provar fatos."
        ],
        "canonicalClaim": "Look for a direct developer source."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "texts": [
          "Afirmações devem ser comparadas com destinos oficiais."
        ],
        "canonicalClaim": "Treat user posts as community discussion rather than confirmation."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "texts": [
          "Popularidade ou votos não transformam um post em anúncio oficial."
        ],
        "canonicalClaim": "An official Anime Dice Reddit community is not verified by the supplied sources."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "texts": [
          "Nenhum Trello oficial foi confirmado nas fontes."
        ],
        "canonicalClaim": "Verify any board from an official developer destination."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "texts": [
          "Confira proprietário e links vindos de canais oficiais."
        ],
        "canonicalClaim": "Check board ownership and update history."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "texts": [
          "Quadros de fãs podem estar incompletos ou desatualizados."
        ],
        "canonicalClaim": "Do not enter account details on a lookalike page."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "texts": [
          "Não apresentamos um link de Trello não verificado."
        ],
        "canonicalClaim": "An official Anime Dice Trello board is not verified by the supplied sources."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "texts": [
          "A comunidade Roblox verificada é More & More Games."
        ],
        "canonicalClaim": "The verified developer community is More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "texts": [
          "O guia relata possíveis spins no baú do grupo."
        ],
        "canonicalClaim": "The group chest may provide spins, gems, or rerolls."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "texts": [
          "Gems ou rerolls também podem aparecer."
        ],
        "canonicalClaim": "Join through the verified Roblox destination."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "texts": [
          "Recompensas e disponibilidade devem ser confirmadas no jogo."
        ],
        "canonicalClaim": "Chest availability and exact rewards can change and should be checked in game."
      }
    ]
  },
  "es": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "texts": [
          "UPDATE7"
        ],
        "canonicalClaim": "UPDATE7 and UPDATE6 are documented codes."
      },
      {
        "key": "codes:update6",
        "texts": [
          "UPDATE6"
        ],
        "canonicalClaim": "UPDATE6 names Lucky Spins, Trait Rerolls, Tickets and Gems."
      },
      {
        "key": "codes:redeem-path",
        "texts": [
          "Shop"
        ],
        "canonicalClaim": "Redemption uses Shop."
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "texts": [
          "2026"
        ],
        "canonicalClaim": "Reviewed October 5, 2026."
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "texts": [
          "Roll obtiene personajes para compararlos."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "texts": [
          "Equip Best ayuda a revisar el equipo actual."
        ],
        "canonicalClaim": "Mutations can affect unit evaluation."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "texts": [
          "Money y Luck son prioridades iniciales prácticas."
        ],
        "canonicalClaim": "The official description confirms offline earnings."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "texts": [
          "El tiempo de progreso varía y no está garantizado."
        ],
        "canonicalClaim": "Progress speed varies, so no guaranteed timeline is stated."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "texts": [
          "Protege unidades útiles antes de vender."
        ],
        "canonicalClaim": "Money and Luck are strong early priorities."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "texts": [
          "Revisa grade, trait y mutation por separado."
        ],
        "canonicalClaim": "Roll Speed helps after the economy is stable."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "texts": [
          "Roll Speed resulta más útil tras estabilizar Money y Luck."
        ],
        "canonicalClaim": "Grade, trait, and mutation need separate checks."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "texts": [
          "No se prometen resultados raros ni una velocidad fija."
        ],
        "canonicalClaim": "Rare outcomes and a fixed progression pace cannot be promised."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "texts": [
          "Auto repite las tiradas sin pulsar cada vez."
        ],
        "canonicalClaim": "Hide affects the repeated roll presentation."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "texts": [
          "Hide oculta la animación repetida de Roll."
        ],
        "canonicalClaim": "Rolls continue while that animation is hidden."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "texts": [
          "Las tiradas continúan con la animación oculta."
        ],
        "canonicalClaim": "Keeper units should still be reviewed."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "texts": [
          "Hide no confirma una opción universal para otras escenas."
        ],
        "canonicalClaim": "Hide is not evidence of a universal option for unrelated scenes."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "texts": [
          "El puesto ofrece “Edit auto sell settings!”."
        ],
        "canonicalClaim": "Grades, traits, and mutations can matter independently."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "texts": [
          "Usa Equip Best antes de fijar el umbral."
        ],
        "canonicalClaim": "The threshold should stay below units you actively use."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "texts": [
          "Grade, trait y mutation pueden cambiar la utilidad."
        ],
        "canonicalClaim": "Recheck the setting as the team improves."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "texts": [
          "Conserva unidades dudosas hasta compararlas."
        ],
        "canonicalClaim": "Keep an uncertain unit until its properties have been compared."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "texts": [
          "El nivel es una parte de la evaluación."
        ],
        "canonicalClaim": "Level is one part of unit evaluation."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "texts": [
          "Una tirada mejor puede reemplazar una unidad inicial."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "texts": [
          "Grade, trait y mutation son sistemas separados."
        ],
        "canonicalClaim": "A stronger roll may replace an early keeper."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "texts": [
          "Las fuentes no confirman un nivel máximo universal."
        ],
        "canonicalClaim": "The supplied references do not establish one universal maximum level, so no number is invented."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "texts": [
          "Hide está en la interfaz de Roll."
        ],
        "canonicalClaim": "Hide covers the roll presentation."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "texts": [
          "La tirada sigue sin la animación repetida."
        ],
        "canonicalClaim": "It does not stop the rolling process."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "texts": [
          "Otras escenas pueden tener controles distintos."
        ],
        "canonicalClaim": "Other scenes can have different controls."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "texts": [
          "No hay fuente que confirme un botón para omitir todas las escenas."
        ],
        "canonicalClaim": "No supplied source confirms a setting that skips every intro, update, event, or story scene."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "texts": [
          "El grupo vinculado es More & More Games."
        ],
        "canonicalClaim": "The supplied guide says the chest may provide spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "texts": [
          "La referencia indica que el cofre puede dar spins."
        ],
        "canonicalClaim": "Gems or rerolls may also be available."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "texts": [
          "También puede ofrecer Gems o rerolls."
        ],
        "canonicalClaim": "Exact availability should be checked in game."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "texts": [
          "Verifica el destino de Roblox y evita imitaciones."
        ],
        "canonicalClaim": "Avoid lookalike communities and confirm the Roblox destination before joining."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "texts": [
          "El ranking depende de la versión del juego."
        ],
        "canonicalClaim": "A useful ranking depends on the current game version."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "texts": [
          "Grade, trait, mutation y nivel cambian la evaluación."
        ],
        "canonicalClaim": "Grade, trait, mutation, and level are separate considerations."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "texts": [
          "Equip Best es un inicio, no un ranking permanente."
        ],
        "canonicalClaim": "Equip Best is a starting check rather than a permanent ranking."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "texts": [
          "No existe un ranking universal confirmado."
        ],
        "canonicalClaim": "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "texts": [
          "Los personajes llegan mediante el ciclo de Roll."
        ],
        "canonicalClaim": "Characters are obtained through the roll loop."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "texts": [
          "Las unidades permanentes merecen recursos antes que las temporales."
        ],
        "canonicalClaim": "Keeper units deserve resources before temporary results."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "texts": [
          "La descripción oficial confirma ganancias offline."
        ],
        "canonicalClaim": "Offline earnings are identified by the official game description."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "texts": [
          "Disponibilidad y balance pueden cambiar."
        ],
        "canonicalClaim": "Unit availability and balance can change; confirm the current roster in game."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "texts": [
          "Trait es una propiedad separada."
        ],
        "canonicalClaim": "Traits are a separate unit property."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "texts": [
          "UPDATE6 documenta Trait Rerolls como recompensa."
        ],
        "canonicalClaim": "Trait Rerolls are named by the confirmed UPDATE6 reward."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "texts": [
          "El trait debe leerse junto a su unidad."
        ],
        "canonicalClaim": "A trait should be evaluated with the unit it belongs to."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "texts": [
          "No están confirmados todos los efectos y rankings actuales."
        ],
        "canonicalClaim": "Exact trait effects and rankings are not confirmed for every current version."
      },
      {
        "key": "anime-dice-traits:supplied-eternal",
        "texts": [
          "Eternal",
          "27x",
          "No indicado en el módulo aportado"
        ],
        "canonicalClaim": "Eternal shows 27x Income, Damage, and Health; its chance is not stated in the supplied module."
      },
      {
        "key": "anime-dice-traits:supplied-transcendent",
        "texts": [
          "Transcendent",
          "15x",
          "0.006%"
        ],
        "canonicalClaim": "Transcendent shows 15x and a displayed 0.006% chance."
      },
      {
        "key": "anime-dice-traits:supplied-monarch",
        "texts": [
          "Monarch",
          "8x",
          "0.025%"
        ],
        "canonicalClaim": "Monarch shows 8x and a displayed 0.025% chance."
      },
      {
        "key": "anime-dice-traits:supplied-shogun",
        "texts": [
          "Shogun",
          "5x",
          "0.12%"
        ],
        "canonicalClaim": "Shogun shows 5x and a displayed 0.12% chance."
      },
      {
        "key": "anime-dice-traits:supplied-samurai",
        "texts": [
          "Samurai",
          "3x",
          "0.5%"
        ],
        "canonicalClaim": "Samurai shows 3x and a displayed 0.5% chance."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "texts": [
          "Mutation forma parte del ciclo documentado."
        ],
        "canonicalClaim": "Mutations are part of the documented character loop."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "texts": [
          "Mutation, grade y trait son etiquetas distintas."
        ],
        "canonicalClaim": "Mutation, grade, and trait are separate labels."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "texts": [
          "Revisa una unidad con mutation antes de venderla."
        ],
        "canonicalClaim": "A mutated result should be reviewed before selling."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "texts": [
          "No están confirmadas las probabilidades ni la lista completa."
        ],
        "canonicalClaim": "Exact mutation odds and a complete live mutation list are not confirmed."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "texts": [
          "Rarity describe el resultado de una tirada."
        ],
        "canonicalClaim": "Rarity helps describe a roll result."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "texts": [
          "No sustituye grade, trait, mutation o nivel."
        ],
        "canonicalClaim": "Rarity does not replace grade, trait, mutation, or level checks."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "texts": [
          "Luck pertenece a la progresión, no a la rarity de una unidad."
        ],
        "canonicalClaim": "Luck belongs to progression rather than being a unit rarity."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "texts": [
          "Las probabilidades exactas no están confirmadas."
        ],
        "canonicalClaim": "Exact roll probabilities are not confirmed by the supplied references."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "texts": [
          "Grade es distinto de trait y mutation."
        ],
        "canonicalClaim": "Grades are separate from traits and mutations."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "texts": [
          "Compáralo con la unidad base."
        ],
        "canonicalClaim": "A grade should be read alongside the underlying unit."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "texts": [
          "Conserva resultados dudosos hasta revisarlos."
        ],
        "canonicalClaim": "Keep uncertain results until they have been compared."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "texts": [
          "La tabla completa y modificadores actuales no están confirmados."
        ],
        "canonicalClaim": "A complete current grade table and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "texts": [
          "Los recursos de nivel rinden mejor en unidades permanentes."
        ],
        "canonicalClaim": "Leveling resources are best focused on keeper units."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "texts": [
          "Nivel sigue separado de grade, trait y mutation."
        ],
        "canonicalClaim": "Level, grade, trait, and mutation remain separate."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "texts": [
          "Una nueva tirada puede cambiar la prioridad."
        ],
        "canonicalClaim": "A stronger roll can change which unit deserves investment."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "texts": [
          "Las fuentes no establecen un máximo universal."
        ],
        "canonicalClaim": "One universal maximum level is not confirmed by the supplied references."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "texts": [
          "Luck es una prioridad inicial práctica."
        ],
        "canonicalClaim": "Luck is a practical early upgrade priority."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "texts": [
          "Money y Luck pueden preceder a Roll Speed."
        ],
        "canonicalClaim": "Money and Luck can be improved before Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "texts": [
          "Luck no garantiza una unidad concreta."
        ],
        "canonicalClaim": "Luck does not guarantee a particular roll."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "texts": [
          "No están confirmadas las probabilidades de cada valor."
        ],
        "canonicalClaim": "Exact probabilities at each Luck value are not confirmed."
      },
      {
        "key": "anime-dice-luck:supplied-normal-die",
        "texts": [
          "Normal",
          "Common",
          "$1",
          "2x"
        ],
        "canonicalClaim": "Normal is Common, costs $1, and shows 2x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-storm-die",
        "texts": [
          "Storm",
          "Epic",
          "$200 million",
          "400x"
        ],
        "canonicalClaim": "Storm is Epic, costs $200 million, and shows 400x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-light-die",
        "texts": [
          "Light",
          "Legendary",
          "$12 billion",
          "1,500x"
        ],
        "canonicalClaim": "Light is Legendary, costs $12 billion, and shows 1,500x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-prismatic-die",
        "texts": [
          "Prismatic",
          "Exotic",
          "$1 quintillion",
          "1,000,000x"
        ],
        "canonicalClaim": "Prismatic is Exotic, costs $1 quintillion, and shows 1,000,000x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-radiant-die",
        "texts": [
          "Radiant",
          "Heavenly",
          "$100 octillion",
          "5,000,000,000x"
        ],
        "canonicalClaim": "Radiant is Heavenly, costs $100 octillion, and shows 5,000,000,000x Luck."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "texts": [
          "Luck aparece como prioridad de progresión."
        ],
        "canonicalClaim": "Luck is an upgrade priority in the supplied progression guide."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "texts": [
          "Rebirth puede afectar el progreso a largo plazo."
        ],
        "canonicalClaim": "Rebirth and other systems can affect long-term progression."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "texts": [
          "El panel actual muestra los pasos disponibles."
        ],
        "canonicalClaim": "Current upgrade panels are the authority for available steps."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "texts": [
          "No hay un máximo permanente confirmado."
        ],
        "canonicalClaim": "A permanent universal maximum Luck value is not confirmed."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "texts": [
          "UPDATE6 incluye Gems en sus recompensas."
        ],
        "canonicalClaim": "Gems are included in the documented UPDATE6 rewards."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "texts": [
          "El cofre del grupo puede dar Gems según la guía."
        ],
        "canonicalClaim": "The group chest may provide gems according to the supplied guide."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "texts": [
          "Gasta recursos para una meta definida."
        ],
        "canonicalClaim": "Resources should be reserved for deliberate progression choices."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "texts": [
          "Precios, ofertas y mejor compra pueden cambiar."
        ],
        "canonicalClaim": "Current prices, offers, and best purchases are not confirmed and can change."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "texts": [
          "Jackpot Roll se trata aquí como un tema de progreso que debe verificarse dentro del juego."
        ],
        "canonicalClaim": "Jackpot Roll is treated as a progression search intent."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "texts": [
          "Luck se evalúa aparte del acceso a la función."
        ],
        "canonicalClaim": "Luck and normal rolling remain distinct considerations."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "texts": [
          "La interfaz actual define activación y coste."
        ],
        "canonicalClaim": "The current interface should be checked before spending resources."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "texts": [
          "Requisitos, premios y probabilidades no están confirmados."
        ],
        "canonicalClaim": "Activation requirements, rewards, and exact odds are not confirmed."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "texts": [
          "UPDATE6 menciona Lucky Spins como recompensa."
        ],
        "canonicalClaim": "Lucky Spins are named in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "texts": [
          "El cofre del grupo también puede dar spins."
        ],
        "canonicalClaim": "The group chest may provide spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "texts": [
          "Revisa el resultado antes de vender."
        ],
        "canonicalClaim": "A spin result should be reviewed before selling units."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "texts": [
          "Resultados, probabilidades y disponibilidad actuales no están confirmados."
        ],
        "canonicalClaim": "Exact outcomes, odds, and current availability are not confirmed."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "texts": [
          "Rebirth pertenece a la progresión prolongada."
        ],
        "canonicalClaim": "Rebirth belongs to long-term progression."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "texts": [
          "Update 7 añadió seis rutas de mejora de rebirth."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "texts": [
          "Lee los efectos del reinicio en el panel actual."
        ],
        "canonicalClaim": "A reset decision should be checked against the current interface."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "texts": [
          "No se confirman aquí costes y efectos de cada paso."
        ],
        "canonicalClaim": "Exact costs and reset effects for every step are not confirmed here."
      },
      {
        "key": "anime-dice-rebirth:supplied-rebuild-ready",
        "texts": [
          "Espera hasta que las unidades equipadas puedan reconstruir los ingresos tras el reinicio."
        ],
        "canonicalClaim": "Wait until equipped units can rebuild income after reset."
      },
      {
        "key": "anime-dice-rebirth:supplied-cash-resets",
        "texts": [
          "Gasta el dinero restante antes del rebirth porque el saldo actual se reinicia."
        ],
        "canonicalClaim": "Spend remaining cash before rebirth because current cash resets."
      },
      {
        "key": "anime-dice-rebirth:supplied-units-remain",
        "texts": [
          "Las unidades, grades y traits obtenidos permanecen."
        ],
        "canonicalClaim": "Collected units, grades, and traits remain."
      },
      {
        "key": "anime-dice-rebirth:supplied-upgrade-point",
        "texts": [
          "Recibe un Rebirth Upgrade Point por rebirth en Update 7."
        ],
        "canonicalClaim": "Update 7 gives one Rebirth Upgrade Point per rebirth."
      },
      {
        "key": "anime-dice-rebirth:supplied-six-paths",
        "texts": [
          "Asigna puntos entre seis rutas de Rebirth Upgrade, reinicia Auto Roll y reconstruye ingresos."
        ],
        "canonicalClaim": "Update 7 has six Rebirth Upgrade paths; restart Auto Roll and rebuild income after assigning points."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "texts": [
          "Update 7 documenta seis rutas de mejora."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "texts": [
          "El número de rutas no equivale a un máximo de rebirths."
        ],
        "canonicalClaim": "A path count is not the same as a universal rebirth cap."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "texts": [
          "Usa el panel actual para los límites."
        ],
        "canonicalClaim": "The current game panel should be used for limits."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "texts": [
          "No hay un máximo permanente confirmado."
        ],
        "canonicalClaim": "A permanent maximum rebirth number is not confirmed."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "texts": [
          "Comprueba la tienda en la versión actual."
        ],
        "canonicalClaim": "Quest progress and shop choices should be checked in game."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "texts": [
          "Gems, Tickets y spins son recursos diferentes."
        ],
        "canonicalClaim": "Gems, Tickets, and spins are separate named resources."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "texts": [
          "Compra según el plan del equipo."
        ],
        "canonicalClaim": "Prioritize purchases that support the current team plan."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "texts": [
          "Inventario, precios y renovación no están confirmados."
        ],
        "canonicalClaim": "Live inventory, prices, and refresh timing are not confirmed."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "texts": [
          "Revisa el equipo activo antes de entrar."
        ],
        "canonicalClaim": "Review the active team before a run."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "texts": [
          "Gear, Potions y Tickets son recursos distintos."
        ],
        "canonicalClaim": "Gear, potions, and Tickets are separate preparation resources."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "texts": [
          "Las fuentes tratan Tower como progresión."
        ],
        "canonicalClaim": "Tower details were reviewed with the supplied progression sources."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "texts": [
          "Pisos, enemigos y recompensas pueden cambiar."
        ],
        "canonicalClaim": "Current floors, enemies, and reward rotations are not confirmed."
      },
      {
        "key": "anime-dice-tower:supplied-portal",
        "texts": [
          "Entra en el portal Towers del lobby central y elige un reto como Dragon Tower."
        ],
        "canonicalClaim": "The Towers portal is in the central lobby."
      },
      {
        "key": "anime-dice-tower:supplied-equip-best",
        "texts": [
          "Usa Equip Best antes de iniciar la lucha."
        ],
        "canonicalClaim": "Use Equip Best before starting the fight."
      },
      {
        "key": "anime-dice-tower:supplied-auto-hide",
        "texts": [
          "Auto y Hide mantienen los pisos superados en marcha mientras se recogen premios."
        ],
        "canonicalClaim": "Auto and Hide can keep cleared floors moving while rewards are collected."
      },
      {
        "key": "anime-dice-tower:supplied-tower-gear",
        "texts": [
          "Dragon, Cursed, Pirate, Hidden Leaf y Slayer Towers tienen Gear específico."
        ],
        "canonicalClaim": "Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers have tower-specific Gear."
      },
      {
        "key": "anime-dice-tower:supplied-stuck-upgrades",
        "texts": [
          "Mejora grades, traits, Damage y Health cuando el equipo no supere el siguiente piso."
        ],
        "canonicalClaim": "Improve grades, traits, Damage, and Health when the team cannot clear the next floor."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "texts": [
          "Gear está vinculado a Tower en las fuentes."
        ],
        "canonicalClaim": "Gear belongs to Tower preparation in the supplied sources."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "texts": [
          "Compara cada pieza con unidad y objetivo."
        ],
        "canonicalClaim": "Compare a gear item with the unit and goal it supports."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "texts": [
          "Vincula la forma de obtenerla a una fuente revisada."
        ],
        "canonicalClaim": "Keep acquisition notes tied to reviewed sources."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "texts": [
          "Lista y modificadores en vivo no están confirmados."
        ],
        "canonicalClaim": "A complete live gear list and exact modifiers are not confirmed."
      },
      {
        "key": "anime-dice-gear:supplied-angels-halo",
        "texts": [
          "Angel's Halo",
          "+30% Luck, +5 Walk Speed; 0.02% from Dragon Tower pisos 90+"
        ],
        "canonicalClaim": "Angel's Halo gives +30% Luck and +5 Walk Speed, with a supplied 0.02% source from Dragon Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-sakunas-sash",
        "texts": [
          "Sakuna's Sash",
          "2x Damage, +30% Luck, +30% Gems; 0.02% from Cursed Tower pisos 90+"
        ],
        "canonicalClaim": "Sakuna's Sash gives 2x Damage, +30% Luck, and +30% Gems, with a supplied 0.02% source from Cursed Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-enols-drums",
        "texts": [
          "Enol's Drums",
          "+40% Luck, 1.5x Cash; 0.02% from Pirate Tower pisos 90+"
        ],
        "canonicalClaim": "Enol's Drums gives +40% Luck and 1.5x Cash, with a supplied 0.02% source from Pirate Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-obitas-mask",
        "texts": [
          "Obita's Mask",
          "+40% Luck, +30% Gems; 0.02% from Hidden Leaf Tower pisos 90+"
        ],
        "canonicalClaim": "Obita's Mask gives +40% Luck and +30% Gems, with a supplied 0.02% source from Hidden Leaf Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-mazuns-coat",
        "texts": [
          "Mazun's Coat",
          "+50% Luck, 2x Cash; 0.02% from Slayer Tower pisos 90+"
        ],
        "canonicalClaim": "Mazun's Coat gives +50% Luck and 2x Cash, with a supplied 0.02% source from Slayer Tower Floors 90+."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "texts": [
          "Potions se tratan como preparación para Tower."
        ],
        "canonicalClaim": "Potions are treated as a Tower preparation resource."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "texts": [
          "Lee el texto actual del objeto antes de usarlo."
        ],
        "canonicalClaim": "Check the current item text before use."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "texts": [
          "Reserva objetos limitados para una meta definida."
        ],
        "canonicalClaim": "Save limited items for a defined progression goal."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "texts": [
          "Inventario, duración y efectos pueden cambiar."
        ],
        "canonicalClaim": "Live potion inventory, duration, and exact effects are not confirmed."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "texts": [
          "UPDATE6 incluye Tickets en la recompensa."
        ],
        "canonicalClaim": "Tickets are included in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "texts": [
          "Confirma su uso en la interfaz actual."
        ],
        "canonicalClaim": "Ticket use should be checked in the current interface."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "texts": [
          "Ninguna fuente respalda un suministro ilimitado."
        ],
        "canonicalClaim": "Reviewed sources do not support an unlimited supply claim."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "texts": [
          "Costes, usos y disponibilidad no están confirmados."
        ],
        "canonicalClaim": "Current costs, uses, and event availability are not confirmed."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "texts": [
          "Confirma cada unidad u objeto ofrecido."
        ],
        "canonicalClaim": "Confirm the item or unit offered on both sides."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "texts": [
          "Compara grade, trait, mutation y nivel por separado."
        ],
        "canonicalClaim": "Recheck grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "texts": [
          "Usa destinos verificados para contexto comunitario."
        ],
        "canonicalClaim": "Use verified official destinations for current community context."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "texts": [
          "Disponibilidad y demanda no son permanentes."
        ],
        "canonicalClaim": "Trading availability and live demand are volatile and not confirmed as permanent."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "texts": [
          "Registra identidad y rarity."
        ],
        "canonicalClaim": "Compare unit identity and rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "texts": [
          "Grade, trait, mutation y nivel alteran la comparación."
        ],
        "canonicalClaim": "Review grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "texts": [
          "Cada estimación necesita fuente y fecha."
        ],
        "canonicalClaim": "Record the review date and source of any community estimate."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "texts": [
          "No hay precios en vivo verificados en las fuentes."
        ],
        "canonicalClaim": "No verified live price dataset is supplied, so guaranteed values are not published."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "texts": [
          "Lista las unidades de ambos lados."
        ],
        "canonicalClaim": "List each unit on both sides."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "texts": [
          "Compara rarity, grade, trait, mutation y nivel."
        ],
        "canonicalClaim": "Compare rarity, grade, trait, mutation, and level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "texts": [
          "Anota fuente y fecha de cualquier estimación."
        ],
        "canonicalClaim": "Note the source and date for any community estimate."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "texts": [
          "Rechaza la presión para cerrar la operación antes de verificarla."
        ],
        "canonicalClaim": "Reject pressure to finish before verification."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "texts": [
          "La página no afirma una fórmula numérica de mercado."
        ],
        "canonicalClaim": "This page is a transparent worksheet; a numeric market formula is not confirmed."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "texts": [
          "Una oferta observada no es una operación completada."
        ],
        "canonicalClaim": "Separate observed offers from completed exchanges."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "texts": [
          "La fecha importa porque la demanda cambia."
        ],
        "canonicalClaim": "Record dates because demand can move."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "texts": [
          "Compara varias observaciones verificables."
        ],
        "canonicalClaim": "Compare multiple verified community observations."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "texts": [
          "No existe feed en vivo ni lista oficial fija."
        ],
        "canonicalClaim": "There is no verified live market feed or authoritative fixed price list in the supplied sources."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "texts": [
          "La investigación aportada identifica Update 7."
        ],
        "canonicalClaim": "The supplied research identifies Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "texts": [
          "Update 7 añade rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity and six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "texts": [
          "También añade seis rutas de rebirth."
        ],
        "canonicalClaim": "The article record was reviewed on October 5, 2026."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "texts": [
          "No se confirmó una versión posterior."
        ],
        "canonicalClaim": "A newer release is not verified by the supplied sources; check official destinations."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "texts": [
          "La página oficial y Discord verificado son fuentes de anuncios."
        ],
        "canonicalClaim": "Use the official Roblox game page and verified Discord for announcements."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "texts": [
          "Un rumor no equivale a anuncio del desarrollador."
        ],
        "canonicalClaim": "Separate a developer announcement from community speculation."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "texts": [
          "Cada comprobación necesita fecha."
        ],
        "canonicalClaim": "Record the date when information is checked."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "texts": [
          "No hay fecha ni lista futura confirmada."
        ],
        "canonicalClaim": "No next-update date or feature list is verified by the supplied sources."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "texts": [
          "Update 7 añade rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "texts": [
          "Añade seis rutas de mejora de rebirth."
        ],
        "canonicalClaim": "The update adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "texts": [
          "UPDATE7 es un código documentado."
        ],
        "canonicalClaim": "UPDATE7 is a documented reward code."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "texts": [
          "No se afirman balances fuera de las fuentes."
        ],
        "canonicalClaim": "Exact balance values beyond the supplied Update 7 source are not verified."
      },
      {
        "key": "anime-dice-update-7:supplied-galactic",
        "texts": [
          "Galactic rarity"
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:supplied-seven-units",
        "texts": [
          "7 unidades nuevas"
        ],
        "canonicalClaim": "Update 7 adds seven units."
      },
      {
        "key": "anime-dice-update-7:supplied-six-rebirth-paths",
        "texts": [
          "6 rutas de mejora de rebirth"
        ],
        "canonicalClaim": "Update 7 adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:supplied-third-base-floor",
        "texts": [
          "un tercer piso de la base"
        ],
        "canonicalClaim": "Update 7 adds a third base floor."
      },
      {
        "key": "anime-dice-update-7:supplied-new-tower",
        "texts": [
          "una Tower nueva"
        ],
        "canonicalClaim": "Update 7 adds a new Tower."
      },
      {
        "key": "anime-dice-update-7:supplied-gamepass-trading",
        "texts": [
          "intercambio de gamepasses"
        ],
        "canonicalClaim": "Update 7 adds gamepass trading."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "texts": [
          "Revisa la página oficial y Discord verificado."
        ],
        "canonicalClaim": "Check the official game page and verified Discord."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "texts": [
          "Inicio y fin deben aparecer en juego o anuncio original."
        ],
        "canonicalClaim": "Confirm start and end information in the current game."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "texts": [
          "Una publicación comunitaria necesita respaldo oficial."
        ],
        "canonicalClaim": "Treat community posts as unverified until matched to an official destination."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "texts": [
          "No hay calendario actual confirmado."
        ],
        "canonicalClaim": "No current event schedule is verified by the supplied sources."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "texts": [
          "Busca un anuncio fechado en destino oficial."
        ],
        "canonicalClaim": "Look for a dated announcement in verified official destinations."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "texts": [
          "Lee fecha y zona horaria juntas."
        ],
        "canonicalClaim": "Confirm timezone and date together."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "texts": [
          "Ignora republicaciones sin enlace original."
        ],
        "canonicalClaim": "Ignore reposts that do not link to the original announcement."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "texts": [
          "No hay horario recurrente confirmado."
        ],
        "canonicalClaim": "No recurring admin event time is verified by the supplied sources."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "texts": [
          "El catálogo usa discord.com/invite/ag5MCCu5aQ."
        ],
        "canonicalClaim": "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "texts": [
          "Los canales y anuncios pueden cambiar."
        ],
        "canonicalClaim": "Check announcement context and timestamps."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "texts": [
          "Nunca compartas contraseña o token con moderadores."
        ],
        "canonicalClaim": "Do not trust lookalike invites from unrelated pages."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "texts": [
          "Roles, canales y calendario actual pueden variar."
        ],
        "canonicalClaim": "Channel names and current announcements can change after review."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "texts": [
          "No se confirmó un subreddit oficial."
        ],
        "canonicalClaim": "Compare claims with the official game page."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "texts": [
          "Los posts descubren preguntas, no prueban hechos."
        ],
        "canonicalClaim": "Look for a direct developer source."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "texts": [
          "Contrasta afirmaciones con destinos oficiales."
        ],
        "canonicalClaim": "Treat user posts as community discussion rather than confirmation."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "texts": [
          "Los votos no convierten un post en anuncio oficial."
        ],
        "canonicalClaim": "An official Anime Dice Reddit community is not verified by the supplied sources."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "texts": [
          "No se confirmó un Trello oficial."
        ],
        "canonicalClaim": "Verify any board from an official developer destination."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "texts": [
          "Comprueba propietario y enlaces desde canales oficiales."
        ],
        "canonicalClaim": "Check board ownership and update history."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "texts": [
          "Los tableros de fans pueden estar desactualizados."
        ],
        "canonicalClaim": "Do not enter account details on a lookalike page."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "texts": [
          "No publicamos un enlace de Trello sin verificar."
        ],
        "canonicalClaim": "An official Anime Dice Trello board is not verified by the supplied sources."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "texts": [
          "La comunidad verificada es More & More Games."
        ],
        "canonicalClaim": "The verified developer community is More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "texts": [
          "La guía indica posibles spins en el cofre."
        ],
        "canonicalClaim": "The group chest may provide spins, gems, or rerolls."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "texts": [
          "También puede haber Gems o rerolls."
        ],
        "canonicalClaim": "Join through the verified Roblox destination."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "texts": [
          "Confirma recompensas y disponibilidad dentro del juego."
        ],
        "canonicalClaim": "Chest availability and exact rewards can change and should be checked in game."
      }
    ]
  },
  "id": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "texts": [
          "UPDATE7"
        ],
        "canonicalClaim": "UPDATE7 and UPDATE6 are documented codes."
      },
      {
        "key": "codes:update6",
        "texts": [
          "UPDATE6"
        ],
        "canonicalClaim": "UPDATE6 names Lucky Spins, Trait Rerolls, Tickets and Gems."
      },
      {
        "key": "codes:redeem-path",
        "texts": [
          "Shop"
        ],
        "canonicalClaim": "Redemption uses Shop."
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "texts": [
          "2026"
        ],
        "canonicalClaim": "Reviewed October 5, 2026."
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "texts": [
          "Roll menghasilkan karakter untuk dibandingkan."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "texts": [
          "Equip Best membantu meninjau tim saat ini."
        ],
        "canonicalClaim": "Mutations can affect unit evaluation."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "texts": [
          "Money dan Luck adalah prioritas awal yang praktis."
        ],
        "canonicalClaim": "The official description confirms offline earnings."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "texts": [
          "Waktu progres berbeda-beda dan tidak dijamin."
        ],
        "canonicalClaim": "Progress speed varies, so no guaranteed timeline is stated."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "texts": [
          "Lindungi unit berguna sebelum menjual."
        ],
        "canonicalClaim": "Money and Luck are strong early priorities."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "texts": [
          "Periksa grade, trait, dan mutation secara terpisah."
        ],
        "canonicalClaim": "Roll Speed helps after the economy is stable."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "texts": [
          "Roll Speed lebih berguna setelah Money dan Luck stabil."
        ],
        "canonicalClaim": "Grade, trait, and mutation need separate checks."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "texts": [
          "Hasil langka dan kecepatan progres tetap tidak dapat dijanjikan."
        ],
        "canonicalClaim": "Rare outcomes and a fixed progression pace cannot be promised."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "texts": [
          "Auto mengulang roll tanpa klik setiap kali."
        ],
        "canonicalClaim": "Hide affects the repeated roll presentation."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "texts": [
          "Hide menyembunyikan animasi Roll berulang."
        ],
        "canonicalClaim": "Rolls continue while that animation is hidden."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "texts": [
          "Roll tetap berjalan saat animasi disembunyikan."
        ],
        "canonicalClaim": "Keeper units should still be reviewed."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "texts": [
          "Hide tidak membuktikan opsi universal untuk adegan lain."
        ],
        "canonicalClaim": "Hide is not evidence of a universal option for unrelated scenes."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "texts": [
          "Stan menyediakan “Edit auto sell settings!”."
        ],
        "canonicalClaim": "Grades, traits, and mutations can matter independently."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "texts": [
          "Gunakan Equip Best sebelum menetapkan ambang."
        ],
        "canonicalClaim": "The threshold should stay below units you actively use."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "texts": [
          "Grade, trait, dan mutation dapat memengaruhi kegunaan."
        ],
        "canonicalClaim": "Recheck the setting as the team improves."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "texts": [
          "Simpan unit yang meragukan sampai selesai dibandingkan."
        ],
        "canonicalClaim": "Keep an uncertain unit until its properties have been compared."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "texts": [
          "Level hanya satu bagian evaluasi."
        ],
        "canonicalClaim": "Level is one part of unit evaluation."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "texts": [
          "Roll yang lebih baik dapat mengganti unit awal."
        ],
        "canonicalClaim": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "texts": [
          "Grade, trait, dan mutation adalah sistem terpisah."
        ],
        "canonicalClaim": "A stronger roll may replace an early keeper."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "texts": [
          "Sumber tidak mengonfirmasi level maksimum universal."
        ],
        "canonicalClaim": "The supplied references do not establish one universal maximum level, so no number is invented."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "texts": [
          "Hide tersedia di antarmuka Roll."
        ],
        "canonicalClaim": "Hide covers the roll presentation."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "texts": [
          "Roll dapat lanjut tanpa animasi berulang."
        ],
        "canonicalClaim": "It does not stop the rolling process."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "texts": [
          "Adegan lain mungkin memiliki kontrol berbeda."
        ],
        "canonicalClaim": "Other scenes can have different controls."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "texts": [
          "Tidak ada sumber yang mengonfirmasi tombol untuk melewati semua adegan."
        ],
        "canonicalClaim": "No supplied source confirms a setting that skips every intro, update, event, or story scene."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "texts": [
          "Grup yang terkait adalah More & More Games."
        ],
        "canonicalClaim": "The supplied guide says the chest may provide spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "texts": [
          "Referensi menyebut peti dapat memberi spins."
        ],
        "canonicalClaim": "Gems or rerolls may also be available."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "texts": [
          "Gems atau rerolls juga mungkin tersedia."
        ],
        "canonicalClaim": "Exact availability should be checked in game."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "texts": [
          "Periksa tujuan Roblox dan hindari grup tiruan."
        ],
        "canonicalClaim": "Avoid lookalike communities and confirm the Roblox destination before joining."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "texts": [
          "Peringkat bergantung pada versi game."
        ],
        "canonicalClaim": "A useful ranking depends on the current game version."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "texts": [
          "Grade, trait, mutation, dan level mengubah evaluasi."
        ],
        "canonicalClaim": "Grade, trait, mutation, and level are separate considerations."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "texts": [
          "Equip Best adalah pemeriksaan awal, bukan peringkat tetap."
        ],
        "canonicalClaim": "Equip Best is a starting check rather than a permanent ranking."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "texts": [
          "Tidak ada peringkat universal yang terkonfirmasi."
        ],
        "canonicalClaim": "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "texts": [
          "Karakter diperoleh melalui alur Roll."
        ],
        "canonicalClaim": "Characters are obtained through the roll loop."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "texts": [
          "Unit keeper layak mendapat resource sebelum unit sementara."
        ],
        "canonicalClaim": "Keeper units deserve resources before temporary results."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "texts": [
          "Deskripsi resmi mengonfirmasi pendapatan offline."
        ],
        "canonicalClaim": "Offline earnings are identified by the official game description."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "texts": [
          "Ketersediaan dan balance dapat berubah."
        ],
        "canonicalClaim": "Unit availability and balance can change; confirm the current roster in game."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "texts": [
          "Trait adalah properti unit yang terpisah."
        ],
        "canonicalClaim": "Traits are a separate unit property."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "texts": [
          "UPDATE6 mencatat Trait Rerolls sebagai hadiah."
        ],
        "canonicalClaim": "Trait Rerolls are named by the confirmed UPDATE6 reward."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "texts": [
          "Trait harus dibaca bersama unit pemiliknya."
        ],
        "canonicalClaim": "A trait should be evaluated with the unit it belongs to."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "texts": [
          "Efek dan peringkat lengkap tiap versi belum terkonfirmasi."
        ],
        "canonicalClaim": "Exact trait effects and rankings are not confirmed for every current version."
      },
      {
        "key": "anime-dice-traits:supplied-eternal",
        "texts": [
          "Eternal",
          "27x",
          "Tidak disebutkan dalam modul yang diberikan"
        ],
        "canonicalClaim": "Eternal shows 27x Income, Damage, and Health; its chance is not stated in the supplied module."
      },
      {
        "key": "anime-dice-traits:supplied-transcendent",
        "texts": [
          "Transcendent",
          "15x",
          "0.006%"
        ],
        "canonicalClaim": "Transcendent shows 15x and a displayed 0.006% chance."
      },
      {
        "key": "anime-dice-traits:supplied-monarch",
        "texts": [
          "Monarch",
          "8x",
          "0.025%"
        ],
        "canonicalClaim": "Monarch shows 8x and a displayed 0.025% chance."
      },
      {
        "key": "anime-dice-traits:supplied-shogun",
        "texts": [
          "Shogun",
          "5x",
          "0.12%"
        ],
        "canonicalClaim": "Shogun shows 5x and a displayed 0.12% chance."
      },
      {
        "key": "anime-dice-traits:supplied-samurai",
        "texts": [
          "Samurai",
          "3x",
          "0.5%"
        ],
        "canonicalClaim": "Samurai shows 3x and a displayed 0.5% chance."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "texts": [
          "Mutation termasuk dalam alur karakter yang terdokumentasi."
        ],
        "canonicalClaim": "Mutations are part of the documented character loop."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "texts": [
          "Mutation, grade, dan trait adalah label berbeda."
        ],
        "canonicalClaim": "Mutation, grade, and trait are separate labels."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "texts": [
          "Tinjau unit bermutation sebelum menjual."
        ],
        "canonicalClaim": "A mutated result should be reviewed before selling."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "texts": [
          "Peluang dan daftar mutation lengkap belum terkonfirmasi."
        ],
        "canonicalClaim": "Exact mutation odds and a complete live mutation list are not confirmed."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "texts": [
          "Rarity menjelaskan hasil roll."
        ],
        "canonicalClaim": "Rarity helps describe a roll result."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "texts": [
          "Rarity tidak menggantikan grade, trait, mutation, atau level."
        ],
        "canonicalClaim": "Rarity does not replace grade, trait, mutation, or level checks."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "texts": [
          "Luck adalah progres, bukan rarity unit."
        ],
        "canonicalClaim": "Luck belongs to progression rather than being a unit rarity."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "texts": [
          "Peluang tepat setiap rarity belum terkonfirmasi."
        ],
        "canonicalClaim": "Exact roll probabilities are not confirmed by the supplied references."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "texts": [
          "Grade berbeda dari trait dan mutation."
        ],
        "canonicalClaim": "Grades are separate from traits and mutations."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "texts": [
          "Bandingkan grade dengan unit dasarnya."
        ],
        "canonicalClaim": "A grade should be read alongside the underlying unit."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "texts": [
          "Simpan hasil yang meragukan sampai selesai ditinjau."
        ],
        "canonicalClaim": "Keep uncertain results until they have been compared."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "texts": [
          "Tabel dan modifier grade lengkap belum terkonfirmasi."
        ],
        "canonicalClaim": "A complete current grade table and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "texts": [
          "Resource level lebih berguna pada unit keeper."
        ],
        "canonicalClaim": "Leveling resources are best focused on keeper units."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "texts": [
          "Level tetap terpisah dari grade, trait, dan mutation."
        ],
        "canonicalClaim": "Level, grade, trait, and mutation remain separate."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "texts": [
          "Roll baru dapat mengubah prioritas investasi."
        ],
        "canonicalClaim": "A stronger roll can change which unit deserves investment."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "texts": [
          "Sumber tidak menetapkan level maksimum universal."
        ],
        "canonicalClaim": "One universal maximum level is not confirmed by the supplied references."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "texts": [
          "Luck adalah prioritas awal yang praktis."
        ],
        "canonicalClaim": "Luck is a practical early upgrade priority."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "texts": [
          "Money dan Luck dapat didahulukan sebelum Roll Speed."
        ],
        "canonicalClaim": "Money and Luck can be improved before Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "texts": [
          "Luck tidak menjamin unit tertentu."
        ],
        "canonicalClaim": "Luck does not guarantee a particular roll."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "texts": [
          "Peluang pada setiap nilai Luck belum terkonfirmasi."
        ],
        "canonicalClaim": "Exact probabilities at each Luck value are not confirmed."
      },
      {
        "key": "anime-dice-luck:supplied-normal-die",
        "texts": [
          "Normal",
          "Common",
          "$1",
          "2x"
        ],
        "canonicalClaim": "Normal is Common, costs $1, and shows 2x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-storm-die",
        "texts": [
          "Storm",
          "Epic",
          "$200 million",
          "400x"
        ],
        "canonicalClaim": "Storm is Epic, costs $200 million, and shows 400x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-light-die",
        "texts": [
          "Light",
          "Legendary",
          "$12 billion",
          "1,500x"
        ],
        "canonicalClaim": "Light is Legendary, costs $12 billion, and shows 1,500x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-prismatic-die",
        "texts": [
          "Prismatic",
          "Exotic",
          "$1 quintillion",
          "1,000,000x"
        ],
        "canonicalClaim": "Prismatic is Exotic, costs $1 quintillion, and shows 1,000,000x Luck."
      },
      {
        "key": "anime-dice-luck:supplied-radiant-die",
        "texts": [
          "Radiant",
          "Heavenly",
          "$100 octillion",
          "5,000,000,000x"
        ],
        "canonicalClaim": "Radiant is Heavenly, costs $100 octillion, and shows 5,000,000,000x Luck."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "texts": [
          "Luck tercatat sebagai prioritas progres."
        ],
        "canonicalClaim": "Luck is an upgrade priority in the supplied progression guide."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "texts": [
          "Rebirth dapat memengaruhi progres jangka panjang."
        ],
        "canonicalClaim": "Rebirth and other systems can affect long-term progression."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "texts": [
          "Panel saat ini menunjukkan langkah yang tersedia."
        ],
        "canonicalClaim": "Current upgrade panels are the authority for available steps."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "texts": [
          "Tidak ada nilai maksimum permanen yang terkonfirmasi."
        ],
        "canonicalClaim": "A permanent universal maximum Luck value is not confirmed."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "texts": [
          "UPDATE6 menyertakan Gems dalam hadiah."
        ],
        "canonicalClaim": "Gems are included in the documented UPDATE6 rewards."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "texts": [
          "Peti grup dapat memberi Gems menurut panduan."
        ],
        "canonicalClaim": "The group chest may provide gems according to the supplied guide."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "texts": [
          "Pengeluaran sebaiknya mendukung tujuan progres."
        ],
        "canonicalClaim": "Resources should be reserved for deliberate progression choices."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "texts": [
          "Harga, penawaran, dan pembelian terbaik dapat berubah."
        ],
        "canonicalClaim": "Current prices, offers, and best purchases are not confirmed and can change."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "texts": [
          "Jackpot Roll diperlakukan di sini sebagai topik progres yang harus diperiksa di dalam game."
        ],
        "canonicalClaim": "Jackpot Roll is treated as a progression search intent."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "texts": [
          "Luck dinilai terpisah dari akses fitur."
        ],
        "canonicalClaim": "Luck and normal rolling remain distinct considerations."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "texts": [
          "Antarmuka saat ini menentukan aktivasi dan biaya."
        ],
        "canonicalClaim": "The current interface should be checked before spending resources."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "texts": [
          "Syarat, hadiah, dan peluang tepat belum terkonfirmasi."
        ],
        "canonicalClaim": "Activation requirements, rewards, and exact odds are not confirmed."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "texts": [
          "UPDATE6 menyebut Lucky Spins sebagai hadiah."
        ],
        "canonicalClaim": "Lucky Spins are named in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "texts": [
          "Peti grup juga dapat memberi spins."
        ],
        "canonicalClaim": "The group chest may provide spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "texts": [
          "Tinjau hasil sebelum menjual unit."
        ],
        "canonicalClaim": "A spin result should be reviewed before selling units."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "texts": [
          "Hasil, peluang, dan ketersediaan saat ini belum terkonfirmasi."
        ],
        "canonicalClaim": "Exact outcomes, odds, and current availability are not confirmed."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "texts": [
          "Rebirth termasuk progres jangka panjang."
        ],
        "canonicalClaim": "Rebirth belongs to long-term progression."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "texts": [
          "Update 7 menambah enam jalur upgrade rebirth."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "texts": [
          "Baca dampak reset di panel saat ini."
        ],
        "canonicalClaim": "A reset decision should be checked against the current interface."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "texts": [
          "Biaya dan dampak setiap langkah belum dikonfirmasi di sini."
        ],
        "canonicalClaim": "Exact costs and reset effects for every step are not confirmed here."
      },
      {
        "key": "anime-dice-rebirth:supplied-rebuild-ready",
        "texts": [
          "Tunggu sampai unit yang dipasang dapat membangun kembali pendapatan setelah reset."
        ],
        "canonicalClaim": "Wait until equipped units can rebuild income after reset."
      },
      {
        "key": "anime-dice-rebirth:supplied-cash-resets",
        "texts": [
          "Habiskan uang tersisa sebelum rebirth karena saldo saat ini direset."
        ],
        "canonicalClaim": "Spend remaining cash before rebirth because current cash resets."
      },
      {
        "key": "anime-dice-rebirth:supplied-units-remain",
        "texts": [
          "Unit, grade, dan trait yang dikumpulkan tetap tersimpan."
        ],
        "canonicalClaim": "Collected units, grades, and traits remain."
      },
      {
        "key": "anime-dice-rebirth:supplied-upgrade-point",
        "texts": [
          "Dapatkan satu Rebirth Upgrade Point per rebirth di Update 7."
        ],
        "canonicalClaim": "Update 7 gives one Rebirth Upgrade Point per rebirth."
      },
      {
        "key": "anime-dice-rebirth:supplied-six-paths",
        "texts": [
          "Bagikan poin ke enam jalur Rebirth Upgrade, mulai Auto Roll lagi, lalu bangun kembali pendapatan."
        ],
        "canonicalClaim": "Update 7 has six Rebirth Upgrade paths; restart Auto Roll and rebuild income after assigning points."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "texts": [
          "Update 7 mencatat enam jalur upgrade."
        ],
        "canonicalClaim": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "texts": [
          "Jumlah jalur bukan berarti jumlah rebirth maksimum."
        ],
        "canonicalClaim": "A path count is not the same as a universal rebirth cap."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "texts": [
          "Gunakan panel saat ini untuk memeriksa batas."
        ],
        "canonicalClaim": "The current game panel should be used for limits."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "texts": [
          "Tidak ada maksimum rebirth permanen yang terkonfirmasi."
        ],
        "canonicalClaim": "A permanent maximum rebirth number is not confirmed."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "texts": [
          "Periksa toko pada versi game saat ini."
        ],
        "canonicalClaim": "Quest progress and shop choices should be checked in game."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "texts": [
          "Gems, Tickets, dan spins adalah resource berbeda."
        ],
        "canonicalClaim": "Gems, Tickets, and spins are separate named resources."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "texts": [
          "Pilih pembelian yang mendukung rencana tim."
        ],
        "canonicalClaim": "Prioritize purchases that support the current team plan."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "texts": [
          "Stok, harga, dan waktu refresh belum terkonfirmasi."
        ],
        "canonicalClaim": "Live inventory, prices, and refresh timing are not confirmed."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "texts": [
          "Tinjau tim aktif sebelum mencoba."
        ],
        "canonicalClaim": "Review the active team before a run."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "texts": [
          "Gear, Potions, dan Tickets adalah resource berbeda."
        ],
        "canonicalClaim": "Gear, potions, and Tickets are separate preparation resources."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "texts": [
          "Sumber menempatkan Tower sebagai progres."
        ],
        "canonicalClaim": "Tower details were reviewed with the supplied progression sources."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "texts": [
          "Lantai, musuh, dan rotasi hadiah dapat berubah."
        ],
        "canonicalClaim": "Current floors, enemies, and reward rotations are not confirmed."
      },
      {
        "key": "anime-dice-tower:supplied-portal",
        "texts": [
          "Masuk ke portal Towers di lobby tengah dan pilih tantangan seperti Dragon Tower."
        ],
        "canonicalClaim": "The Towers portal is in the central lobby."
      },
      {
        "key": "anime-dice-tower:supplied-equip-best",
        "texts": [
          "Gunakan Equip Best sebelum memulai pertarungan."
        ],
        "canonicalClaim": "Use Equip Best before starting the fight."
      },
      {
        "key": "anime-dice-tower:supplied-auto-hide",
        "texts": [
          "Auto dan Hide menjaga lantai yang sudah dilewati tetap berjalan saat hadiah dikumpulkan."
        ],
        "canonicalClaim": "Auto and Hide can keep cleared floors moving while rewards are collected."
      },
      {
        "key": "anime-dice-tower:supplied-tower-gear",
        "texts": [
          "Dragon, Cursed, Pirate, Hidden Leaf, dan Slayer Towers memiliki Gear khusus Tower."
        ],
        "canonicalClaim": "Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers have tower-specific Gear."
      },
      {
        "key": "anime-dice-tower:supplied-stuck-upgrades",
        "texts": [
          "Tingkatkan grade, trait, Damage, dan Health saat tim tidak dapat melewati lantai berikutnya."
        ],
        "canonicalClaim": "Improve grades, traits, Damage, and Health when the team cannot clear the next floor."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "texts": [
          "Gear terkait persiapan Tower dalam sumber."
        ],
        "canonicalClaim": "Gear belongs to Tower preparation in the supplied sources."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "texts": [
          "Bandingkan item dengan unit dan tujuan."
        ],
        "canonicalClaim": "Compare a gear item with the unit and goal it supports."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "texts": [
          "Catat cara memperoleh berdasarkan sumber yang ditinjau."
        ],
        "canonicalClaim": "Keep acquisition notes tied to reviewed sources."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "texts": [
          "Daftar dan modifier live belum terkonfirmasi."
        ],
        "canonicalClaim": "A complete live gear list and exact modifiers are not confirmed."
      },
      {
        "key": "anime-dice-gear:supplied-angels-halo",
        "texts": [
          "Angel's Halo",
          "+30% Luck, +5 Walk Speed; 0.02% from Dragon Tower lantai 90+"
        ],
        "canonicalClaim": "Angel's Halo gives +30% Luck and +5 Walk Speed, with a supplied 0.02% source from Dragon Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-sakunas-sash",
        "texts": [
          "Sakuna's Sash",
          "2x Damage, +30% Luck, +30% Gems; 0.02% from Cursed Tower lantai 90+"
        ],
        "canonicalClaim": "Sakuna's Sash gives 2x Damage, +30% Luck, and +30% Gems, with a supplied 0.02% source from Cursed Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-enols-drums",
        "texts": [
          "Enol's Drums",
          "+40% Luck, 1.5x Cash; 0.02% from Pirate Tower lantai 90+"
        ],
        "canonicalClaim": "Enol's Drums gives +40% Luck and 1.5x Cash, with a supplied 0.02% source from Pirate Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-obitas-mask",
        "texts": [
          "Obita's Mask",
          "+40% Luck, +30% Gems; 0.02% from Hidden Leaf Tower lantai 90+"
        ],
        "canonicalClaim": "Obita's Mask gives +40% Luck and +30% Gems, with a supplied 0.02% source from Hidden Leaf Tower Floors 90+."
      },
      {
        "key": "anime-dice-gear:supplied-mazuns-coat",
        "texts": [
          "Mazun's Coat",
          "+50% Luck, 2x Cash; 0.02% from Slayer Tower lantai 90+"
        ],
        "canonicalClaim": "Mazun's Coat gives +50% Luck and 2x Cash, with a supplied 0.02% source from Slayer Tower Floors 90+."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "texts": [
          "Potion diperlakukan sebagai persiapan Tower."
        ],
        "canonicalClaim": "Potions are treated as a Tower preparation resource."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "texts": [
          "Baca teks item saat ini sebelum memakai."
        ],
        "canonicalClaim": "Check the current item text before use."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "texts": [
          "Simpan item terbatas untuk tujuan tertentu."
        ],
        "canonicalClaim": "Save limited items for a defined progression goal."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "texts": [
          "Stok, durasi, dan efek tepat dapat berubah."
        ],
        "canonicalClaim": "Live potion inventory, duration, and exact effects are not confirmed."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "texts": [
          "UPDATE6 menyertakan Tickets dalam hadiah."
        ],
        "canonicalClaim": "Tickets are included in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "texts": [
          "Periksa fungsi pada antarmuka saat ini."
        ],
        "canonicalClaim": "Ticket use should be checked in the current interface."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "texts": [
          "Tidak ada sumber yang mendukung suplai tanpa batas."
        ],
        "canonicalClaim": "Reviewed sources do not support an unlimited supply claim."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "texts": [
          "Biaya, penggunaan, dan ketersediaan belum terkonfirmasi."
        ],
        "canonicalClaim": "Current costs, uses, and event availability are not confirmed."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "texts": [
          "Konfirmasi setiap unit atau item yang ditawarkan."
        ],
        "canonicalClaim": "Confirm the item or unit offered on both sides."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "texts": [
          "Bandingkan grade, trait, mutation, dan level secara terpisah."
        ],
        "canonicalClaim": "Recheck grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "texts": [
          "Gunakan tujuan terverifikasi untuk konteks komunitas."
        ],
        "canonicalClaim": "Use verified official destinations for current community context."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "texts": [
          "Ketersediaan trading dan permintaan tidak permanen."
        ],
        "canonicalClaim": "Trading availability and live demand are volatile and not confirmed as permanent."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "texts": [
          "Catat identitas dan rarity."
        ],
        "canonicalClaim": "Compare unit identity and rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "texts": [
          "Grade, trait, mutation, dan level mengubah perbandingan."
        ],
        "canonicalClaim": "Review grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "texts": [
          "Setiap perkiraan membutuhkan sumber dan tanggal."
        ],
        "canonicalClaim": "Record the review date and source of any community estimate."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "texts": [
          "Tidak ada data harga live terverifikasi."
        ],
        "canonicalClaim": "No verified live price dataset is supplied, so guaranteed values are not published."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "texts": [
          "Daftar semua unit pada kedua sisi."
        ],
        "canonicalClaim": "List each unit on both sides."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "texts": [
          "Bandingkan rarity, grade, trait, mutation, dan level."
        ],
        "canonicalClaim": "Compare rarity, grade, trait, mutation, and level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "texts": [
          "Catat sumber dan tanggal perkiraan komunitas."
        ],
        "canonicalClaim": "Note the source and date for any community estimate."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "texts": [
          "Tolak tekanan untuk menyelesaikan pertukaran sebelum verifikasi."
        ],
        "canonicalClaim": "Reject pressure to finish before verification."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "texts": [
          "Halaman ini tidak mengklaim formula pasar numerik."
        ],
        "canonicalClaim": "This page is a transparent worksheet; a numeric market formula is not confirmed."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "texts": [
          "Penawaran terlihat bukan transaksi selesai."
        ],
        "canonicalClaim": "Separate observed offers from completed exchanges."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "texts": [
          "Tanggal penting karena permintaan berubah."
        ],
        "canonicalClaim": "Record dates because demand can move."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "texts": [
          "Bandingkan beberapa pengamatan yang dapat diverifikasi."
        ],
        "canonicalClaim": "Compare multiple verified community observations."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "texts": [
          "Tidak ada feed live atau daftar harga resmi tetap."
        ],
        "canonicalClaim": "There is no verified live market feed or authoritative fixed price list in the supplied sources."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "texts": [
          "Riset yang diberikan mengidentifikasi Update 7."
        ],
        "canonicalClaim": "The supplied research identifies Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "texts": [
          "Update 7 menambah rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity and six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "texts": [
          "Update ini juga menambah enam jalur rebirth."
        ],
        "canonicalClaim": "The article record was reviewed on October 5, 2026."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "texts": [
          "Versi yang lebih baru belum dikonfirmasi."
        ],
        "canonicalClaim": "A newer release is not verified by the supplied sources; check official destinations."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "texts": [
          "Halaman resmi dan Discord terverifikasi adalah tujuan pengumuman."
        ],
        "canonicalClaim": "Use the official Roblox game page and verified Discord for announcements."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "texts": [
          "Rumor bukan pengumuman developer."
        ],
        "canonicalClaim": "Separate a developer announcement from community speculation."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "texts": [
          "Setiap pemeriksaan harus mencatat tanggal."
        ],
        "canonicalClaim": "Record the date when information is checked."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "texts": [
          "Tidak ada tanggal atau fitur update berikutnya yang terkonfirmasi."
        ],
        "canonicalClaim": "No next-update date or feature list is verified by the supplied sources."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "texts": [
          "Update 7 menambah rarity Galactic."
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "texts": [
          "Update ini menambah enam jalur upgrade rebirth."
        ],
        "canonicalClaim": "The update adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "texts": [
          "UPDATE7 adalah kode hadiah terdokumentasi."
        ],
        "canonicalClaim": "UPDATE7 is a documented reward code."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "texts": [
          "Nilai balance di luar sumber tidak dinyatakan."
        ],
        "canonicalClaim": "Exact balance values beyond the supplied Update 7 source are not verified."
      },
      {
        "key": "anime-dice-update-7:supplied-galactic",
        "texts": [
          "Galactic rarity"
        ],
        "canonicalClaim": "Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:supplied-seven-units",
        "texts": [
          "7 unit baru"
        ],
        "canonicalClaim": "Update 7 adds seven units."
      },
      {
        "key": "anime-dice-update-7:supplied-six-rebirth-paths",
        "texts": [
          "6 jalur upgrade rebirth"
        ],
        "canonicalClaim": "Update 7 adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:supplied-third-base-floor",
        "texts": [
          "lantai dasar ketiga"
        ],
        "canonicalClaim": "Update 7 adds a third base floor."
      },
      {
        "key": "anime-dice-update-7:supplied-new-tower",
        "texts": [
          "Tower baru"
        ],
        "canonicalClaim": "Update 7 adds a new Tower."
      },
      {
        "key": "anime-dice-update-7:supplied-gamepass-trading",
        "texts": [
          "trading gamepass"
        ],
        "canonicalClaim": "Update 7 adds gamepass trading."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "texts": [
          "Periksa halaman resmi dan Discord terverifikasi."
        ],
        "canonicalClaim": "Check the official game page and verified Discord."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "texts": [
          "Waktu mulai dan selesai harus ada di game atau pengumuman asli."
        ],
        "canonicalClaim": "Confirm start and end information in the current game."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "texts": [
          "Posting komunitas memerlukan dukungan sumber resmi."
        ],
        "canonicalClaim": "Treat community posts as unverified until matched to an official destination."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "texts": [
          "Tidak ada jadwal event terkini yang terkonfirmasi."
        ],
        "canonicalClaim": "No current event schedule is verified by the supplied sources."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "texts": [
          "Cari pengumuman bertanggal di tujuan resmi."
        ],
        "canonicalClaim": "Look for a dated announcement in verified official destinations."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "texts": [
          "Baca tanggal dan zona waktu bersama-sama."
        ],
        "canonicalClaim": "Confirm timezone and date together."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "texts": [
          "Abaikan repost tanpa tautan asli."
        ],
        "canonicalClaim": "Ignore reposts that do not link to the original announcement."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "texts": [
          "Tidak ada jadwal berulang yang terkonfirmasi."
        ],
        "canonicalClaim": "No recurring admin event time is verified by the supplied sources."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "texts": [
          "Katalog memakai discord.com/invite/ag5MCCu5aQ."
        ],
        "canonicalClaim": "Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "texts": [
          "Channel dan pengumuman dapat berubah."
        ],
        "canonicalClaim": "Check announcement context and timestamps."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "texts": [
          "Jangan bagikan password atau token kepada moderator."
        ],
        "canonicalClaim": "Do not trust lookalike invites from unrelated pages."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "texts": [
          "Role, channel, dan jadwal saat ini dapat berubah."
        ],
        "canonicalClaim": "Channel names and current announcements can change after review."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "texts": [
          "Tidak ada subreddit resmi yang terkonfirmasi."
        ],
        "canonicalClaim": "Compare claims with the official game page."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "texts": [
          "Posting membantu menemukan pertanyaan, bukan membuktikan fakta."
        ],
        "canonicalClaim": "Look for a direct developer source."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "texts": [
          "Bandingkan klaim dengan tujuan resmi."
        ],
        "canonicalClaim": "Treat user posts as community discussion rather than confirmation."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "texts": [
          "Vote tidak menjadikan posting sebagai pengumuman resmi."
        ],
        "canonicalClaim": "An official Anime Dice Reddit community is not verified by the supplied sources."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "texts": [
          "Tidak ada Trello resmi yang terkonfirmasi."
        ],
        "canonicalClaim": "Verify any board from an official developer destination."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "texts": [
          "Periksa pemilik dan tautan dari channel resmi."
        ],
        "canonicalClaim": "Check board ownership and update history."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "texts": [
          "Board buatan fan dapat tidak lengkap atau kedaluwarsa."
        ],
        "canonicalClaim": "Do not enter account details on a lookalike page."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "texts": [
          "Kami tidak menerbitkan tautan Trello yang belum diverifikasi."
        ],
        "canonicalClaim": "An official Anime Dice Trello board is not verified by the supplied sources."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "texts": [
          "Komunitas Roblox terverifikasi adalah More & More Games."
        ],
        "canonicalClaim": "The verified developer community is More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "texts": [
          "Panduan menyebut kemungkinan spins dari peti."
        ],
        "canonicalClaim": "The group chest may provide spins, gems, or rerolls."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "texts": [
          "Gems atau rerolls juga mungkin tersedia."
        ],
        "canonicalClaim": "Join through the verified Roblox destination."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "texts": [
          "Konfirmasi hadiah dan ketersediaan di dalam game."
        ],
        "canonicalClaim": "Chest availability and exact rewards can change and should be checked in game."
      }
    ]
  }
} satisfies Record<Locale, Record<ArticleId, readonly LocalizedFactAssertion[]>>;
