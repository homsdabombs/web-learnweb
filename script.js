function myFunction() {
	const url = "https://homs-database-test-default-rtdb.asia-southeast1.firebasedatabase.app/";
	fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
}