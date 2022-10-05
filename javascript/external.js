
//TASK 2.1 + .2 mod

/*user_name = window.prompt("What's your name?", "Type your name here");
document.write(' '+user_name+'!');*/

//LAB 4
var webmaps =
[
  ["Oil Spill Toolkit",
    "https://www.glo.texas.gov/ost/-,
    "The Oil Spill Toolkit developed by Enterprise Technology Solutions"
    ],
  ["Texas Ecosystems Analytical Mapper",
    "http://towd.texas.gov/gis/teamr",
    "The Texas Parks and Wildlife's Landscape Ecology program developed"
    ]
];


function welcome()

{

let a = "Please enter your name.";
let b = "Type your name here.";

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = "<hi>Hello, welcome to my webpage, " + user_name + "!</h1>"

return message

}
/*
function webmap_table(){
  document.write("<table width=100%>")
  for (var row = 0; row < webmaps.length; row++) {
    document.write("<tr>");
  for(var column = 0; column < webmaps[0].length; column++){
      document.write("<td>"+webmaps[row][column]+"</td>");
    }
  document.write('</tr>')
  }
document.write('</table>')
} */

function webmap_table(){
    document.write("<table width=100%>")
  for(var row = 0; row <  webmaps.length; row++){
        document.write("<tr>");
    for(var column = 0; column < webmaps[0].length; column++){
          document.write("<td>"+webmaps[row][column]+"</td>");
        }
  document.write('</tr>')
    }
  document.write('</table>')
}
