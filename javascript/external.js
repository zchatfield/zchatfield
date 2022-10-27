
//TASK 2.1 + .2 mod

/*user_name = window.prompt("What's your name?", "Type your name here");
document.write(' '+user_name+'!');*/

//LAB 4
var webmaps =
[
  ["Google Earth",
    "https://earth.google.com/",
    "GoogleEarth has several functions available on it, but I think the primary purpose for it is for projects or planning that involves multiple places or a span of space in an area."
  ],
  ["ArcGIS",
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
//document.write(welcome());

// STILL WORKING ON GETTING THIS TO WORK CORRECTLY
/* function area_calculator()
{ let a = length
  let b = width
  let area = a*b
  document.write("area")
}
 //document.getElementById("area").innerHTML = "I have changed!";
}
*/

// STILL WORKING ON GETTING THIS TO WORK CORRECTLY
function webmap_table()
{
  document.write("<table width=100%>")
  for(var row = 0; row < webmaps.length; row++){
  ///styling - STILL CANT GET THIS TO WORK!!! UGH 
      if (row<2){console.log(style="color:#f5f5f5")}
      else{console.log(style = "color: #018571")};
  ///styling
      document.write("<tr>");
      for(var column = 0; column < webmaps[0].length; column++){
        document.write("<td>"+webmaps[row][column]+"</td>");
      }
  document.write('</tr>')
  }
document.write('</table>')
}

/*
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?
  access_token={accessToken}',
  {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'mapbox_access_token',
  }).addTo(mymap);

/*
function area-calculator()
{
  document.math()
}

/*
function altrows(grey,white){
  var tableElements=document.getElementsByTagName("webmap_table");
  for(var j = 0; j<tableElements.lenghth; j++) {
    var table = tableElements[j];
    var rows = table.getElementsByTagName("tr");
    for(var i = 0; i<=rows.length; i++) {
      if(i%2==0){
        rows[i].style.backgroundColor = grey;
      }
      else{
        rows[i].style.backgroundColor = white;
      }
      }
    }
  }
} */
