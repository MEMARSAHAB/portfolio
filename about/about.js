gsap.registerPlugin(ScrollTrigger);

gsap.to('body', 0.5, {
  backgroundColor: '#430d27',
  scrollTrigger: {
    trigger: '.work_section',
    start: 'top top',
    end: 'bottom top',
    ease: Power2.easeInOut,
    toggleActions: 'restart none restart reverse',
    // markers: true,
  },
});

gsap.to('.link', 0.5, {
  color: '#fff4e3',
  scrollTrigger: {
    trigger: '.work_section',
    start: 'top top',
    end: 'bottom top',
    toggleActions: 'restart reset restart reset',
  },
});

gsap.to('.navbar', 0.5, {
  color: '#fff4e3',
  scrollTrigger: {
    trigger: '.work_section',
    start: 'top top',
    end: 'bottom top',
    toggleActions: 'restart reset restart reset',
  },
});

gsap.to('.left_warper, .right_warper', 1, {
  fontSize: '100px',
  scrollTrigger: {
    trigger: '.work_section',
    start: 'top 20%',
    end: 'bottom bottom',
    toggleActions: 'restart reverse restart reverse',
  },
});

let text = document.querySelector('.project_count');

gsap.to('.project_info_01', 0.5, {
  position: 'fixed',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work_row_1',
    start: 'top 20%',
    end: 'bottom center',
    pinSpacing: true,
    toggleActions: 'restart reverse restart reverse',
    onEnter: (self) => (text.innerText = '01'),
    onLeaveBack: (self) => (text.innerText = '01'),
  },
});

gsap.to('.project_info_02', 0.5, {
  position: 'fixed',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work_row_2',
    start: 'top center',
    end: 'bottom center',
    pinSpacing: true,
    toggleActions: 'restart reverse restart reverse',
    onEnter: (self) => (text.innerText = '02'),
    onLeaveBack: (self) => (text.innerText = '01'),
  },
});

gsap.to('.project_info_03', 0.5, {
  position: 'fixed',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work_row_3',
    start: 'top center',
    end: 'bottom center',
    pinSpacing: true,
    toggleActions: 'restart reverse restart reverse',
    onEnter: (self) => (text.innerText = '03'),
    onLeaveBack: (self) => (text.innerText = '02'),
  },
});

gsap.to('.project_info_04', 0.5, {
  position: 'fixed',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work_row_4',
    start: 'top center',
    end: 'bottom center',
    pinSpacing: true,
    toggleActions: 'restart reverse restart reverse',
    onEnter: (self) => (text.innerText = '04'),
    onLeaveBack: (self) => (text.innerText = '03'),
  },
});

// i dont have any fucking idea whats going on here

// gsap.to('.project_01_img_01', 0.8, {
//   scale: 1.3,
//   scrollTrigger: {
//     trigger: '.project_01_img_01',
//     start: 'top 60%',
//     end: 'bottom 70%',
//     scrub: true,
//     toggleActions: 'restart reverse restart reverse',
//   },
// });
