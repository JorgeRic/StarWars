'use strict'
function LandingPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
}
LandingPage.prototype.generate = function(){
  this.elements =`
  <header>
  <section id="presentacion">
  <img class="animacion" src="https://logosmarcas.com/wp-content/uploads/2018/05/Star-Wars-Logo.png">
  <div id="card2">
  <img id="planeta" class="foto-inicio" src="https://tecreview.tec.mx/wp-content/uploads/2015/09/kepler-452b_artist_concept_-_animated_gif.gif">
  </div>
  </section>
  <h1>Website specialized in the vehicles and warships of Star Wars</h1>
  
  <article class="contenedor">
  <div id="card2">
  <img class="foto_inicio" src="https://www.findelahistoria.com/web/wp-content/uploads/2017/08/unnamed-file.jpe">
  </div>
  <section class="cuadro">
  <h2 class="title">Vehicles</h2>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </section>
  </article>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  

  <article class="contenedor">
  <div id="card2">
  <img class="foto_inicio" src="http://elestimulo.com/ub/wp-content/uploads/sites/8/2015/12/1266071.jpg">
  </div>
  <section class="cuadro">
  <h2 class="title">Warships</h2>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </section>
  </article>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  
  </header>
  `;
  this.render();
}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}