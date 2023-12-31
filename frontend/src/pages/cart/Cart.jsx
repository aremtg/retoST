import { Link } from "react-router-dom";
import Box from "../../components/miniComponents/Box";
import estilos from "./cart.module.css";
import MyBoton from "../../components/miniComponents/MyBoton";

function Cart() {
  return (
    <Box>
      <div className={`${estilos.contenedorDivs} bg-black px-1 py-1 rounded-xl`}>
        <div className={`${estilos.listProductos} bg-white rounded-xl w-full flex shadow-md`}>
          <div className="w-full flex flex-col justify-center gap-2 items-center py-2 sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>

            <p className="text-base sm:text-lg md:text-xl">
              Aun no hay productos
            </p>
          </div>
        </div>

        <div className={`${estilos.pagos} bg-white rounded-xl flex flex-col shadow-md`}>
          <div className={`${estilos.total} bg-gray-200 rounded-xl py-1 px-1 w-full flex flex-col`}>
            <h1 className="text-center">Resumen del pedido</h1>
            <span className="text-center">$000</span>
          <MyBoton
            text={'Comprar'}
            className={'my_button bg-black text-white'}
          />
          </div>
          <br />
          <div className="bg-gray-200 items-center rounded-xl p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-center antialiased">
              Metodos de pago
            </h5>
          </div>
          <br />
          <div className="relative flex w-80 flex-col rounded-xl bg-black m-auto shadow-md">
            <div
              className={`${estilos.imgPagos} bg-white flex items-center relative mx-4 -mt-6 h-40 overflow-hidden rounded-full  text-white shadow-lg shadow-blue-gray-500/40 px-2`}
            >
              <img src="src/img/paypal.png" alt="" />
              <img src="src/img/mastercard.png" alt="" />
              <img src="src/img/pse.png" alt="" />
            </div>
            <div className="p-6 pt-0"></div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Cart;
