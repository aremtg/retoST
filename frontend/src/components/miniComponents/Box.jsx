import estilos from './box.module.css';

const Box = ({ children }) => {
  return <div className={`${estilos.caja} boxResponsive`}>{children}</div>;
}

export default Box;
