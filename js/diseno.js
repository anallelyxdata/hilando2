gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".section_diseno",
    pin: true,
    scrub: 2,
    markers:true,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

document.querySelector('.dis2_button').addEventListener('mouseover', function() {
    const revealElements = document.querySelectorAll('.dis2_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '1';
    });
    document.querySelector('.dis2_button').style.animationName='none'
});

document.querySelector('.dis2_button').addEventListener('mouseout', function() {
    const revealElements = document.querySelectorAll('.dis2_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '0';
    });
    document.querySelector('.dis2_button').style.animationName='pulse-animation'
});

// 3
document.querySelector('.dis3_button1').addEventListener('mouseover', function() {
    document.querySelector('#dis3_reveal1').style.opacity='1'
    document.querySelector('.dis3_button1').style.animationName='none'
});

document.querySelector('.dis3_button1').addEventListener('mouseout', function() {
    document.querySelector('#dis3_reveal1').style.opacity='0'
    document.querySelector('.dis3_button1').style.animationName='pulse-animation'
});


document.querySelector('.dis3_button2').addEventListener('mouseover', function() {
    document.querySelector('#dis3_reveal2').style.opacity='1';
    document.querySelector('.dis3_button2').style.animationName='none'
});

document.querySelector('.dis3_button2').addEventListener('mouseout', function() {
    document.querySelector('#dis3_reveal2').style.opacity='0';
    document.querySelector('.dis3_button2').style.animationName='pulse-animation'
});

// 4
document.querySelector('.dis4_button1').addEventListener('mouseover', function() {
    document.querySelector('.dis4_reveal1').style.opacity='1'
});

document.querySelector('.dis4_button1').addEventListener('mouseout', function() {
    document.querySelector('.dis4_reveal1').style.opacity='0'
});

document.querySelector('.dis4_button2').addEventListener('mouseover', function() {
    document.querySelector('.dis4_reveal2').style.opacity='1'
});

document.querySelector('.dis4_button2').addEventListener('mouseout', function() {
    document.querySelector('.dis4_reveal2').style.opacity='0'
});

// 5
document.querySelector('.dis5_button1').addEventListener('mouseover', function() {
    document.querySelector('.dis5_reveal1').style.opacity='1'
});

document.querySelector('.dis5_button1').addEventListener('mouseout', function() {
    document.querySelector('.dis5_reveal1').style.opacity='0'
});

