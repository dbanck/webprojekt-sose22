/*
kommentar
ueber viele 
zeilen
*/
alert("hello world!");

alert("hello"); // Gibt hello world aus

/*
 * Variablen
 */

let messageInABottle = "Hello Basti";
let anotherMessage = "Hello World";

anotherMessage = messageInABottle;
messageInABottle = "FREI erfunden sind";

alert(messageInABottle);
alert(anotherMessage);

const DAYS_OF_WEEK = 7;

const daysOfALongerWeek = 8;

/*
 * Math
 */

let a = 5;
let b = 6;

let add = a + b; // 11
let sub = a - b; // -1
let mul = a * b; // 30
let div = a / b; // is mir egal

let complex = a * (b - 3 + 55.555 / a); // 70

let c = 1 / 0; // Infinity
let d = 1 / "a"; // NaN

alert(d);

/*
 * Bedingungen
 */

let price;
let age = 16;

let isChild = age < 16; // true oder false

if (isChild === true) {
  // Kinder bekommen Rabatt
  price = 2;

  alert("Du bist ein Kind");
} else if (age > 60) {
  // Rentner bekommen Rabatt
  price = 5;

  alert("Du bist ein alter mensch");
} else {
  // Standard
  price = 10;
}

alert(price);

/*
 * Funktionen
 */

function showMessage(name, greeting) {
  let message = greeting + " " + name;

  alert(message);
}

showMessage("Basti", "Yoooo");

function add(a, b, c) {
  let ergebnis = a + b + c;

  return ergebnis;
}

function sub(...arguments) {
  alert(arguments);
}

sub(1, 2, 3, 4);

function showPopup() {
  alert("HIER KOENNTE IHRE WERBUNG STEHEN");
}

setTimeout(showPopup, 2 * 1000);
