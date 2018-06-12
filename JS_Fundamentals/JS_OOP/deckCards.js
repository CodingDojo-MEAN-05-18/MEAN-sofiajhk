// Create a Card class with the following functionality:
// each card should have a suite ("Hearts," "Clubs", "Diamonds", "Spades")
// each card should have a string value (eg: "Ace", "Two", ..., "Queen", "King")
// each card should have a numerical value (1-13)
// each card should have a show method (log the card's info to the console)

// Create a Deck class with the following functionality:
// deck should contain 52 standard cards
// deck should be able to shuffle
// deck should be able to reset
// deck should be able to deal a random card
// deal method should return the card that was dealth and remove from the deck

// Create a Player class with the following functionality:
// player should have a name
// player should have a hand (an array of cards taken from deck)
// player should be able to take a card (use the deck.deal method)
// player should be able to discard a card

class Card{
    constructor(value, name, suit){
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = []
    }
}

class Deck{
    constructor(){
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts','Diamonds','Spades','Clubs'];
        this.cards = [];
        
        for( var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                this.cards.push( new Card( n+1, this.names[n], this.suits[s] ) );
            }
        }

        return this
    }

    shuffle(){
        var currentIndex = this.cards.length; 
        var temporaryValue;
        var randomIndex;

        while(0!== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //This is the shuffle
            temporaryValue = this.cards[currentIndex]
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue
        }
        return this
    }

    reset(){
        this.cards = [];
        for( var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                this.cards.push( new Card( n+1, this.names[n], this.suits[s] ) );
            }
        }

        return this
    }

    deal(user){
        var dealt = this.cards[0]
        this.cards.splice(0,1)
        user.hand.push(dealt);
        return this
    }
}

const deck = new Deck();
const player = new Player
deck.shuffle();
deck.reset();
deck.deal(player);
console.log(player.hand)

