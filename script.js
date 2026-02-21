/*
Bryan Palma
Date: 02/19/2026   
CSC 372-01
For this assignment I implemented a script that will allow a user to use a favorites 
button where it will create an unordered list at the bottom of the page as well as the price 
of the dishes. 
*/


const cards = document.querySelectorAll(".card");

const summarySection = document.createElement("section");
summarySection.id = "favorites-summary";

const summaryTitle = document.createElement("h2");
summaryTitle.textContent = "Your Favorites!";

const favoriteList = document.createElement("ul");

//paragraph that displays the total price
const totalPrice = document.createElement("p");
totalPrice.id = "total-price";
totalPrice.textContent = "Total: $0";

//putting the title, list of favorites, and total price into the summary section
summarySection.appendChild(summaryTitle);
summarySection.appendChild(favoriteList);
summarySection.appendChild(totalPrice);

//putting the favorites summary into the bottom of main
document.querySelector("main").appendChild(summarySection);

//track the total
let total = 0;

//array of prices (I am too lazy to find the real prices so this is by memory XD)
const prices = [14, 13, 11, 12, 42, 16, 10, 11, 10];

cards.forEach(function(card, index){
    const dishes = card.querySelector("h3").textContent;

    const price = prices[index];

    const priceTag = document.createElement("p");
    priceTag.textContent = "Price: $" + price;

    // Add price display to the card
    card.appendChild(priceTag);


    const button = document.createElement("button");
    button.textContent = "Add to Favorites";

    // Add CSS class for styling
    button.classList.add("favorite-btn");

    // Add button to the card
    card.appendChild(button);

    let listItem = null;

    button.addEventListener("click", function () {

        // If card is NOT currently a favorite
        if (!card.classList.contains("favorite")) {

            // Add visual highlight
            card.classList.add("favorite");

            // Change button text
            button.textContent = "Remove from Favorites";

            // Create list item for favorites section
            listItem = document.createElement("li");
            listItem.textContent = dishes + " - $" + price;

            // Add dish to favorites list
            favoriteList.appendChild(listItem);

            // Add price to running total
            total += price;

            //update total
            totalPrice.textContent = "Total: $" + total;

        } else {
            card.classList.remove("favorite");

            button.textContent = "Add to Favorites";

            favoriteList.removeChild(listItem);

            total -= price;

            totalPrice.textContent = "Total: $" + total;
        }

    });


});