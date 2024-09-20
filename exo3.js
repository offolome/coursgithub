// Exercice: Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// Exemple: 
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


function middleCharacter(mot) {

    let longueur = mot.length;
    let milieu = Math.floor(longueur / 2);

    if (longueur % 2 === 0) {

        return mot[milieu - 1] + mot[milieu];

    } else {
       
        return mot[milieu];
    }
    
}

console.log(middleCharacter("test"));    
console.log(middleCharacter("testing")); 
console.log(middleCharacter("middle")); 
console.log(middleCharacter("A")); 
