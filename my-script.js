
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
		count1 += 1;
}

else {
	document.documentElement.style.setProperty("--bgcolor2", "#2a2a2a");
	document.documentElement.style.setProperty("--bgcolor1", "#f7e4e4");
	document.documentElement.style.setProperty("--textcolor2", "#F0F0F0");
	document.documentElement.style.setProperty("--textcolor1", "#0044d6");
	document.getElementById("darkmodebtn").innerText = "Dark Mode";
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
