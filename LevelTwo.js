let quote = "The quote 'There is no exercise better for the heart than\
reaching down and lifting people up.' by John Holmes teaches us to help\
one another."

console.log(quote);

let quoteTwo = `Love is not patronizing and charity isn't about pity,\
 it is about love. Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead.` ;

 console.log(quoteTwo);

//  Check if typeof '10' is exactly equal to 10. If not make it exactly equal
let x = "10";
console.log(typeof x);
// x is a string so we need to change it to an intergral number to equal 10
console.log(x == 10); // False

let new_x = parseInt(x);
console.log(new_x);
console.log(typeof new_x); // new_x is now 10 an intergral number
console.log(new_x == 10);

let g = "9.8"
console.log(typeof g);
// converting the float string to a float number
let new_g = (parseFloat(g));
console.log(new_g == 10);
// False... we need to round up 9.8 to equal 10.
let round_g = (Math.ceil(new_g));
console.log(round_g);
console.log(round_g == 10);

// Check if 'on' is found in both python and jargon
wordOne = "python";
wordTwo = "jargon";
console.log(wordOne.search("on"));
console.log(wordTwo.search("on"));
// OR
let phraseOne = "both python and JARGON"
let regEx = /on/gi;
console.log(phraseOne.match(regEx));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.search("jargon"));
// if word is not available, console returned -1

let random = Math.random();
// Math. random() returns values between 0.00 - 0.99
let random_FromZeroToHundred = (random *101 + 0);
let random_round = (Math.floor(random_FromZeroToHundred));
console.log(random_round);

let random_FromFiftyToHundred = (random *51);
// Math.Random((*(Max - Min)+1) +min) = Math.Random((*(100 - 50)+1) *50) = Math.Random(*51) +50)
let random_FromFiftyToHundredA = (random_FromFiftyToHundred + 50);
let random_FromFiftyToHundredTwo = (Math.floor(random_FromFiftyToHundredA));
console.log(random_FromFiftyToHundredTwo);

// Math.Random((*(Max - Min)+1) +min) = Math.Random((*(255 - 0)+1) *0) = Math.Random(*256) +0)
let random_From0To255 = (random *256 + 0);
let random_From0To255A = (Math.floor(random_From0To255));
console.log(random_From0To255A);

let wordThree = "JavaScript";
let randomNumber = Math.random();
let randomNumberA = (Math.floor(Math.random *101));
let randomNumberB = (Math.floor(Math.random *101) + 1);
let selectRandom = (wordThree.substring(randomNumberA + randomNumberB));
console.log(selectRandom);

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(`1\t1\t1\t1\t1`);
console.log(`2\t1\t2\t4\t8`);
console.log(`3\t1\t3\t9\t27`);
console.log(`4\t1\t4\t16\t64`);
console.log(`5\t1\t5\t25\t125`);

let becausePhrase = "You cannot end a sentence with because because because is a conjunction";
let sliced = (becausePhrase.substring(31,54));
console.log(sliced);
