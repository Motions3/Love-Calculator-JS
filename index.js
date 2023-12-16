// -------------------------------------------------------------
//     If-If with &&, <=
// -------------------------------------------------------------

// Love calculator using If-Else conditionals and logic

prompt("What is your name?"); // Asks for person A's name
prompt("What is their name?"); // Asks for person B's name
//Useless, just added for 'authenticity'

var loveScore = Math.random() * 100; 
loveScore = Math.floor(loveScore) + 1; // 1-100

// if (loveScore === 100) { - //If Love is equal to 100, alert.
if (loveScore > 70) { //If love is greater than 70, alert.
    alert("Your love score is " + loveScore + "%. " + "You are perfect for each other."); 
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%. " + "Meh. It's alright.");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%. " + "Sorry, mate."); 
}


// alert("Your love score is " + loveScore + "%"); 






// -------------------------------------------------------------
//     If-Else
// -------------------------------------------------------------
// // Love calculator using If-Else conditionals and logic

// prompt("What is your name?"); // Asks for person A's name
// prompt("What is their name?"); // Asks for person B's name
// //Useless, just added for 'authenticity'

// var loveScore = Math.random() * 100; 
// loveScore = Math.floor(loveScore) + 1; // 1-100

// // if (loveScore === 100) { - //If Love is equal to 100, alert.
// if (loveScore > 70) { //If love is greater than 70, alert.
//     alert("Your love score is " + loveScore + "%. " + "You are perfect for each other."); 
// } else {
//     alert("Your love score is " + loveScore + "%. " + "Sorry, mate."); 
// }


// // alert("Your love score is " + loveScore + "%"); 
