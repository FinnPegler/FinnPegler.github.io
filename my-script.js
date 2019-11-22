//Task 1
function changeToOrange(event) {
	event.target.classList.toggle("orange")
}

function changeToCyan(event) {
	event.target.classList.toggle("cyan")
}

const box = document.querySelectorAll("#box")

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("click", changeToOrange)
}

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("mouseover", changeToCyan)
}

//Task 2
var img = document.querySelectorAll("img");
var img2 = document.querySelectorAll(".hidden");

function clickImg() {

	img[0].className = ("hidden");
    img2[0].className = ("topimages");
}

img[0].addEventListener("click", clickImg);


//Task 3

function changeImg() {
if (document.getElementById("carousel-image").src.includes("img1.jpg"))
{
   	document.getElementById("carousel-image").src = "img2.jpg";
} 

else if (document.getElementById("carousel-image").src.includes("img2.jpg")) 
{
	document.getElementById("carousel-image").src = "img3.jpg";
}
else (document.getElementById("carousel-image").src = "img1.jpg") }

document.getElementById("carousel-image").addEventListener("click", changeImg);


//trying to get the function changeImg working, it should be changing the source 
//but not sure why. I have basically the same thing as this answer 
// https://stackoverflow.com/questions/6764961/change-an-image-with-onclick
