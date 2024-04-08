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
  const openLink = (url) => {
    window.open(url, '_blank');
    window.focus();
  }

  return (
    <section className={styles.home}>
      <div className={styles.divAboutText}>
        <p className={styles.hello}>Hello 👋, my name is</p>
        <p className={styles.name}>Vinicius Santos</p>
        <p className={styles.aboutTextOfVinixx}>
        I am a full stack developer but my focus is on the front end and my dominant language is React JS.
        </p>
      </div>
      <div className={styles.divIcons}>
        <div
          className={`${styles.lineIcon} ${activeIcon === 'email' ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={handleMouseLeave}
          onClick={ () => {
            openLink('mailto:viniciuseduardo0500@gmail.com')
          }
          }
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
          onClick={ () => {
            openLink('https://github.com/Dev-vinixx')
           }
          }
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
          onClick={() => openLink('https://www.linkedin.com/in/vin%C3%ADcius-rodrigues-17a825280/')}
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