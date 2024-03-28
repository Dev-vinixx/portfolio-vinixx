import Header from "./components/header/Header";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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

  // Limites para o movimento da imagem
  const limite = 3;

  // Posição inicial da imagem em porcentagem da largura/altura da janela
  const imgInitialPos = { x: -50, y: -50 };

  // Calcula a posição da imagem com base na posição do mouse
  const imgPos = {
    x: imgInitialPos.x - limite / 0.5 + mousePos.x / window.innerWidth * limite,
    y: imgInitialPos.y - limite / 0.5 + mousePos.y / window.innerHeight * limite
  };

  // Cria a animação
  const props = useSpring({ transform: `translate(${imgPos.x}%, ${imgPos.y}%)` });

  return (
    <main>
      <animated.img className="imgBackground" src="./assets/react.svg" alt="" style={props} />
      <Header />
    </main>
  );
}

export default Main;
