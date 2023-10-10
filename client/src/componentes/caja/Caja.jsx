import estilos from './caja.module.css';

const Caja = ({ children }) => {
  return <div className={estilos.caja}>{children}</div>;
}

export default Caja;
