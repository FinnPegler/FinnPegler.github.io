function changeImg() {
if (document.getElementById("carousel-image").src == "img1.jpg") 
{
   	document.getElementById("carousel-image").src = "img2.jpg";
} 
else if (document.getElementById("carousel-image").src == "img2.jpg") 
{
	document.getElementById("carousel-image").src = "img3.jpg";
} 
else document.getElementById("carousel-image").src = "img1.jpg";

}

document.getElementById("carousel-image").addEventListener("click", changeImg);


