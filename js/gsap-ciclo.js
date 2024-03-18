// Fibra
const totalScrollDurationCiclo = document.querySelector('.section_ciclo').offsetHeight; // or a custom value

const ciclofibra = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_ciclo',  
    start: 'top top', 
    end:'bottom bottom',
    scrub: true,    
    markers: false, 
    pin:'.section_ciclo_sticky',
    pinSpacing:true,
  },
});
ciclofibra.to('.portada_btn-xdata', {
   visibility:'hidden'
}, '<');

const ciclo_intro1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#ciclo_aux_ciclo',  
    start: 'top bottom', 
    // end:'bottom top',
    scrub: true,    
    markers: false, 
  },
});
ciclo_intro1.to('.ciclo_texto_intro', {
   top:'40%',
});

const ciclo_intro_rotate = gsap.timeline({
  scrollTrigger: {
    trigger: '#ciclo_aux_rotate',  
    start: 'top bottom', 
    // end:'bottom top',
    scrub: true,    
    markers: false, 
  },
});
ciclo_intro_rotate.to('.circulo_grande2', {
   rotate:'-10',
});
ciclo_intro_rotate.to('.ciclo_texto_intro', {
   top:'-60%',
});

const ciclo_intro = gsap.timeline({
  scrollTrigger: {
    trigger: '#ciclo_aux_opacity',  
    start: 'top bottom', 
    // end:'bottom top',
    scrub: true,    
    markers: false, 
  },
});

ciclo_intro.to('.ciclo_circulo', {
   opacity:'1', 
});
ciclo_intro.to('.rotor_img', {
   opacity:'1', 
},'<');
// ciclo_intro.to('.ciclo_hidden,.kaleidoscope', {
//    opacity:'1', 
// });

const ciclo_introT = gsap.timeline({
  scrollTrigger: {
    trigger: '#ciclo_aux_fibra',  
    start: 'top bottom', 
    // end:'bottom top',
    scrub: true,    
    markers: false,
    pinSpacing:false, 
  },
});

ciclo_introT.to('.ciclo_texto', {
   transform:'translate(0)'
});
ciclo_introT.to('.ciclo_hidden,.kaleidoscope', {
   opacity:'1', 
});

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
