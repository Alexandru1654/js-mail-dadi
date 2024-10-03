// Email list
const emailList = ["lysanne_schuppe@gmail.com", "bernhard_torphy50@yahoo.com", "candice7@gmail.com", "brown.harber24@hotmail.com", "thelma.smith66@gmail.com"];
console.log(emailList);

// Ask the user to enter their email
const emailUser = prompt("Enter your email");

// Print an appropriate message about the check result
if
    (emailList.includes(emailUser)) {
    console.log("Email authorized email");
} else {
    console.log("access denied");
}


const scorePlayer = Math.floor(Math.random() * 6) + 1;
console.log('you rolled: $ {scorePlayer}');

const scoreComputer = Math.floor(Math.random() * 6) + 1;
console.log('computer rolled: $ {scoreComputer}');

// Determinate the winner
if (scorePlayer > scoreComputer) {
    console.log("You win");
} else if (scorePlayer < scoreComputer) {
    console.log ("computer win");
} else {
    console.log("it's a tie");
}

