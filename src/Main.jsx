import Header from "./components/header/Header";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import imgBackground from './assets/react.svg';
import Home from "./components/home/Home";

function Main() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const limite = 2;

  const imgInitialPos = { x: -50, y: -50 };

  const imgPos = {
    x: imgInitialPos.x - limite / 0.5 + mousePos.x / window.innerWidth * limite,
    y: imgInitialPos.y - limite / 0.5 + mousePos.y / window.innerHeight * limite
  };

  const props = useSpring({ transform: `translate(${imgPos.x}%, ${imgPos.y}%)` });

  return (
    <main>
      
      <Header />

      <Home />


      <animated.img className="imgBackground" src={imgBackground} alt="" style={props} />
    </main>
  );
}

export default Main;
