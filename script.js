class CardDeck {
	constructor(deckElement, handElement) {
		this.deckElement = document.querySelector(deckElement);
		this.handElement = document.querySelector(handElement);
		this.cards = [
			{ id: "c-2", name: "2 of Clubs", rank: 2, suit: "clubs", inHand: false },
			{ id: "c-3", name: "3 of Clubs", rank: 3, suit: "clubs", inHand: false },
			{ id: "c-4", name: "4 of Clubs", rank: 4, suit: "clubs", inHand: false },
			{ id: "c-5", name: "5 of Clubs", rank: 5, suit: "clubs", inHand: false },
			{ id: "c-6", name: "6 of Clubs", rank: 6, suit: "clubs", inHand: false },
			{ id: "c-7", name: "7 of Clubs", rank: 7, suit: "clubs", inHand: false },
			{ id: "c-8", name: "8 of Clubs", rank: 8, suit: "clubs", inHand: false },
			{ id: "c-9", name: "9 of Clubs", rank: 9, suit: "clubs", inHand: false },
			{ id: "c-10", name: "10 of Clubs", rank: 10, suit: "clubs", inHand: false },
			{ id: "c-J", name: "Jack of Clubs", rank: 11, suit: "clubs", inHand: false },
			{ id: "c-Q", name: "Queen of Clubs", rank: 12, suit: "clubs", inHand: false },
			{ id: "c-K", name: "King of Clubs", rank: 13, suit: "clubs", inHand: false },
			{ id: "c-A", name: "Ace of Clubs", rank: 14, suit: "clubs", inHand: false },
			{ id: "d-2", name: "2 of Diamonds", rank: 2, suit: "diamonds", inHand: false },
			{ id: "d-3", name: "3 of Diamonds", rank: 3, suit: "diamonds", inHand: false },
			{ id: "d-4", name: "4 of Diamonds", rank: 4, suit: "diamonds", inHand: false },
			{ id: "d-5", name: "5 of Diamonds", rank: 5, suit: "diamonds", inHand: false },
			{ id: "d-6", name: "6 of Diamonds", rank: 6, suit: "diamonds", inHand: false },
			{ id: "d-7", name: "7 of Diamonds", rank: 7, suit: "diamonds", inHand: false },
			{ id: "d-8", name: "8 of Diamonds", rank: 8, suit: "diamonds", inHand: false },
			{ id: "d-9", name: "9 of Diamonds", rank: 9, suit: "diamonds", inHand: false },
			{ id: "d-10", name: "10 of Diamonds", rank: 10, suit: "diamonds", inHand: false },
			{ id: "d-J", name: "Jack of Diamonds", rank: 11, suit: "diamonds", inHand: false },
			{ id: "d-Q", name: "Queen of Diamonds", rank: 12, suit: "diamonds", inHand: false },
			{ id: "d-K", name: "King of Diamonds", rank: 13, suit: "diamonds", inHand: false },
			{ id: "d-A", name: "Ace of Diamonds", rank: 14, suit: "diamonds", inHand: false },
			{ id: "h-2", name: "2 of Hearts", rank: 2, suit: "hearts", inHand: false },
			{ id: "h-3", name: "3 of Hearts", rank: 3, suit: "hearts", inHand: false },
			{ id: "h-4", name: "4 of Hearts", rank: 4, suit: "hearts", inHand: false },
			{ id: "h-5", name: "5 of Hearts", rank: 5, suit: "hearts", inHand: false },
			{ id: "h-6", name: "6 of Hearts", rank: 6, suit: "hearts", inHand: false },
			{ id: "h-7", name: "7 of Hearts", rank: 7, suit: "hearts", inHand: false },
			{ id: "h-8", name: "8 of Hearts", rank: 8, suit: "hearts", inHand: false },
			{ id: "h-9", name: "9 of Hearts", rank: 9, suit: "hearts", inHand: false },
			{ id: "h-10", name: "10 of Hearts", rank: 10, suit: "hearts", inHand: false },
			{ id: "h-J", name: "Jack of Hearts", rank: 11, suit: "hearts", inHand: false },
			{ id: "h-Q", name: "Queen of Hearts", rank: 12, suit: "hearts", inHand: false },
			{ id: "h-K", name: "King of Hearts", rank: 13, suit: "hearts", inHand: false },
			{ id: "h-A", name: "Ace of Hearts", rank: 14, suit: "hearts", inHand: false },
			{ id: "s-2", name: "2 of Spades", rank: 2, suit: "spades", inHand: false },
			{ id: "s-3", name: "3 of Spades", rank: 3, suit: "spades", inHand: false },
			{ id: "s-4", name: "4 of Spades", rank: 4, suit: "spades", inHand: false },
			{ id: "s-5", name: "5 of Spades", rank: 5, suit: "spades", inHand: false },
			{ id: "s-6", name: "6 of Spades", rank: 6, suit: "spades", inHand: false },
			{ id: "s-7", name: "7 of Spades", rank: 7, suit: "spades", inHand: false },
			{ id: "s-8", name: "8 of Spades", rank: 8, suit: "spades", inHand: false },
			{ id: "s-9", name: "9 of Spades", rank: 9, suit: "spades", inHand: false },
			{ id: "s-10", name: "10 of Spades", rank: 10, suit: "spades", inHand: false },
			{ id: "s-J", name: "Jack of Spades", rank: 11, suit: "spades", inHand: false },
			{ id: "s-Q", name: "Queen of Spades", rank: 12, suit: "spades", inHand: false },
			{ id: "s-K", name: "King of Spades", rank: 13, suit: "spades", inHand: false },
			{ id: "s-A", name: "Ace of Spades", rank: 14, suit: "spades", inHand: false },
		];
		this.possibleCards = this.cards;
		this.init();
	}
	init() {
		this.buildDeck();
		this.shuffleDeck();
	}

	generateRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	buildDeck() {
		this.deckElement.innerHTML = "";

		this.cards.forEach((card) => {
			let cardElement = `
			<div id="${card.id}" class="card" data-in-hand="${card.inHand}" data-rank="${card.rank}" data-suit="${card.suit}">
				<div class="card-face-wrapper">
					<img alt="${card.name}" src="assets/cards/${card.id}.svg">
					<div class="card-back"></div>
				</div>
			</div>`;
			this.deckElement.insertAdjacentHTML("beforeend", cardElement);
		});

		let cardElements = this.deckElement.children;
		for (let cardElement of cardElements) {
			cardElement.addEventListener("click", (e) => {
				if (cardElement.dataset.inHand == "true") {
					this.moveToDeck(cardElement.id);
				} else {
					this.moveToHand(cardElement.id);
				}
			});
			this.ruffleCardElement(cardElement);
		}
	}

	shuffleDeck() {
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
		this.buildDeck();
	}

	ruffleCardElement(cardElement) {
		if (cardElement.dataset.inHand !== "true") {
			let rotation = this.generateRandomNumber(-10, 10) + "deg";
			let X = this.generateRandomNumber(-10, 10) + "px";
			let Y = this.generateRandomNumber(-10, 10) + "px";
			cardElement.style.transform = `rotate(${rotation}) translate3D(${X}, ${Y}, 0px)`;
		}
	}
	moveToHand(id) {
		let card = this.cards.find((x) => x.id === id);
		let cardElement = document.getElementById(id);
		cardElement.style.transform = "";
		card.inHand = true;

		this.handElement.appendChild(cardElement);
		setTimeout(() => {
			document.getElementById(id).dataset.inHand = "true";
		}, 10);
	}

	moveToDeck(id) {
		let card = this.cards.find((x) => x.id === id);
		let cardElement = document.getElementById(id);

		document.getElementById(id).dataset.inHand = "false";
		setTimeout(() => {
			card.inHand = false;
			this.deckElement.appendChild(cardElement);
			this.ruffleCardElement(cardElement);
		}, 600);
	}

	sort() {
		this.possibleCards = this.possibleCards.sort((a, b) =>
			a.suit > b.suit ? 1 : a.suit === b.suit ? (a.rank > b.rank ? 1 : -1) : -1
		);
	}

	filter(cardProp = null, values = []) {
		this.possibleCards = this.possibleCards.filter((card) => values.includes(card[cardProp]));
	}

	limit(number) {
		this.possibleCards = this.possibleCards.slice(0, number);
	}
}

/*------------------------------------------*/
//  Use the above predefined class and its
//  methods to complete the challenge.
//
//  Your code goes below this comment.
/*------------------------------------------*/


// Create a new card deck.
const deck = new CardDeck(".deck", ".hand");

// Take a look at the deck object.
console.log(deck);

