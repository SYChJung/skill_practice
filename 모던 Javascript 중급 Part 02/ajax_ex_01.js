// // ex 01
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "./data_01.txt");
// xhr.send();

// console.log(xhr.response);


// // ex 02
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
// 	console.log(this.readyState, this.status);

// 	if(this.readyState == 4 && this.status == 200) {
// 		console.log("Success!");
// 		console.log(this.response);
// 	} else {
// 		console.log("Fail.");
// 	}
// }

// // xhr.open("GET", "https://www.google.com/");
// xhr.open("GET", "./data_01.txt");
// xhr.send();


// // ex 03
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
// 	console.log(this.readyState, this.status)
// 	if (this.readyState == 4) {
// 		// console.log(this.response);
// 		const dataObj = JSON.parse(this.response);
// 		// alert(dataObj.length);
// 		// alert(dataObj[1].title);

// 		let temp = "";
// 		for (let i in dataObj) {
// 			temp += "<p>" + i + ":" + dataObj[i].title + " " + dataObj[i].description + "</p>" + "\n";
// 		}
// 		console.log(temp);
// 		document.getElementById("main").innerHTML = temp;
// 	}
// }

// xhr.open("GET", "./data_01.txt", true);
// xhr.send();


// // ex 04
// function loadTouristAttractions() {
// 	const xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if (this.readyState == 4) {
// 			const dataObj = JSON.parse(this.response);
// 			let temp = "";
// 			for (let i in dataObj) {
// 				// temp += "<p>" + i + ":" + dataObj[i].title + " " + dataObj[i].description + "</p>" + "\n";
// 				temp += `<p>${i}:${dataObj[i].title} (${dataObj[i].description})</p>\n`
// 			}
// 			console.log(temp);
// 			document.getElementById("main").innerHTML = temp;
// 		}

// 	}

// 	xhr.open("GET", "./data_01.txt", true);
// 	xhr.send();
// }


// // ex 05
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
// function loadData() {
// 	//fetch API
// 	fetch("./data_01.txt").then(function(response){
// 		// console.log(response.status);
// 		// response.text().then(function(text){
// 		// 	alert(text);
// 		// })
// 		return response.json().then(function(jsonObj){
// 			// console.log(typeof jsonObj);
// 			// console.log(JSON.stringify(jsonObj,null,2));
// 			const jsonText = JSON.stringify(jsonObj,null,2);
// 			console.log(jsonText);
// 		})
// 	})
// }
function loadData() {
	fetch("./data_01.txt")
		.then(function(response){
			return response.json();
		})
		.then(function(j){
			// console.log(typeof j);
			const jText = JSON.stringify(j, null, 4);
			console.log(jText);
		})
}


// ex07
function loadButton(fileName) {
	// fetch API
	// fetch(fileName).then(function(response){
	// 	response.text().then(function(t) {
	// 		// alert(t);
	// 		document.querySelector(".menuListDetail").innerHTML = t;

	// 	})
	// })
	fetch(fileName)
		.then(function(response){
			// return response.text();
			if (response.ok) {
				return response.text();
			}
			throw new Error("Response was not ok.")
		})
		.then(function(t) {
			// alert(t);
			document.querySelector(".menuListDetail").innerHTML = t;

		})
		// .catch(function(e){
		// 	alert(`${e.message}`);
		// })
		.catch(e=> console.log("Error:",e));
}


// ex08
fetch("./menu.txt").then(function(response){
	response.text().then(function(t){
		const menus = t.split(" ");
		// alert(typeof menus);
		let i = 0;
		let appendBtns = "";

		while (i < menus.length) {
			let menuName = menus[i];
			// console.log(menuName);
			// const btn = `<button type="button" onclick="loadButton('${menuName}')">${menuName}</button>`;

			let fileNum = i+1;
			let fileName = "course0" + fileNum + ".txt";
			console.log(fileName);
			const btn = `<button type="button" onclick="loadButton('${fileName}')">${menuName}</button>`;

			// console.log(btn);
			appendBtns += btn
			i += 1;
		}
		document.querySelector('#menu').innerHTML = appendBtns;
	})
})


// ex09
// const loadButtonA = fileName => {
// 	fetch(fileName)
// 	.then(response => {
// 		console.log(response);
// 		return response.text();
// 	})
// 	.then(text => console.log(text))
// 	.catch(err => console.log(err.message))
// }
// =>
// const loadButtonA = async(fileName) => {
// 	try {
// 		const response = await fetch(fileName);
// 		const t = await response.text();
// 		console.log(t);
// 	}
// 	catch(e) {
// 		console.log(e);
// 	}
// }
// =>
const loadButtonA = async(fileName1, fileName2) => {
	try {
		const [res1, res2] = await Promise.all([fetch(fileName1),fetch(fileName2)]);
		const [t1, t2] = await Promise.all([res1.text(),res2.text()]);
		// console.log(t1,t2);
		document.querySelector('h3').innerText = t1;
		document.querySelector('.dyContents').innerHTML = t2;
	}
	catch(e) {
		console.log(e.message);
	}
	finally {
		console.log("Good!");
	}
}


// ex10
const someArr = ['Python', 'HTML', 'CSS', 'JavaScript', 'Python', 'CSS', 'JavaScript', 'JAVA', 'JavaScript'];

const result = someArr.reduce((acc,cur) => {
	if (acc[cur] != undefined) {
		acc[cur] += 1;
	} else {
		acc[cur] = 1;
	}
	return acc;
}, {})

console.log(result);