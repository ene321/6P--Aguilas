// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/07ed4b0c-ffa4-414c-aaf9-8609296a6624/";
let cards = [
    "card1.jpg?v=1710262602053",
    "card2.jpg?v=1710262625988",
    "card3.jpg?v=1710262673968",
    "card4.jpg?v=1710262691381",
    "card5.jpg?v=1710262710987",
    "card6.jpg?v=1710262754749 ",
    "Card7.jpg?v=1710262776709",
    "card8.jpg?v=1710262803702",

];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url + card + ")' class='card'>"
            );
        }
    }


};

// Button to Shuffle Cards


// Button to Flip All Cards


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});