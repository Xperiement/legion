import Game1 from "./1.png";
import Game2 from "./2.png";
import Game3 from "./3.png";
import Game4 from "./4.png";

import VGame1 from "./vertical/1.png";
import VGame2 from "./vertical/2.png";
import VGame3 from "./vertical/3.png";
import VGame4 from "./vertical/4.png";

import heroGameLogo from "./plundur/logo.png";
import heroGameTitle from "./plundur/title.png";
import heroGameCover from "./plundur/cover.gif";

// credit :: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const data = [
  {
    title: "Plundur",
    cover: Game1,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Map magic",
    cover: Game2,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Search mania",
    cover: Game3,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Code now",
    cover: Game4,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
];

export const data2 = [
  {
    title: "Krunker",
    cover: VGame1,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Competitive",
    cover: VGame2,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Search mania",
    cover: VGame3,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
  {
    title: "Code now",
    cover: VGame4,
    url: "https://krunker.io",
    loading: "https://epicX67.github.io",
  },
];

export const heroGame = {
  logo: heroGameLogo,
  title_logo: heroGameTitle,
  title: "Plundur.io",
  cover: heroGameCover,
  url: "https://krunker.io",
  loading: "https://epicX67.github.io",
  info: "One of the newest titles to debut in the IO-game industry, a brand new multiplayer survival game by Legion Platforms.",
};
