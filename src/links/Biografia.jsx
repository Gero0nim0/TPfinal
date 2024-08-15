import './Biografia.css';
import Icono from '../assets/imagen/Icono.png';

function Biografia(){
    return(
        <div className='image-container'>
            <img src={Icono} className='imagenIcono'/>
            <h5> Hola a todos! Mi nombre es Selva Gherardi y comencé este emprendimiento de repostería desde el año 2012.
                Mi trabajo es mejorar con mucho dulzor las fiestas y reuniones familiares o con amigos.
                Cada producto está preparado con mucho esfuerzo y al detalle, con los ingredientes de mejor calidad.
                Los invito a que me sigan en mis redes sociales para conocer más del resultado de mi trabajo.</h5>

        </div>
    )
}

export default Biografia;