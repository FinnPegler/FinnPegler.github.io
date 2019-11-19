const box = document.querySelectorAll("#box");



function changeToOrange(event) {
	event.target.classList.toggle("orange")
};

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("click", changeToOrange);
}

function changeToCyan(event) {
	event.target.classList = ("cyan")
};

for (var i = 0 ; i < box.length; i++){
	box[i].addEventListener("mouseover", changeToCyan);
}




