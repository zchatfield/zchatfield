
//TASK 2.1 + .2 mod

/*user_name = window.prompt("What's your name?", "Type your name here");
document.write(' '+user_name+'!');*/

//LAB 4
function welcome()

{

let a = "Please enter your name.";
let b = "Type your name here.";

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = "<hi>Hello, welcome to my webpage, " + user_name + "!</h1>"

return message

}

document .write(welcome());
