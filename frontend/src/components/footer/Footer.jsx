
import estilos from './footer.module.css'
const  Footer =() =>{
  return (
    <div className={`${estilos.footer}`}>
      <ul>
        <img src="src/img/facebook.svg" alt="" />
        <img src="src/img/github.svg" alt="" />
        <img src="src/img/whatsapp.svg" alt="" />
        <img src="src/img/instagram.svg" alt="" />
      </ul>
    </div>
  )
}

export default Footer;