
var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for (var i=0; i<smallPics.length; i++) {
	// smallPics[i].onclick = showBig;
	smallPics[i].onclick = function(event) {
		bigPic.src = this.src;
	}
}

function showBig() {
	var newPic = this.src;
	bigPic.setAttribute("src", newPic);
}
