function Loading(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
}
Loading.prototype.generate = function(){
  this.elements = `<p class='fuerza'>May the force be with you...</p>
  <img class= 'dark-baider' src='https://holatelcel.com/wp-content/uploads/2015/07/app-star-wars.jpg'>
    `
  this.render();
}
Loading.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}