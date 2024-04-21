import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../about/About.module.css';
import reactImg from '/src/assets/react.svg';

function About() {
  const goProjectsRef = useRef(null);
  let animation;
  let angle = 0;
  const limitTop = 85;
  const navigate = useNavigate();

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
        navigate('/projects');
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

  const [focus, setFocus] = useState("Biography");

  return (
    <section className={styles.about}>
      <div className={styles.divTitle}>
        <h1>About Me</h1>
        <span className={styles.decorationAbout}></span>
      </div>
      <div>
        <ul className={styles.headerOptions}>
          <li className={focus == "Biography" ? styles.inFocus : styles.noFocus}
            onClick={() => setFocus("Biography")}>Biography</li>
          <li className={focus == "WorkExperience" ? styles.inFocus : styles.noFocus}
            onClick={() => setFocus("WorkExperience")}>Work Experience</li>
          <li className={focus == "AcademicBackground" ? styles.inFocus : styles.noFocus}
            onClick={() => setFocus("AcademicBackground")}>Academic Background</li>
          <li className={focus == "FutureGoals" ? styles.inFocus : styles.noFocus}
            onClick={() => setFocus("FutureGoals")}>Future Goals</li>
          <li className={focus == "WorkPhilosophy" ? styles.inFocus : styles.noFocus}
            onClick={() => setFocus("WorkPhilosophy")}>Work Philosophy</li>
        </ul>
      </div>
      <div className={styles.divContent}>
        <p className={styles.titleContent}>My Biography <span>:</span></p>
        <p className={styles.content}>
          My name is <span>Vinicius</span>, and I’ve been passionate about programming since childhood. I always <span>dreamed</span> of <span>creating</span> my own <span>games</span>, which led me into the world of programming. With a <span>curious mind and a love</span> for learning, I’m constantly seeking new challenges to enhance my <span>skills</span> and create amazing <span>experiences</span> for users. My dedication to <span>collaborating with teams</span> makes me a <span>valuable asset</span> in any development <span>project</span>.
        </p>
      </div>
      <div className={styles.divProjects}>
        <img ref={goProjectsRef} src={reactImg} className={styles.goProjects} alt="" draggable="true" />
      </div>
    </section>
  )
}

export default About