// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// Efecto para que la gota se vea que caiga un poco antes de hacerse grande
function handleScroll() {
  const portada_pregunta = document.getElementById('portada_pregunta_sticky');
  const portada_preguntaBounding = portada_pregunta.getBoundingClientRect();


  const windowHeight = window.innerHeight;

  // Calculate the bottom position of the element
  const portada_preguntaBottomPosition = portada_preguntaBounding.bottom;

  // Check if the bottom position is within the bottom 10% of the viewport
  if (portada_preguntaBottomPosition <= windowHeight * 0.7) {
    // Move the element to the fixed position at the bottom
    document.querySelector('.portada_pregunta-botones').style.opacity = "1";
  } else {
    // Restore the absolute position
    document.querySelector('.portada_pregunta-botones').style.opacity = "0";
  }

 
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();

document.addEventListener('DOMContentLoaded', function () {
  const imgElement = document.querySelector('.portada_btn-hilando img');
  // const btnElement = document.querySelector('.btn-main');
  const hilandoElement = document.querySelector('.portada_btn-hilando');
  const contactoElement = document.querySelector('.portada_btn-contacto');

  // Store the initial filter value and text color
  const initialFilter = imgElement.style.filter;
  const initialColor = contactoElement.style.color;

  // Add event listener to .portada_btn-hilando
  hilandoElement.addEventListener('mouseenter', function () {
    // Check if the initial filter is invert(80%)
    if (initialFilter === 'invert(80%)') {
      // Apply style change only if the initial filter is invert(80%)
      imgElement.style.filter = 'invert(0%)';
    }
  });

  // Add event listener to .portada_btn-xdata
  contactoElement.addEventListener('mouseenter', function () {
    // Check if the initial color is #383838
    if (initialColor != '#fff') {
      // Apply style change only if the initial color is #383838
      contactoElement.style.color = '#fff';
    }
  });

  // Revert back to the initial styles when mouse leaves the button
  hilandoElement.addEventListener('mouseleave', function () {
    imgElement.style.filter = initialFilter;
  });
    contactoElement.addEventListener('mouseleave', function () {
    contactoElement.style.color = initialColor;
  });
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("overlay_content").style.opacity = "1";
  disableScroll()
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("overlay_content").style.opacity = "0";
 enableScroll();
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}