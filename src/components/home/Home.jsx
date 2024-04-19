import { useState, useEffect } from 'react';
import styles from '../home/Home.module.css';
import emailImage from '/src/assets/home-img/email-svg.svg';
import githubImage from '/src/assets/home-img/github-svg.svg';
import linkedinImage from '/src/assets/home-img/linkedin-svg.svg';

function Home() {
  const openLink = (url) => {
    window.open(url, '_blank');
    window.focus();
  }

  const ENGLISH = [
    (
      <div key="divEnglish" className={styles.divAbout}>
        <p className={styles.first_text}>Hello 👋, my name is</p>
        <p className={styles.second_text}>Vinicius Santos</p>
        <p className={styles.third_text}>I am a <strong>full stack developer</strong> but my <br /> focus is on the front end and my<br /><strong>dominant</strong> language is <strong>React JS</strong>.</p>
      </div>
    )
  ]
  const PORTUGUESE = [
    (
      <div key="divPortuguese" className={styles.divAbout}>
        <p className={styles.first_text}>Olá 👋, meu nome é</p>
        <p className={styles.second_text}>Vinicius Santos</p>
        <p className={styles.third_text}>Eu sou um <strong>desenvolvedor full stack</strong>,<br /> mas meu  foco é no front end e minha<br /><strong>linguagem dominante</strong> é o <strong>React JS</strong>.</p>
      </div>
    )
  ]
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [trigger, setTrigger] = useState(0); 

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('language'));
      setTrigger(prevTrigger => prevTrigger + 1); 
    };

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <section className={styles.home}>
      {language == "EN" ? ENGLISH : PORTUGUESE}

      <div className={styles.divIcons}>
        <div className={styles.icon}
          onClick={() => openLink("mailto:viniciuseduardo0500@gmail.com?subject=Assunto&body=Mensagem")}><img src={emailImage} alt="" /></div>
        <div className={styles.icon}
          onClick={() => openLink("https://github.com/Dev-vinixx")}><img src={githubImage} alt="" /></div>
        <div className={styles.icon}
          onClick={() => openLink("https://www.linkedin.com/in/vin%C3%ADcius-rodrigues-17a825280/")}><img src={linkedinImage} alt="" /></div>
      </div>
    </section>
  );
}

export default Home;