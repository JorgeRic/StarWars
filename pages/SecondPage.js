'use strict'
var imagenes2 = ['http://www.papercraftsquare.com/wp-content/uploads/2012/04/Star-Wars-Sandcrawler-Papercraft-built-by-Northriver.jpg',
'https://vignette.wikia.nocookie.net/banthapedia/images/0/04/T16.jpg/revision/latest?cb=20090929215942',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtbjcpZOxCMXZmIDruoD3Dxqx14gwAe-HGZ6LRIlXwNmTeOyc3A',
'https://i.ytimg.com/vi/RxeojIhpts4/maxresdefault.jpg',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0b7359f-4a98-4da6-9cd5-672b91c2677e/dlxjon-bc48a898-cee9-43ac-94a2-2211b1300f3d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwYjczNTlmLTRhOTgtNGRhNi05Y2Q1LTY3MmI5MWMyNjc3ZVwvZGx4am9uLWJjNDhhODk4LWNlZTktNDNhYy05NGEyLTIyMTFiMTMwMGYzZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.KpaGP3TZ-Lmi2U3ICtaNkhW9iRz2ou6PviXuSBfZmjc',
'https://www.culttvmanshop.com/assets/images/bandatat02.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIL4mtpj3BgZ78CUKHKDBRZV-0A0BBu3ycyZwH8rUo9kpEpIjEzQ',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_9DDwfSgeROjxZ8bQ9v4k7j4t_QNgweirjN9ergJCj8KIXsYHg',
'https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/591536c0-ca37-4e55-8397-0b3d8c52b80f.jpg',
'https://i.blogs.es/2f4551/01.-600-d-1963/450_1000.jpg'
];

function SecondPage(parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  this.seconds = null;
  this.loading = null;
}
SecondPage.prototype.generate = async function(){
  this.loading = new Loading(this.parentElement);
  this.loading.generate();
  
  await this.connectToAPI();
  this.elements =`
  <header>
  <h2>Major vehicules in Star Wars</h2>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
  </header>
  <section class="container">
  `;
  this.seconds.forEach((second,i) =>{
  this.elements +=`
  <article>
    <h3 class="elementos">${second.name}</h3>
    <div class="card">
    <img class="image-card" src = ${imagenes2[i]}>
    
    </div>

    <article class="tecnic">
    <h4>Technical details</h4>
    <p>Model: ${second.model}</p>
    <p>Vehicle class: ${second.vehicle_class}</p>
    </article>
    </article>
    `;
  })


  this.elements+= '</section>'
  this.render();
}

SecondPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

SecondPage.prototype.connectToAPI = async function(){
  this.seconds = await starWarsServiceInstance.getAllVehicules();
}