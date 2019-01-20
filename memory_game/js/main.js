
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else{
		console.log("Sorry try again.");
	}
}

var flipCard = function(cardId){
console.log("User flipped " + cards[cardId]);

if (cardsInPlay.length === 2){
	checkForMatch()
}
	// if (cardsInPlay[0] === cardsInPlay[1]){
	// 	alert("You found a match!");
	// } else{
	// 	alert("Sorry try again.");
	// }


cardsInPlay.push(cards[cardId]);
}
// 

// var flipCard = function(cardId){

// if (cardsInPlay.length === 2){
// 	checkForMatch();
// 	}

// 	console.log("user flipped " + cards[cardId]);

// 	cardsInPlay.push(cards[cardId]);
// }


		flipCard(0);
		flipCard(2);








