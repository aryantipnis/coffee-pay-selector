# Coffee Payment Selector React App

Problem: Bob, Jeremy, and the other 5 coworkers in the Bertram Labs office love coffee. In fact, everyday, right after lunch, they walk down the street to their favorite coffee shop to grab a cup to go. Bob always gets a cappuccino, Jeremy likes his coffee black, and the others have their favorite coffee beverage too. To ease the checkout process, only one coworker pays for all the coffees each day. As you can imagine, they have a problem everyday: who's turn is it to pay for coffee? 

Challenge: Write a software program to help the coworkers decide who should pay for coffee. Consider that not all drinks cost the same, so to be fair please take this into account when crafting your solution. 

**This website is hosted at https://silly-crepe-a7f466.netlify.app**

## Installing dependencies: 
Run the following commands : 
* `npm install @mui/material @emotion/react @emotion/styled`
* `npm install @mui/icons-material`

## Run the Project

 **To run this project, type the following in the terminal : `npm start`** 

## Assumptions 
Please take into consideration the following **assumptions** while running this: 
 * Each coworker will only order his favorite drink everyday. (Eg: Bob -> Cappuccino, Jeremy -> Black Coffee, Max -> Hot Chocolate, Ben -> Cold Coffee, Joe -> Machiato, Jack -> Americano, Ryan -> Latte
 * There are only 7 coworkers and you cannot add more. Bob pays first. 
 * Prices of each coffee are set to default unless, you change them by clicking on Prices in the navbar.

## About the Application
  * This App allows the coworkers to place an order and evaluat who will pay next with just a click of a button. The person who owes the most, pays next time. Whenever, the place an order button is clicked, all the balances are calculated in displayed in the manage expenses section.
  * It also allows you to keep a track of the menu prices. You can change these by clicking the 'Prices' button in the navbar.
  * It keeps track of the balances (how much a person owes another) in the balance table. To view click 'Balances' in the navbar.
  * It also has a 'Settle All up' button to settle all balances. 


## Tech Stack
Following is the tech stack used for this project: 
  * Programming Language: `Javascript`
  * Framework : `React`
  * Version Control: `Git`

## Components of the App
  * `Balances.js` : Component for the balance table.
  * `Banner.js` : Component for the background image and order button
  * `Row.js` : Component for displaying the scrollable menu
  * `Navbar.js` : Component for the navbar
  * `Dialog.js` : Component for changing the menu prices
  * `manageBalances.js` : Calculates all the balances, payments and other functions

