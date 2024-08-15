import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

function Footer(){
    return(
      <div className="footer">
      <div className="footer-item">
        <FaInstagram />
        <a href="https://www.instagram.com/amanecer.tortas/">Instagram</a>
      </div>
      <div className="footer-item">
        <FaWhatsapp />
        <span>11********</span>
      </div>
      <div className="footer-item">
        <FaFacebook />
        <a href="https://www.facebook.com/AmanecerTortasDecoradas?locale=es_LA">Facebook</a>
      </div>
      <div className="footer-item">
        <FaMapMarkerAlt />
        <span>Buenos Aires La Tablada</span>
      </div>
    </div>
    )
}

export default Footer;