console.log('%cHiiii  😎 😎 😎 !', 'color: blue; font-size: 20px');
console.log('%cNothing special here.', 'color: blue; font-size: 20px');
console.log('%cWant to know more go and checkout', 'color: blue; font-size: 20px');
console.log('%chttps://github.com/MEMARSAHAB', 'color: blue; font-size: 22px');
console.log('%chttps://www.linkedin.com/in/deepdev/', 'color: blue; font-size: 25px');

var $cursor = $('.cursor'),
  $overlay = $('.project-overlay');

function moveCircle(e) {
  TweenLite.to($cursor, 0.3, {
    css: {
      left: e.pageX - 320,
      top: e.pageY,
    },
    delay: 0.03,
  });
}

$('.p-1').hover(function () {
  $('.cursor').css({ 'background-image': 'url(./assets/images/buddy.png)' });
});
$('.p-2').hover(function () {
  $('.cursor').css({ 'background-image': 'url(./assets/images/iiitlAdmission.jpg)' });
});
$('.p-3').hover(function () {
  $('.cursor').css({ 'background-image': 'url(./assets/images/code19.png)' });
});
$('.p-4').hover(function () {
  $('.cursor').css({ 'background-image': 'url(./assets/images/axios.png)' });
});

var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on('mousemove', moveCircle);
});

$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});



////////////////////////////////

gsap.registerPlugin(ScrollTrigger);

gsap.to('body', 1, {
  backgroundColor: '#a0c0cd',
  scrollTrigger: {
    trigger: '.work_section',
    start: 'top bottom',
    end: 'bottom bottom',
    ease: Power2.easeInOut,
    toggleActions: 'restart reverse restart reverse',
    // markers: true,
  },
});

gsap.to('body', 1, {
  backgroundColor: '#ffe699',
  scrollTrigger: {
    trigger: '.contect_section',
    start: 'top bottom',
    end: 'bottom top',
    ease: Power2.easeInOut,
    toggleActions: 'restart reverse restart reverse',
  },
});

gsap.to('.smooth', 1, {
  opacity: 1,
  scrollTrigger: {
    trigger: '.smooth',
    start: 'top center',
    ease: Power2.easeInOut,
    toggleActions: 'restart reverse restart reverse',
  },
});


///////////////////////////////////



gsap.from('.small_about_me', 2.5, {
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  scrollTrigger: {
    trigger: '.small_about_me',
    ease: Power2.easeInOut,
    toggleActions: 'restart none none none',
  },
});

TweenMax.from('.intro_main_text, .intro_small_text ', 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 0.2,
});



// gsap.from('.intro_main_text', 1, {
//   translateY: [30, 0],
//   opacity: [0, 1],
//   scrollTrigger: {
//     trigger: '.intro_main_text',
//     ease: Power2.easeInOut,
//     toggleActions: 'restart none none none',
//   },
// });



const circleType = new CircleType(
  document.getElementById('spinner_text')
);


$(window).scroll(function () {
  var offset = $(window).scrollTop();
  offset = offset * 0.4;


  $('.spinner').css({
    '-moz-transform': 'rotate(' + offset + 'deg)',
    '-webkit-transform': 'rotate(' + offset + 'deg)',
    '-o-transform': 'rotate(' + offset + 'deg)',
    '-ms-transform': 'rotate(' + offset + 'deg)',
    transform: 'rotate(' + offset + 'deg)',
  });
});


function copyToClipBoard() {
  navigator.clipboard.writeText('memarsahab@gmail.com');
  const text = document.querySelector('.email_extra_text');
  text.textContent = 'Copied to clip board : '
  setTimeout(() => {
    text.textContent = 'Drop an email : ';
  }, 900)
};