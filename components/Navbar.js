'use strict'
function Navbar(parentElement, links, style){
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Navbar.prototype.generate = function(){
  console.log(this.links)
  //generar dinamicamente los elementos
  this.elements = `
  <img class='logo item' src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg">
  <nav class='item'>
  <ul>`;
  this.links.forEach((link) =>{
    this.elements += `
    
    <li class='link'>
      <a href="#0" url=${link.url}>${link.name}</a>
    </li>
      `;
  });
  this.elements += `</ul>
  
                   </nav>
  </header>
  `;
  this.render();

}

Navbar.prototype.render = function(){
  //añadir elementos al DOM
  this.parentElement.innerHTML = this.elements;
}