import  { useState } from 'react';
import styles from '../home/Home.module.css';

function Home() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  return (
    <section className={styles.home}>
      <div className={styles.divAboutText}>
        <p className={styles.hello}>Olá 👋, eu me chamo</p>
        <p className={styles.name}>Vinicius Santos</p>
        <p className={styles.aboutTextOfVinixx}>
          I am a full-stack web developer, primarily focused on front-end development, but I am also proficient in back-end work. My dominant language is React.js.
        </p>
      </div>
      <div className={styles.divIcons}>
        <div
          className={`${styles.lineIcon} ${activeIcon === 'email' ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={handleMouseLeave}
        >
          <span className={`${styles.spanIconE}`}></span>
          <p className={styles.email}>E</p>
          <span className={`${styles.infoEmail} ${activeIcon === 'email' ? styles.animationForUp : styles.animationForDown}`}>
            <p>Email</p>
          </span>
        </div>
        <div
          className={`${styles.lineIcon} ${activeIcon === 'github' ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}
        >
          <span className={`${styles.spanIconG}`}></span>
          <p className={styles.GitHub}>G</p>
          <span className={`${styles.infoGitHub} ${activeIcon === 'github' ? styles.animationForUp : styles.animationForDown}`}>
            <p>GitHub</p>
          </span>
        </div>
        <div
          className={`${styles.lineIcon} ${activeIcon === 'Linkedin' ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter('Linkedin')}
          onMouseLeave={handleMouseLeave}
        >
          <span className={`${styles.spanIconL}`}></span>
          <p className={styles.linkedin}>L</p>
          <span className={`${styles.infoLinkedin} ${activeIcon === 'Linkedin' ? styles.animationForUp : styles.animationForDown}`}>
            <p>Linkedin</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;