// Fibra
const totalScrollDurationCiclo = document.querySelector('.section_ciclo').offsetHeight; // or a custom value

const ciclofibra = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_ciclo',  
    start: 'top top', 
    end:'bottom bottom',
    scrub: true,    
    markers: true, 
    pin:'.section_ciclo_sticky',
    pinSpacing:false,
  },
});
ciclofibra.to('.portada_btn-xdata', {
   visibility:'hidden'
}, '<');
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/fondo_verde.png)', 
//   duration:2
// },);
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/textura-azul.png)', 
//   duration:3
// },);
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/fondo_lima.png)', 
//   duration:3
// },);
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/textura_gris.png)', 
//   duration:3
//   ,
// },);
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/textura_naranja.png)',
//   duration:3
//   ,
// },);
// ciclofibra.to('.section_ciclo', {
//   backgroundImage: 'url(./img/fondos/textura_azulDos.png)', 
//   duration:3
//   ,
// },);
