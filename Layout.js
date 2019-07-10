'use strict'
function Layout(root,style){
  this.root = root;
  this.style = style;
  this.elements = null;
  this.header = null;
  this.nain = null;
  this.footer = null;
}

Layout.prototype.generate = function(){
  //generear elementos al DOM
  this.elements =`
  <header id='site-header'></header>
  <main id='site-main'></main>
  <footer id='site-footer'></footer>
  `;
  this.render();
  this.getContainers();
  console.log(this.header)
}

Layout.prototype.render = function(){
  this.root.innerHTML = this.elements;
  //añadimos elementos al DOM
}

Layout.prototype.getContainers = function(){
  //get header, main, footwr del DOM
  this.header = document.querySelector('#site-header');
  this.main = document.querySelector('#site-main');
  this.footer = document.querySelector('#site-footer');

  
}