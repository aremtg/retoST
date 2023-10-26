import Box from "../../components/miniComponents/Box"
import estilos from './cart.module.css'
function Cart() {
  return (
    <Box>
      <h1 className="text-center">Carrito de compras</h1>
      <div className={`${estilos.contenedorDivs} flex flex-row`}>
        <div className={`${estilos.listProductos} flex`}>
          <div className="flex gap-x-2.5 items-center">
            <p>Aun no hay productos</p>
            <button className={`${estilos.botonAñadir} my_button`}>Añadir</button>
          </div>
        </div>
        <div className={`${estilos.pagos} flex flex-col`}>
          <div className={`${estilos.total}  flex flex-col`}>
            <h1>Resumen del pedido</h1>
            <span>$000</span>
            <button className={`${estilos.botonComprar} my_button`}>Comprar</button>
          </div>
          <br />
          <br />
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className={`${estilos.m
            }relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600`}>
            <img src="src/img/paypal.png" alt="" />
            <img src="src/img/efecty.png" alt="" />
            <img src="src/img/mastercard.png" alt="" />
            <img src="src/img/pse.png" alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Metodos de pago
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

    </Box>
  )
}

export default Cart