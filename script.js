var url = "https://pokeapi.co/api/v2/pokemon/ditto";
	// url = "https://jsonplaceholder.typicode.com/users";
	// url = "assets/sample-data.json";

function myFunction() {
	fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
}

/* HTTP REQUEST JAVASCRIPT */

function getRequest() {
	const _request = new XMLHttpRequest();
	_request.open("GET",url);
	_request.send();
	_request.responseType = "json";
	_request.onload = () => {
		if (_request.readyState == 4 && _request.status == 200) {
			const _data = _request.response;
			console.log(_data);
		} else {
			console.log('Error: ${_request.status}');
		}
	}
}



function saveJson(_data) {
	_data = {
		name: "Homs Da Bombs",
		age: "32"
	}

	var jsonData = JSON.stringify(_data);
	console.log(jsonData);

	// write the file locally
	fs.writeFileSync("sampleHtml.json", jsonData);
}