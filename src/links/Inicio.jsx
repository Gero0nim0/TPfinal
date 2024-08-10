import Carder from '../Componentes/card/Card';
import ControlledCarousel from '../Componentes/carrusel/Carrusel';
import Brownies from '../assets/imagen/Screenshot_1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio(){
return(
        <div>
            <ControlledCarousel/>

      <h2 className='subtitulo'> Disfrutá de la Pasteleria 100% Casera </h2>

        <Carder
                imageSrc={Brownies} 
                title="Primera Tarjeta" 
                text="Este es un ejemplo de la primera tarjeta." 
    />

        <Carder
            imageSrc={Brownies} 
            title="Primera Tarjeta" 
            text="Este es un ejemplo de la primera tarjeta." 
    />
        </div>
    )
}

export default Inicio;