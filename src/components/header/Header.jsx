import styles from '../header/Header.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [focus, setFocus] = useState("home");
  const [language, setLanguage] = useState("EN");
  const [right, setRight] = useState(true);

  const handleLanguageChange = () => {
    setRight(!right);
    const newLanguage = language == "EN" ? "BR" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.dispatchEvent(new Event('languageChange'));
  };

  const BR = [
    "Início",
    "Sobre",
    "Projetos",
    "Contato"
  ]
  const EN = [
    "Home",
    "About",
    "Projects",
    "Contact"
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logo}>_vini.x_x</p>
        <ul className={styles.ulList}>
          <li className={`${styles.linkList} ${focus == "home" ? styles.inFocus : styles.noFocus}`} onClick={() => {
            setFocus("home")
          }}><Link to="/">{language == "EN" ? EN[0] : BR[0]}</Link></li>
          <li className={`${styles.linkList} ${focus == "about" ? styles.inFocus : styles.noFocus}`} onClick={() => {
            setFocus("about")
          }}><Link to="/about">{language == "EN" ? EN[1] : BR[1]}</Link></li>
          <li className={`${styles.linkList} ${focus == "projects" ? styles.inFocus : styles.noFocus}`} onClick={() => {
            setFocus("projects")
          }}><Link to="/projects">{language == "EN" ? EN[2] : BR[2]}</Link></li>
          <li className={`${styles.linkList} ${focus == "contact" ? styles.inFocus : styles.noFocus}`} onClick={() => {
            setFocus("contact")
          }}><Link to="/contact">{language == "EN" ? EN[3] : BR[3]}</Link></li>
        </ul>
      </nav>
      <button className={styles.buttonTogle} onClick={handleLanguageChange}><span className={`${styles.togleLanguageLeft} ${right ? styles.toLeft : styles.toRight}`}></span><span className={`${styles.togleLanguageRight} ${!right ? styles.toLeft : styles.toRight}`}></span><p className={`${styles.defaltLanguage} ${right ? styles.toGreen : styles.toWhite}`}>{language}</p></button>
    </header>
  )
}

export default Header
