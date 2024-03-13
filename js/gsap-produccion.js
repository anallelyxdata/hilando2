// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const produccion1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion1_container',  
    start: 'top top',  
    scrub: 1,    
    markers: false, 
    pinSpacing:true,
    pin:true,
  },
});
produccion1.to('.produccion1_texto_h2', {
  
},);


const produccion2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion2',  
    start: 'top top',  
    scrub: 1,    
    markers: true, 
    pinSpacing:false,
    pin:true,
  },
});
// Callback function to execute GSAP animation after D3.js operation
function executeGSAPAnimation() {
  produccion2.to('path.line-0', {
    opacity: '1'
  }, '<');
  produccion2.to('.path', {
  transitionDuration:'3000'
}, '<');
  produccion2.to('path.line-1', {
    opacity: '1'
  }, '<');
}

function executeGSAPAnimationCircle() {
  produccion2.to('g:nth-child(5) > circle', {
    opacity: '1'
  }, '<');
  produccion2.to('g:nth-child(6) > circle', {
    opacity: '1'
  }, '<');
}