'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${
    type.startsWith('_Delayed') ? '🛑' : ''
  }   ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// Destructuting array
const arr = [7, 8, 9];
const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewarr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copying an existing array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT Objects
const str = 'Aditi';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristotrante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// SPREAD, because on Right side of =
const arr1 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = (assignment operator)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Using REST and SPREAD together

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Rest operator with functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 2);

// Short Circuiting with || OR Operator

console.log(3 || 'Aditi');
console.log('' || 'Aditi');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined ( NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Short Circuiting with && AND Operator (it works in opposite way of OR operator)

console.log(0 && 'Aditi');
console.log(7 && 'Aditi');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

// OR Assignment Operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
// && Operator short circuits when first value is falsy

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Aditi'));

console.log(orderSet.size); // to check size/length

console.log(orderSet.has('Pizza')); // to check if an item is present in set or not
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread'); // To add another elememt to existing set
orderSet.add('Garlic Bread');

orderSet.delete('Risotto'); // To delete an item from set
console.log(orderSet);

// looping is possible only for iterables
for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano'); // to add use set
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// use 'get' to get data from the map
rest.get('name');
rest.get(true);
rest.get(1);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // to check if map has a certain key
rest.delete(2); // to delete a key from map
console.log(rest);

console.log(rest.size); // to check the size
// rest.clear(); //  to clean a map entirely
console.log(rest);

// Adding keys to map method other than set (by creating new map)
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);

// Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Not hardcoding the values of string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Lowercase & Uppercase

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fixing capitalisation in name
const passenger = 'aDiTI';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = 'as@aditisingh.dev';
const loginEmail = '   As@Aditisingh.Dev \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

// Replacing
const priceInd = '288,97Rs';
const priceUS = priceInd.replace('Rs', '$').replace(',', '.');
// const priceL = priceInd.replace(',', '.');
console.log(priceUS);
// console.log(priceL);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are not allowed');
  } else console.log('welcome aboard');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and Join

console.log('a+very+nice+string'.split('+'));
console.log('Aditi Singh'.split(' '));

const [firstName, lastName] = 'Aditi Singh'.split(' ');

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('aditi singh');

// Padding Strings
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Aditi'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(459593945));
console.log(maskCreditCard(85030802848305));
console.log(maskCreditCard(9509590348885));

// Repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));
