import Image from 'next/image'
import styles from '@/componentes/header/header.module.css'


function Header() {
    return (
        <div className={styles.Header}>

            <section className={styles.navBar}>

                <div className={styles.topSts}>
                    <a href="#" className={styles.sts}>STS</a>
                </div>

                <div className={styles.topNav} id="myNav">

                    <a href="#" className={styles.menu}>Inicio</a>
                    <a href="#" className={styles.menu}>Nosotros</a>
                    <a href="#" className={styles.menu}>Contacto</a>
                    <a href="#" className={styles.menu}>Servicios</a>

                </div> 

            </section>

            <h1 className={styles.title}>Soluciones Tecnologicas</h1>
            <p className={styles.description}>Brindamos solcuiones tecnológicas innovadoras, creativas, para pequeñas y 
                medianas empresas a través del desarrollo de sistemas de software.</p>

        
            <div className={styles.contact}>
                <a href="#">Contactanos</a>
            </div>


        </div>
    )
}

export default Header
