function openPop() {
	var newWin = window.open("popup.html", " ", "width=400, height=400");
	if (newWin == null) {
		alert("Popup blocked.");
	}
}

window.onload = openPop;