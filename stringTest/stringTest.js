/**
 * 
 */
var eins = new String("a");
var zwei = new String("a");
var zweimal = eins == zwei;
var dreimal = eins === zwei;
var valueof = eins.valueOf() == zwei.valueOf();
var valueofZweimal = eins.valueOf() === zwei.valueOf();
console.log(zweimal);
console.log(dreimal);
console.log(valueof);
console.log(valueofZweimal);