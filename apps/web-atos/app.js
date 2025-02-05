// const _inputs = document.getElementsByClassName('input'); console.log(Array.isArray(_inputs));
// document.getElementsByTagName("button")[0].addEventListener("click", () => console.log(_inputs))

const _searchbar = document.getElementById('searchbar');
const _btnSearch = document.getElementById("btn-search");
const _body = document.querySelector("body");

_body.addEventListener("click", function() {
	_searchbar.style.display = "inline-block";
	_searchbar.classList.add("active");
	// console.log(_searchbar.classList.contains(":focus"));
	console.log(_searchbar.matches(":focus"));
})

// const _checkMouseEvent = document.addEventListener("click", function() {console.log("something")}); console.log(_checkMouseEvent)

/* Form submission with JSON Data */
	// let _data = {};
	// for (var i = 0; i<_inputs.length; i++) {_data[i] = _inputs[i].value;}
	// let _json = JSON.stringify(_data);
	// console.log(_json);

	// Populate DATA Container
	// Convert DATA to JSON format
	// Send DATA to DATABASE (Firebase maybe)