
//Dark mode switch function
document.getElementById("darkmodebtn").addEventListener("click", changeColour);
let count1 = 0;
function changeColour() {
	if (count1 < 1){
		document.documentElement.style.setProperty("--bgcolor1", "#2a2a2a");
		document.documentElement.style.setProperty("--bgcolor2", "#f7e4e4");
		document.documentElement.style.setProperty("--textcolor1", "#F0F0F0");
		document.documentElement.style.setProperty("--textcolor2", "#0044d6");
		document.getElementById("darkmodebtn").innerText = "Light Mode";
		document.getElementById("banner").id = "darkbanner";
		count1 += 1;
}

else {
	document.documentElement.style.setProperty("--bgcolor2", "#2a2a2a");
	document.documentElement.style.setProperty("--bgcolor1", "#f7e4e4");
	document.documentElement.style.setProperty("--textcolor2", "#F0F0F0");
	document.documentElement.style.setProperty("--textcolor1", "#0044d6");
	document.getElementById("darkmodebtn").innerText = "Dark Mode";
	document.getElementById("darkbanner").id = "banner";
	count1 -= 1
}
}


//Hide and show icon in first column (Github)
function hideIcon1() {
	document.getElementById("icon1").className = "hidden";
	document.getElementById("box1heading").className = "boxcopy";
  
  }
  function showIcon1() {
	document.getElementById("icon1").className = "shown";
	document.getElementById("box1heading").className = "hidden";
  }
  document.getElementById("box1").addEventListener("mouseleave", hideIcon1);
  document.getElementById("box1").addEventListener("mouseenter", showIcon1);
  
  
  //Hide and show icon in second column (CodeWars)
  function hideIcon2() {
	document.getElementById("icon2").className = "hidden";
	document.getElementById("box2heading").className = "boxcopy";
  }
  function showIcon2() {
	document.getElementById("icon2").className = "shown";
	document.getElementById("box2heading").className = "hidden";
  }
  document.getElementById("box2").addEventListener("mouseleave", hideIcon2);
  document.getElementById("box2").addEventListener("mouseenter", showIcon2);
  
  
  //Hide and show icon in first column (freeCodeCamp)
  function hideIcon3() {
	document.getElementById("icon3").className = "hidden";
	document.getElementById("box3heading").className = "boxcopy";
  }
  function showIcon3() {
	document.getElementById("icon3").className = "shown";
	document.getElementById("box3heading").className = "hidden";
  }
  document.getElementById("box3").addEventListener("mouseleave", hideIcon3);
  document.getElementById("box3").addEventListener("mouseenter", showIcon3);

//Carousel change image functions
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
	
//Carousel next and previous image buttons	
document.getElementById("fwdbtn").addEventListener("click", changeImgFwd);
document.getElementById("bckbtn").addEventListener("click", changeImgBck);
	
//Functions for carousel pause and play buttons	
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

	//onkeydown function to move through images with arrow keys
	document.onkeydown = function (event){
		if (event.keyCode == "37"){changeImgBck()}
		if (event.keyCode == "39"){changeImgFwd()}	
	}
	
	//Upload image function
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
	
//Functions to create the video caption animation
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

//Button to stop animation
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

//Stop video on button press
var vid = document.getElementById("video");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

//Remove Overlay
function removeOverlay() {
	document.getElementById("videoheading").className = "fadeout";
	document.getElementById("videoheading2").className = "fadeout";
	document.getElementById("removeoverlay").className = "hidden";
	document.getElementById("removeoverlay2").className = "shown";
	document.getElementById("video").style.opacity = "1";
	document.getElementById("video").style.transition = "opacity 1000ms";
} 
  

function removeOverlay2() {
	document.getElementById("videoheading").className = "fadein";
	document.getElementById("videoheading2").className = "fadein";
	document.getElementById("removeoverlay").className = "shown";
	document.getElementById("removeoverlay2").className = "hidden";
	document.getElementById("video").style.opacity = ".6";
	document.getElementById("video").style.transition = "opacity 1000ms";
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

//Video overlay color input
let input1 = document.querySelector("#colourpicker input");
input1.addEventListener("change", changeColour1);

function changeColour1() {
    videoheading.style.setProperty("background-color", this.value);
    videoheading2.style.setProperty("background-color", this.value);
}	

//Easter Egg (EE)
document.getElementById("profileimg").addEventListener("click", EEAlert);
document.getElementById("exitEE").addEventListener("click", exitEE);
document.getElementById("reveal").addEventListener("click", reveal);

let count9 = 0;
function EEAlert(){
	document.getElementById("EE1").className = "shown";
    count9++; 
	setTimeout(oneSecond, 10);
}

function oneSecond() {
	document.getElementById("EE2").style.opacity = "1";
}

function exitEE() {
	document.getElementById("exitEE").className = "hidden";
	document.getElementById("reveal").classList.remove("hidden");
	document.getElementById("EEcopy").innerHTML = 
	"You have found the Easter Egg. Click the button to reveal a joke!";
	document.getElementById("EEH").innerHTML = "Congratulations!";
	document.getElementById("EE1").className = "hidden";
	document.getElementById("EE2").style.opacity = "0";
	}

function reveal() {

	document.getElementById("exitEE").classList.remove("hidden");
	document.getElementById("reveal").className = "hidden";
	document.getElementById("EEcopy").innerHTML = 
	"Newsflash: Programmer found dead in the shower with a bottle of"
	+ " shampoo that says \"lather, rinse, repeat\".";
	document.getElementById("EEH").innerHTML = "A Corny Joke";
}

//Exit popup - 5 seconds after page load if EE has not been found
let count10 = 0;
setTimeout(startTimer, 5000)
function startTimer() {
	count10 ++;
}

let count11 = 0;
function onMouseOut(event) {
if (event.clientY < 15 && count9 <1 && count10 >0 && count11 <1) {
	document.getElementById("overlay").className = "shown";
	setTimeout(delayPopupOpacity, 100);
	document.removeEventListener("mouseout", onMouseOut);
	count11++;
}
else return null;
}

function delayPopupOpacity() {
	document.getElementById("popup").style.opacity = "1";
}

function exitpopup (){
document.getElementById("overlay").className = "hidden";
document.getElementById("popup").style.opacity = "0";
}

document.body.addEventListener("mouseout", onMouseOut);
document.getElementById("exit").addEventListener("click", exitpopup);


//Alert popup to list features
document.getElementById("alert").addEventListener("click", featureAlert);

function featureAlert() {
	alert("Dark Mode Switch\nGithub, CodeWars and freeCodeCamp icons displayed on hover\nCarousel with next, previous, play, pause and small progress icons\nUser upload of image to carousel\nVideo of website being created with changing word overlayed\nUser input to choose colour of overlay background\nExit intent popup\nThere is an Easter Egg hidden somewhere, you'll have to find it!")
}