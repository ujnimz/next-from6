import Particles from 'react-tsparticles';

const ParticlesCavas = () => {
  const particlesInit = main => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const options = {
    background: {
      color: {
        value: '#24282a',
      },
      opacity: 0.6,
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 60,
    interactivity: {
      detect_on: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      className='h-screen'
      id='tsparticles'
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesCavas;
