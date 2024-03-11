document.addEventListener("DOMContentLoaded", function () {

    const sectionCiclo = document.querySelector('.section_ciclo');

    // Produccion de Fibra
    document.getElementById("g_produccion").addEventListener("click", function() {

        document.getElementById('ciclo_aux_fibra').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/fondo_verde.png)';

       
    });

    // Diseño

    document.getElementById("g_dis").addEventListener("click", function() {
        
        document.getElementById('ciclo_aux_dis').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/textura-azul.png)';


    });

    // Manufactura
    document.getElementById("g_manufactura").addEventListener("click", function() {
        
        document.getElementById('ciclo_aux_manufactura').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/fondo_lima.png)';

    });

    // Logística
    document.getElementById("g_logistica").addEventListener("click", function() {

        document.getElementById('ciclo_aux_logistica').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/textura_gris.png)';

    });

    // Uso y M
    document.getElementById("g_uso").addEventListener("click", function() {

        document.getElementById('ciclo_aux_uso').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/textura_naranja.png)';

    });

    // Nueva Vida
    document.getElementById("g_nueva").addEventListener("click", function() {

        document.getElementById('ciclo_aux_nuevavida').scrollIntoView({ behavior: 'smooth' });
        sectionCiclo.style.backgroundImage = 'url(./img/fondos/textura_azulDos.png)';

    });

})

document.addEventListener('DOMContentLoaded', (event) => {
  // Function to check if the element is visible in the viewport
  const isElementVisible = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const checkVisibilityAndChangeBackground = () => {
    const ciclo_aux_ciclo = document.querySelector('.ciclo_aux_ciclo');
    const ciclo_aux_fibra = document.querySelector('.ciclo_aux_fibra');
    const ciclo_aux_dis = document.querySelector('.ciclo_aux_dis');
    const ciclo_aux_manufactura = document.querySelector('.ciclo_aux_manufactura');
    const ciclo_aux_logistica = document.querySelector('.ciclo_aux_logistica');
    const ciclo_aux_uso = document.querySelector('.ciclo_aux_uso');
    const ciclo_aux_nuevavida = document.querySelector('.ciclo_aux_nuevavida');
    const section_ciclo = document.querySelector('.section_ciclo');

    if(isElementVisible(ciclo_aux_ciclo)){
        document.querySelector('.ciclo_texto_titulo').style.display = 'none';
        document.querySelector('.ciclo_texto_btn').style.display = 'none';
        document.querySelector('.ciclo_lima_abajo').style.display = 'block';
        document.querySelector('.ciclo_texto_p').innerText = 'Para realmente comprender el impacto ambiental y social que tiene cada prenda, hemos analizado cada etapa de su ciclo de vida.';

        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });

        document.querySelector('.btn-main img').style.filter = 'invert(0%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(0%)';
        document.querySelector('.btn-main').style.color = '#fff';

    }
    else if (isElementVisible(ciclo_aux_fibra)) {
        section_ciclo.style.backgroundImage = 'url(./img/fondos/fondo_verde.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_produccion .cls-2').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/fibra.png)';
        });

        document.querySelector('.btn-main img').style.filter = 'invert(0%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(0%)';
        document.querySelector('.btn-main').style.color = '#fff';

        document.querySelector(".circulo_grande").style.borderColor = "#1b3339";
        document.querySelector(".circulo_grande2").style.borderColor = "#1b3339";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "var(--verdeDark)";
        document.querySelector(".k_circle_1").style.backgroundColor = "var(--verde)";

        document.querySelector(".slice .span1").style.borderRadius = "50%";
        document.querySelector(".slice .span2").style.borderRadius = "50%";
        document.querySelector(".slice .span1").style.backgroundColor = "transparent";
        document.querySelector(".slice .span2").style.backgroundColor = "transparent";
        document.querySelector(".slice .span1").style.borderColor = "var(--lima)";
        document.querySelector(".slice .span2").style.borderColor = "var(--lima)";

        document.querySelector(".cuadro1").style.backgroundColor = "var(--lima)";
        document.querySelector(".cuadro2").style.backgroundColor = "var(--lima)";


        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "var(--lima)";
            element.style.transform = "rotate(0)";
            element.style.top = "3.5%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "var(--lima)";
            element.style.transform = "rotate(0)";
            element.style.bottom = "3.5%";
        });

        document.querySelector('.ciclo_texto_titulo').style.display = 'block';
        document.querySelector('.ciclo_texto_btn').style.display = 'block';
        document.querySelector('.ciclo_lima_abajo').style.display = 'none';

        document.querySelector(".ciclo_texto").style.color="#fff";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(206,241,115,.19)";

        document.querySelector('.ciclo_texto_titulo').innerText = 'Producción de Fibra';
        document.querySelector('.ciclo_texto_p').innerText = 'En un inicio es esencial decidir que tipo de fibra existen realizamos un análisis acerca de las fibras más producidas y de las principales su impacto ambiental';

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="#d4ec6b";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="var(--lima)";
        });
        document.querySelector(".k_circle_F3").style.borderColor="var(--lima)";
        document.querySelector(".k_circle_4").style.borderColor="var(--lima)";

        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida.png";

    } else if (isElementVisible(ciclo_aux_dis)){
        section_ciclo.style.backgroundImage = 'url(./img/fondos/textura-azul.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_dis .cls-4').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/diseño.png)';
        });

        document.querySelector('.btn-main img').style.filter = 'invert(0%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(0%)';
        document.querySelector('.btn-main').style.color = '#fff';

        document.querySelector(".circulo_grande").style.borderColor = "#2b309e";
        document.querySelector(".circulo_grande2").style.borderColor = "#2b309e";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".cuadro1").style.backgroundColor = "transparent";
        document.querySelector(".cuadro2").style.backgroundColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "#69719d";
        document.querySelector(".k_circle_1").style.backgroundColor = "#859383";

        document.querySelector(".ciclo_texto").style.color="#fff";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(206,241,115,.19)";

        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "0";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.top = "-1%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "0";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.bottom = "-1%";
        });

        document.querySelector('.ciclo_texto_titulo').innerText = 'Diseño';
        document.querySelector('.ciclo_texto_p').innerText = 'Aquí se engloban todas las etapas, ya que su concepto, materiales, producción y distribución dependen de ella. ¿Quieres saber más de una prenda sostenible?';

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="#d4ec6b";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida.png";
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="var(--lima)";
        });
        document.querySelector(".k_circle_F3").style.borderColor="var(--lima)";
        document.querySelector(".k_circle_4").style.borderColor="var(--lima)";

    }
    else if (isElementVisible(ciclo_aux_manufactura)){
        section_ciclo.style.backgroundImage = 'url(./img/fondos/fondo_lima.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_manufactura .cls-4').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/manufactura.png)';
        });

        document.querySelector('.btn-main img').style.filter = 'invert(80%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(80%)';
        document.querySelector('.btn-main').style.color = '#383838';

        document.querySelector(".circulo_grande").style.borderColor = "#80a15a";
        document.querySelector(".circulo_grande2").style.borderColor = "#80a15a";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "var(--lima)";
        document.querySelector(".k_circle_1").style.backgroundColor = "#80a15a";

        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida_azul.png";
        document.querySelector(".ciclo_texto").style.color="var(--verde)";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--verde)";
        document.querySelector(".ciclo_texto_btn").style.color="var(--verde)";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(44,76,81,.19)";


        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.top = "-1%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.bottom = "-1%";
        });

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="var(--verde)";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="var(--verde)";
        });

        document.querySelector(".k_circle_F3").style.borderColor="var(--verde)";
        document.querySelector(".k_circle_4").style.borderColor="var(--verde)";

        document.querySelector('.ciclo_texto_titulo').innerText = 'Manufactura';
        document.querySelector('.ciclo_texto_p').innerText = 'El recorrido continua con la produccíon de la prendas. ¿Quieres saber acerca de los impactos naturales y sociales que conlleva crearla? Un suceso te lo mostrará';
    }
    else if (isElementVisible(ciclo_aux_logistica)){
        section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_gris.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_logistica .cls-4').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/logistica.png)';
        });

        document.querySelector('.btn-main img').style.filter = 'invert(80%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(80%)';
        document.querySelector('.btn-main').style.color = '#383838';


        document.querySelector('.ciclo_texto_titulo').innerText = 'Logística y distribución';
        document.querySelector('.ciclo_texto_p').innerText = 'Una vez realizada la prenda, es necesario distribuirla, los medios de transporte son esencial para ello. Te enseñamos la mejor ruta para adquirirlas.';

        document.querySelector(".circulo_grande").style.borderColor = "#9192c2";
        document.querySelector(".circulo_grande2").style.borderColor = "#9192c2";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "#9d9ccb";
        document.querySelector(".k_circle_1").style.backgroundColor = "#6364d5";

        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida_azul_rey.png";
        document.querySelector(".ciclo_texto").style.color="#000";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--azul)";
        document.querySelector(".ciclo_texto_btn").style.color="#000";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(68,68,229,.19)";


        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "transparent";
            element.style.transform = "rotate(45deg)";
            element.style.top = "-1%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.bottom = "-1%";
        });

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="var(--verde)";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="var(--verde)";
        });
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="transparent";
        });
        document.querySelector(".k_circle_F3").style.borderColor="transparent";
        document.querySelector(".k_circle_4").style.borderColor="transparent";

    }
    else if (isElementVisible(ciclo_aux_uso)){
        section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_naranja.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_uso .cls-4').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/uso.png)';
        });
        document.querySelector('.ciclo_texto_titulo').innerText = 'Uso y Mantenimiento';
        document.querySelector('.ciclo_texto_p').innerText = '¡La hora ha llegado! ¿Quieres parar este desenfrenado impacto? Puedes alargar la vida de tu prenda, con un cuidado adecuado y evitar tirarla con un consumo consiente';

        document.querySelector('.btn-main img').style.filter = 'invert(0%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(0%)';
        document.querySelector('.btn-main').style.color = '#fff';

        document.querySelector(".circulo_grande").style.borderColor = "#cfa353";
        document.querySelector(".circulo_grande2").style.borderColor = "#cfa353";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "#d5a45e";
        document.querySelector(".k_circle_1").style.backgroundColor = "#d0bb62";

        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida_gris.png";
        document.querySelector(".ciclo_texto").style.color="#fff";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.color="#fff";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(207,238,81,.19)";


        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "transparent";
            element.style.transform = "rotate(45deg)";
            element.style.top = "-1%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.bottom = "-1%";
        });

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="#fff";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="var(--verde)";
        });
        document.querySelector(".k_circle_F3").style.borderColor="transparent";
        document.querySelector(".k_circle_4").style.borderColor="var(--verde)";
    }
    else if (isElementVisible(ciclo_aux_nuevavida)){
        section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_azulDos.png)';
        document.querySelectorAll('.g_etapa text').forEach((element) => {
            element.style.opacity = '.63';
        });
        document.querySelectorAll('.g_nueva .cls-4').forEach((element) => {
            element.style.opacity = '1';
            element.style.fontWeight='700'
        });
        document.querySelectorAll('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6').forEach((element) => {
          element.style.backgroundImage = 'url(./img/ciclo/nueva_vida.png)';
        });
        document.querySelector('.ciclo_texto_titulo').innerText = 'Nueva vida';
        document.querySelector('.ciclo_texto_p').innerText = 'Siempre hay una solución para tus prendas, desde aprovecharlas para hacer nuevas, hasta venderlas, haz pensado en que adquirir ropa de segunda mano.';

        document.querySelector('.btn-main img').style.filter = 'invert(0%)';
        document.querySelector('.portada_btn-xdata img').style.filter = 'invert(0%)';
        document.querySelector('.btn-main').style.color = '#fff';

        document.querySelector(".circulo_grande").style.borderColor = "#3f53c0";
        document.querySelector(".circulo_grande2").style.borderColor = "#3f53c0";
        document.querySelector(".circulo_grande").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande").style.borderLeftColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderTopColor = "transparent";
        document.querySelector(".circulo_grande2").style.borderLeftColor = "transparent";

        document.querySelector(".k_circle_1").style.borderColor = "#4d5ecc";
        document.querySelector(".k_circle_1").style.backgroundColor = "#4a55d3";

        document.querySelector(".ciclo_circulo").src = "./img/ciclo/ciclo_de_vida.png";
        document.querySelector(".ciclo_texto").style.color="#fff";
        document.querySelector(".ciclo_texto_titulo").style.color="var(--lima)";
        document.querySelector(".ciclo_texto_btn").style.color="#fff";
        document.querySelector(".ciclo_texto_btn").style.backgroundColor="rgba(207,238,81,.19)";


        document.querySelectorAll('.slice .span1').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "transparent";
            element.style.borderColor = "transparent";
            element.style.transform = "rotate(45deg)";
            element.style.top = "-1%";
        });
        document.querySelectorAll('.slice .span2').forEach((element) => {
            element.style.borderRadius = "50%";
            element.style.backgroundColor = "var(--lima)";
            element.style.borderColor = "var(--verde)";
            element.style.transform = "rotate(45deg)";
            element.style.bottom = "-1%";
        });

        document.querySelectorAll('.cls-1').forEach((element) => {
            element.style.stroke="#fff";
        });
        document.querySelectorAll('.cls-2').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-3').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.cls-4').forEach((element) => {
            element.style.fill="#fff";
        });
        document.querySelectorAll('.slice').forEach((element) => {
            element.style.backgroundColor="var(--verde)";
        });
        document.querySelector(".k_circle_F3").style.borderColor="transparent";
        document.querySelector(".k_circle_4").style.borderColor="var(--verde)";
    }
  };

  // Listen for scroll events
  window.addEventListener('scroll', checkVisibilityAndChangeBackground);

  // Initial check in case the element is visible when the page loads
  checkVisibilityAndChangeBackground();
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   // Function to check if the element is in the middle of the screen
//   const checkIfElementIsInMiddle = () => {
//     const ciclo_aux_fibra = document.querySelector('.ciclo_aux_fibra');
//     const ciclo_aux_dis = document.querySelector('.ciclo_aux_dis');
//     const ciclo_aux_manufactura = document.querySelector('.ciclo_aux_manufactura');
//     const ciclo_aux_logistica = document.querySelector('.ciclo_aux_logistica');
//     const ciclo_aux_uso = document.querySelector('.ciclo_aux_uso');
//     const ciclo_aux_nuevavida = document.querySelector('.ciclo_aux_nuevavida');
//     const section_ciclo = document.querySelector('.section_ciclo');
   

//     const elementTopFibra = ciclo_aux_fibra.getBoundingClientRect().top;
//     const elementBottomFibra = ciclo_aux_fibra.getBoundingClientRect().bottom;

//     const elementTopDis = ciclo_aux_dis.getBoundingClientRect().top;
//     const elementBottomDis = ciclo_aux_dis.getBoundingClientRect().bottom;

//     const elementTopManufactura = ciclo_aux_manufactura.getBoundingClientRect().top;
//     const elementBottomManufactura = ciclo_aux_manufactura.getBoundingClientRect().bottom;

//     const elementTopLogistica = ciclo_aux_logistica.getBoundingClientRect().top;
//     const elementBottomLogistica = ciclo_aux_logistica.getBoundingClientRect().bottom;

//     const elementTopUso = ciclo_aux_uso.getBoundingClientRect().top;
//     const elementBottomUso = ciclo_aux_uso.getBoundingClientRect().bottom;

//     const elementTopNuevavida = ciclo_aux_nuevavida.getBoundingClientRect().top;
//     const elementBottomNuevavida = ciclo_aux_nuevavida.getBoundingClientRect().bottom;

//     const screenMiddle = window.innerHeight / 2;

//     // Checking if the element is in the middle of the screen
//     if (elementTopFibra < screenMiddle && elementBottomFibra > screenMiddle) {
//       // Change background of .section_ciclo to blue
//       section_ciclo.style.backgroundImage = 'url(./img/fondos/fondo_verde.png)';

//     } else if (elementTopDis < screenMiddle && elementBottomDis > screenMiddle){
//       // Optionally, reset the background color if the element is not in the middle
//         section_ciclo.style.backgroundImage = 'url(./img/fondos/textura-azul.png)';
//     }
//     else if (elementTopManufactura < screenMiddle && elementBottomManufactura > screenMiddle){
//       // Optionally, reset the background color if the element is not in the middle
//         section_ciclo.style.backgroundImage = 'url(./img/fondos/fondo_lima.png)';
//     }
//     else if (elementTopLogistica < screenMiddle && elementBottomLogistica > screenMiddle){
//       // Optionally, reset the background color if the element is not in the middle
//         section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_gris.png)';
//     }
//     else if (elementTopUso < screenMiddle && elementBottomUso > screenMiddle){
//       // Optionally, reset the background color if the element is not in the middle
//         section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_naranja.png)';
//     }
//     else if (elementTopNuevavida < screenMiddle && elementBottomNuevavida > screenMiddle){
//       // Optionally, reset the background color if the element is not in the middle
//         section_ciclo.style.backgroundImage = 'url(./img/fondos/textura_azulDos.png)';
//     }
//   };

//   // Listen for scroll events
//   window.addEventListener('scroll', checkIfElementIsInMiddle);

//   // Initial check in case the element is already in the middle when the page loads
//   checkIfElementIsInMiddle();
// });


