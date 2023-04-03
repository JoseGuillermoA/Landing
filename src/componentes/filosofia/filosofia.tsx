import Image from "next/image";
import styles from '@/componentes/filosofia/filosofia.module.css'

function Filosofia(){
    return(
        <div className={styles.filosofia}>
            <h1 className={styles.title}>Nuestra Filosofía</h1>

            <section className={styles.section}>
                <Image
                  className={styles.vector}
                  src="/vector.png"
                  alt=""
                  width={740.84}
                  height={601}                    
                />

                <ul className={styles.list}>
                    <li>Alto sentido de priordad y responsabilidad ante las necesidades de nuestros clientes.</li>

                    <li>Trabajo en equipo, es prioritario en el desarrollo de nuestro trabajo.</li>

                    <li>Buscamos distinguirnos por el desarrollo de sistemas con interface gráfica visualmente amigable para el usuario final, así como componentes minimalistas.</li>

                    <li>Relaciones a largo plazo con nuestros clientes.</li>   
                </ul>
            </section>

        </div>
    )
}

export default Filosofia