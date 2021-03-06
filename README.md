# C Street Pizza Cafe

### Epicodus Independent Code Review - Object-Oriented JavaScript

### By Collin Chapman

## Technologies Used

* Git
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This webpage is for my pizza kitchen. It lets a user choose one or more individual toppings and a size to order a pizza and then displays the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order
* Create a pizza object constructor with properties for toppings and size
* Create a prototype method for the cost of a pizza depending on the selections chosen

## Setup/Installation Requirements

  1. Clone this repository to your desktop
  2. Navigate to the top level of the directory
  3. Open index.html in your browser 

## Tests

**Test 1** Test: "It should create a Pizza object".

Expect(let newOrder = new Pizza("10 inch", "pepperoni", "mushrooms")).toEqual(Pizza {size: "10 inch", meat: "pepperoni", veggies: "mushrooms", currentPrice:0})

**Test 2** 

Describe: Pizza.prototype.sizePrice()

Test: "It should return price of the pie depending on the size that was selected"

Expect(newOrder.sizePrice("14 inch")).toEqual(18)

**Test 3** 

Describe: Pizza.prototype.meatPrice()

Test: "It should return price of the pie depending on number of meat toppings selected"

Expect(newOrder.meatPrice("pepperoni")).toEqual(16.5)

**Test 4**

Describe: Pizza.prototype.veggiePrice()

Test: "It should return price of the pie depending on number of veggie toppings selected"

Expect(newOrder.veggiePrice("fresh mushrooms")).toEqual(17.5)


## Known Bugs

No known bugs at this time

## Link

https://colchapm.github.io/pizza-parlor/

## License

Copyright (c) 2021 Collin Chapman

This software is licensed under the MIT license

## Contact Information

cchap14@gmail.com