var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomdiceimage = "dice" + randomNumber1 + ".png";
var randomdicesoure = "images/" + randomdiceimage;

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdicesoure);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomdicesoure2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
 
image2.setAttribute("src", randomdicesoure2);