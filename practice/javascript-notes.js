//! "USE STRICT"
//? why use strict exists.

//! VARIABLES

//? A variable
//? A real-life analogy
//? Variable naming
//? Constants
//? Name things right / naming conventions / and deciding a proper variable name.

//! DATA TYPES

//? Number
//? BigInt
//? String
//? Boolean (logical type)
//? The “null” value
//? The “undefined” value
//? Objects and Symbols
//? The typeof operator

//! alert, prompt, confirm

//! TYPE CONVERSTIONS

//? String Conversion
//? Numeric Conversion
//? Boolean Conversion

//! BASIC OPERATORS AND MATH OBJECT.

//? Terms: “unary”, “binary”, “operand”
//? Maths and maths objects.
//? String concatenation with binary +
//? Numeric conversion, unary +
//? Operator precedence
//? Assignment / channing.
//? Modify-in-place += -=
//? Increment / decrement / postfix vs prefix
//? Bitwise operators

//! CAMPARISONS

//? Boolean is the result / All comparison operators return a boolean value:
//? String comparison
//? Comparison of different types
//? Strict equality
//? Comparison with null and undefined

//! LOGICAL OPERATORS

//? OR ||
//? AND &&
//? NOT !
//? NULLISH COLESCING ??

//! LOOPS

//? The “while” loop
//? The “do…while” loop
//? The “for” loop
//? shorter syntax for loops.
//? Breaking the loop
//? Continue to the next iteration
//? Labels for break/continue

//! OBJECTS

//? Objects: the basics
//? Literals and properties
//? Square brackets
//? Property existence test, “in” operator / why not use undefined.
//? Property value shorthand / Property names limitations
//? The "for..in" loop
//? are objects properties sorted?

//! ARRAYS

//? Declaration / trailing comma / value of any type
//? Get last elements with “at” vs length
//? Methods pop/push, shift/unshift / queue vs stack.
//? Internals / array is object / obj[] syntax vs arr[] / contiguous memory.
//? misuse of arrays / treating arrays as objects. / filling in reverse / making holes.
//? Performance / push pop vs shift unshift.
//? Loops / for of vs for in. / 10 to 100 speed difference.
//? A word about “length”
//? Multidimensional arrays
//? toString / String(array) and [1,2] + 1
//? array methods / map , forEach , reduce , flat , sort and filter
//? Don’t compare arrays with == / WILL BE DISCUSSED LATER.

//! THE IF STATEMENT

//? The “if” statement
//? Boolean conversion
//? The “else” clause
//? Several conditions: “else if”
//? Conditional operator ‘?’
//? Multiple ‘?’
//? Non-traditional use of ‘?’

//! THE SWITCH STATEMENT

//? The syntax
//? An example
//? Grouping of “case”
//? Type matters

//TODO !THE TIME OBJECT.

//! FUNCTIONS

//? Function Declaration
//? Local variables
//? Outer variables
//? Outer variables are shadowed by locals
//? functions get the copy of the value.
//? arguments vs parameters
//? Default values / value and functions
//? Returning a value / return multiple values / return undefined
//? Naming a function
//? Functions == Comments
//? Function is a value
//? Callback functions
//? Function Expression vs Function Declaration
//? Arrow functions / can replace expression functions / shorter syntax.
//TODO ?Arrow functions and this keyword.

//! THE WINDOW OBJECT
//! DOM MANIPULATION

//? to select body

// const body = document.body;
//? to createElements

// const div = document.createElement('div');
// const H1 = document.createElement('h1');

//? both are same but with append you can append text
// body.append(div); //* or body.append('appending text')
// body.appendChild(div); //* only appendChild with elements no inserting text like append;

//?adding Text
// H1.append('text with append'); //* for appending element into element but can also create text;
// H1.textContent = 'text with textContent'; //* on console will give all content eg display:none and also all spaces;
// H1.innerText = 'text with innerText'; //* on console only will give text;
// H1.innerHTML = 'text with innerHtml <p>hello</p>'; //* or H1.innerHTML = '<p>a p tag with innerHTMl</P>';
// div.append(H1);

//? removing element from the DOM

// const title = document.querySelector('button'); //* selecting with class id or element type;
// div.append(title);
// div.removeChild(title); //* to remove from parent;
// title.remove(); //* remove the respective element;

//? working with attributes

// console.log(title.getAttribute('class')); //* or title.class
// title.setAttribute('id','titleId') //* or title.id = titleId
// title.removeAttribute('id');

//? adding class or remove or toggle

// const subtitle = document.querySelector('#subtitleid');
// subtitle.classList.add('classWithJS') //* to add class
// subtitle.classList.remove('classWithJS') //* to remove class
// subtitle.classList.toggle('classWithJS') //* to toggle addOrRemove class in the basis of existence

//* DOM TRAVERSING, it's the act of selecting an element from another element.
//* THREE WAYS OF TRAVERSING THE DOM

//? 1. UPWARDS 2. DOWNWARDS 3. SIDEWAYS

//? 1. DOWWARDS => children, querySelectorAll, querySelector

// const li = document.querySelector('.ul');
// const allLi = li.children;
// const array = Array.from(allLi);
// array.forEach(element=>element.innerText= 'thisisis inner text')

// const allLi2 = document.querySelectorAll('.li')
// allLi2.forEach(element=>element.innerText= 'this is inner text this is inner text')

//? 2. UPWARDS => parentElement, closest

// const li = document.querySelector('.li');
// const ul = li.parentElement;
// const ul2 = li.closest('ul');
// console.log(ul2,ul);

//? 3. SIDEWAYS => previousElementSibling, nextElementSibling

// const li = document.querySelector('.li');
// const prev = li.previousElementSibling.innerText= 'prec this is';
// const next = li.nextElementSibling.innerText= 'next this is';
// console.log(prev);
// console.log(next);

//? Event listners and Event Object.
//? Mouse event and keyboard Events.
//? Event bubbling and Event daligation

//! Local & Session Storage.
//* Browser independent.
//? local Storage
//* 10mb / Any Window / Never / not with request]
// localStorage.setItem('name',"bob")
// const value = localStorage.getItem('name')
// localStorage.reomveItem('name')
//? session Storage
//* 5mb / same tab / on tab close / not with request
// sessionStorage.setItem('name',"sessionBob")
// sessionStorage.getItem('name')
// sessionStorage.removeItem('name')

//! Encapsulation
//! Abstraction
//! Polymorphism
//! object literals / why not to use them.
//! Constructor Function / Factory function

//? using this keyword with constructor function.
//? returning objects from Factory functions.

//! The constructor function

//? object.construtor
//? new String() / new Object
//? circle.call({},1) vs new Circle() circle.apply({},[1,2])
//? removing this keyword to make properties private / abstraction.

//! Inheritance / prototypes

//*
//*           Instance      Constructor
//*               |              |
//*               |              |
//*       const fruit  =  new String('almonds') <---------|     Base-Object
//*               |              |                        |          |
//*               |              |                        |          |
//*           __proto__ ---> prototype.constructor -------|    new Object()   <-------------|
//*                              |                                   |                      |
//*                              |                                   |                      |
//*                          __proto__ -----------------------> prototype.constructor ------|
//*                                                                  |
//*                                                                  |
//*                                                              __proto__ -----------------> null
//*
//*

//? constructor Functions / prototype object / __proto__ property / constructor
//* every constructor function or class has only 1 AND 1 prototype object
//* This prototype object is shared across all instances of this function.
//* Every instance has a __proto__ property which is the reference to the prototype property of the constructor function.
//* this prototype object has a property called constructor which is the reference to the constructor function itself.
//? added methods with this vs prototype.method
//? [] vs new Array()
// const arr = new Array()
// console.log( arr.__proto__ === Array.prototype , 'arr.__proto__ === Array.prototype' ); // true
// console.log( Array.prototype.constructor === Array , "Array.prototype.constructor === Array" ); //true
// console.log(arr.__proto__.constructor === Array , "arr.__proto__.constructor === Array"); //true
// console.log( Array.prototype.__proto__ === Object.prototype , "Array.prototype.__proto__ === Object.prototype") //true
//? The __proto__ property of Object and strings.
// console.log(Object.prototype.__proto__)
// console.log('name'.__proto__.__proto__.__proto__)
//? introduction to classes with prototypes.
// class Person {
// }
// class Student extends Person {
// }
// console.log(Student.prototype.__proto__.__proto__.__proto__)
//TODO ? introduction to classes
//TODO ? setters and getters

//! Error handling with try catch

//? The “try…catch” syntax
//? parse time vs runtime
//? working with async code
//? Error object // error.name // error.message.
//? Optional “catch” binding // can omit catch()
//? Using “try…catch” // working with a real file example
//? Throwing our own errors // undifend is not an error // not receiving required property
//? build in error constructores
//? try…catch…finally // finally will always execute even on returns
//? Global catch

//! AJAX.

//* AJAX stands for Asynchronous JavaScript And XML. it is the use of the XMLHttpRequest to communicate with servers.
//* It can send and receive information in various formats, including JSON, XML, HTML, and text files.

// const results = document.querySelector('div')

// function getFruits() {
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'http://localhost:5000/fruits' , true);
// xhr.onload = function(){
//   if(xhr.status === 200){
//     console.log(JSON.parse(this.response))
//     let fruits = JSON.parse(this.response);
//     const ul = document.createElement('ul')
//     for(let element of fruits){
//       const li = document.createElement('li')
//       li.innerText = element.name;
//       ul.appendChild(li)
//     }s
//     results.appendChild(ul)

//   }

// }

// xhr.send()
// }

//! THE EVENT LOOP.
//! MAIN THREAD / MAIN ∂
//! CALL STACK
//! WEB API'S / NODE API'S

//? example 1
// const x = 1;
// const y = x+2;
// console.log('sum',y)
//? example 2
// const fruit = ['almonds','apples']

// function listFruits (){
//   fruit.forEach(item=>{
//     console.log(item)
//   })
// }

// listFruits();

// //* log
// //* anynomouseFunction
// //* forEach
// //* listFruits
// //* main

//? example 3
// console.log('starting...')
// setTimeout(()=>{
//   console.log('two seconds')
// },2000)
// setTimeout(()=>{
//   console.log('zero seconds')
// },0)
// console.log('ending...')

//* call stack                    NODE api's                    callbackQueue/Eventloop

//! THE EVENT LOOP IN BROWERS

//while(true){
// console.log('here')
// }

//function upateUI(){
// updateScreen();
// requestAnimationFrame(updateUI)
// }
//* VS
// updateUI()
//function upateUI(){
// updateScreen();
// setTimeout(updateUI,0)
// }
// updateUI()

//! task queues
//* this includes all the callbacks or any javascript function that are called

//! The Render Steps.
//* 	requestNextAnimationFrame.
//* 	style calculations => calculating what styles need to change.
//* 	layout/ creating a render tree / figuring out where every thing is on the layout
//* 	creating pixel data => creating the actual pixels on the screen.
//* using setTimeout in a loop to change UI is not recommended, instead use requestNextAnimationFrame, this is because requestAnimationFrame runs when browsers decides to do so on the other hand setTimeout will force the browser to change ui even if it is not neccesary for example change a div position on a screen 80 times in a sec because the loop runs 80 times in a minute but the screen is only 60 hrtz, for example a setTimeOut let say will run 4 times in a sec but the screen framerate is only 1 per sec.

//! MicroTasks

// while(true){
//   Promise.resolve().then(()=>console.log('here'))
// }

// Promise.resolve().then(()=>console.log('here'))
// console.log('micro ended')

// const button = document.querySelector('button')

// button.addEventListener('click',()=>{
//   Promise.resolve().then(()=>console.log('micro 1'));
//   console.log('listener 1');
// })
// button.addEventListener('click',()=>{
//   Promise.resolve().then(()=>console.log('micro 1'));
//   console.log('listener 1');
// })

// button.click();

//* render steps all run together in a single thread tick any new render requests during this process will be queued for later, and task queues will run one by one in each respective tick and new task will be added on to the stack for later execution. Microtask run once all the javascript is executed and there is nothing in the task queue, but once the execution starts here it will also execute all the new requested microtask that are requested in the process phase, this means added a microtask to a infinite loop will freeze the browser

// Microtasks are a category of tasks that execute immediately after the currently executing script and before yielding back to the event loop. Microtasks have a higher priority than regular tasks (often referred to as macrotasks) in the event loop. Examples of microtasks include promise handlers (then, catch, or finally callbacks).

// const button = document.querySelector('button')
// const box = document.querySelector('div')

// button.addEventListener('click',()=>{
//   box.style.transform = 'translateX(1000px)';
//   box.style.transition = '1s';
//   requestAnimationFrame(()=>{
//     requestAnimationFrame(()=>{
//       box.style.transform = 'translateX(500px)'
//     });
//     });
// });

//! Promises / callback hell

// Callbacks, in the context of the event loop, typically refer to tasks that get enqueued as a result of events or timers (like setTimeout). These are macrotasks.

// How Callbacks (Macrotasks) Work:
// When an event occurs or a timer fires, and if there's an associated callback, that callback gets enqueued in the task queue.
// Macrotasks (like these callbacks) are processed one at a time from the task queue. After each macrotask, the microtask queue is processed completely before the next macrotask begins.

//? PROMISES

//* A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
//* A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
//* A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

//? EXECUTOR FUNCTION AS PRODUCING CODE.

// let fruit= 'almonds'
// let promise = new Promise((resolve,reject)=>{
//   const fruit = fetch('localhost:4000/fruits')
//   if(fruit === 'almonds'){
//     resolve("value")
//   }else{
//     reject(new Error('an error occurse'))
//   }
// })

// promise.then(result=>newFunction()).catch(erro=>console.log(erro))

//? STATE => fulfilled or rejected / RESULT => value or error

//* The state and result are internal
//* The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.

//? COMSUMER.

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
//* reject runs the second function in .then
// promise.then(
//   result => alert(result), // doesn't run
//   error => alert(error) // shows "Error: Whoops!" after 1 second
// );

//? REAL LIFE USE CASE.

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));
//     document.head.append(script);
//   });
// }

// fetch('https;a').then((data)=>{console.log(data)}).catch(()=>{

// })

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise.then(
//   script => alert(`${script.src} is loaded!`),
//   error => alert(`Error: ${error.message}`)
// );

//? promises channing.
//? Promisification.
//? MICRO TASKS WITH PROMISES.
// let promise = Promise.resolve();
// promise.then(() => alert("promise done!"));
// alert("code finished");
// promise.then(script => alert('Another handler...'));

//? CALLBACK HELL.
// loadScript('/my/script.js', function(script) {
//   loadScript('/my/script2.js', function(script) {
//     loadScript('/my/script3.js', function(script) {
//* ...continue after all scripts are loaded
//     });
//   });
// });

//! DESTRUCTING.

// let array = [1,2,3,4,5,6,7,8,9];

// let a = array[0];
// let b = array[1];
// let c = array[2];

// let [a,b,c,...d] = array

// console.log(a,b,c,d);

// let object = {
//   fruitName:'almonds',
//   color:'brown',
//   weight:'1kg',
//   price:'2400'
// }

// let fruitName = object.fruitName
// let color = object.color
// let price = object.price
// let weight = object.weight

// let {fruitName,price,color,weight} = object

// console.log(fruitName,price,color,weight)

// function myBio(firstName, lastName, ...otherInfo) {
//   return otherInfo;
// }

//* Invoke myBio function while passing five arguments to its parameters:
// myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

//* The invocation above will return:
// ["CodeSweetly", "Web Developer", "Male"]

// function myBio(firstName, lastName, company) {
//   return `${firstName} ${lastName} runs ${company}`;
// }

//* Use spread to expand an array’s items into individual arguments:
// myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);

//! SYMBOLS

//? Symbols
// let id = Symbol('id')
// let id2 = Symbol('id')
// console.log(id === id2);
// console.log(id.description);
//? implicit vs explicit conversion of symbols
// let id = Symbol("id");
// alert(id);
// let id = Symbol("id");
// alert(id.toString());
//? “Hidden” properties
// let id = Symbol("id");
// let user = {
//   name: "John",
//   [id]: 123 // not "id": 123
// };
// console.log(user[id])
//? looping over with for in /  cloning with Object.assign({},oldObjectHere)
//? Global symbols / global registory.
//* read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created
//* read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");
//* the same symbol
// alert( id === idAgain );
//* We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):
//* get symbol by name
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("name");
//* get name by symbol
// console.log( Symbol.keyFor(sym) );
// console.log( Symbol.keyFor(sym2) );
//? Purpose
//* “Hidden” object properties.

//* If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

//* So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

//* There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

//! ITERABLES.

//? Symbol.iterator

//* To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

//* When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
//* Onward, for..of works only with that returned object.
//* When for..of wants the next value, it calls next() on that object.
//* The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

// let range = {
//   from: 1,
//   to: 5
// };

// //* 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

// //* 2...it returns the iterator object:
// //* Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

// //* 3. next() is called on each iteration by the for..of loop
//     next() {
// //* 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last+10) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// for (let num of range) {
//  console.log(num)
// }

//? String is iterable
//? Calling an iterator explicitly
// let str = "Hello";

//* does the same as
//* for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); // outputs characters one by one
// }

//? Iterables and array-likes

//* Iterables are objects that implement the Symbol.iterator method, as described above.
//* Array-likes are objects that have indexes and length, so they look like arrays.

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

//* Error (no Symbol.iterator)
// for (let item of arrayLike) {}

//? Array.from

//* There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.

//* array likes..
// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// let arr = Array.from(arrayLike); // (*)
// alert(arr.pop());

//* above mentioned iterable that we created.
// let arr = Array.from(range);
// alert(arr);

//? Optional second argument.

// let arr = Array.from(range, num => num * num);
// alert(arr);

//! GENERATORS

//!MAPS

//? BASICS

// new Map() //* creates the map.
// map.set(key, value) //* stores the value by the key.
// map.get(key) //* returns the value by the key, undefined if key doesn't exist in map.
// map.has(key) //* returns true if the key exists, false otherwise.
// map.delete(key) //* removes the element (the key/value pair) by the key.
// map.clear() //* removes everything from the map.
// map.size //* returns the current element count.

//? USING MAP[KEY] SYNTAX WITH MAPS.

//? ITERATION OVER MAPS

// map.keys() //* returns an iterable for keys,
// map.values() //* returns an iterable for values,
// map.entries() //* returns an iterable for entries [key, value], it's used by default in for..of.

//? USING ITERABLES TO CREATE MAPS

// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion',    50]
// ]);

//? USING PLAIN OBJECTS TO CREATE MAPS WITH OBJECT.ENTRIES()
//* we can also create an object with Object.fromEntries() this will reverse Object.Enties()

//! SETS

//? BASICS.

//*A Set is a special type collection – "set of values" (without keys), where each value may occure only once.

// new Set([iterable]) //* creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) //* adds a value, returns the set itself.
// set.delete(value) //* removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) //* returns true if the value exists in the set, otherwise false.
// set.clear() //* removes everything from the set.
// set.size //* is the elements count.

//? SET KEEPS ONLY UNIQUE VALUES

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log( set.size );

//? CAN LOOP OVER WITH OF

// for (let user of set) {
//   console.log(user);
// }

//? objects
//? numbers

// const billion = 1_000_000_000
// const billion2 = 1e9
// const small = 1e-6

// const hex = 0xff
// const binary = 0b11111111
// const octal = 0o377

// console.log(billion)
// console.log(billion2)
// console.log(small)
// console.log(hex)
// console.log(binary)
// console.log(octal)

//? DSA

// function same(array, array1) {
//   //check if all values in both arrays are numeric & not float.

//   //check if arrays lenth is same
//   if (array.length !== array1.length) {
//     return false;
//   }

//   // result
//   let result = true;

//   // loop
//   for (let outer = 0; outer < array.length; outer++) {

//     // return if result was set to false;
//     if (!result) break;

//     // search for a squared value.
//     for (let inner = 0; inner < array1.length; inner++) {

//       // breaking loop if found
//       if (array[outer] ** 2 === array1[inner]) {
//         //setting the matched value to false so that it does not match again.
//         array1[inner] = false;
//         break;
//       }

//       // result to false if not squared value was found
//       if (inner === array.length - 1) {
//         result = false;
//         break;
//       }
//     }
//   }

//   // return boolean
//   return result;
// }

// const result = same([1, 2, 1], [4,4,1]);
// console.log(result);

//! frequency method.

// function anagram(word1, word2) {

//   if (word1.length !== word2.length) {
//     return false
//   }

//   const word1Frequency = {}
//   const word2Frequency = {}

//   for (let letter of word1) {
//     word1Frequency[letter] = ++word1Frequency[letter] || 1
//   }

//   for (let letter of word2) {
//     word2Frequency[letter] = ++word2Frequency[letter] || 1
//   }

//   for (let props in word1Frequency) {
//     if (!(word2Frequency[props] && word2Frequency[props] === word1Frequency[props])) {
//       return false
//     }
//   }

//   return true

// }

// console.log(anagram('iceman', 'cinema')); // Expected output: true
// console.log(anagram('hello', 'world')); // Expected output: false
// console.log(anagram('listen', 'silent')); // Expected output: true
// console.log(anagram('debit card', 'bad credit')); // Expected output: true
// console.log(anagram('test', 'rest')); // Expected output: false
// console.log(anagram('school master', 'the classroom')); // Expected output: true
