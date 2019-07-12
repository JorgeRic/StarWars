'use strict'
function LandingPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  this.links = null;
}
LandingPage.prototype.generate = function(){
  this.elements =`
  <section id="presentacion">
  <img class="animacion" src="https://logosmarcas.com/wp-content/uploads/2018/05/Star-Wars-Logo.png">
  <div id="card3">
  <img id="planeta" class="foto-inicio" "foto_inicio" src="https://tecreview.tec.mx/wp-content/uploads/2015/09/kepler-452b_artist_concept_-_animated_gif.gif">
  </div>
  </section>
  <h1>Website specialized in the vehicles and warships of Star Wars</h1>

  <a href="#0" url="/secondpage" class="btn">Vehicles</a>

  <article class="contenedor">
  <div id="card2">
  <img class="foto_inicio" src="https://www.findelahistoria.com/web/wp-content/uploads/2017/08/unnamed-file.jpe">
  </div>
  <section class="cuadro">

  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </section>
  </article>

  <a href="#0" url="/starships" class="btn">Warships</a>
 
  <article class="contenedor">
  <div id="card2">
  <img class="foto_inicio" src="http://elestimulo.com/ub/wp-content/uploads/sites/8/2015/12/1266071.jpg">
  </div>
  <section class="cuadro">
  
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </section>
  </article>

  </section>

  <a href="#0" url="/thirdpage" class="btn">People</a>

  <article class="contenedor">
  <div id="card2">
  <img class="foto_inicio" src="http://www.defensacentral.com/ustedpregunta/uploads/editor/yoda-1.jpg">
  </div>
  <section class="cuadro">

  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </section>
  </article>
 

  `;
  this.render();
  this.addListeners();
}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.addListeners = function(){
  var btns = document.querySelectorAll('.btn')
  btns.forEach(function(btn){
    btn.addEventListener('click',function(event){
      event.preventDefault();
      var urlParam = event.target.attributes.url.value; 
      routerInstance.buildDom(urlParam, this.parentElement)
    })
  })
}