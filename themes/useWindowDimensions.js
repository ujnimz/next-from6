import {useState, useEffect} from 'react';

function getWindowDimensions() {
  //console.log(`View Height: ${window.screen.height}`);
  //const {innerWidth: width, innerHeight: height} = window.screen;
  const {clientWidth: width, clientHeight: height} = document.body;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
