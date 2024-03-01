// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const portada = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_pregunta',  
    start: 'top center',  
    end: 'bottom top',      
    scrub: 1,    
    markers: false, 
    pinSpacer: false,
    snap: {
        duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.8, // wait 0.2 seconds from the last scroll event before doing the snapping
      },
  },
});
portada.to('.portada_escondida_tenis1', {
  y:500,
  x:-100,
  rotate:44, 
});
portada.to('.portada_escondida_tenis1', {
  y:2000,
  x:-800,
  rotate:210,
});
portada.to('.gota1', {
  scale:50
});
portada.to('.portada_pregunta', {
  backgroundImage:'none',
  backgroundColor:'var(--lima)',
});
portada.to('.gota1, .portada_pregunta_sticky', {
  display:'none'
});


// const sale = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_sale',  
//     start: 'top center',  
//     end: 'top top',      
//     scrub: true,    
//     markers: false, 
//   },
// });
// sale.to('.portada_escondida_tenis1', {
//   bottom:'-250%',
//   left:'-40%',
//   transform: 'rotate(-150deg)',
// });



// // create
// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 768px)", () => {

//  const gota = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.aux_gota',  
//       start: 'bottom center',  
//       end: 'top top',  
//       scrub: true,    
//       markers: false, 
//     },
//   });
//   gota.to('.gota1', {
//     transform:'scale(100)'  
//   });

//   const gotaSale = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.aux_gota',  
//       start: 'top top',  
//       end: 'bottom top',  
//       scrub: true,    
//       markers: false, 
//     },
//   });
//   gotaSale.to('.portada_pregunta', {
//     backgroundImage:'none',
//     backgroundColor:'var(--lima)'  
//   });
//   gotaSale.to('.gota1, .portada_pregunta_sticky', {
//     visibility:'hidden'  
//   });

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
// });
