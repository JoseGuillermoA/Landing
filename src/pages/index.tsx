import styles from '../styles/Home.module.css'
import Header from '../componentes/header/header'
import Filosofia from '../componentes/filosofia/filosofia'
import Servicios from '../componentes/servicios/servicios'
import ContactForm from '@/componentes/form/ContactForm'
import ContactInfo from '@/componentes/info/ContactInfo'


function IndexPage(){
  return(
    <div>
      <header>
        <title>LANDING</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
      </header>
     <Header/>
     <Servicios/>
     <Filosofia/>
     <div className={styles.container2}>
        <ContactForm/>
        <ContactInfo/>
     </div>
    </div>
  );
}

export default IndexPage;

