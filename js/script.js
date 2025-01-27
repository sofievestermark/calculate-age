"use strict";

// prompt - den der kommer op hvpr man skriver fødselsår
// alt der indtastes i en prompt er string
const birthYear = prompt("Indtast dit fødselsår:");

// bereging
const currentYear = new Date().getFullYear(); // det aktuelle år
const age = currentYear - parseInt(birthYear); // Beregn alderen og laver min string til et tal

// se i consol
console.log(`Du er cirka ${age} år gammel.`);


// prompt: Brugeren bliver bedt om at indtaste deres fødselsår.
// new Date().getFullYear(): Henter det aktuelle år fra systemet.
// parseInt(birthYear): Konverterer brugerens input (som er en string) til et heltal.
// Beregn alder: Trækker fødselsåret fra det aktuelle år.
// console.log: viser resultatet i console.
