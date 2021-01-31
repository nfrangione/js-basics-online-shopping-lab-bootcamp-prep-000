var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //write your code here
 var itemName = item;
 var price = Math.floor(Math.random()*100) + 1;
 var itemPrice = price;
 var itemWithPrice = {itemName, itemPrice};
 cart.push(itemWithPrice);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartMessage = "";
  var price = [];
  var item = [];
  var itemWithPrice;
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    itemWithPrice = cart[0];
    item = Object.values(itemWithPrice)[0];
    price = Object.values(itemWithPrice)[1];
    cartMessage = `In your cart, you have ${item} at $${price}.`;
    return cartMessage;
  }
  else {
    cartMessage = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      itemWithPrice = cart[i];
      item = Object.values(itemWithPrice)[0];
      price = Object.values(itemWithPrice)[1];
      if (i === cart.length-1) {
        cartMessage += `and ${item} at $${price}.`;
      }
      else {
        cartMessage += `${item} at $${price}, `;
      }
    }
    return cartMessage;
  }
}

function total() {
  // write your code here
  var itemWithPrice;
  var price = [];
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    itemWithPrice = cart[i];
    price = Object.values(itemWithPrice)[1];
    total += price;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemWithPrice;
  var itemName = [];
  var i = 0;
  while (itemName !== item & i < cart.length) {
    itemWithPrice = cart[i];
    itemName = Object.values(itemWithPrice)[0];
    i++;
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
