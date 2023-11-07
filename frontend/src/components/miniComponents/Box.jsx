import estilos from './box.module.css';

const Box = ({ children }) => {
  return <div className={`${estilos.caja} container mx-auto py-3 px-3`}>{children}</div>;
}

export default Box;
