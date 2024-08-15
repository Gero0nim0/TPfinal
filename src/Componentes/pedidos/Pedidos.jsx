import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Pedidos.css';

function Pedido(){
    return(
        <div className='pedidos'>
            <h2>Todos los pedidos los recibo a través de whatsapp, instagram y facebook, acepto efectivo y mercado pago</h2>
            <div className="redes">
        <p>Amanecer.Tortas:</p>
        <a
          href="https://www.instagram.com/amanecer.tortas/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaInstagram size={30} color="black" /> {/* Icono de Instagram */}
        </a>
      </div>
      <div className="redes">
        <p>Amanecer-Tortas artesanales</p>
        <a
          href="https://www.facebook.com/AmanecerTortasDecoradas?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <FaFacebook size={30} color="black" />
        </a>
      </div>

      <div className="redes">
        <p>Mi whatsapp</p>
        <p>+54 11********</p>
        <FaWhatsapp size={30} color="black" />
      </div>
            
        </div>
    )
}

export default Pedido;