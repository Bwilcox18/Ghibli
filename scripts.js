// create a request vairbale and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//Open a new connection, ising GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
	
	//Begin accessing JSON data here
	var data = JSON.parse(this.response);
	
	if (request.status >= 200 && request.status<400) {
	data.forEach(movie => {
		console.log(movie.title);
	});
} else {
	console.log('error');
   }
}

//send request
request.send();
