
//TASK 2.1 + .2 mod

/*user_name = window.prompt("What's your name?", "Type your name here");
document.write(' '+user_name+'!');*/

//LAB 4
/*
var webmaps =
[
  ["Oil Spill Toolkit",
    "https://www.glo.texas.gov/ost/-,"
    "The Oil Spill Toolkit developed by Enterprise Technology Solutions"
    ],
  ["Texas Ecosystems Analytical Mapper",
    "http://towd.texas.gov/gis/teamr",
    "The Texas Parks and Wildlife's Landscape Ecology program developed"
    ]
];
*/

var webmaps =
[
  ["Google Earth",
    "https://earth.google.com/",
    "GoogleEarth has several functions available on it, but I think the primary purpose for it is for projects or planning that involves multiple places or a span of space in an area."
  ],
  ["ArcGis",
    "https://www.arcgis.com/apps/mapviewer/index.html",
    "In some ways, the user experience of this platform is similar to GoogleEarth. However, there are far more functional options, and they’re all geared specifically toward spatial analysis, data visualization, and uses that are not for the general public but instead for those who are trained in GIS.",
  ]
]

function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";

// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = "<hi>Hello, welcome to my webpage, " + user_name + "!</h1>"

return message
}

function webmap_table()
{
  document.write("<table width=100%>")
  for(var row = 0; row < webmaps.length; row++){
    document.write("<tr>");
      for(var column = 0; column < webmaps[0].length; column++){
        document.write("<td>"+webmaps[row][column]+"</td>");
        }
  document.write('</tr>')
  }
document.write('</table>')
}
