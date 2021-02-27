//Business Logic

function Pizza(size, meatArray, veggies) {
  this.size = size;
  this.meatArray = meatArray;
  this.veggies = veggies;
  this.currentPrice = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "6 inch") {
    this.currentPrice = 6;
  } 
  else if (this.size === "10 inch") {
    this.currentPrice = 14;
  }
  else {
    this.currentPrice = 18;
  }
  return this.currentPrice;
}

Pizza.prototype.meatPrice = function() {
  this.currentPrice = this.currentPrice + (this.meatArray.length * 2.5);
  return this.currentPrice;
}


//User Interface Logic

meatArray = ["pepperoni"];
veggieArray = ["mushrooms"]
let size = "10 inch"

let newOrder = new Pizza(size, meatArray, veggieArray)
