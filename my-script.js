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

