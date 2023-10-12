import estilos from './productoCard.module.css'
const ProductoCard = ({ producto }) => {
    return (
        <div className={estilos.productoCard}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
                <p>Precio de Venta: ${producto.precioVenta}</p>
            <button className={`${estilos.botonAgregar} my-button`}>Agregar</button>
        </div>
    );
}

export default ProductoCard;
