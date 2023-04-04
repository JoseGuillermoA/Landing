import styles from '@/componentes/servicios/servicios.module.css'

function Servicios() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/Icono1.svg" alt="icono1" />
          <h2 className={styles.titleCard}>Dessarrollo Web</h2>
          <p className={styles.cardDescription}>Desarollamos páginas web únicas y perzonalizadas que representan tu negocio de la mejor manera posible</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-1.svg" alt="icono 2" />
          <h2 className={styles.titleCard}>Aplicaciones Moviles</h2>
          <p className={styles.cardDescription}>Creamos aplicaciones móviles personalizadas para Android e iOS que potencian tu negocio.</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-2.svg" alt="Activo 3" />
          <h2 className={styles.titleCard}>Software a medida</h2>
          <p className={styles.cardDescription}>Creamos software personalizado que se ajusta a las necesidades de tu negocio y mejora tus procesos empresariales.</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-3.svg" alt="Activo 4" />
          <h2 className={styles.titleCard}>Bases de Datos</h2>
          <p className={styles.cardDescription}>Optimizamos y diseñamos bases de datos a medida para potenciar el rendimiento y la eficiencia de tu negocio.</p>
        </div>
      </div>
    </div>
  );
}

export default Servicios;