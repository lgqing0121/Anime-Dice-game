import type { ArticleId } from '../content/types';
import type { Locale } from '../config/site';
export interface LocalizedFactAssertion { key: string; text: string }
export const LOCALIZED_FACT_ASSERTIONS = {
  "en": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "text": "UPDATE7"
      },
      {
        "key": "codes:update6",
        "text": "UPDATE6"
      },
      {
        "key": "codes:redeem-path",
        "text": "Shop"
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "text": "2026"
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "text": "Mutations can affect unit evaluation."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "text": "The official description confirms offline earnings."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "text": "Progress speed varies, so no guaranteed timeline is stated."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Money and Luck are strong early priorities."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "text": "Roll Speed helps after the economy is stable."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "text": "Grade, trait, and mutation need separate checks."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "text": "Rare outcomes and a fixed progression pace cannot be promised."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Hide affects the repeated roll presentation."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "text": "Rolls continue while that animation is hidden."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "text": "Keeper units should still be reviewed."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "text": "Hide is not evidence of a universal option for unrelated scenes."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Grades, traits, and mutations can matter independently."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "text": "The threshold should stay below units you actively use."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "text": "Recheck the setting as the team improves."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "text": "Keep an uncertain unit until its properties have been compared."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Level is one part of unit evaluation."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "text": "Grades and traits are separate systems."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "text": "A stronger roll may replace an early keeper."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "text": "The supplied references do not establish one universal maximum level, so no number is invented."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Hide covers the roll presentation."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "text": "It does not stop the rolling process."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "text": "Other scenes can have different controls."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "text": "No supplied source confirms a setting that skips every intro, update, event, or story scene."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. The supplied guide says the chest may provide spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "text": "Gems or rerolls may also be available."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "text": "Exact availability should be checked in game."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "text": "Avoid lookalike communities and confirm the Roblox destination before joining."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. A useful ranking depends on the current game version."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "text": "Grade, trait, mutation, and level are separate considerations."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "text": "Equip Best is a starting check rather than a permanent ranking."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "text": "A universal permanent ranking is not confirmed, so no unsupported combat order is published."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Characters are obtained through the roll loop."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "text": "Keeper units deserve resources before temporary results."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "text": "Offline earnings are identified by the official game description."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "text": "Unit availability and balance can change; confirm the current roster in game."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Traits are a separate unit property."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "text": "Trait Rerolls are named by the confirmed UPDATE6 reward."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "text": "A trait should be evaluated with the unit it belongs to."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "text": "Exact trait effects and rankings are not confirmed for every current version."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Mutations are part of the documented character loop."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "text": "Mutation, grade, and trait are separate labels."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "text": "A mutated result should be reviewed before selling."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "text": "Exact mutation odds and a complete live mutation list are not confirmed."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Rarity helps describe a roll result."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "text": "Rarity does not replace grade, trait, mutation, or level checks."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "text": "Luck belongs to progression rather than being a unit rarity."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "text": "Exact roll probabilities are not confirmed by the supplied references."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Grades are separate from traits and mutations."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "text": "A grade should be read alongside the underlying unit."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "text": "Keep uncertain results until they have been compared."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "text": "A complete current grade table and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Leveling resources are best focused on keeper units."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "text": "Level, grade, trait, and mutation remain separate."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "text": "A stronger roll can change which unit deserves investment."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "text": "One universal maximum level is not confirmed by the supplied references."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Luck is a practical early upgrade priority."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "text": "Money and Luck can be improved before Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "text": "Luck does not guarantee a particular roll."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "text": "Exact probabilities at each Luck value are not confirmed."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Luck is an upgrade priority in the supplied progression guide."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "text": "Rebirth and other systems can affect long-term progression."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "text": "Current upgrade panels are the authority for available steps."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "text": "A permanent universal maximum Luck value is not confirmed."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Gems are included in the documented UPDATE6 rewards."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "text": "The group chest may provide gems according to the supplied guide."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "text": "Resources should be reserved for deliberate progression choices."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "text": "Current prices, offers, and best purchases are not confirmed and can change."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Jackpot Roll is treated as a progression search intent."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "text": "Luck and normal rolling remain distinct considerations."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "text": "The current interface should be checked before spending resources."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "text": "Activation requirements, rewards, and exact odds are not confirmed."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Lucky Spins are named in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "text": "The group chest may provide spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "text": "A spin result should be reviewed before selling units."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "text": "Exact outcomes, odds, and current availability are not confirmed."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Rebirth belongs to long-term progression."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "text": "Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "text": "A reset decision should be checked against the current interface."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "text": "Exact costs and reset effects for every step are not confirmed here."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Update 7 is documented as adding six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "text": "A path count is not the same as a universal rebirth cap."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "text": "The current game panel should be used for limits."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "text": "A permanent maximum rebirth number is not confirmed."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Quest progress and shop choices should be checked in game."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "text": "Gems, Tickets, and spins are separate named resources."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "text": "Prioritize purchases that support the current team plan."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "text": "Live inventory, prices, and refresh timing are not confirmed."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Review the active team before a run."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "text": "Gear, potions, and Tickets are separate preparation resources."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "text": "Tower details were reviewed with the supplied progression sources."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "text": "Current floors, enemies, and reward rotations are not confirmed."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Gear belongs to Tower preparation in the supplied sources."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "text": "Compare a gear item with the unit and goal it supports."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "text": "Keep acquisition notes tied to reviewed sources."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "text": "A complete live gear list and exact modifiers are not confirmed."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Potions are treated as a Tower preparation resource."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "text": "Check the current item text before use."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "text": "Save limited items for a defined progression goal."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "text": "Live potion inventory, duration, and exact effects are not confirmed."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Tickets are included in the documented UPDATE6 reward."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "text": "Ticket use should be checked in the current interface."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "text": "Reviewed sources do not support an unlimited supply claim."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "text": "Current costs, uses, and event availability are not confirmed."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Confirm the item or unit offered on both sides."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "text": "Recheck grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "text": "Use verified official destinations for current community context."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "text": "Trading availability and live demand are volatile and not confirmed as permanent."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Compare unit identity and rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "text": "Review grade, trait, mutation, and level separately."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "text": "Record the review date and source of any community estimate."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "text": "No verified live price dataset is supplied, so guaranteed values are not published."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. List each unit on both sides."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "text": "Compare rarity, grade, trait, mutation, and level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "text": "Note the source and date for any community estimate."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "text": "Reject pressure to finish before verification."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "text": "This page is a transparent worksheet; a numeric market formula is not confirmed."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Separate observed offers from completed exchanges."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "text": "Record dates because demand can move."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "text": "Compare multiple verified community observations."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "text": "There is no verified live market feed or authoritative fixed price list in the supplied sources."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. The supplied research identifies Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "text": "Update 7 adds Galactic rarity and six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "text": "The article record was reviewed on October 5, 2026."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "text": "A newer release is not verified by the supplied sources; check official destinations."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Use the official Roblox game page and verified Discord for announcements."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "text": "Separate a developer announcement from community speculation."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "text": "Record the date when information is checked."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "text": "No next-update date or feature list is verified by the supplied sources."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Update 7 adds Galactic rarity."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "text": "The update adds six rebirth upgrade paths."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "text": "UPDATE7 is a documented reward code."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "text": "Exact balance values beyond the supplied Update 7 source are not verified."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Check the official game page and verified Discord."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "text": "Confirm start and end information in the current game."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "text": "Treat community posts as unverified until matched to an official destination."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "text": "No current event schedule is verified by the supplied sources."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Look for a dated announcement in verified official destinations."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "text": "Confirm timezone and date together."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "text": "Ignore reposts that do not link to the original announcement."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "text": "No recurring admin event time is verified by the supplied sources."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Use the verified invite discord.com/invite/ag5MCCu5aQ linked by this site."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "text": "Check announcement context and timestamps."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "text": "Do not trust lookalike invites from unrelated pages."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "text": "Channel names and current announcements can change after review."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Compare claims with the official game page."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "text": "Look for a direct developer source."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "text": "Treat user posts as community discussion rather than confirmation."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "text": "An official Anime Dice Reddit community is not verified by the supplied sources."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. Verify any board from an official developer destination."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "text": "Check board ownership and update history."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "text": "Do not enter account details on a lookalike page."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "text": "An official Anime Dice Trello board is not verified by the supplied sources."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "text": "Start with the exact control, property, or claim connected to this topic. The verified developer community is More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "text": "The group chest may provide spins, gems, or rerolls."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "text": "Join through the verified Roblox destination."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "text": "Chest availability and exact rewards can change and should be checked in game."
      }
    ]
  },
  "pt-br": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "text": "UPDATE7"
      },
      {
        "key": "codes:update6",
        "text": "UPDATE6"
      },
      {
        "key": "codes:redeem-path",
        "text": "Shop"
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "text": "2026"
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Roll gera personagens para comparação."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "text": "Equip Best ajuda a revisar a equipe atual."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "text": "Money e Luck são prioridades iniciais práticas."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "text": "O tempo necessário para progredir varia e não é garantido."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Proteja unidades úteis antes de vender."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "text": "Revise grade, trait e mutation separadamente."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "text": "Roll Speed é mais útil depois de estabilizar Money e Luck."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "text": "Resultados raros e velocidade fixa de progresso não podem ser prometidos."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Auto repete a rolagem sem clicar a cada vez."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "text": "Hide remove a animação repetida de Roll."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "text": "As rolagens continuam enquanto a animação está oculta."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "text": "Hide não comprova uma opção universal para outras cenas."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. O estande oferece “Edit auto sell settings!”."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "text": "Equip Best deve ser usado antes de definir o limite."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "text": "Grade, trait e mutation podem tornar uma unidade útil."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "text": "Mantenha unidades incertas até concluir a comparação."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Nível é apenas uma parte da avaliação."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "text": "Uma rolagem melhor pode substituir uma unidade inicial."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "text": "Grade, trait e mutation são sistemas separados."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "text": "As fontes não confirmam um nível máximo universal."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Hide fica na interface de Roll."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "text": "A rolagem pode continuar sem a animação repetida."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "text": "Outras cenas podem usar controles diferentes."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "text": "Nenhuma fonte confirma um botão que pule todas as cenas."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. O grupo ligado ao jogo é More & More Games."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "text": "A referência diz que o baú pode oferecer spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "text": "Gems ou rerolls também podem aparecer no baú."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "text": "Confira o destino Roblox e evite grupos imitadores."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Uma classificação depende da versão do jogo."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "text": "Grade, trait, mutation e nível mudam a avaliação."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "text": "Equip Best é um ponto de partida, não um ranking permanente."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "text": "Não há ranking universal confirmado nas fontes fornecidas."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Personagens são obtidos pelo ciclo de Roll."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "text": "Unidades mantidas merecem recursos antes das temporárias."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "text": "A descrição oficial confirma ganhos offline."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "text": "Disponibilidade e balanceamento podem mudar."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Trait é uma propriedade separada da unidade."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "text": "UPDATE6 documenta Trait Rerolls como recompensa."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "text": "O trait deve ser lido junto da unidade que o recebeu."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "text": "Efeitos e rankings completos não estão confirmados para toda versão."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Mutation faz parte do ciclo documentado de personagens."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "text": "Mutation, grade e trait são rótulos diferentes."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "text": "Uma unidade com mutation deve ser revisada antes da venda."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "text": "Odds e lista completa de mutations não foram confirmadas."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Rarity descreve o resultado de uma rolagem."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "text": "Ela não substitui grade, trait, mutation ou nível."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "text": "Luck pertence à progressão e não é uma raridade da unidade."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "text": "As probabilidades exatas de cada rarity não estão confirmadas."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Grade é separado de trait e mutation."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "text": "O grade deve ser comparado com a unidade base."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "text": "Resultados incertos devem ser mantidos até a revisão."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "text": "A tabela completa e os modificadores atuais não estão confirmados."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Recursos de nível rendem mais em unidades mantidas."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "text": "Nível continua separado de grade, trait e mutation."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "text": "Uma nova rolagem pode mudar a prioridade de investimento."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "text": "As fontes não estabelecem um nível máximo universal."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Luck é uma prioridade inicial prática."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "text": "Money e Luck podem vir antes de Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "text": "Luck melhora o sistema, mas não garante uma unidade específica."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "text": "As probabilidades em cada valor de Luck não estão confirmadas."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Luck aparece como prioridade no guia de progressão."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "text": "Rebirth pode afetar a progressão de longo prazo."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "text": "O painel atual mostra os passos realmente disponíveis."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "text": "Não há valor máximo permanente de Luck confirmado."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. UPDATE6 inclui Gems nas recompensas documentadas."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "text": "O baú do grupo pode fornecer Gems segundo o guia."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "text": "Gastos devem apoiar uma meta definida de progressão."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "text": "Preços, ofertas e melhor compra podem mudar e não estão confirmados."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Jackpot Roll é tratado aqui como um tópico de progresso que deve ser verificado no jogo."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "text": "Luck deve ser avaliada separadamente do acesso ao recurso."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "text": "A interface atual é a autoridade para ativação e custo."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "text": "Requisitos, recompensas e odds exatas não foram confirmados."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. UPDATE6 cita Lucky Spins como recompensa."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "text": "O baú do grupo também pode fornecer spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "text": "O resultado deve ser revisado antes de qualquer venda."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "text": "Resultados, odds e disponibilidade atual não estão confirmados."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Rebirth pertence à progressão de longo prazo."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "text": "Update 7 adicionou seis caminhos de upgrade de rebirth."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "text": "Os efeitos do reset devem ser lidos no painel atual."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "text": "Custos e efeitos de cada etapa não foram confirmados aqui."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Update 7 documenta seis caminhos de upgrade."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "text": "Quantidade de caminhos não significa número máximo de rebirths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "text": "O painel atual deve ser usado para verificar limites."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "text": "Não há máximo permanente de rebirth confirmado."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. A loja deve ser conferida dentro da versão atual."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "text": "Gems, Tickets e spins são recursos diferentes."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "text": "A compra deve apoiar o plano atual da equipe."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "text": "Estoque, preços e horário de atualização não estão confirmados."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. A equipe ativa deve ser revisada antes da entrada."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "text": "Gear, Potions e Tickets são recursos de preparação distintos."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "text": "As fontes fornecidas tratam Tower como progressão."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "text": "Andares, inimigos e rotação de recompensas podem mudar."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Gear está ligado à preparação de Tower nas fontes."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "text": "Cada item deve ser comparado com a unidade e a meta."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "text": "A origem de obtenção deve permanecer ligada à fonte revisada."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "text": "Lista completa e modificadores ao vivo não estão confirmados."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Potions são tratadas como preparação para Tower."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "text": "O texto atual do item deve ser lido antes do uso."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "text": "Itens limitados devem apoiar uma meta definida."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "text": "Inventário, duração e efeitos exatos podem mudar."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. UPDATE6 inclui Tickets na recompensa documentada."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "text": "O uso deve ser confirmado na interface atual."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "text": "Nenhuma fonte sustenta uma oferta ilimitada."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "text": "Custos, usos e disponibilidade em eventos não estão confirmados."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Confirme cada unidade ou item oferecido."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "text": "Compare grade, trait, mutation e nível separadamente."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "text": "Use destinos verificados para contexto atual da comunidade."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "text": "Disponibilidade de trading e demanda não são garantidas."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Identidade e rarity devem ser registradas."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "text": "Grade, trait, mutation e nível alteram a comparação."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "text": "Toda estimativa precisa de fonte e data."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "text": "Não há conjunto de preços ao vivo verificado nas fontes."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Liste todas as unidades de cada lado."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "text": "Compare rarity, grade, trait, mutation e nível."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "text": "Registre fonte e data de qualquer estimativa comunitária."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "text": "Rejeite pressão para concluir a troca antes da verificação."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "text": "A página não afirma uma fórmula numérica de mercado."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Ofertas observadas não são iguais a trocas concluídas."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "text": "A data é necessária porque a demanda muda."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "text": "Compare várias observações comunitárias verificáveis."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "text": "Não existe feed ao vivo ou tabela oficial fixa nas fontes."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. A pesquisa fornecida identifica Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "text": "Update 7 adiciona rarity Galactic."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "text": "A atualização também adiciona seis caminhos de rebirth."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "text": "Uma versão posterior não foi confirmada pelas fontes fornecidas."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Página oficial e Discord verificado são os destinos de anúncio."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "text": "Rumor comunitário não equivale a anúncio do desenvolvedor."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "text": "Toda verificação deve registrar uma data."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "text": "Nenhuma data ou lista de recursos futura foi confirmada."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Update 7 adiciona rarity Galactic."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "text": "Foram adicionados seis caminhos de upgrade de rebirth."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "text": "UPDATE7 é um código de recompensa documentado."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "text": "Valores de balanceamento além das fontes não são afirmados."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Confira a página oficial e o Discord verificado."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "text": "Data inicial e final devem aparecer no jogo ou anúncio original."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "text": "Post comunitário precisa corresponder a uma fonte oficial."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "text": "Nenhum calendário de evento atual foi confirmado."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Procure anúncio datado em destino oficial verificado."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "text": "Data e fuso horário devem ser lidos juntos."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "text": "Repost sem link original não confirma o horário."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "text": "Nenhum horário recorrente foi confirmado pelas fontes."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. O catálogo aponta para discord.com/invite/ag5MCCu5aQ."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "text": "Anúncios podem mudar e devem ser lidos no servidor atual."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "text": "Nunca compartilhe senha ou token com supostos moderadores."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "text": "Cargos, canais e calendário atual podem mudar."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Nenhum subreddit oficial foi confirmado nas fontes."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "text": "Posts podem ajudar a descobrir perguntas, não provar fatos."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "text": "Afirmações devem ser comparadas com destinos oficiais."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "text": "Popularidade ou votos não transformam um post em anúncio oficial."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. Nenhum Trello oficial foi confirmado nas fontes."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "text": "Confira proprietário e links vindos de canais oficiais."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "text": "Quadros de fãs podem estar incompletos ou desatualizados."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "text": "Não apresentamos um link de Trello não verificado."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "text": "Comece pelo controle, propriedade ou afirmação exata ligada ao tema. A comunidade Roblox verificada é More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "text": "O guia relata possíveis spins no baú do grupo."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "text": "Gems ou rerolls também podem aparecer."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "text": "Recompensas e disponibilidade devem ser confirmadas no jogo."
      }
    ]
  },
  "es": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "text": "UPDATE7"
      },
      {
        "key": "codes:update6",
        "text": "UPDATE6"
      },
      {
        "key": "codes:redeem-path",
        "text": "Shop"
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "text": "2026"
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Roll obtiene personajes para compararlos."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "text": "Equip Best ayuda a revisar el equipo actual."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "text": "Money y Luck son prioridades iniciales prácticas."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "text": "El tiempo de progreso varía y no está garantizado."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Protege unidades útiles antes de vender."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "text": "Revisa grade, trait y mutation por separado."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "text": "Roll Speed resulta más útil tras estabilizar Money y Luck."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "text": "No se prometen resultados raros ni una velocidad fija."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Auto repite las tiradas sin pulsar cada vez."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "text": "Hide oculta la animación repetida de Roll."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "text": "Las tiradas continúan con la animación oculta."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "text": "Hide no confirma una opción universal para otras escenas."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. El puesto ofrece “Edit auto sell settings!”."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "text": "Usa Equip Best antes de fijar el umbral."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "text": "Grade, trait y mutation pueden cambiar la utilidad."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "text": "Conserva unidades dudosas hasta compararlas."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. El nivel es una parte de la evaluación."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "text": "Una tirada mejor puede reemplazar una unidad inicial."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "text": "Grade, trait y mutation son sistemas separados."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "text": "Las fuentes no confirman un nivel máximo universal."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Hide está en la interfaz de Roll."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "text": "La tirada sigue sin la animación repetida."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "text": "Otras escenas pueden tener controles distintos."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "text": "No hay fuente que confirme un botón para omitir todas las escenas."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. El grupo vinculado es More & More Games."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "text": "La referencia indica que el cofre puede dar spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "text": "También puede ofrecer Gems o rerolls."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "text": "Verifica el destino de Roblox y evita imitaciones."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. El ranking depende de la versión del juego."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "text": "Grade, trait, mutation y nivel cambian la evaluación."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "text": "Equip Best es un inicio, no un ranking permanente."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "text": "No existe un ranking universal confirmado."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Los personajes llegan mediante el ciclo de Roll."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "text": "Las unidades permanentes merecen recursos antes que las temporales."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "text": "La descripción oficial confirma ganancias offline."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "text": "Disponibilidad y balance pueden cambiar."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Trait es una propiedad separada."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "text": "UPDATE6 documenta Trait Rerolls como recompensa."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "text": "El trait debe leerse junto a su unidad."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "text": "No están confirmados todos los efectos y rankings actuales."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Mutation forma parte del ciclo documentado."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "text": "Mutation, grade y trait son etiquetas distintas."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "text": "Revisa una unidad con mutation antes de venderla."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "text": "No están confirmadas las probabilidades ni la lista completa."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Rarity describe el resultado de una tirada."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "text": "No sustituye grade, trait, mutation o nivel."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "text": "Luck pertenece a la progresión, no a la rarity de una unidad."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "text": "Las probabilidades exactas no están confirmadas."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Grade es distinto de trait y mutation."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "text": "Compáralo con la unidad base."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "text": "Conserva resultados dudosos hasta revisarlos."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "text": "La tabla completa y modificadores actuales no están confirmados."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Los recursos de nivel rinden mejor en unidades permanentes."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "text": "Nivel sigue separado de grade, trait y mutation."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "text": "Una nueva tirada puede cambiar la prioridad."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "text": "Las fuentes no establecen un máximo universal."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Luck es una prioridad inicial práctica."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "text": "Money y Luck pueden preceder a Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "text": "Luck no garantiza una unidad concreta."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "text": "No están confirmadas las probabilidades de cada valor."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Luck aparece como prioridad de progresión."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "text": "Rebirth puede afectar el progreso a largo plazo."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "text": "El panel actual muestra los pasos disponibles."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "text": "No hay un máximo permanente confirmado."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 incluye Gems en sus recompensas."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "text": "El cofre del grupo puede dar Gems según la guía."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "text": "Gasta recursos para una meta definida."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "text": "Precios, ofertas y mejor compra pueden cambiar."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Jackpot Roll se trata aquí como un tema de progreso que debe verificarse dentro del juego."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "text": "Luck se evalúa aparte del acceso a la función."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "text": "La interfaz actual define activación y coste."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "text": "Requisitos, premios y probabilidades no están confirmados."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 menciona Lucky Spins como recompensa."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "text": "El cofre del grupo también puede dar spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "text": "Revisa el resultado antes de vender."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "text": "Resultados, probabilidades y disponibilidad actuales no están confirmados."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Rebirth pertenece a la progresión prolongada."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "text": "Update 7 añadió seis rutas de mejora de rebirth."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "text": "Lee los efectos del reinicio en el panel actual."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "text": "No se confirman aquí costes y efectos de cada paso."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Update 7 documenta seis rutas de mejora."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "text": "El número de rutas no equivale a un máximo de rebirths."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "text": "Usa el panel actual para los límites."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "text": "No hay un máximo permanente confirmado."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Comprueba la tienda en la versión actual."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "text": "Gems, Tickets y spins son recursos diferentes."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "text": "Compra según el plan del equipo."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "text": "Inventario, precios y renovación no están confirmados."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Revisa el equipo activo antes de entrar."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "text": "Gear, Potions y Tickets son recursos distintos."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "text": "Las fuentes tratan Tower como progresión."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "text": "Pisos, enemigos y recompensas pueden cambiar."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Gear está vinculado a Tower en las fuentes."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "text": "Compara cada pieza con unidad y objetivo."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "text": "Vincula la forma de obtenerla a una fuente revisada."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "text": "Lista y modificadores en vivo no están confirmados."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Potions se tratan como preparación para Tower."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "text": "Lee el texto actual del objeto antes de usarlo."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "text": "Reserva objetos limitados para una meta definida."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "text": "Inventario, duración y efectos pueden cambiar."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 incluye Tickets en la recompensa."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "text": "Confirma su uso en la interfaz actual."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "text": "Ninguna fuente respalda un suministro ilimitado."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "text": "Costes, usos y disponibilidad no están confirmados."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Confirma cada unidad u objeto ofrecido."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "text": "Compara grade, trait, mutation y nivel por separado."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "text": "Usa destinos verificados para contexto comunitario."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "text": "Disponibilidad y demanda no son permanentes."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Registra identidad y rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "text": "Grade, trait, mutation y nivel alteran la comparación."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "text": "Cada estimación necesita fuente y fecha."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "text": "No hay precios en vivo verificados en las fuentes."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Lista las unidades de ambos lados."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "text": "Compara rarity, grade, trait, mutation y nivel."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "text": "Anota fuente y fecha de cualquier estimación."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "text": "Rechaza la presión para cerrar la operación antes de verificarla."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "text": "La página no afirma una fórmula numérica de mercado."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Una oferta observada no es una operación completada."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "text": "La fecha importa porque la demanda cambia."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "text": "Compara varias observaciones verificables."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "text": "No existe feed en vivo ni lista oficial fija."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. La investigación aportada identifica Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "text": "Update 7 añade rarity Galactic."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "text": "También añade seis rutas de rebirth."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "text": "No se confirmó una versión posterior."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. La página oficial y Discord verificado son fuentes de anuncios."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "text": "Un rumor no equivale a anuncio del desarrollador."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "text": "Cada comprobación necesita fecha."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "text": "No hay fecha ni lista futura confirmada."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Update 7 añade rarity Galactic."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "text": "Añade seis rutas de mejora de rebirth."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "text": "UPDATE7 es un código documentado."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "text": "No se afirman balances fuera de las fuentes."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Revisa la página oficial y Discord verificado."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "text": "Inicio y fin deben aparecer en juego o anuncio original."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "text": "Una publicación comunitaria necesita respaldo oficial."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "text": "No hay calendario actual confirmado."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. Busca un anuncio fechado en destino oficial."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "text": "Lee fecha y zona horaria juntas."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "text": "Ignora republicaciones sin enlace original."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "text": "No hay horario recurrente confirmado."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. El catálogo usa discord.com/invite/ag5MCCu5aQ."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "text": "Los canales y anuncios pueden cambiar."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "text": "Nunca compartas contraseña o token con moderadores."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "text": "Roles, canales y calendario actual pueden variar."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. No se confirmó un subreddit oficial."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "text": "Los posts descubren preguntas, no prueban hechos."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "text": "Contrasta afirmaciones con destinos oficiales."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "text": "Los votos no convierten un post en anuncio oficial."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. No se confirmó un Trello oficial."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "text": "Comprueba propietario y enlaces desde canales oficiales."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "text": "Los tableros de fans pueden estar desactualizados."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "text": "No publicamos un enlace de Trello sin verificar."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "text": "Empieza por el control, propiedad o afirmación exacta del tema. La comunidad verificada es More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "text": "La guía indica posibles spins en el cofre."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "text": "También puede haber Gems o rerolls."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "text": "Confirma recompensas y disponibilidad dentro del juego."
      }
    ]
  },
  "id": {
    "anime-dice-codes": [
      {
        "key": "codes:update7",
        "text": "UPDATE7"
      },
      {
        "key": "codes:update6",
        "text": "UPDATE6"
      },
      {
        "key": "codes:redeem-path",
        "text": "Shop"
      },
      {
        "key": "codes:reviewed-2026-10-05",
        "text": "2026"
      }
    ],
    "anime-dice-guide": [
      {
        "key": "anime-dice-guide:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Roll menghasilkan karakter untuk dibandingkan."
      },
      {
        "key": "anime-dice-guide:confirmed-2",
        "text": "Equip Best membantu meninjau tim saat ini."
      },
      {
        "key": "anime-dice-guide:confirmed-3",
        "text": "Money dan Luck adalah prioritas awal yang praktis."
      },
      {
        "key": "anime-dice-guide:evidence-boundary",
        "text": "Waktu progres berbeda-beda dan tidak dijamin."
      }
    ],
    "anime-dice-tips": [
      {
        "key": "anime-dice-tips:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Lindungi unit berguna sebelum menjual."
      },
      {
        "key": "anime-dice-tips:confirmed-2",
        "text": "Periksa grade, trait, dan mutation secara terpisah."
      },
      {
        "key": "anime-dice-tips:confirmed-3",
        "text": "Roll Speed lebih berguna setelah Money dan Luck stabil."
      },
      {
        "key": "anime-dice-tips:evidence-boundary",
        "text": "Hasil langka dan kecepatan progres tetap tidak dapat dijanjikan."
      }
    ],
    "anime-dice-auto-roll": [
      {
        "key": "anime-dice-auto-roll:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Auto mengulang roll tanpa klik setiap kali."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-2",
        "text": "Hide menyembunyikan animasi Roll berulang."
      },
      {
        "key": "anime-dice-auto-roll:confirmed-3",
        "text": "Roll tetap berjalan saat animasi disembunyikan."
      },
      {
        "key": "anime-dice-auto-roll:evidence-boundary",
        "text": "Hide tidak membuktikan opsi universal untuk adegan lain."
      }
    ],
    "anime-dice-auto-sell": [
      {
        "key": "anime-dice-auto-sell:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Stan menyediakan “Edit auto sell settings!”."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-2",
        "text": "Gunakan Equip Best sebelum menetapkan ambang."
      },
      {
        "key": "anime-dice-auto-sell:confirmed-3",
        "text": "Grade, trait, dan mutation dapat memengaruhi kegunaan."
      },
      {
        "key": "anime-dice-auto-sell:evidence-boundary",
        "text": "Simpan unit yang meragukan sampai selesai dibandingkan."
      }
    ],
    "anime-dice-how-to-level-up": [
      {
        "key": "anime-dice-how-to-level-up:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Level hanya satu bagian evaluasi."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-2",
        "text": "Roll yang lebih baik dapat mengganti unit awal."
      },
      {
        "key": "anime-dice-how-to-level-up:confirmed-3",
        "text": "Grade, trait, dan mutation adalah sistem terpisah."
      },
      {
        "key": "anime-dice-how-to-level-up:evidence-boundary",
        "text": "Sumber tidak mengonfirmasi level maksimum universal."
      }
    ],
    "anime-dice-how-to-skip-cutscenes": [
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Hide tersedia di antarmuka Roll."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-2",
        "text": "Roll dapat lanjut tanpa animasi berulang."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:confirmed-3",
        "text": "Adegan lain mungkin memiliki kontrol berbeda."
      },
      {
        "key": "anime-dice-how-to-skip-cutscenes:evidence-boundary",
        "text": "Tidak ada sumber yang mengonfirmasi tombol untuk melewati semua adegan."
      }
    ],
    "anime-dice-how-to-join-group": [
      {
        "key": "anime-dice-how-to-join-group:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Grup yang terkait adalah More & More Games."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-2",
        "text": "Referensi menyebut peti dapat memberi spins."
      },
      {
        "key": "anime-dice-how-to-join-group:confirmed-3",
        "text": "Gems atau rerolls juga mungkin tersedia."
      },
      {
        "key": "anime-dice-how-to-join-group:evidence-boundary",
        "text": "Periksa tujuan Roblox dan hindari grup tiruan."
      }
    ],
    "anime-dice-tier-list": [
      {
        "key": "anime-dice-tier-list:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Peringkat bergantung pada versi game."
      },
      {
        "key": "anime-dice-tier-list:confirmed-2",
        "text": "Grade, trait, mutation, dan level mengubah evaluasi."
      },
      {
        "key": "anime-dice-tier-list:confirmed-3",
        "text": "Equip Best adalah pemeriksaan awal, bukan peringkat tetap."
      },
      {
        "key": "anime-dice-tier-list:evidence-boundary",
        "text": "Tidak ada peringkat universal yang terkonfirmasi."
      }
    ],
    "anime-dice-units": [
      {
        "key": "anime-dice-units:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Karakter diperoleh melalui alur Roll."
      },
      {
        "key": "anime-dice-units:confirmed-2",
        "text": "Unit keeper layak mendapat resource sebelum unit sementara."
      },
      {
        "key": "anime-dice-units:confirmed-3",
        "text": "Deskripsi resmi mengonfirmasi pendapatan offline."
      },
      {
        "key": "anime-dice-units:evidence-boundary",
        "text": "Ketersediaan dan balance dapat berubah."
      }
    ],
    "anime-dice-traits": [
      {
        "key": "anime-dice-traits:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Trait adalah properti unit yang terpisah."
      },
      {
        "key": "anime-dice-traits:confirmed-2",
        "text": "UPDATE6 mencatat Trait Rerolls sebagai hadiah."
      },
      {
        "key": "anime-dice-traits:confirmed-3",
        "text": "Trait harus dibaca bersama unit pemiliknya."
      },
      {
        "key": "anime-dice-traits:evidence-boundary",
        "text": "Efek dan peringkat lengkap tiap versi belum terkonfirmasi."
      }
    ],
    "anime-dice-mutation": [
      {
        "key": "anime-dice-mutation:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Mutation termasuk dalam alur karakter yang terdokumentasi."
      },
      {
        "key": "anime-dice-mutation:confirmed-2",
        "text": "Mutation, grade, dan trait adalah label berbeda."
      },
      {
        "key": "anime-dice-mutation:confirmed-3",
        "text": "Tinjau unit bermutation sebelum menjual."
      },
      {
        "key": "anime-dice-mutation:evidence-boundary",
        "text": "Peluang dan daftar mutation lengkap belum terkonfirmasi."
      }
    ],
    "anime-dice-rarity": [
      {
        "key": "anime-dice-rarity:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Rarity menjelaskan hasil roll."
      },
      {
        "key": "anime-dice-rarity:confirmed-2",
        "text": "Rarity tidak menggantikan grade, trait, mutation, atau level."
      },
      {
        "key": "anime-dice-rarity:confirmed-3",
        "text": "Luck adalah progres, bukan rarity unit."
      },
      {
        "key": "anime-dice-rarity:evidence-boundary",
        "text": "Peluang tepat setiap rarity belum terkonfirmasi."
      }
    ],
    "anime-dice-grades": [
      {
        "key": "anime-dice-grades:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Grade berbeda dari trait dan mutation."
      },
      {
        "key": "anime-dice-grades:confirmed-2",
        "text": "Bandingkan grade dengan unit dasarnya."
      },
      {
        "key": "anime-dice-grades:confirmed-3",
        "text": "Simpan hasil yang meragukan sampai selesai ditinjau."
      },
      {
        "key": "anime-dice-grades:evidence-boundary",
        "text": "Tabel dan modifier grade lengkap belum terkonfirmasi."
      }
    ],
    "anime-dice-max-level": [
      {
        "key": "anime-dice-max-level:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Resource level lebih berguna pada unit keeper."
      },
      {
        "key": "anime-dice-max-level:confirmed-2",
        "text": "Level tetap terpisah dari grade, trait, dan mutation."
      },
      {
        "key": "anime-dice-max-level:confirmed-3",
        "text": "Roll baru dapat mengubah prioritas investasi."
      },
      {
        "key": "anime-dice-max-level:evidence-boundary",
        "text": "Sumber tidak menetapkan level maksimum universal."
      }
    ],
    "anime-dice-luck": [
      {
        "key": "anime-dice-luck:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Luck adalah prioritas awal yang praktis."
      },
      {
        "key": "anime-dice-luck:confirmed-2",
        "text": "Money dan Luck dapat didahulukan sebelum Roll Speed."
      },
      {
        "key": "anime-dice-luck:confirmed-3",
        "text": "Luck tidak menjamin unit tertentu."
      },
      {
        "key": "anime-dice-luck:evidence-boundary",
        "text": "Peluang pada setiap nilai Luck belum terkonfirmasi."
      }
    ],
    "anime-dice-max-luck": [
      {
        "key": "anime-dice-max-luck:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Luck tercatat sebagai prioritas progres."
      },
      {
        "key": "anime-dice-max-luck:confirmed-2",
        "text": "Rebirth dapat memengaruhi progres jangka panjang."
      },
      {
        "key": "anime-dice-max-luck:confirmed-3",
        "text": "Panel saat ini menunjukkan langkah yang tersedia."
      },
      {
        "key": "anime-dice-max-luck:evidence-boundary",
        "text": "Tidak ada nilai maksimum permanen yang terkonfirmasi."
      }
    ],
    "anime-dice-gems": [
      {
        "key": "anime-dice-gems:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyertakan Gems dalam hadiah."
      },
      {
        "key": "anime-dice-gems:confirmed-2",
        "text": "Peti grup dapat memberi Gems menurut panduan."
      },
      {
        "key": "anime-dice-gems:confirmed-3",
        "text": "Pengeluaran sebaiknya mendukung tujuan progres."
      },
      {
        "key": "anime-dice-gems:evidence-boundary",
        "text": "Harga, penawaran, dan pembelian terbaik dapat berubah."
      }
    ],
    "anime-dice-jackpot-roll": [
      {
        "key": "anime-dice-jackpot-roll:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Jackpot Roll diperlakukan di sini sebagai topik progres yang harus diperiksa di dalam game."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-2",
        "text": "Luck dinilai terpisah dari akses fitur."
      },
      {
        "key": "anime-dice-jackpot-roll:confirmed-3",
        "text": "Antarmuka saat ini menentukan aktivasi dan biaya."
      },
      {
        "key": "anime-dice-jackpot-roll:evidence-boundary",
        "text": "Syarat, hadiah, dan peluang tepat belum terkonfirmasi."
      }
    ],
    "anime-dice-lucky-spin": [
      {
        "key": "anime-dice-lucky-spin:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyebut Lucky Spins sebagai hadiah."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-2",
        "text": "Peti grup juga dapat memberi spins."
      },
      {
        "key": "anime-dice-lucky-spin:confirmed-3",
        "text": "Tinjau hasil sebelum menjual unit."
      },
      {
        "key": "anime-dice-lucky-spin:evidence-boundary",
        "text": "Hasil, peluang, dan ketersediaan saat ini belum terkonfirmasi."
      }
    ],
    "anime-dice-rebirth": [
      {
        "key": "anime-dice-rebirth:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Rebirth termasuk progres jangka panjang."
      },
      {
        "key": "anime-dice-rebirth:confirmed-2",
        "text": "Update 7 menambah enam jalur upgrade rebirth."
      },
      {
        "key": "anime-dice-rebirth:confirmed-3",
        "text": "Baca dampak reset di panel saat ini."
      },
      {
        "key": "anime-dice-rebirth:evidence-boundary",
        "text": "Biaya dan dampak setiap langkah belum dikonfirmasi di sini."
      }
    ],
    "anime-dice-max-rebirth": [
      {
        "key": "anime-dice-max-rebirth:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Update 7 mencatat enam jalur upgrade."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-2",
        "text": "Jumlah jalur bukan berarti jumlah rebirth maksimum."
      },
      {
        "key": "anime-dice-max-rebirth:confirmed-3",
        "text": "Gunakan panel saat ini untuk memeriksa batas."
      },
      {
        "key": "anime-dice-max-rebirth:evidence-boundary",
        "text": "Tidak ada maksimum rebirth permanen yang terkonfirmasi."
      }
    ],
    "anime-dice-quest-shop": [
      {
        "key": "anime-dice-quest-shop:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Periksa toko pada versi game saat ini."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-2",
        "text": "Gems, Tickets, dan spins adalah resource berbeda."
      },
      {
        "key": "anime-dice-quest-shop:confirmed-3",
        "text": "Pilih pembelian yang mendukung rencana tim."
      },
      {
        "key": "anime-dice-quest-shop:evidence-boundary",
        "text": "Stok, harga, dan waktu refresh belum terkonfirmasi."
      }
    ],
    "anime-dice-tower": [
      {
        "key": "anime-dice-tower:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tinjau tim aktif sebelum mencoba."
      },
      {
        "key": "anime-dice-tower:confirmed-2",
        "text": "Gear, Potions, dan Tickets adalah resource berbeda."
      },
      {
        "key": "anime-dice-tower:confirmed-3",
        "text": "Sumber menempatkan Tower sebagai progres."
      },
      {
        "key": "anime-dice-tower:evidence-boundary",
        "text": "Lantai, musuh, dan rotasi hadiah dapat berubah."
      }
    ],
    "anime-dice-gear": [
      {
        "key": "anime-dice-gear:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Gear terkait persiapan Tower dalam sumber."
      },
      {
        "key": "anime-dice-gear:confirmed-2",
        "text": "Bandingkan item dengan unit dan tujuan."
      },
      {
        "key": "anime-dice-gear:confirmed-3",
        "text": "Catat cara memperoleh berdasarkan sumber yang ditinjau."
      },
      {
        "key": "anime-dice-gear:evidence-boundary",
        "text": "Daftar dan modifier live belum terkonfirmasi."
      }
    ],
    "anime-dice-potion": [
      {
        "key": "anime-dice-potion:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Potion diperlakukan sebagai persiapan Tower."
      },
      {
        "key": "anime-dice-potion:confirmed-2",
        "text": "Baca teks item saat ini sebelum memakai."
      },
      {
        "key": "anime-dice-potion:confirmed-3",
        "text": "Simpan item terbatas untuk tujuan tertentu."
      },
      {
        "key": "anime-dice-potion:evidence-boundary",
        "text": "Stok, durasi, dan efek tepat dapat berubah."
      }
    ],
    "anime-dice-tickets": [
      {
        "key": "anime-dice-tickets:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. UPDATE6 menyertakan Tickets dalam hadiah."
      },
      {
        "key": "anime-dice-tickets:confirmed-2",
        "text": "Periksa fungsi pada antarmuka saat ini."
      },
      {
        "key": "anime-dice-tickets:confirmed-3",
        "text": "Tidak ada sumber yang mendukung suplai tanpa batas."
      },
      {
        "key": "anime-dice-tickets:evidence-boundary",
        "text": "Biaya, penggunaan, dan ketersediaan belum terkonfirmasi."
      }
    ],
    "anime-dice-trading": [
      {
        "key": "anime-dice-trading:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Konfirmasi setiap unit atau item yang ditawarkan."
      },
      {
        "key": "anime-dice-trading:confirmed-2",
        "text": "Bandingkan grade, trait, mutation, dan level secara terpisah."
      },
      {
        "key": "anime-dice-trading:confirmed-3",
        "text": "Gunakan tujuan terverifikasi untuk konteks komunitas."
      },
      {
        "key": "anime-dice-trading:evidence-boundary",
        "text": "Ketersediaan trading dan permintaan tidak permanen."
      }
    ],
    "anime-dice-trade-value": [
      {
        "key": "anime-dice-trade-value:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Catat identitas dan rarity."
      },
      {
        "key": "anime-dice-trade-value:confirmed-2",
        "text": "Grade, trait, mutation, dan level mengubah perbandingan."
      },
      {
        "key": "anime-dice-trade-value:confirmed-3",
        "text": "Setiap perkiraan membutuhkan sumber dan tanggal."
      },
      {
        "key": "anime-dice-trade-value:evidence-boundary",
        "text": "Tidak ada data harga live terverifikasi."
      }
    ],
    "anime-dice-value-calculator": [
      {
        "key": "anime-dice-value-calculator:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Daftar semua unit pada kedua sisi."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-2",
        "text": "Bandingkan rarity, grade, trait, mutation, dan level."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-3",
        "text": "Catat sumber dan tanggal perkiraan komunitas."
      },
      {
        "key": "anime-dice-value-calculator:confirmed-4",
        "text": "Tolak tekanan untuk menyelesaikan pertukaran sebelum verifikasi."
      },
      {
        "key": "anime-dice-value-calculator:evidence-boundary",
        "text": "Halaman ini tidak mengklaim formula pasar numerik."
      }
    ],
    "anime-dice-market": [
      {
        "key": "anime-dice-market:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Penawaran terlihat bukan transaksi selesai."
      },
      {
        "key": "anime-dice-market:confirmed-2",
        "text": "Tanggal penting karena permintaan berubah."
      },
      {
        "key": "anime-dice-market:confirmed-3",
        "text": "Bandingkan beberapa pengamatan yang dapat diverifikasi."
      },
      {
        "key": "anime-dice-market:evidence-boundary",
        "text": "Tidak ada feed live atau daftar harga resmi tetap."
      }
    ],
    "anime-dice-new-update": [
      {
        "key": "anime-dice-new-update:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Riset yang diberikan mengidentifikasi Update 7."
      },
      {
        "key": "anime-dice-new-update:confirmed-2",
        "text": "Update 7 menambah rarity Galactic."
      },
      {
        "key": "anime-dice-new-update:confirmed-3",
        "text": "Update ini juga menambah enam jalur rebirth."
      },
      {
        "key": "anime-dice-new-update:evidence-boundary",
        "text": "Versi yang lebih baru belum dikonfirmasi."
      }
    ],
    "anime-dice-next-update": [
      {
        "key": "anime-dice-next-update:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Halaman resmi dan Discord terverifikasi adalah tujuan pengumuman."
      },
      {
        "key": "anime-dice-next-update:confirmed-2",
        "text": "Rumor bukan pengumuman developer."
      },
      {
        "key": "anime-dice-next-update:confirmed-3",
        "text": "Setiap pemeriksaan harus mencatat tanggal."
      },
      {
        "key": "anime-dice-next-update:evidence-boundary",
        "text": "Tidak ada tanggal atau fitur update berikutnya yang terkonfirmasi."
      }
    ],
    "anime-dice-update-7": [
      {
        "key": "anime-dice-update-7:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Update 7 menambah rarity Galactic."
      },
      {
        "key": "anime-dice-update-7:confirmed-2",
        "text": "Update ini menambah enam jalur upgrade rebirth."
      },
      {
        "key": "anime-dice-update-7:confirmed-3",
        "text": "UPDATE7 adalah kode hadiah terdokumentasi."
      },
      {
        "key": "anime-dice-update-7:evidence-boundary",
        "text": "Nilai balance di luar sumber tidak dinyatakan."
      }
    ],
    "anime-dice-event": [
      {
        "key": "anime-dice-event:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Periksa halaman resmi dan Discord terverifikasi."
      },
      {
        "key": "anime-dice-event:confirmed-2",
        "text": "Waktu mulai dan selesai harus ada di game atau pengumuman asli."
      },
      {
        "key": "anime-dice-event:confirmed-3",
        "text": "Posting komunitas memerlukan dukungan sumber resmi."
      },
      {
        "key": "anime-dice-event:evidence-boundary",
        "text": "Tidak ada jadwal event terkini yang terkonfirmasi."
      }
    ],
    "anime-dice-admin-abuse-time": [
      {
        "key": "anime-dice-admin-abuse-time:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Cari pengumuman bertanggal di tujuan resmi."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-2",
        "text": "Baca tanggal dan zona waktu bersama-sama."
      },
      {
        "key": "anime-dice-admin-abuse-time:confirmed-3",
        "text": "Abaikan repost tanpa tautan asli."
      },
      {
        "key": "anime-dice-admin-abuse-time:evidence-boundary",
        "text": "Tidak ada jadwal berulang yang terkonfirmasi."
      }
    ],
    "anime-dice-discord": [
      {
        "key": "anime-dice-discord:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Katalog memakai discord.com/invite/ag5MCCu5aQ."
      },
      {
        "key": "anime-dice-discord:confirmed-2",
        "text": "Channel dan pengumuman dapat berubah."
      },
      {
        "key": "anime-dice-discord:confirmed-3",
        "text": "Jangan bagikan password atau token kepada moderator."
      },
      {
        "key": "anime-dice-discord:evidence-boundary",
        "text": "Role, channel, dan jadwal saat ini dapat berubah."
      }
    ],
    "anime-dice-reddit": [
      {
        "key": "anime-dice-reddit:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tidak ada subreddit resmi yang terkonfirmasi."
      },
      {
        "key": "anime-dice-reddit:confirmed-2",
        "text": "Posting membantu menemukan pertanyaan, bukan membuktikan fakta."
      },
      {
        "key": "anime-dice-reddit:confirmed-3",
        "text": "Bandingkan klaim dengan tujuan resmi."
      },
      {
        "key": "anime-dice-reddit:evidence-boundary",
        "text": "Vote tidak menjadikan posting sebagai pengumuman resmi."
      }
    ],
    "anime-dice-trello": [
      {
        "key": "anime-dice-trello:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Tidak ada Trello resmi yang terkonfirmasi."
      },
      {
        "key": "anime-dice-trello:confirmed-2",
        "text": "Periksa pemilik dan tautan dari channel resmi."
      },
      {
        "key": "anime-dice-trello:confirmed-3",
        "text": "Board buatan fan dapat tidak lengkap atau kedaluwarsa."
      },
      {
        "key": "anime-dice-trello:evidence-boundary",
        "text": "Kami tidak menerbitkan tautan Trello yang belum diverifikasi."
      }
    ],
    "anime-dice-group": [
      {
        "key": "anime-dice-group:confirmed-1",
        "text": "Mulai dari kontrol, properti, atau klaim tepat yang terkait dengan topik. Komunitas Roblox terverifikasi adalah More & More Games."
      },
      {
        "key": "anime-dice-group:confirmed-2",
        "text": "Panduan menyebut kemungkinan spins dari peti."
      },
      {
        "key": "anime-dice-group:confirmed-3",
        "text": "Gems atau rerolls juga mungkin tersedia."
      },
      {
        "key": "anime-dice-group:evidence-boundary",
        "text": "Konfirmasi hadiah dan ketersediaan di dalam game."
      }
    ]
  }
} satisfies Record<Locale, Record<ArticleId, readonly LocalizedFactAssertion[]>>;
