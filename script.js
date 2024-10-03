// Email list
const emailList = ["lysanne_schuppe@gmail.com", "bernhard_torphy50@yahoo.com", "candice7@gmail.com", "brown.harber24@hotmail.com", "thelma.smith66@gmail.com"];
console.log(emailList);

// Ask the user to enter their email
const emailUser = prompt("Enter your email")

// Print an appropriate message about the check result
if
    (emailList.includes(emailUser)) {
    console.log("Email authorized email")
} else {
    console.log("access denied")
}





