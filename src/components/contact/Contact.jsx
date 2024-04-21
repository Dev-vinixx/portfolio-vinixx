import styles from '../contact/Contact.module.css';
import robot from '/src/assets/under-construction/robin.jpg';

function Contact () {

 return (
  <section className={styles.contact}>
   <img src={robot} alt="" />
   <p>I apologize, this page is still under construction.</p>
  </section>
 )
}

export default Contact