// alert("Glädjens dag, det är fredag");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert ("Hej "+ namn+" du är "+  ålder+" gammal");
// console.log("Det verkar funka det här");

// be användaren mata i två tal och skrive ut summan
// var tal1string = prompt("Skriv ett tal"); 
// var tal2string = prompt("Skriv ett tal");
// var summa = parseInt(tal1string) + parseInt(tal2string);
// alert("summa är " + summa);

// be användaren mata in sin ålder
// skriv ut ålder på studenten
// var ålder = prompt("Skriv din ålder");
// var studentÅlder = parseInt(ålder) + 1;
// // alert("Du blir " + studentÅlder + " när du går studenten");
// document.writeln("<h2>Du blir " + studentÅlder + " när du går studenten</h2>");

//Spamcheck
//Fråga användaren vad slimpad "summa" 
var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1, slumptal2);
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ")
if (gissning == summa)
{
    document.writeln("<h2>Good job! </h2>");
}
else 
{
    document.writeln("<h2>Bad job! </h2>");
}

