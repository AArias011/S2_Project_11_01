"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Anthony Arias
   Date:   2/12/19

*/
//This code sets the current date and time by having a variable of thisTime containing the date object.
var thisTime = new Date();

//This code is the variable of timeStr with the method of toLocalString.
var timeStr = thisTime.toLocaleString();
//This code sets the method of getElementById to have the id of timeStamp to change the inner HTML code of the page element.
document.getElementById("timeStamp").innerHTML = timeStr;

//This code inserts the image of the sky onto the rendered page.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
//This code sets the number of the map to use with the given hour and month.
var mapNum = (2 * thisMonth + thisHour) % 24;
//This writes the HTML code for the inline element showing the sky image to use in the web page.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
//This code inserts the value of the imgStr variable directly after the elements opening tag.
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);