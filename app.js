'use strict'
function main(){

  var ENTRY_POINT = '/'; //genera la primera pagina. Si ponemos '/movies', esa seria la primera pagina
  var layoutInstance = null;
  var rootElement = document.querySelector('#root');
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    {name:'Home',
    url:'/'},
    {name:'Starships',
    url:'/starships'},
    {name:'Vehicles',
    url:'/secondpage'},
    {name:'People',
    url:'/thirdpage'},
    
  ];

  generateLayout();
  generateNavbar();
  activateRouter();
  generateFooter();
  addEventListenerToNavbar();

  function generateLayout(){
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();

  }
  function generateNavbar(){ 
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }
  function generateFooter(){
    footerInstance = new Footer(layoutInstance.footer);
    footerInstance.generate();
  }

  function activateRouter(){
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main);
  }
  
  function addEventListenerToNavbar(){
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach(function(anchor){
      anchor.addEventListener('click', changePage)
    })
  }

  function changePage(event){
    var url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main)
  }

}

window.addEventListener('load',main);