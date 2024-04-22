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

  const [focus, setFocus] = useState("Biography");
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [trigger, setTrigger] = useState(0); 

  const ul = [
      // Navigation options for English language
    (
      <ul key="ulEnglesh" className={styles.headerOptions}>
        <li className={focus === "Biography" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("Biography")}>Biography</li>
        <li className={focus === "WorkExperience" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("WorkExperience")}>Work Experience</li>
        <li className={focus === "AcademicBackground" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("AcademicBackground")}>Academic Background</li>
        <li className={focus === "FutureGoals" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("FutureGoals")}>Future Goals</li>
        <li className={focus === "WorkPhilosophy" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("WorkPhilosophy")}>Work Philosophy</li>
      </ul>
    ),
       // Navigation options for Portuguese language
    (
      <ul key="ulPortuguese" className={styles.headerOptions}>
        <li className={focus === "Biography" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("Biography")}>Biografia</li>
        <li className={focus === "WorkExperience" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("WorkExperience")}>Experiencias</li>
        <li className={focus === "AcademicBackground" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("AcademicBackground")}>Formação Academica</li>
        <li className={focus === "FutureGoals" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("FutureGoals")}>Planos Futuros</li>
        <li className={focus === "WorkPhilosophy" ? styles.inFocus : styles.noFocus}
          onClick={() => setFocus("WorkPhilosophy")}>Filosofia de Trabalho</li>
      </ul>
    )
  ];

  const handleDragStart = (event) => {
    // Prevents the default drag image from showing
    event.dataTransfer.setDragImage(new Image(), 0, 0);
  };

  const handleDrag = (event) => {
    const newPosition = event.clientY;
    const limitPosition = window.innerHeight * (limitTop / 100);
    // Limits the drag movement within a certain range
    if (newPosition < limitPosition) {
      goProjectsRef.current.style.top = `${limitPosition}px`;
    } else {
      goProjectsRef.current.style.top = `${newPosition}px`;
    }
  };

  const handleDragEnd = () => {
    // Adds transition effect when drag ends
    goProjectsRef.current.style.transition = 'top 0.5s ease-out';
    goProjectsRef.current.style.top = '95%';
    // Redirects to projects page after the transition ends
    setTimeout(() => {
      goProjectsRef.current.style.transition = '';
      if (goProjectsRef.current.style.top === '95%') {
        navigate('/projects');
      }
    }, 500);
  };

  const startRotation = () => {
    // Function to start the rotation animation
    animation = setInterval(() => {
      angle += 0.3;
      goProjectsRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }, 1000 / 60);
  };

  const stopRotation = () => {
    // Function to stop the rotation animation
    clearInterval(animation);
  };

  const handleLanguageChange = () => {
    setLanguage(localStorage.getItem('language'));
    setTrigger(prevTrigger => prevTrigger + 1); 
  };

  useEffect(() => {
    const goProjectsElement = goProjectsRef.current;
    // Event listeners for drag and rotation animation
    goProjectsElement.addEventListener('mouseover', startRotation);
    goProjectsElement.addEventListener('mouseout', stopRotation);
    goProjectsElement.addEventListener('dragstart', handleDragStart);
    goProjectsElement.addEventListener('drag', handleDrag);
    goProjectsElement.addEventListener('dragend', handleDragEnd);

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      // Cleanup event listeners
      goProjectsElement.removeEventListener('mouseover', startRotation);
      goProjectsElement.removeEventListener('mouseout', stopRotation);
      goProjectsElement.removeEventListener('dragstart', handleDragStart);
      goProjectsElement.removeEventListener('drag', handleDrag);
      goProjectsElement.removeEventListener('dragend', handleDragEnd);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

   // Functions to render different sections based on selected language
  const biography = () => {
    if (language === "EN") {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>My Biography <span>:</span></p>
          <p className={styles.content}>
            My name is <span>Vinicius</span>, and I’ve been passionate about programming since childhood. I always <span>dreamed</span> of <span>creating</span> my own <span>games</span>, which led me into the world of programming. With a <span>curious mind and a love</span> for learning, I’m constantly seeking new challenges to enhance my <span>skills</span> and create amazing <span>experiences</span> for users. My dedication to <span>collaborating with teams</span> makes me a <span>valuable asset</span> in any development <span>project</span>.
          </p>
        </div>
      )
    } else {
      return (
        <div className={styles.divContent}> <p className={styles.titleContent}>Minha Biografia <span>:</span></p> <p className={styles.content}> Meu nome é <span>Vinicius</span>, e sou apaixonado por programação desde a infância. Sempre <span>sonhei</span> em <span>criar</span> meus próprios <span>jogos</span>, o que me levou ao mundo da programação. Com uma <span>mente curiosa e amor</span> pelo aprendizado, estou constantemente buscando novos desafios para aprimorar minhas <span>habilidades</span> e criar <span>experiências</span> incríveis para os usuários. Minha dedicação em <span>colaborar com equipes</span> me torna um <span>ativo valioso</span> em qualquer <span>projeto</span> de desenvolvimento. </p> </div>
      )
    }
  }

  const experiences = () => {
    if (language === "EN") {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Work Experience <span>:</span></p>
          <p className={styles.content}>
            As a <span>freelancer</span>, I spent <span>four enriching months</span> with a company. I tackled <span>small projects</span>, each enhancing my <span>skills</span> and <span>adaptability</span>. This journey, though brief, had a profound impact on my <span>professional growth</span>. It honed my <span>communication</span> skills, fostered a sense of <span>responsibility</span>, and prepared me for future programming challenges.
          </p>
        </div>
      )
    } else {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Experiencias <span>:</span></p>
          <p className={styles.content}> Como <span>freelancer</span>, passei <span>quatro meses enriquecedores</span> em uma empresa. Enfrentei <span>pequenos projetos</span>, cada um aprimorando minhas <span>habilidades</span> e <span>adaptabilidade</span>. Essa jornada, embora breve, teve um impacto profundo no meu <span>crescimento profissional</span>. Aperfeiçoou minhas habilidades de <span>comunicação</span>, fomentou um senso de <span>responsabilidade</span> e me preparou para futuros desafios de programação. </p>
        </div>
      )
    }
  }

  const academicFormation = () => {
    if (language === "EN") {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Academic Formation <span>:</span></p>
          <p className={styles.content}>
            I am currently in my <span>first year of high school</span>. My journey into the world of programming began with several <span>web development courses</span> on platforms like <span>Alura</span> and <span>Mimo</span>. These courses provided me with a strong foundation in front-end development. To complement this, I have also completed <span>backend courses</span> through <span>YouTube</span>, expanding my skill set and understanding of full-stack development.
          </p>
        </div>
      )
    } else {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Formação Acadêmica <span>:</span></p>
          <p className={styles.content}>
            Estou cursando o <span>primeiro ano do ensino médio</span>. Minha jornada no mundo da programação começou com vários cursos de <span>desenvolvimento web front-end</span> em plataformas como <span>Alura</span> e <span>Mimo</span>. Esses cursos me proporcionaram uma base sólida em desenvolvimento front-end. Para complementar isso, também concluí cursos de <span>back-end</span> pelo <span>YouTube</span>, expandindo meu conjunto de habilidades e compreensão do desenvolvimento full-stack.
          </p>
        </div>
      )
    }
  }

  const futurePlans = () => {
    if (language === "EN") {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Future Plans <span>:</span></p>
          <p className={styles.content}>
            My <span>future plans</span> are centered around <span>programming</span>. I aim to continue learning and growing in this field, taking on new challenges and creating innovative solutions. I envision myself working on complex projects that push the boundaries of what´s possible in programming, and I´m excited about the opportunities that lie ahead.
          </p>
        </div>
      )
    } else {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Planos Futuros <span>:</span></p>
          <p className={styles.content}>
            Meus <span>planos futuros</span> estão centrados na <span>programação</span>. Pretendo continuar aprendendo e crescendo nesta área, enfrentando novos desafios e criando soluções inovadoras. Vejo-me trabalhando em projetos complexos que desafiam os limites do que é possível em programação, e estou animado com as oportunidades que estão por vir.
          </p>
        </div>
      )
    }
  }

  const workPhilosophy = () => {
    if (language === "EN") {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Work Philosophy <span>:</span></p>
          <p className={styles.content}>
            In the realm of <span>programming</span>, my work philosophy is to always strive for <span>excellence</span>. I believe in the power of <span>collaboration</span> and the importance of <span>continuous learning</span>. I am committed to producing high-quality code and delivering exceptional user experiences. I value teamwork and believe that great things can be achieved when we work together towards a common goal.
          </p>
        </div>
      )
    } else {
      return (
        <div className={styles.divContent}>
          <p className={styles.titleContent}>Filosofia de Trabalho <span>:</span></p>
          <p className={styles.content}>
            Na área de <span>programação</span>, minha filosofia de trabalho é sempre buscar a <span>excelência</span>. Acredito no poder da <span>colaboração</span> e na importância do <span>aprendizado contínuo</span>. Estou comprometido em produzir código de alta qualidade e entregar experiências excepcionais aos usuários. Valorizo o trabalho em equipe e acredito que grandes coisas podem ser alcançadas quando trabalhamos juntos em direção a um objetivo comum.
          </p>
        </div>
      )
    }
  }

  return (
    <section className={styles.about}>
      <div className={styles.divTitle}>
        <h1>About Me</h1>
        <span className={styles.decorationAbout}></span>
      </div>
      <div>
        {language === "EN" ? ul[0] : ul[1]}
      </div>
      {focus === "Biography" ? biography() : focus === "WorkExperience" ? experiences() : focus === "AcademicBackground" ? academicFormation() : focus === "FutureGoals" ? futurePlans() : focus === "WorkPhilosophy" ? workPhilosophy() : null }
      <div className={styles.divProjects}>
        <img ref={goProjectsRef} src={reactImg} className={styles.goProjects} alt="" draggable="true" />
      </div>
    </section>
  )
}

export default About;