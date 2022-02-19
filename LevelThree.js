// Love is the best thing in this world. Some found their love and some are still looking for their love.

let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let countLove = (loveSentence.match(/love/g));
console.log(countLove);

// You cannot end a sentence with because because because is a conjunction

let becauseSentence = "You cannot end a sentence with because because because is a conjunction";
let matchBecauseSentence = (becauseSentence.match(/because/g));
console.log(matchBecauseSentence);

//'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let mostWord = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let matchMostWord = (mostWord.match(/\@/gi));
console.log(matchMostWord);
// @ = 23
// I = 18
// % = 13
// & = 11
// $ = 4

// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let compoundWord = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let extractedDigits = (compoundWord.match(/\d+/gi));
console.log(extractedDigits);
let sum = (5000 + 10000 + 15000);
console.log(`He earns a total of ${sum} euros over the year.`)
