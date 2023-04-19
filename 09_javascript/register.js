var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
	if (userId.value.length < 4 || userId.value.length > 15) {
		alert("4~15 Length only.");
		userId.select();
	}
}

function checkPw() {
	if (pw1.value.length < 8) {
		alert("More than 8.");
		pw1.value = "";
		pw1.focus();
	}
}

function comparePw() {
	if (pw1.value != pw2.value) {
		alert("Diff PW.");
		pw2.value = "";
		pw2.focus();
	}
}