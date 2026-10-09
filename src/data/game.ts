export interface SidebarCode {
  code: string;
  reward: string;
  status: 'Active';
}

export interface GameFacts {
  reviewDate: string;
  currentUpdate: string;
  launchDate: string;
  snapshot: {
    playersOnline: string;
    visits: string;
    approval: string;
    favorites: string;
    serverSize: string;
  };
  developer: string;
  platform: string;
  genre: string;
  rebirthPaths: string;
  links: {
    game: string;
    developer: string;
    discord: string;
    guideVideo: string;
    heroImage: string;
  };
  sidebarCodes: SidebarCode[];
}

export const GAME_FACTS: GameFacts = {
  reviewDate: '2026-10-05',
  currentUpdate: 'UPD 7',
  launchDate: '2026-08-15',
  snapshot: {
    playersOnline: '67K+',
    visits: '65.5M+',
    approval: '99.3%',
    favorites: '122.9K+',
    serverSize: '9 Players',
  },
  developer: 'More & More Games',
  platform: 'Roblox',
  genre: 'Incremental RNG Simulator',
  rebirthPaths: '6',
  links: {
    game: 'https://www.roblox.com/games/113290951185459/Anime-Dice',
    developer: 'https://www.roblox.com/communities/33017480/More-More-Games',
    discord: 'https://discord.com/invite/ag5MCCu5aQ',
    guideVideo: 'https://www.youtube.com/watch?v=LBIeOz-tPnc',
    heroImage: 'https://tr.rbxcdn.com/180DAY-c841a50796d0f42b95b04cdef502686f/500/280/Image/Jpeg/noFilter',
  },
  sidebarCodes: [
    { code: 'UPDATE7', reward: 'UPD 7 free reward bundle', status: 'Active' },
    {
      code: 'UPDATE6',
      reward: 'Lucky Spins, Trait Rerolls, Tickets and Gems',
      status: 'Active',
    },
  ],
};
