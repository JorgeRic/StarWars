'use strict'
var imagenes3 = ['https://content.pulse.ea.com/content/legacy/starwars-ea-com/es_MX/starwars/battlefront/news-articles/the-heroes-of-star-wars--battlefront---luke-skywalker/_jcr_content/featuredImage.img.jpg',
'https://www.alfabetajuega.com/wp-content/uploads/2018/10/183307.alfabetajuega-c3po.jpg',
'https://vignette.wikia.nocookie.net/es.starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150926172435',
'https://cdn.crhoy.net/imagenes/2019/05/featuredImage.img_.jpg',
'https://starwarsblog.starwars.com/wp-content/uploads/2018/07/leia-organa-1-tall.jpg',
'https://static.fusionmovies.to/images/character/2zihS_J3ORapsXly0_FNf4bIkaiOdYTj8gkE_bsRCer3HzvGXw-meKkME4atOMxLqD-ewtn1xw1FINvlYY1ayZYgZsCxCXXSdfeZmrNqb34.jpg?1',
'http://static.pix-geeks.com/2019/04/star-wars-brie-larson-jouera-le-role-principal-du-spin-off-centre-sur-beru-whitesun-82883.jpg',
'https://sm.ign.com/ign_es/screenshot/default/r5-d4-main-image-7d5f078e_16t5.jpg',
'https://media.comicbook.com/2018/03/star-wars-obi-wan-kenobi-deleted-scene-biggs-darklighter-1096885-1280x0.jpeg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYVJZBAQi3lv3CGoEO9lDjDkgrrtHXhKgzoH7X6KV_Y64CoCNqg'
];

function ThirdPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  this.thirds = null;
  this.loading = null;
}
ThirdPage.prototype.generate = async function(){
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  
  await this.connectToAPI();
  this.elements =`
  <header>
  <h2>Main protagonists of the saga</h2>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </header>
  <section class="container">
  `;
  this.thirds.forEach((third,i) =>{
  this.elements +=`
  <article>
    <h3 class="elementos">${third.name}</h3>
    <div class="card">
    <img class="image-card" src = ${imagenes3[i]}>
   
    </div>

    <article class="tecnic">
    <h4>Technical details</h4>
    <p>Height: ${third.height}</p>
    <p>Mass: ${third.mass}</p>
    </article>
    </article>
    `;
  })


  this.elements+= '</section>'
  this.render();
}

ThirdPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

ThirdPage.prototype.connectToAPI = async function(){
  this.thirds = await starWarsServiceInstance.getAllPeople();
}