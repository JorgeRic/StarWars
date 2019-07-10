'use strict'
var imagenes = ['https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20180903230846',
'https://lumiere-a.akamaihd.net/v1/images/veh_ia_1752_040381b2.jpeg?region=0%2C70%2C1280%2C720&width=960',
'https://cdn.images.dailystar.co.uk/dynamic/33/photos/327000/620x/star-wars-death-star-480915.jpg',
'https://as01.epimg.net/betech/imagenes/2016/11/25/portada/1480073651_193194_1480074119_noticia_normal.jpg',
'https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=960',
'https://i.ytimg.com/vi/_xzn7RQyEBE/maxresdefault.jpg',
'http://www.jrbassett.com/images/vader-tie_no-interior_image0.jpg',
'http://images2.wikia.nocookie.net/__cb20070720175660/starwars/images/b/b4/Slave1.jpg',
'https://vignette.wikia.nocookie.net/starwars/images/a/af/Shuttle-CHRON.jpg/revision/latest?cb=20100813150543',
'https://i.pinimg.com/originals/ee/81/c1/ee81c1f60032400bc29eda33a910467b.jpg'
];

function MoviesPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  this.movies = null;
  this.loading = null;
}
MoviesPage.prototype.generate = async function(){
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  
  await this.connectToAPI();
  this.elements =`
  <header>
  <h2>Major warships in Star Wars</h2>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </header>
  <section class="container">
  `;
  this.movies.forEach((movie,i) =>{
  this.elements +=`
  <article>
    <h3 class="elementos">${movie.name}</h3>
    <img src = ${imagenes[i]}>
    <article class="tecnic">
    <h4>Technical details</h4>
    <p>Model: ${movie.model}</p>
    <p>Starship class: ${movie.starship_class}</p>
    <p>Hyperdrive rating: ${movie.hyperdrive_rating}</p>
    </article>
    </article>
    `;
  })
  this.elements+= '</section>'
  this.render();
}

MoviesPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

MoviesPage.prototype.connectToAPI = async function(){
  this.movies = await starWarsServiceInstance.getAllMovies();
}