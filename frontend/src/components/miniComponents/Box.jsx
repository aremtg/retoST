import estilos from './box.module.css';

const Box = ({ children }) => {
  return <div className={`${estilos.caja} container mx-auto px-3`}>{children}</div>;
}

export default Box;
