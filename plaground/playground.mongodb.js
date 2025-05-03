
// Select the database to use.
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
    "Name": "c",
    "price": 20000,
    "Instrucot": "Harry"
  },
  {
    "Name": "c++",
    "price": 20000,
    "Instrucot": "Harry"
  },
  {
    "Name": "c#",
    "price": 20000,
    "Instrucot": "Harry"
  }
]);


// Print a message to the output window.
console.log(`Data is addded to the databse.`);

