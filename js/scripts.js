//Business Logic

function Pizza(size, meatArray, veggieArray, diningOption) {
  this.size = size;
  this.meatArray = meatArray;
  this.veggieArray = veggieArray;
  this.diningOption = diningOption;
  this.currentPrice = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "6 inch") {
    this.currentPrice = 6;
  } 
  else if (this.size === "10 inch") {
    this.currentPrice = 12;
  }
  else {
    this.currentPrice = 18;
  }
  return this.currentPrice;
}

Pizza.prototype.meatPrice = function() {
  this.currentPrice = this.currentPrice + (this.meatArray.length * 2.5);
  if (this.meatArray.includes("ham")) {
    this.currentPrice += 15;
  }
  return this.currentPrice;
}

Pizza.prototype.veggiePrice = function() {
  this.currentPrice = this.currentPrice + (this.veggieArray.length * 1);
  return this.currentPrice;
}

Pizza.prototype.diningOptionPrice =function() {
  if (this.diningOption === "Delivery") {
    this.currentPrice += 5;
  }
  return this.currentPrice;
}


//User Interface Logic

$(document).ready(function() {
  $("form#selections").submit(function(event) {
    event.preventDefault();
    let diningOption = $("#dining-option").val();
    let size = $("#size").val();
    meatArray = [];
    veggieArray = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      meatArray.push($(this).val());
    });
    $("input:checkbox[name=veggies]:checked").each(function(){
      veggieArray.push($(this).val());
    })
    let newOrder = new Pizza(size, meatArray, veggieArray, diningOption)
  
    newOrder.sizePrice();
    newOrder.meatPrice();
    newOrder.veggiePrice();
    newOrder.diningOptionPrice();
    const total = newOrder.currentPrice;
    $("#total").show();
    $("#output").text(total)
  })
})

