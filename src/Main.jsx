import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import imgBackground from './assets/react.svg';

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <animated.img className="imgBackground" src={imgBackground} alt="" style={props} />
      </Router>
    </main>
  );
}

export default Main;
