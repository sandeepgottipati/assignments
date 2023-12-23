/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();

  transactions.forEach((transaction) => {
    let { category, price } = transaction;
    if (!map.get(category)) {
      map.set(category, price);
    } else {
      if (!typeof price === "number") {
        return;
      }
      let currentPrice = map.get(category);
      map.set(category, price + currentPrice);
    }
  });
  // console.log(map);
  const result = [];
  for (let [key, value] of map) {
    result.push({ category: key, totalSpent: value });
  }
  return result;
}
console.log(
  calculateTotalSpentByCategory([
    { id: 1, category: "Food", price: 10 },
    { category: "electronics", price: 10 },
    { category: "Food", price: 20 },
  ]),
);
module.exports = calculateTotalSpentByCategory;
