import Header from '../componentes/header/header'
import Filosofia from '../componentes/filosofia/filosofia'

function IndexPage(){
  return(
    <div>
      <header>
        <title>LANDING</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
      </header>
     <Header/>
     <Filosofia/>
    </div>
  );
}

export default IndexPage;

