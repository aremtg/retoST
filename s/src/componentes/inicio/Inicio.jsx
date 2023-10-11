import Caja from "../caja/Caja";

const Inicio = () => {
    return (
      <div>
        <h1 className="tituloPagina">Página de Inicio</h1>
        
        <Caja>
          <Caja>
              1 this is my contenidoooo
          </Caja>
          <Caja>
              2
          </Caja>
        </Caja>
        {/* Contenido de la página de Inicio */}
      </div>
    );
  }
  
  export default Inicio;