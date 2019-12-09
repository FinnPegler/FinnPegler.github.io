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


//Task 5
function changeImgFwd() {
if (document.getElementById("car-image").src.includes("img1.jpg"))
{
   	document.getElementById("car-image").src = "img2.jpg";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img3.jpg";
}
else (document.getElementById("car-image").src = "img1.jpg") }


function changeImgBck() {
if (document.getElementById("car-image").src.includes("img1.jpg"))
{
   	document.getElementById("car-image").src = "img3.jpg";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img1.jpg";
}
else (document.getElementById("car-image").src = "img2.jpg") }


document.getElementById("fwdbtn").addEventListener("click", changeImgFwd);
document.getElementById("bckbtn").addEventListener("click", changeImgBck);

//onkeydown function to move through images with arrow keys
document.onkeydown = function (event){
    if (event.keyCode == "37"){changeImgBck()}
	if (event.keyCode == "39"){changeImgFwd()}	
}

var x = null;
var count = 0;
function playImgs(){
	if (count <1 ){
		x = setInterval(changeImgFwd, 1000);
		count += 1;
	}
	else {
		clearInterval(x);
		count -= 1;
	}
}

document.getElementById("playbtn").addEventListener("click", playImgs);



