'use strict'
function Router(){
this.page = null;
}

Router.prototype.buildDom = function(url, parentElement){
  if(url === '/'){
    this.generateLandingPage(parentElement);
  }
  else if(url === '/starships'){
    this.generateMoviesPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function(parentElement){
  this.page = new LandingPage(parentElement); 
  this.page.generate();
}

Router.prototype.generateMoviesPage = function(parentElement){
  this.page = new MoviesPage(parentElement); 
  this.page.generate();
}


var routerInstance = new Router();