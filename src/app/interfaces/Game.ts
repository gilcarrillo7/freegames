enum Platform {
  PCWindows = "PC (Windows)",
  WebBrowser = "Web Browser",
}

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: Platform;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}
