import styles from '../header/Header.module.css'
import { useState } from 'react';

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
     }}>Home</li>
     <li className={`${styles.linkList} ${focus == "about" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("about")
     }}>About</li>
     <li className={`${styles.linkList} ${focus == "projects" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("projects")
     }}>Projects</li>
     <li className={`${styles.linkList} ${focus == "contact" ? styles.inFocus : styles.noFocus}`} onClick={() => {
      setFocus("contact")
     }}>Contact</li>
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