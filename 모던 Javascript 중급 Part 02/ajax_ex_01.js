// ex 01
let xhr = new XMLHttpRequest();
xhr.open("GET", "./data_01.txt");
xhr.send();

console.log(xhr.response);


// ex 02
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	console.log(this.readyState, this.status);

	if(this.readyState == 4 && this.status == 200) {
		console.log("Success!");
		console.log(this.response);
	} else {
		console.log("Fail.");
	}
}

// xhr.open("GET", "https://www.google.com/");
xhr.open("GET", "./data_01.txt");
xhr.send();


// ex 03
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	console.log(this.readyState, this.status)
	if (this.readyState == 4) {
		// console.log(this.response);
		const dataObj = JSON.parse(this.response);
		// alert(dataObj.length);
		// alert(dataObj[1].title);

		let temp = "";
		for (let i in dataObj) {
			temp += "<p>" + i + ":" + dataObj[i].title + " " + dataObj[i].description + "</p>" + "\n";
		}
		console.log(temp);
		document.getElementById("main").innerHTML = temp;
	}
}

xhr.open("GET", "./data_01.txt", true);
xhr.send();


// ex 04
function loadTouristAttractions() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState == 4) {
			const dataObj = JSON.parse(this.response);
			let temp = "";
			for (let i in dataObj) {
				// temp += "<p>" + i + ":" + dataObj[i].title + " " + dataObj[i].description + "</p>" + "\n";
				temp += `<p>${i}:${dataObj[i].title} (${dataObj[i].description})</p>\n`
			}
			console.log(temp);
			document.getElementById("main").innerHTML = temp;
		}

	}

	xhr.open("GET", "./data_01.txt", true);
	xhr.send();
}


// ex 05
function loadTouristAttractions2(obj) {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if (this.readyState===this.DONE) {
			// console.log(this.response );
			const res = JSON.parse(this.response);
			// console.log(res.length);
			// console.log(res[0].title);
			// console.log(res[0].id);
			// console.log(obj.id);
			const table = document.getElementById("tourlist");
			const tr = document.createElement("tr");
			const td_title = document.createElement("td");
			const td_description = document.createElement("td");

			td_title.innerHTML = obj.title;
			td_description.innerHTML = obj.description;
			tr.appendChild(td_title);
			tr.appendChild(td_description);
			tourlist.appendChild(tr);
		}
	}

	xhr.open("GET","./data_01.txt", true);
	xhr.send();
}

function loadTouristAttractions() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState === this.DONE){
			// console.log(this.response);
			const dataObj = JSON.parse(this.response);

			for (let i=0; i<dataObj.length;i++) {
				// console.log(dataObj[i]);
				loadTouristAttractions2(dataObj[i]);
			}
		}
	}

	xhr.open("GET","./data_01.txt", true);
	xhr.send();
}


// ex 06


