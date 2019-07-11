'use strict'
function Footer(parentElement){
  this.parentElement = parentElement;

  this.elements = null;
}

Footer.prototype.generate = function(){
  this.elements = `
  <header id="site-footer">
  <img class='logo item' src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg">
  <p>I hope you liked my website.
  If you are also a Star Wars fan, we recommend the following web pages:</p>
  <ul>
    <li><a class="ancla-footer" href="https://www.starwars.com/">Official website Star Wars</a></li>
    <li><a class="ancla-footer" href="https://www.starwarsnewsnet.com/">Star Wars News Net</a></li>
    
    <li><a class="ancla-footer" href="https://lol.disney.com/star-wars-kids">Galaxy of Adventures | Disney LOL</a></li>
    <li><a class="ancla-footer" href="https://www.ea.com/es-es/games/starwars/jedi-fallen-order">Star Wars Jedi: Fallen Order</a></li>
  </ul>
 
  <h3 class="title-footer">May the force be with you</h3>
  <img class='logo item' src="https://cdn.worldvectorlogo.com/logos/star-wars-2.svg">
  </header>
  
  `;
  this.render();

}

Footer.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}