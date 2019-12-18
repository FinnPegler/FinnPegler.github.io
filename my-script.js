//change colour scheme
let count3 = 0;
function changeColour() {
	if (count3 < 1){
 document.body.style.backgroundImage = "url('bg2.png')";
 document.getElementById("colourchange").innerText = "Light Mode";
 let pelem = document.getElementsByTagName("p");
 for (var i = 0; i < pelem.length; i++) {
    pelem[i].style.color = "white";
}
 //console.log("test")
count3 ++;
}

else {
	document.body.style.backgroundImage = "url('bg.png')";
	document.getElementById("colourchange").innerText = "Dark Mode";
	count3 --;
}
}

document.getElementById("colourchange").addEventListener("click", changeColour);








//Hide and show icon in first column (Github)
function hideIcon1() {
  document.getElementById("icon1").className = "hidden";
}
function showIcon1() {
  document.getElementById("icon1").className = "shown";
}
document.getElementById("col1").addEventListener("mouseleave", hideIcon1);
document.getElementById("col1").addEventListener("mouseenter", showIcon1);


//Hide and show icon in second column (Freecodecamp)
function hideIcon2() {
  document.getElementById("icon2").className = "hidden";
}
function showIcon2() {
  document.getElementById("icon2").className = "shown";
}
document.getElementById("col2").addEventListener("mouseleave", hideIcon2);
document.getElementById("col2").addEventListener("mouseenter", showIcon2);


//Hide and show icon in first column (Codewars)
function hideIcon3() {
  document.getElementById("icon3").className = "hidden";
}
function showIcon3() {
  document.getElementById("icon3").className = "shown";
}
document.getElementById("col3").addEventListener("mouseleave", hideIcon3);
document.getElementById("col3").addEventListener("mouseenter", showIcon3);


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

var count2 = 0;
function changeOpacity(){
	if (count2 <1 ){
		document.getElementById("playbtn").style.opacity = 0.2;
		document.getElementById("pausebtn").style.opacity = 1;
		count2 += 1;
	}
	else {
		document.getElementById("playbtn").style.opacity = 1;
		document.getElementById("pausebtn").style.opacity = 0.2;
		count2 -= 1;
	}
}

document.getElementById("playbtn").addEventListener("click", playImgs);
document.getElementById("pausebtn").addEventListener("click", playImgs);
document.getElementById("playbtn").addEventListener("click", changeOpacity);
document.getElementById("pausebtn").addEventListener("click", changeOpacity);



