function changeImg() {
if (document.getElementById("/carousel-image").src == "/img1.jpg") 
   {document.getElementById("/carousel-image").src = "/img2.jpg"} 
else {document.getElementById("/carousel-image").src = "/img1.jpg"};

}

document.getElementById("/carousel-image").addEventListener("click", changeImg);


//trying to get the function changeImg working, it should be changing the source 
//but not sure why. I have basically the same thing as this answer 
// https://stackoverflow.com/questions/6764961/change-an-image-with-onclick
