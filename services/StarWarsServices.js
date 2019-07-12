'use strict'
function StarWarsService(){
  this.baseUrl='https://swapi.co/api/'
}

StarWarsService.prototype.getAllMovies =  async function(){
  var response = await fetch(`${this.baseUrl}starships`);
  var data = await response.json();
return data.results; 
}
var starWarsServiceInstance = new StarWarsService();

StarWarsService.prototype.getAllVehicules =  async function(){
  var response2 = await fetch(`${this.baseUrl}vehicles`);
  var data2 = await response2.json();
return data2.results; 
}
StarWarsService.prototype.getAllPeople =  async function(){
  var response3 = await fetch(`${this.baseUrl}people`);
  var data3 = await response3.json();
return data3.results; 
}


