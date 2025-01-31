const arr = document.querySelectorAll(".classNameA");
console.log(arr);

const arrLength = arr.length;
console.log(arrLength);

arr.forEach(function(a) {
	a.classList.add("testttt");
});
arr[1].classList.remove("testttt")


arr.forEach( function(_element, index) {
	_element.classList.add("hehes");
	console.log("test : " + index);
});