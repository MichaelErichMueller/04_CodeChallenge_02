/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

<<<<<<< HEAD
// let firstName = ( prompt("Your Name"))
// let age = Number(prompt("Your name"));

// if (age >= 0 && age <= 5 ){
// console.log(firstName + "trinkt Miclh");

// }

// else if (age >6 && age <=12) {
//     console.log(firstName + "trinkt saft");

// } 
// else if (age >13 && age <=17) {
//     console.log(firstName + "trinkt cola");

// }
// else if (age >= 18) {
//     console.log(firstName + "trinkt wein");

// }
// else {
//     console.log(firstName + "Bitte gib ein richtiges Alter an!")

// }

    
=======
const firstName = prompt("Bitte Namen eingeben:");
const age =  parseInt(prompt("Bitte Alter eingeben:")); // "2" --> 2

switch (true) {
    case (age >= 0) && (age <= 5) :
        console.log(firstName + " trinkt Milch");
        break;
    case (age >= 6) && (age <= 12):
        console.log(firstName + " trinkt Saft");
        break;
    case (age >= 13) && (age <= 17):
        console.log(firstName + " trinkt Cola");
        break;
    case (age >= 18) && (age <= 130):
        console.log(firstName + " trinkt Wein");
        break;   
    default:
        console.log("Bitte Tee trinken!");   
        break;
}
>>>>>>> de58b287ea9cd3ba804fa7da73477e2de08c8c0c
