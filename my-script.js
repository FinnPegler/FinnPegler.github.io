//popup
/*document.onload = popupdelay()

function changepopup(){
	document.getElementById("overlay").className = "shown";
}

function popupdelay(){
	let milliseconds = setTimeout(changepopup, 900000)
}

function exitpopup (){
document.getElementById("overlayexit").className = "hidden";
}

document.getElementById("exit").addEventListener("click", exitpopup);

*/

//Expand/hide mobile menu
let count6 = 0;
function mobnav(){
	if (count6 <1 ){
		document.getElementById("mobnavhidden").id = "mobnavshown";
		count6 += 1;
	}
	else {
		document.getElementById("mobnavshown").id = "mobnavhidden";
		count6 -= 1;
	}
}

document.getElementById("mobnavbutton").addEventListener("click", mobnav);
document.getElementsByClassName("mobilenavitem")[1].addEventListener("click", mobnav);


//functions to create the video caption animation
let str = ""
count4 = 0;
function addToString () {
if (count4 == 1){str = ""; count4 --; return str}
if (str.length == 0){str = str.concat("r"); return str}
if (str.length == 1){str = str.concat("e"); return str}
if (str.length == 2){str = str.concat("a"); return str}
if (str.length == 3){str = str.concat("t"); return str}
if (str.length == 4){str = str.concat("e"); return str}
if (str.length == 5){str = str.concat("d"); return str}
if (str.length == 6||str.length == 7){str = str.concat("."); return str}
if (str.length == 8){str = str.concat("."); count4++; return str}
}

function strDelay(str){
  milliseconds = setInterval(addToString, 200, str)
}

//insert String into HTML
function insertStr(){
  document.getElementById("insert").innerHTML = str;
}

function insertDelay(){
  milliseconds2 = setInterval(insertStr, 201)
}

document.onload = strDelay();
document.onload = insertDelay();

//button to stop animation
var count5 = 0;
var y = null;
function stopInsertDelay(){
		clearInterval(milliseconds2);
	}

function changeVidButton () {
	document.getElementById("pausevid").className = "hidden";
	document.getElementById("playvid").className = "shown";
}

function changeVidButton2 () {
	document.getElementById("playvid").className = "hidden";
	document.getElementById("pausevid").className = "shown";
}

//stop video on button press
var vid = document.getElementById("video");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

//Remove Overlay
function removeOverlay() {
	document.getElementById("videoheading").className = "hidden";
	document.getElementById("videoheading2").className = "hidden";
	document.getElementById("removeoverlay").className = "hidden";
	document.getElementById("removeoverlay2").className = "shown";
	document.getElementById("video").style.opacity = "1";
}

function removeOverlay2() {
	document.getElementById("videoheading").className = "shown";
	document.getElementById("videoheading2").className = "shown";
	document.getElementById("removeoverlay").className = "shown";
	document.getElementById("removeoverlay2").className = "hidden";
	document.getElementById("video").style.opacity = ".65";
}


document.getElementById("pausevid").addEventListener("click", stopInsertDelay);
document.getElementById("pausevid").addEventListener("click", changeVidButton);
document.getElementById("pausevid").addEventListener("click", pauseVid);

document.getElementById("playvid").addEventListener("click", insertDelay);
document.getElementById("playvid").addEventListener("click", changeVidButton2);
document.getElementById("playvid").addEventListener("click", playVid);

document.getElementById("removeoverlay").addEventListener("click", removeOverlay);
document.getElementById("removeoverlay2").addEventListener("click", removeOverlay2);



//speed up video
vid.playbackRate = 1.3;


//change colour scheme of website
let count3 = 0;
function changeColour() {
	if (count3 < 1){
 document.body.style.background = "none";
 document.body.style.backgroundColor = "#2a2a2a";
 document.getElementsByClassName("column")[0].className = "columndark";
 document.getElementById("colourchange").innerText = "Light Mode";
 document.getElementById("colourchange").style.background = "#a8D0e6";
 document.getElementById("colourchange").style.color = "#4b60b4";

 let pelem = document.getElementsByTagName("p");
 	for (var i = 0; i < pelem.length; i++) {
    pelem[i].style.color = "#F0F0F0";
	}  
let h3elem = document.getElementsByClassName("boxcopy")
for (var j = 0; j < h3elem.length; j++) {
    h3elem[j].style.color = "#4b60b4";
	}  

let h1elem = document.getElementsByTagName("h1");
for (var j = 0; j < h1elem.length; j++) {
    h1elem[j].style.color = "#F0F0F0";
	}  

let h2elem = document.getElementsByTagName("h2");
for (var j = 0; j < h2elem.length; j++) {
    h2elem[j].style.color = "#F0F0F0";
	} 

	count3 ++;
}

else {
	document.body.style.backgroundColor = "#a8D0e6";
	document.getElementsByClassName("columndark")[0].className = "column";
	document.getElementById("colourchange").innerText = "Dark Mode";
	document.getElementById("colourchange").style.background = "#2a2a2a";
	 document.getElementById("colourchange").style.color = "#ffffff";
	let pelem = document.getElementsByTagName("p");
		for (var i = 0; i < pelem.length; i++) {
    pelem[i].style.color = "#4b60b4";
		}

let h1elem = document.getElementsByTagName("h1");
for (var j = 0; j < h1elem.length; j++) {
    h1elem[j].style.color = "#4b60b4";
	}  

let h2elem = document.getElementsByTagName("h2");
for (var j = 0; j < h2elem.length; j++) {
    h2elem[j].style.color = "#4b60b4";
	} 

count3--;
}

}

document.getElementById("colourchange").addEventListener("click", changeColour);


//Hide and show icon in first column (Github)
function hideIcon1() {
  document.getElementById("icon1").className = "hidden";
  document.getElementById("col1h2").className = "shown";

}
function showIcon1() {
  document.getElementById("icon1").className = "shown";
  document.getElementById("col1h2").className = "hidden";
}
document.getElementById("col1").addEventListener("mouseleave", hideIcon1);
document.getElementById("col1").addEventListener("mouseenter", showIcon1);


//Hide and show icon in second column (Freecodecamp)
function hideIcon2() {
  document.getElementById("icon2").className = "hidden";
  document.getElementById("col2h2").className = "shown";
}
function showIcon2() {
  document.getElementById("icon2").className = "shown";
  document.getElementById("col2h2").className = "hidden";
}
document.getElementById("col2").addEventListener("mouseleave", hideIcon2);
document.getElementById("col2").addEventListener("mouseenter", showIcon2);


//Hide and show icon in first column (Codewars)
function hideIcon3() {
  document.getElementById("icon3").className = "hidden";
  document.getElementById("col3h2").className = "shown";
}
function showIcon3() {
  document.getElementById("icon3").className = "shown";
  document.getElementById("col3h2").className = "hidden";
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

//EE
document.getElementById("box-img").addEventListener("click", EEAlert);
document.getElementById("exitEE").addEventListener("click", exitEE);
document.getElementById("reveal").addEventListener("click", reveal);

function EEAlert(){
	document.getElementById("EE1").className = "shown";
}

function exitEE() {
	document.getElementById("exitEE").className = "hidden";
	document.getElementById("reveal").classList.remove("hidden");
	document.getElementById("EEcopy").innerHTML = 
	"You have found the Easter Egg. Click the button to reveal a joke!";
	document.getElementById("EEH").innerHTML = "Congratulations!";
	document.getElementById("EE1").className = "hidden";
	}

	let count9 = 0;
function reveal() {
    count9++; 
	document.getElementById("exitEE").classList.remove("hidden");
	document.getElementById("reveal").className = "hidden";
	document.getElementById("EEcopy").innerHTML = 
	"Newsflash: Programmer found dead in the shower with a bottle of"
	+ " shampoo that says \"lather, rinse, repeat\"";
	document.getElementById("EEH").innerHTML = "A Corny Joke";
}


//Carousel functions
function changeImgFwd() {
if (document.getElementById("car-image").src.includes("img1.jpg"))	{
   	document.getElementById("car-image").src = "img2.jpg";
   	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle2").className = "smallbtndark";
} 

else if (document.getElementById("car-image").src.includes("img2.jpg")) {
	document.getElementById("car-image").src = "img3.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
}

else if (document.getElementById("car-image").src.includes("img3.jpg") && count7 > 0) {
	document.getElementById("car-image").src = img4.src;
	document.getElementById("circle3").className = "smallbtn";
   	document.getElementById("circle4").className = "smallbtndark";
 }

else if (document.getElementById("car-image").src = img4.src && count7 > 0) {
	document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle4").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";
}

else {document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle3").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";
   } 
}



function changeImgBck() {
if (document.getElementById("car-image").src.includes("img3.jpg"))
{
   	document.getElementById("car-image").src = "img2.jpg";
   	document.getElementById("circle3").className = "smallbtn";
   	document.getElementById("circle2").className = "smallbtndark";
} 


else if (document.getElementById("car-image").src.includes("img2.jpg")) 
{
	document.getElementById("car-image").src = "img1.jpg";
	document.getElementById("circle2").className = "smallbtn";
   	document.getElementById("circle1").className = "smallbtndark";
}

else if (document.getElementById("car-image").src.includes("img1.jpg") && count7 > 0) {
	document.getElementById("car-image").src = img4.src;
	document.getElementById("circle1").className = "smallbtn";
   	document.getElementById("circle4").className = "smallbtndark";
 }

 else if (document.getElementById("car-image").src = img4.src && count7 > 0) {
	document.getElementById("car-image").src = "img3.jpg";
	document.getElementById("circle4").className = "smallbtn";
   	document.getElementById("circle3").className = "smallbtndark";
}

else {document.getElementById("car-image").src = "img3.jpg";
	  	document.getElementById("circle1").className = "smallbtn";
   		document.getElementById("circle3").className = "smallbtndark";
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
var count2 = 1;

function count2Plus(){
	if (count2 == 1) {count2 -= 1};
	return count2;
}

function count2Minus(){
	if (count2 == 0) {count2 += 1};
	return count2;
}

function playImgs(){
	if (count <1 && count2 <1){
		document.getElementById("playbtn").style.opacity = 0.2;
		document.getElementById("pausebtn").style.opacity = 1;
		x = setInterval(changeImgFwd, 2500);
		count += 1;
	}

	if (count = 1 && count2 <1){
		return count;
	}

	else {
		document.getElementById("playbtn").style.opacity = 1;
		document.getElementById("pausebtn").style.opacity = 0.2;
		clearInterval(x);
		count -= 1;
	}
}
    document.getElementById("playbtn").addEventListener("click", count2Plus)
	document.getElementById("playbtn").addEventListener("click", playImgs)
	document.getElementById("pausebtn").addEventListener("click", count2Minus)
	document.getElementById("pausebtn").addEventListener("click", playImgs)



let count7 = 0;
var img4 = document.createElement("IMG");
var loadFile = function(event) {
	image = document.getElementById('car-image');
	image.src = URL.createObjectURL(event.target.files[0]); 
    img4.src = URL.createObjectURL(event.target.files[0]); 
    count7++;
    document.getElementById("circle4").className = "smallbtndark";
    document.getElementById("circle1").className = "smallbtn";
    document.getElementById("circle2").className = "smallbtn";
    document.getElementById("circle3").className = "smallbtn";
    document.getElementById("upload1").className = "hidden";
    document.getElementById("upload2").className = "hidden";
}


//Exit popup
let count10 = 0;
setTimeout(startTimer, 5000)
function startTimer() {
	count10 ++;
}

let count11 = 0;
function onMouseOut(event) {
if (event.clientY < 30 && count9 <1 && count10 >0 && count11 <1) {
	document.removeEventListener("mouseout", onMouseOut);
	document.getElementById("overlay").className = "shown";
	count11++;
}
else return null;
}

function exitpopup (){

document.getElementById("overlay").className = "hidden";
}


document.body.addEventListener("mouseout", onMouseOut);
document.getElementById("exit").addEventListener("click", exitpopup);

