'use strict'
function StarWarsService(){
  this.baseUrl='https://swapi.co/api/'
}

StarWarsService.prototype.getAllMovies =  async function(){
  var response = await fetch(`${this.baseUrl}starships`);
  var data = await response.json();
  console.log(data.results)
return data.results; 
}
var starWarsServiceInstance = new StarWarsService();

