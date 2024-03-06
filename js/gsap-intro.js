gsap.registerPlugin(ScrollTrigger);

const totalScrollDuration = document.querySelector('.intro1').offsetHeight; // or a custom value

const intro1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro1',  
    start: 'top top', 
    end: () => "+=" + totalScrollDuration,
    scrub: 2,    
    markers: false, 
    pin:true,
    // pinSpacing:false,
    // pinSpacer:false,
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
    duration: totalScrollDuration * 0.2
  });
  intro1.to('.intro1_planeta_arriba', {
    transform: 'rotate(-5deg)',
    duration: totalScrollDuration * 0.2
  },'<');
  intro1.to('.intro1_planeta_gota', {
    top:'20%',
    duration: totalScrollDuration * 0.2
  },'<');
  intro1.to('.intro1_planeta_ballena', {
    top: '23%',
    left: '46%',
    duration: totalScrollDuration * 0.2
  },'<');

  // 3
  intro1.to('.intro1_planeta_gota', {
    top:'53%',
    zIndex:'200',
    duration: totalScrollDuration * 0.2
  });
  // 4
  intro1.to('.intro1_planeta_arriba', {
    bottom:'140%',
    duration: totalScrollDuration * 0.2
  });
  intro1.to('.intro1_planeta_ballena', {
    top:'45%',
    left:'30%',
    duration: totalScrollDuration * 0.2
  },'<');
  intro1.to('.intro1_planeta_nuestro', {
    top:'-50%',
    duration: totalScrollDuration * 0.2
  },'<');
  intro1.to('.intro1_texto', {
    top:'60%',
    left:'30%',
    duration: totalScrollDuration * 0.2
  },'<');

  // 5
  intro1.to('.intro1', {
    backgroundColor:'var(--azul)',
    duration: totalScrollDuration * 0.2
  });
  intro1.to('.intro1_planeta_gota', {
    transform:'scale(4.5)',
    top:'12%',
    duration: totalScrollDuration * 0.2
  },'<');
  intro1.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(0%)',
  }, '<');
  intro1.to('.btn-main', {
      color:'#fff',
  }, '<');

  // 6
  intro1.to('.intro1_planeta_abajo', {
    transform:'scale(1.8)',
    bottom:'20%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_gota', {
    transform:'scale(60)',
    top:'20%',
    duration: totalScrollDuration * 0.2
  },);
  intro1.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(80%)',
  }, '<');
  intro1.to('.btn-main', {
      color:'#383838',
  }, '<');
  intro1.to('.intro1_planeta_abajo', {
    bottom:'150%',
    duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro1_planeta_ballena', {
    top:'-145%',
  },'<');
  intro1.to('.intro1_texto', {
    top:'-150%',
  },'<');
  intro1.to('.intro1_planeta_gota', {
    display:'none',
  });
  intro1.to('.intro1_planeta_gota', {
   display:'none',
  },);

  // 8
  intro1.to('.intro1', {
    backgroundColor:'var(--lima)',
    // duration: totalScrollDuration * 0.1
  },'<');
  intro1.to('.intro', {
    backgroundImage:'url("./img/intro/textura-planeta.png")',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
  },'<');
  intro1.to('.intro1', {
    backgroundColor:'transparent',
  },'<');


const intro2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro2',  
    start: 'top top',  
    scrub: 2,    
    markers: false, 
    pin:true,
  },
});
// intro 2
  intro2.to('.btn-main img, .portada_btn-xdata img', {
      filter: 'invert(0%)',
  }, );
  intro2.to('.btn-main', {
      color:'#fff',
  },'<' );
  intro2.to('.intro2', {
    opacity:'1',
  },'<');
  intro2.to('.intro2_texto1', {
    opacity:1,
      top:'50%',
      left:'-32%'
  });
  intro2.to('.intro2_planeta_abajo', {
      transform:'rotate(10deg)'
  });
  intro2.to('.intro2_planeta_gota', {
      top:'86%',
  });
  intro2.to('.intro2_texto2', {
      top:'80%',
      left:'-20%',
      opacity:1
  });
  intro2.to('.intro2_planeta_gota', {
      top:'88%',
      left:'65.7%',
      width:'5%'
  });
  intro2.to('.intro2_planeta_mitad', {
      top:'5%',
  });
  intro2.to('.intro2_planeta_abajo', {
      top:'44.8%',
  },'<');
  intro2.to('.intro2_texto1', {
      top:'20%',
  },'<');
  intro2.to('.intro2_texto2', {
      top:'50%',
  },'<');
  intro2.to('.intro2_planeta_gota', {
      top:'58%',
  },'<');
  intro2.to('.intro2_planeta_gota', {
      width:'45%',
      left:'47%'
  });

  intro2.to('.intro2_planeta_mitad', {
      top:'-75%',
  });
  intro2.to('.intro2_planeta_abajo', {
      top:'-35.2%',
  },'<');
  intro2.to('.intro2_texto1', {
      top:'-60%',
  },'<');
  intro2.to('.intro2_texto2', {
      top:'-30%',
  },'<');
  intro2.to('.intro2_planeta_gota', {
      top:'-2%',
  },'<');

  intro2.to('.intro2_planeta_gota', {
      scale: 12,
      transformOrigin: 'center'
  });
  intro2.to('.intro2_planeta_gota', {
    display:'none'
  });
  intro2.to('.intro2', {
    backgroundColor:'var(--azul)'
  });
  intro2.to('.intro', {
    backgroundColor:'var(--azul)',
    backgroundImage:'none'
  });

const intro3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro3',  
    // start: 'top top',  
    scrub: 2,    
    markers: false, 
    pin:true,
  },
});
intro3.to('.intro3', {
  opacity:'1'
},'<');
intro3.to('.intro3_texto1', {
  opacity:1,
  top:'18%',
  left:'80%'
});

intro3.to('.intro3_gota2', {
  rotate:'0'
});
intro3.to('.intro3_gota3', {
  rotate:'25deg',
  top:'75%',
  left:'31.5%'
},'<');
intro3.to('.intro3_texto3', {
  top:'58%',
  left:'15%'
},'<');


intro3.to('.intro3_texto2', {
  opacity:1,
  top:'53%',
  left:'-14%'
});
intro3.to('.intro3_gota3', {
  rotate:'0',
  top:'74.8%',
  left:'30%'
});
intro3.to('.intro3_texto3', {
  visibility:'visible',
  top:'75%',
  left:'-26%'
});
intro3.to('.intro3_gotaverde', {
 width:'5%',
  top:'82%',
  left:'28.5%'
});

intro3.to('.intro3_gota1', {
  top:'-20%',
});
intro3.to('.intro3_gota2', {
  top:'21.4%',
},'<');
intro3.to('.intro3_gota3', {
  top:'45%',
},'<');
intro3.to('.intro3_texto1', {
  top:'-12%',
},'<');
intro3.to('.intro3_texto2', {
  top:'23%',
},'<');
intro3.to('.intro3_texto3', {
  top:'45%',
},'<');
intro3.to('.intro3_gotaverde', {
  scale: 9,
    transformOrigin: 'center'
},'<');
intro3.to('.intro3_gota1', {
  top:'-90%',
});
intro3.to('.intro3_gota2', {
  top:'-48.6%',
},'<');
intro3.to('.intro3_gota3', {
  top:'-25.2%',
},'<');
intro3.to('.intro3_texto1', {
  top:'-82%',
},'<');
intro3.to('.intro3_texto2', {
  top:'-47%',
},'<');
intro3.to('.intro3_texto3', {
  top:'-25%',
},'<');
intro3.to('.intro2_planeta_mitad', {
  opacity:'0',
},'<');
intro3.to('.intro3_gotaverde', {
  zIndex:200,
  scale: 115,
  transformOrigin: 'center'
},'<');
intro3.to('.intro3_gotaverde', {
 display:'none'
});
intro3.to('.intro3', {
  backgroundColor:'var(--lima)'
},'<');
intro3.to('.btn-main img, .portada_btn-xdata img', {
    filter: 'invert(80%)',
}, '<');
intro3.to('.btn-main', {
    color:'#383838',
}, '<');

const intro4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro4',  
    start: 'top top',  
    scrub: 2,    
    // markers: true, 
    pin:true,
  },
});

intro4.to('.intro4', {
  opacity:'1'
},'<');
intro4.to('.intro4_agua, .intro4_verde', {
  right:'0'
});
intro4.to('.intro4_del_agua, .intro4_texto', {
  opacity:'1',
});

intro4.to('.intro4_del_agua', {
  left:'5%',
  opacity:1
});
intro4.to('.intro4_texto', {
  bottom:'32%',
});

intro4.to('.intro4_azul', {
  opacity:'1'
},'<');


// intro4.to('.intro5_inicio', {
//   opacity:1
// },'+2');
// intro4.to('.intro5_impacto', {
//   opacity:1
// });
// intro4.to('.intro5_huella', {
//   opacity:1
// });
// intro4.to('.intro', {
//   backgroundColor:'var(--lima'
// });
// intro4.to('.btn-main img, .portada_btn-xdata img', {
//     filter: 'invert(0%)',
// }, '<');
// intro4.to('.btn-main', {
//     color:'#fff',
// }, '<');

// intro4.to('.btn-main', {
//     color:'#fff',
// }, '<');




const intro5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro5',  
    start: 'top top',  
    scrub: 2,    
    markers: true, 
    pin:true,
  },
});

// intro5.to('.intro5', {
//   top:'0',
// });
intro5.to('.intro5', {
  opacity:'1'
});
intro5.to('.intro5_inicio', {
  opacity:'1'
});
intro5.to('.intro5_impacto', {
  opacity:'1'
});
intro5.to('.intro5_huella', {
  opacity:'1'
});






