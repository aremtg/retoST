import Box from "../../components/miniComponents/Box"
import estilos from './cart.module.css'
function Cart() {
  return (
    <Box>
      <div className={`${estilos.contenedorDivs}`}>
        <div className={`${estilos.listProductos} flex shadow-md`}>
          <div className="w-full flex justify-between gap-2 items-center h-10  bg-gray-300 rounded-xl px-2">
            <p>Aun no hay productos</p>
            <button className={`${estilos.botonAñadir} my_button shadow-md`}>Añadir</button>
          </div>
        </div>
        <div className={`${estilos.pagos} flex flex-col shadow-md`}>
          <div className={`${estilos.total}  flex flex-col`}>
            <h1 className="text">Resumen del pedido</h1>
            <span>$000</span>
            <button className={`${estilos.botonComprar} my_button shadow-md`}>Comprar</button>
          </div>
          <br />
          <br />
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className={`${estilos.imgPagos} flex items-center relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-white px-2`}>
            <img src="src/img/paypal.png" alt="" />
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
            </div>
          </div>
        </div>
      </div>

    </Box>
  )
}

export default Cart