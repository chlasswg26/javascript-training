/**
 * About JavaScript
 * 
 * JavaScript is a lightweight, cross-platform, object-oriented computer programing language
 * JavaScript is one of the three core technologies of web development
 * JavaScript can be used in different places:
 *  👉 Client-side: JavaScript was traditionally only used in the browser
 *  👉 Server-side: Thanks to node.js, we can use JavaScript on the server as well
 * Javascript is what made modern web development possible:
 *  👉 Dynamic effects and interactivity
 *  👉 Modern web application that we can interact with
 * 
 * NOTED:
 *  👉 Frameworks/libraries like React and Angular are 100% based on JavaScript: you need to master JavaScript in order to use them!
 *  👉 The Role of Web Development:
 *      - HTML for CONTENT
 *      - CSS for PRESENTATION
 *      - JAVASCRIPT for DYNAMIC EFFECTS OR PROGRAMMING
 */



// Variables and data types
/**
 * PRIMITIVE JAVASCRIPT DATA TYPES
 * 1. Number: Floating point numbers, for decimals and integers
 * 2. String: Sequence of Characters, used for text
 * 3. Boolean: Logical data type that can only be true or false
 * 4. Undefined: Data type of a variable that does not have a value yet
 * 5. Null: Also means 'non-existent'
 * 
 * 👀 Variable naming rules:
 * 
 * ❌ Problem: Can't start variable name with a number
 * 👍 Fix: Start with a alphabet or with a dollar sign or an underscore
 * 
 * ❌ Problem: Can't use specific symbol in a middle of variable names (Except: underscore or dollar sign)
 * 👍 Fix: Use camelCase or snake_case in a middle of variable name or with a dollar sign
 * 
 * ❌ Problem: Can't use reserved JavaScript keywords as variable names
 * 👍 Fix: Just use another word or use for prefix within camelCase (e.g ifTrue)
 * 
 */
var firstName = 'Ichlas'; // String
var lastName = 'Wardy'; // String
var age = 28; // Number
var fullAge = true; // Boolean
var job; // Undefined
job = 'Teacher'; // Declare
var _3years = 3; // Start with Specific symbol (e.g $ or _) or with a alphabet
var johnMark = 'John and Mark'; // Better use camelCase or snake_case
var ifTrue = true;

// Variable mutation and type coercion
/**
 * 👁‍🗨 Join string with plus sign is a Type coercion
 * 👁‍🗨 Variable mutation basically means to change the value of a variable
 * 
 * 🧩 EASY WAY GET DATA FROM THE USER
 * - console.log() is display message in a browser console
 * - alert() is display a pop-up with a message in the browser pages
 * - prompt() is display a dialog with a message prompting the user to input some text
 */
var firstName = 'John';
var age = 28;
var job, isMarried;
job = 'teacher';
isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
age = 'twenty eight';
job = 'drive';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

// Basic operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
/**
 * Math operators:
 * 1.Plus sign +
 * 2.Times sign *
 * 3.Negative sign -
 * 4.Slash sign /
 */
yearJohn = now - ageJohn;
yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
/**
 * Logical operators:
 * 1.Greater than
 * 2.Less than
 */
var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
/**
 * Typeof operator:
 * 1.typeof is Type of Variable
 */
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
var x;
// console.log(typeof x);

// Operator precedence
/**
 * Means:
 * ? Which operator is executed first.
 * ? Highest precedence is grouping
 * 
 * Resources at https://codingheroes.io/resources
 */
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
/**
 * Multiple operators
 */
var isFullAge = now - yearJohn >= fullAge; // true
/**
 * Grouping
 */
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; // 32
/**
 * Multiple assignments
 */
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
/**
 * More operators
 */
// x = x * 2;
x *= 2;
// x = x + 10;
x += 10;
// x = x + 1;
x += 1;
x++; // Menambahkan 1 unit
x--; // Mengurangi 1 unit

/**
 * CODING CHALLENGE 1
 * 
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
 * calculated using the formula: BMI = mass / height^2 = mass / (height * height).
 * (mass in kg and height in meter).
 * 
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs
 * 3. Create a boolean variable containing information about
 * wether Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3.
 * (Something like "Is Mark's BMI higher than John's? true").
 * 
 * GOOD LUCK 😋
 */
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

// If else statements
/**
 * Means:
 * ? Features that allow us to execute only certain parts of our code
 * ? To execute parts multiple times
 * ? Basically allows us to take decisions using code
 * ? it's a perfect logic condition
 */
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married')
{
    // console.log(firstName + ' is married!');
} else {
    // console.log(firstName + ' will hopefully marry soon :)');
}
var isMarried = true;
if (isMarried)
{
    // console.log(firstName + ' is married!');
} else {
    // console.log(firstName + ' will hopefully marry soon :)');
}

// Boolean logic
/**
 * Means:
 * ? Boolean logic is a branch of computer science
 * ? Deals with true and false values
 * 
 * BASIC BOOLEAN LOGIC: NOT, AND & OR
 * 1. AND (&&) => 👍 if ALL are true
 * 2. OR (||) => 👍 if ONE is true
 * 3. NOT (!) => inverts 👍 / 👎 value
 * 
 * EXAMPLE:
 * 
 * var age = 16;
 *  age >= 20; // => FALSE
 *  age < 30; // => TRUE
 *  !(age < 30); // => FALSE
 * 
 *  age >= 20 && age < 30; // => FALSE
 *  age >= 20 || age < 30; // => TRUE
 * 
 */
var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // (Higher precedence && Lower precedence)
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}