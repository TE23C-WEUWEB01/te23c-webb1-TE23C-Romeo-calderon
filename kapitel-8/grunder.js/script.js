// här skriver vi jscode
// var tal1 = parseInt(prompt("skriv in ett heltal"));
// var tal1 = parseInt(prompt("skriv in ett till heltal"));

// if (tal1 < tal2){
//     document.writeln(`${tal1} är större än ${tal2}`);
// } else {
//     document.writeln(`${tal2} är större eller likamed än ${tal1}`);
// }

// En liten inloggning dvs fråga efter konto och lösenord och jamför med valbart lösenord
// Svara att "Du ... är inloggad" annars "Du ... har skrivit fel lösenord"
// while (true) {
//     var namn = parseInt(prompt("Ange ditt namn"));
// var lösenord = parseInt(prompt("Ange ditt lösenord"));

// if (lösenord == "1892"){
//     document.writeln(`Du ${namn} är inloggad`);
//     break;
// } else {
//     document.writeln(`Du ${namn} har skrivit fel lösenord`);
// }
// }¨

//  Skriv ut talen 20-30
// for (let index = 20; index < 31; index++) {
//     document.writeln(`tal: ${index} <br>`);
// }

// let val = confirm("Klicka OK för att fortsätta"); // true eller false

let val = true;
while (val) {
    val = confirm("Klicka OK för att fortsätta"); // true eller false
}