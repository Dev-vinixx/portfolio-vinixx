import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../about/About.module.css';
import reactImg from  '/src/assets/react.svg';

function About () {
  const goProjectsRef = useRef(null);
  let animation;
  let angle = 0;
  const limitTop = 85;
  const navigate = useNavigate(); // Get the navigate function

  const startRotation = () => {
    animation = setInterval(() => {
      angle += 0.3;
      goProjectsRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }, 1000 / 60);
  };

  const stopRotation = () => {
    clearInterval(animation);
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const handleDrag = (event) => {
    const newPosition = event.clientY;
    const limitPosition = window.innerHeight * (limitTop / 100);
    if (newPosition < limitPosition) {
      goProjectsRef.current.style.top = `${limitPosition}px`;
    } else {
      goProjectsRef.current.style.top = `${newPosition}px`;
    }
  };

  const handleDragEnd = () => {
    goProjectsRef.current.style.transition = 'top 0.5s ease-out';
    goProjectsRef.current.style.top = '95%';
    setTimeout(() => {
      goProjectsRef.current.style.transition = '';
      if (goProjectsRef.current.style.top === '95%') {
        navigate('/projects'); // Navigate to /projects
      }
    }, 500);
  };

  useEffect(() => {
    const goProjectsElement = goProjectsRef.current;
    goProjectsElement.addEventListener('mouseover', startRotation);
    goProjectsElement.addEventListener('mouseout', stopRotation);
    goProjectsElement.addEventListener('dragstart', handleDragStart);
    goProjectsElement.addEventListener('drag', handleDrag);
    goProjectsElement.addEventListener('dragend', handleDragEnd);

    return () => {
      goProjectsElement.removeEventListener('mouseover', startRotation);
      goProjectsElement.removeEventListener('mouseout', stopRotation);
      goProjectsElement.removeEventListener('dragstart', handleDragStart);
      goProjectsElement.removeEventListener('drag', handleDrag);
      goProjectsElement.removeEventListener('dragend', handleDragEnd);
    };
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.divTitle}>
        <h1>About Me</h1>
        <span className={styles.decorationAbout}></span>
      </div>
      <div className={styles.headerOptions}>
        
      </div>
      <div className={styles.divContent}>

      </div>
      <div className={styles.divProjects}>
        <img ref={goProjectsRef} src={reactImg} className={styles.goProjects} alt="" draggable="true" />
      </div>
    </section>
  )
}

export default About
