gsap.registerPlugin(ScrollTrigger);

const totalScrollDuration = document.querySelector('.intro1').offsetHeight; // or a custom value

const intro1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro1',  
    start: 'top top', 
    scrub: 2,    
    markers: false, 
    pin:true,
    pinSpacing:false,
  },
});
// intro1
  intro1.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(80%)',
  }, );
  intro1.to('.btn-main', {
      color:'#383838',
  }, '<');
  // 1
  intro1.to('.intro1_planeta_nuestro', {
    top: '13%',
    left: '-15%',
    transform: 'rotate(-5deg)',
    duration: totalScrollDuration * 0.1
  }, );
  // 2
 
   intro1.to('.intro1_texto', {
    opacity:1,
    left: '-40%',
    duration: totalScrollDuration * 0.1
  });

  intro1.to('.intro1_planeta_arriba', {
    transform: 'rotate(-5deg)',
    duration: totalScrollDuration * 0.1
  });
   intro1.to('.ovalo2', {
    transform: 'rotate(-6deg)',
    bottom:'47%',
    left:'15%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_gota', {
    top:'20%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_ballena', {
    top: '23%',
    left: '46%',
    duration: totalScrollDuration * 0.1
  });



  // 3
  intro1.to('.intro1_planeta_gota', {
    top:'53%',
    zIndex:'200',
    duration: totalScrollDuration * 0.1
  });
  // 4
  intro1.to('.intro1_planeta_arriba', {
    bottom:'140%',
    duration: totalScrollDuration * 0.1
  });
  intro1.to('.ovalo2', {
    bottom:'135%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_ballena', {
    top:'45%',
    left:'30%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_nuestro', {
    top:'-50%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_texto', {
    top:'60%',
    left:'30%',
    duration: totalScrollDuration * 0.1
  },'<');

  // 5
  intro1.to('.intro1', {
    backgroundColor:'var(--azul)',
    duration: totalScrollDuration * 0.1
  });

  intro1.to('.intro1_planeta_gota', {
    transform:'scale(4.5)',
    top:'12%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_abajo', {
    transform:'scale(1.8)',
    bottom:'20%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.ovalo1', {
    visibility:'hidden'
  },'<');
  intro1.to('.ovalo_blanco', {
    transform:'scale(1.8)',
    bottom:'78%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(0%)',
  }, '<');
  intro1.to('.btn-main', {
      color:'#fff',
  }, '<');

  // 6
  
  intro1.to('.intro1_planeta_gota', {
    transform:'scale(60)',
    top:'20%',
    duration: totalScrollDuration * 0.1
  },);
  intro1.to('.intro1', {
    backgroundColor:'var(--lima)',
    // duration: totalScrollDuration * 0.1
  });
  intro1.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(80%)',
  }, '<');
  intro1.to('.btn-main', {
      color:'#383838',
  }, '<');
  intro1.to('.intro1_planeta_abajo', {
    bottom:'150%',
  },'<');
  intro1.to('.ovalo_blanco', {
    bottom:'150%',
  },'<');
  intro1.to('.intro1_planeta_ballena', {
    top:'-145%',
  },'<');
  intro1.to('.intro1_texto', {
    top:'-150%',
  },'<');
  // 8
  intro1.to('.intro1', {
    backgroundColor:'transparent',
    duration:1
  },'<');
  intro1.to('.intro', {
    backgroundImage:'url("./img/intro/textura-planeta.png")',
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
  },'<');
  intro1.to('.intro1_planeta_gota', {
    display:'none',
  },'<');
  
  

const totalScrollDuration2 = document.querySelector('.intro2').offsetHeight; // or a custom value

const intro2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro2',  
    start: 'top top',  
    scrub: 2,    
    markers: false, 
    pin:true,
    pinSpacing:false,
  },
});
// intro 2
  intro2.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(80%)',
    duration: totalScrollDuration2 * 0.1
  }, );
  intro2.to('.btn-main', {
      color:'#383838',
    duration: totalScrollDuration2 * 0.1
  },'<' );
  intro2.to('.intro2', {
    opacity:'1',
    duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_texto1', {
    opacity:1,
      top:'50%',
      left:'-32%',
    duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_abajo', {
      transform:'rotate(10deg)',
    duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_gota', {
      top:'86%',
      duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_texto2', {
      top:'80%',
      left:'-20%',
      opacity:1,
      duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_gota', {
      top:'88%',
      left:'65.7%',
      width:'5%',
      duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_mitad', {
      top:'5%',
      duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_abajo', {
      top:'44.8%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_texto1', {
      top:'20%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_texto2', {
      top:'50%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_planeta_gota', {
      top:'58%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_planeta_gota', {
      width:'45%',
      left:'47%',
      duration: totalScrollDuration2 * 0.1
  });

  intro2.to('.intro2_planeta_mitad', {
      top:'-75%',
      duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2_planeta_abajo', {
      top:'-35.2%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_texto1', {
      top:'-60%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_texto2', {
      top:'-30%',
      duration: totalScrollDuration2 * 0.1
  },'<');
  intro2.to('.intro2_planeta_gota', {
      top:'-2%',
      duration: totalScrollDuration2 * 0.1
  },'<');

  intro2.to('.intro2_planeta_gota', {
      scale: 12,
      transformOrigin: 'center',
      duration: totalScrollDuration2 * 0.2
  });
  intro2.to('.intro2_planeta_gota', {
    display:'none',
    duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.intro2', {
    backgroundColor:'var(--azul)',
    duration: totalScrollDuration2 * 0.1
  });
  intro2.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(0%)',
  }, );
  intro2.to('.btn-main', {
      color:'#fff',
  },'<' );
  intro2.to('.intro', {
    backgroundColor:'var(--azul)',
    backgroundImage:'none',
    duration: totalScrollDuration2 * 0.1
  });

const totalScrollDuration3 = document.querySelector('.intro3').offsetHeight; // or a custom value

const intro3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro3',  
    start: 'top top',  
    scrub: 2,    
    markers: true, 
    pin:'.intro3_planeta',
    // pinSpacing:false,
  },
});
// intro 3
  intro3.to('.intro3', {
    opacity:'1',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto1', {
    opacity:1,
    top:'18%',
    left:'80%',
    duration: totalScrollDuration3 * 0.1
  });

  intro3.to('.intro3_gota2', {
    rotate:'0',
    duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3_gota3', {
    rotate:'25deg',
    top:'75%',
    left:'31.5%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto3', {
    top:'58%',
    left:'15%',
    duration: totalScrollDuration3 * 0.1
  },'<');


  intro3.to('.intro3_texto2', {
    opacity:1,
    top:'53%',
    left:'-14%',
    duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3_gota3', {
    rotate:'0',
    top:'74.8%',
    left:'30%',
    duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3_texto3', {
    visibility:'visible',
    top:'75%',
    left:'-26%',
    duration: totalScrollDuration3 * 0.1
  });
    intro3.to('.oval_verde', {
      backgroundPosition:'right bottom',
      duration: totalScrollDuration3 * 0.1
    });
    intro3.to('.intro3_gotaverde', {
     width:'5%',
      top:'82%',
      left:'28.5%',
      duration: totalScrollDuration3 * 0.1,
    });


  intro3.to('.intro3_gota1', {
    top:'-20%',
    duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3_gota2', {
    top:'21.4%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_gota3', {
    top:'45%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto1', {
    top:'-12%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto2', {
    top:'23%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto3', {
    top:'45%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_gotaverde', {
    scale: 9,
      transformOrigin: 'center',
      duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_gota1', {
    top:'-90%',
    duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3_gota2', {
    top:'-48.6%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_gota3', {
    top:'-25.2%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto1', {
    top:'-82%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto2', {
    top:'-47%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_texto3', {
    top:'-25%',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro2_planeta_mitad', {
    opacity:'0',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.intro3_gotaverde', {
    zIndex:200,
    scale: 115,
    transformOrigin: 'center',
    duration: totalScrollDuration3 * 0.05
  },'<');
  intro3.to('.intro3_gotaverde', {
   display:'none',
   duration: totalScrollDuration3 * 0.1
  });
  intro3.to('.intro3', {
    backgroundColor:'var(--lima)',
    duration: totalScrollDuration3 * 0.1
  },'<');
  intro3.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(80%)',
      duration: totalScrollDuration3 * 0.1
  }, '<');
  intro3.to('.btn-main', {
      color:'#383838',
      duration: totalScrollDuration3 * 0.1
  }, '<');

const totalScrollDuration4 = document.querySelector('.intro4').offsetHeight; // or a custom value

const intro4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro4',  
    start: 'top top', 
    end: 'bottom top',
    scrub: 2,    
    markers: true, 
    pin:true,
    pinSpacing:false,
  },
});
// intro 4 
  intro4.to('.intro4', {
    opacity:'1',
      duration: totalScrollDuration4 * 0.1

  },'<');
  intro4.to('.intro4_agua, .intro4_verde', {
    right:'0',
      duration: totalScrollDuration4 * 0.1

  });
  intro4.to('.intro4_del_agua, .intro4_texto', {
    opacity:'1',
      duration: totalScrollDuration4 * 0.1

  });

  intro4.to('.intro4_del_agua', {
    left:'5%',
    opacity:1,
      duration: totalScrollDuration4 * 0.1
  });
  intro4.to('.intro4_texto', {
    bottom:'32%',
      duration: totalScrollDuration4 * 0.1

  });

  intro4.to('.intro4_azul', {
    opacity:'1',
      duration: totalScrollDuration4 * 0.1
  },'<');
  intro4.to('.intro1_planeta_nuestro', {
    visibility:'hidden',
      duration: totalScrollDuration4 * 0.4
  },'<');

const totalScrollDuration5 = document.querySelector('.intro5').offsetHeight; // or a custom value

const intro5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro5',  
    start: 'top top',  
    scrub: 2,    
    // markers: true, 
    pin:true,
  },
});
intro5.to('.btn-main img, .portada_btn-xdata img', {
    filter: 'invert(0%)',
}, );
intro5.to('.btn-main', {
    color:'#fff',
},'<' );
intro5.to('.intro5_inicio', {
  opacity:'1',
      duration: totalScrollDuration5 * 0.1
});
intro5.to('.intro5_impacto', {
  opacity:'1',
      duration: totalScrollDuration5 * 0.1
});
intro5.to('.intro5_huella', {
  opacity:'1',
      duration: totalScrollDuration5 * 0.1
});
  intro5.to('.intro1_planeta_nuestro', {
    visibility:'hidden',
      duration: totalScrollDuration5 * 0.4
  },'<');






