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


// addEventListener("keydown", (a) => {console.log(a)});

function scrollCheckStatus() {
	// const element = document.querySelector(".container-slides");
	const element = document.querySelector("html"); //const element = document.documentElement;
	const yy = element.scrollTop; 
	document.getElementById("demo").innerHTML = yy;
	console.log(yy);
}
// document.addEventListener("scroll", function() {console.log(yy)});
document.addEventListener("scroll", scrollCheckStatus);
// setInterval(scrollCheckStatus, 1000);