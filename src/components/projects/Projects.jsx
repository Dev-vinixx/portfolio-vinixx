import styles from '../projects/Projects.module.css';
import robot from '/src/assets/under-construction/robin.jpg';

function Projects () {

 return (
  <section className={styles.projects}>
   <img src={robot} alt="" />
   <p>I apologize, this page is still under construction.</p>
  </section>
 )
}

export default Projects