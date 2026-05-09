// TYPING EFFECT

var typed = new Typed(".typing",{

    strings:[
        "AI Developer",
        "Web Developer",
        "ECE Student",
        "Creative Thinker"
    ],

    typeSpeed:100,
    backSpeed:60,
    loop:true

});


// PARTICLES

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "move": {
      "speed": 2
    },
    "line_linked": {
      "enable": true
    }
  }
});


// AOS

AOS.init({
  duration:1200,
});