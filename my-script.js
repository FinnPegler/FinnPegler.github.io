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
function changeImg(event) {
	event.target.img.toggle("hidden");
}

const imgs = document.querySelectorAll("img");

for (var j = 0 ; j < img.length; j++){
	imgs[j].addEventListener("click", changeImg);
}


