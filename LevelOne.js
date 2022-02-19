let challenge = "30 Days Of JavaScript";
console.log(challenge);

let challenge_length = (challenge.length);
console.log(challenge.length);

let upper = (challenge.toUpperCase());
console.log(upper);

let lower = (challenge.toLowerCase());
console.log(lower);

let first_slice = (challenge.substring(0,2));
console.log(first_slice);

let string_length = (challenge.length);
console.log(string_length); 

let quoted_slice = (challenge.substring(3,21));
console.log(quoted_slice);

let script_search = (challenge.includes('Script'));
console.log(script_search);

let string_array = (challenge.split(''));
console.log(string_array);

let string_array_2 = (challenge.split(' '));
console.log(string_array_2);

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(', '));

let replacement = (challenge.replace("JavaScript", "Python"));
console.log(replacement);

let character_placement = (challenge.charAt(15));
console.log(character_placement);

let J_placement = (challenge.charCodeAt("J"));
console.log(J_placement);

let a_occurence = (challenge.indexOf("a"));
console.log(a_occurence);

let a_occurence_final = (challenge.lastIndexOf("a"));
console.log(a_occurence_final);

let word = "You cannot end a sentence with because because because is a conjunction";
let because_word = (word.indexOf("because"));
console.log(because_word);

let last_because_word = (word.lastIndexOf("because"));
console.log(last_because_word);

let because_search = (word.search("because"));
console.log(because_search);

let spaced_challenge = " 30 Days Of JavaScript ";
let trimmed_challenge = (spaced_challenge.trim());
console.log(trimmed_challenge);

let start_with = (challenge.startsWith("3"));
console.log(start_with); 

let end_with = (challenge.endsWith("t"));
console.log(end_with);

let numberOfA = (challenge.match("a"));
console.log(numberOfA);

let fullPhrase = ("30 Days of " + "JavaScript");
console.log(fullPhrase);

let wordOne = "30 Days of ";

let fullPhraseTwo = (wordOne.concat("JavaScript"));
console.log(fullPhraseTwo);

let repeatWord = (challenge.repeat(2));
console.log(repeatWord);