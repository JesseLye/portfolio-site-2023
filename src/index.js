import './style.css';

tsParticles.load('tsparticles', {
  fpsLimit: 60,
  background: {
    color: {
      value: '#f5f5f5',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      // onclick: {
      //   enable: true,
      //   mode: 'push'
      // },
      // onhover: {
      //   enable: true,
      //   mode: 'grab'
      // },
      resize: true
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3
      },
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#72C9B9'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#72C9B9',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
});

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

const points = [...document.querySelectorAll('#navigation > a')].map(el => el.id.split('-')[0]);
let hiddenElementIds = ['work-data42', 'work-klackit', 'work-yabbr', 'work-denver'];
// let prevElement = null;

for (const pointName of points) {
  document.getElementById(`${pointName}-link`).addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(`${pointName}-point`).scrollIntoView({ behavior: 'smooth' });
  });
}

document.getElementById('about-button').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('about-point').scrollIntoView({ behavior: 'smooth' });
});

const addPositionStyling = () => {
  const navigation = document.getElementById('navigation');

  window.scrollY > 0 ? navigation.classList.add('navigation--active') : navigation.classList.remove('navigation--active');

  // let closestPoint = null;

  // for (const pointName of points) {
  //   const currentPoint = document.getElementById(`${pointName}-point`);
  //   if (window.scrollY >= currentPoint.offsetTop - currentPoint.clientHeight) {
  //     closestPoint = pointName;
  //   } else {
  //     break;
  //   }
  // }

  for (const id of hiddenElementIds) {
    const foundElement = document.getElementById(id);
    if (isInViewport(foundElement)) {
      foundElement.classList.add('work--active');
      hiddenElementIds = hiddenElementIds.filter(hiddenId => hiddenId !== id);
      break;
    }
  }

  // if (prevElement) {
  //   prevElement.classList.remove('navigation__link--active');
  // }
  
  // prevElement = document.getElementById(`${closestPoint}-link`);
  // prevElement.classList.add('navigation__link--active');
};

window.onscroll = addPositionStyling;
window.onload = addPositionStyling;
