// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
    var wordWrap = tricksWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');
}
var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
    var letterWrap = tricksLetter.item(i);
    letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

// Fade Up Animation
var fadeUp = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp
    .add({
        targets: '.fade-up .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [15, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp2 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp2
    .add({
        targets: '.fade-up2 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp3 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp3
    .add({
        targets: '.fade-up3 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp4 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp4
    .add({
        targets: '.fade-up4 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp5 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp5
    .add({
        targets: '.fade-up5 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp6 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp6
    .add({
        targets: '.fade-up6 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp7 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp7
    .add({
        targets: '.fade-up7 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp8 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp8
    .add({
        targets: '.fade-up8 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp9 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp9
    .add({
        targets: '.fade-up9 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp10 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp10
    .add({
        targets: '.fade-up10 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp11 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp11
    .add({
        targets: '.fade-up11 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp12 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp12
    .add({
        targets: '.fade-up12 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp13 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp13
    .add({
        targets: '.fade-up13 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp14 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp14
    .add({
        targets: '.fade-up14 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp15 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp15
    .add({
        targets: '.fade-up15 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp16 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp16
    .add({
        targets: '.fade-up16 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

var fadeUp17 = anime.timeline({
    loop: false,
    autoplay: false,
});

fadeUp17
    .add({
        targets: '.fade-up17 .tricksword',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        rotateZ: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 50 * i
    });

// Play animation when scrolled into view
$('#scroll-in').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp.play();
    } else {}
});
$('#scroll-in2').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp2.play();
    } else {}
});
$('#scroll-in3').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp3.play();
    } else {}
});
$('#scroll-in4').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp4.play();
    } else {}
});
$('#scroll-in5').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp5.play();
    } else {}
});
$('#scroll-in6').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp6.play();
    } else {}
});
$('#scroll-in7').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp7.play();
    } else {}
});
$('#scroll-in8').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp8.play();
    } else {}
});
$('#scroll-in9').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp9.play();
    } else {}
});
$('#scroll-in10').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp10.play();
    } else {}
});
$('#scroll-in11').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp11.play();
    } else {}
});
$('#scroll-in12').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp12.play();
    } else {}
});
$('#scroll-in13').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp13.play();
    } else {}
});
$('#scroll-in14').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp14.play();
    } else {}
});
$('#scroll-in15').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp15.play();
    } else {}
});
$('#scroll-in16').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp16.play();
    } else {}
});
$('#scroll-in17').on('inview', function(event, isInView) {
    if (isInView) {
        fadeUp17.play();
    } else {}
});
