import styles from '../home/Home.module.css';

function Home() {
  const openLink = (url) => {
    window.open(url, '_blank');
    window.focus();
  }

  return (
    <section className={styles.home}>
      <div className={styles.divAbout}>
        <p className={styles.first_text}>Hello 👋, my name is</p>
        <p className={styles.second_text}>Vinicius Santos</p>
        <p className={styles.third_text}>I am a <strong>full stack developer</strong> but my <br /> focus is on the front end and my<br /><strong>dominant</strong> language is <strong>React JS</strong>.</p>
      </div>
      <div className={styles.divIcons}>
        <div className={styles.icon}
        onClick={() => openLink("mailto:viniciuseduardo0500@gmail.com?subject=Assunto&body=Mensagem")}><img src="src\assets\home\email-svg.svg" alt="" /></div>
        <div className={styles.icon}
        onClick={() => openLink("https://github.com/Dev-vinixx")}><img src="src\assets\home\github-svg.svg" alt="" /></div>
        <div className={styles.icon}
        onClick={() => openLink("https://www.linkedin.com/in/vin%C3%ADcius-rodrigues-17a825280/")}><img src="src\assets\home\linkedin-svg.svg" alt="" /></div>
      </div>
    </section>
  );
}

export default Home;