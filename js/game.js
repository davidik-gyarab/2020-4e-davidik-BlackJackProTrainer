const suits = ["H", "D", "C", "S"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = new Deck(6);
let discardDeck = [];
deck.createDeck(suits, values);
deck.shuffle();
deck.shuffle();
var table = document.getElementById("table");
let game = new Table();
//Nastavení hry --> zde lze upravit jak bude vypadat balíček
