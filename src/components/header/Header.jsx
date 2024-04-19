import styles from '../header/Header.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

 const [focus, setFocus] = useState("home");
 const [language, setLanguage] = useState("EN");
 const [right, setRight] = useState(true);
 return (
  <header className={styles.header}>
   <nav className={styles.nav}>
    <p className={styles.logo}>_vini.x_x</p>
    <ul className={styles.ulList}>
     <li className={`${styles.linkList} ${focus == "home" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("home")
     }}><Link to="/">Home</Link></li>
     <li className={`${styles.linkList} ${focus == "about" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("about")
     }}><Link to="/about">About</Link></li>
     <li className={`${styles.linkList} ${focus == "projects" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("projects")
     }}><Link to="/projects">Projects</Link></li>
     <li className={`${styles.linkList} ${focus == "contact" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("contact")
     }}><Link to="/contact">Contact</Link></li>
    </ul>
   </nav>
   <button className={styles.buttonTogle} onClick={() => {
    setRight(!right);
     if (language == "EN") {
      setLanguage("BR");
     } else {
      setLanguage("EN");
     }
    }}><span className={`${styles.togleLanguageLeft} ${right ? styles.toLeft : styles.toRight }`}></span><span className={`${styles.togleLanguageRight} ${!right ? styles.toLeft : styles.toRight }`}></span><p className={`${styles.defaltLanguage} ${right ? styles.toGreen : styles.toWhite}`}>{language}</p></button>
  </header>
 )
}

export default Header
