// create a request variable. request variable issue the http request. by
// creating an instance of xml-http-request
var request = new XMLHttpRequest();

// open a connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

//send the request
request.send();

//load the response once its ready. 
request.onload = function () {
    var data = JSON.parse(this.response);
    for(let i in data ){
    console.log(data[i].flag);}

   
}
