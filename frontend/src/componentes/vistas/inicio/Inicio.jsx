import Caja from "../../caja/Caja";
import ProductoCard from "../../contenido/ProductoCard";
const Inicio = () => {
    return (
      <div>
        <h1 className="tituloPagina">Página de Inicio</h1>
        
        <Caja>
        <div className="contedorFlex">
            <ProductoCard
              producto={{
                nombre: 'Producto 1',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            <ProductoCard
              producto={{
                nombre: 'Producto 2',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            <ProductoCard
              producto={{
                nombre: 'Producto 2',
                imagen: 'src/images/compu.jpg',
                especificaciones: 'Especificaciones del producto 1',
                precioVenta: 100
              }}
              
            />
            
          </div>
        </Caja>
      </div>
    );
  }
  
  export default Inicio;