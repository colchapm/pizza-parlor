//Business Logic

function Pizza(size, meat, veggies) {
  this.size = size;
  this.meat = meat;
  this.veggies = veggies;
  this.currentPrice = 0;
}

Pizza.prototype.sizePrice = function(size) {
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




//User Interface Logic


let newOrder = new Pizza("10 inch", "pepperoni", "mushrooms")
