function changeImgFwd() {
if (document.getElementById("car-image").src.includes("img1.jpg"))
{
   	document.getElementById("car-image").src = "img2.jpg";
   	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle2").className = "smallbtndark";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img3.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
}
else {document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle3").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";} 
}


function changeImgBck() {
if (document.getElementById("car-image").src.includes("img1.jpg"))
{
   	document.getElementById("car-image").src = "img3.jpg";
   	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";
}
else {document.getElementById("car-image").src = "img2.jpg";
	  	document.getElementById("circle3").className = "smallbtn";
   		document.getElementById("circle2").className = "smallbtndark";
      } 
}


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


function centerBoxes() {
	let elem1 = document.getElementById("threecolumns");
	let info1 = elem1.getBoundingClientRect();
	let width1 = info1.width;
	let elem2 = document.getElementById("col1");
	let info2 = elem2.getBoundingClientRect();
	let width2 = info2.width;
    
    if (width1 < width2*2 ) {
       document.getElementById("threecolumns").className = "columnscenter";
    } else if (width1 < width2*3 ) {
       document.getElementById("threecolumns").className = "columnsaround"; 

    } else {
       document.getElementById("threecolumns").className = "threecolumns";
    }
}

window.onresize = centerBoxes;
window.onload = centerBoxes;