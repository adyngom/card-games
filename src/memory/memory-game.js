import { shuffle } from "../utils/shuffle";

const faces = [
  "1_cat",
  "2_dog",
  "3_fish",
  "4_parakeet",
  "5_rabbit",
  "6_cow",
  "7_pig",
  "8_rooster",
  "9_sheep",
  "10_horse",
  "11_gorilla",
  "12_snake",
  "13_toucan",
  "14_leopard",
  "15_frog",
  "16_lion",
  "17_antelope",
  "18_elephant",
  "19_giraffe",
  "20_zebra",
  "21_koala",
  "22_kangaroo",
  "23_ostrich",
  "24_platypus",
  "25_ferret",
  "26_shark",
  "27_clownfish",
  "28_octopus",
  "29_starfish",
  "30_jellyfish",
  "31_crocodile",
  "32_turtle",
  "33_cobra",
  "34_viper",
  "35_chameleon",
  "36_bug",
  "37_flyingant",
  "38_butterfly",
  "39_ant",
  "40_caterpillar",
  "41_spider",
  "42_stingray",
  "43_scorpion",
  "44_lobster",
  "45_crab",
  "46_buck",
  "47_bear",
  "48_fox",
  "49_owl",
  "50_hare",
];

export const MemoryGame = Object.freeze({
  deck: {
    1: 24,
    2: 36,
    3: 48,
  },

  init(level = 2) {
    const deckSize = !!level && level <= 3 ? this.deck[level] : this.deck["1"];
    return new Promise((resolve, reject) => {
      const playDeck = initDeck(deckSize);
      if (playDeck.length === deckSize) {
        resolve(playDeck);
      } else {
        reject((error) => console.log(error));
      }
    });
  },
});

function initDeck(deckSize) {
  const facesLength = deckSize / 2;
  let deck = shuffleDeck(faces).slice(0, facesLength);
  let cloned = Array.from({ length: 2 }, () => deck).flat();
  return shuffleDeck(cloned);
}

function shuffleDeck(cards) {
  return shuffle(cards);
}
