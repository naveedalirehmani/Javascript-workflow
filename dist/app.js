"use strict";

//? Expert level
// DOM
// type conversions
// objects
// array
// math operations
// functions
// conditional programing
// loops ( for , for of, for in, while and do while )

//  1.  When comparing 2 different data types, the comparison operators will convert both values to number
//      And the values converted to number will be compared
//  2.  The result of a comparison is always a boolean.
//  3.  When comparing strings, the comparison is based on lexigraphical order.
//  4.  Null & undefined are loosely equal to each other are are false in strict equality check
//  5.  Type ceorcion will not occur for null and undefined for equality check.

// begin	let i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// body	alert(i)	Runs again and again while the condition is truthy.
// step	i++	Executes after the body on each iteration.

// function callConsole(name){ // parameter
//     console.log(name)
//     return 
// }

var person = {
  name: "here"
};
console.log(Object.values(person));
