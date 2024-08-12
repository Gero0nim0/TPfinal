import Carder from '../Componentes/card/Card';
import ControlledCarousel from '../Componentes/carrusel/Carrusel';
import Brownies from '../assets/imagen/Screenshot_1.png';
import Tiramisu from '../assets/imagen/tiramisu.jpg';
import Cupcakes2 from '../assets/imagen/Cupcakes2.png';
import Oreos from '../assets/imagen/Oreos.jpg';
import Chocotorta from '../assets/imagen/Chocotorta.png';
import LemonPie from '../assets/imagen/lemonPie.jpg';
import BrownieMerengue from '../assets/imagen/BrownieMerengue.png';
import Paletas from '../assets/imagen/paletas.jpg';
import TartaFrutosRojos from '../assets/imagen/tartaFrutosRojos.jpg';
import TartaFrutal from '../assets/imagen/TartaFrutal.jpg';
import TartaFrutilla from '../assets/imagen/TartaFrutilla.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio(){
return(
        <div>
            <ControlledCarousel/>

      <h2 className='subtitulo'> Disfrutá de la Pasteleria 100% Casera </h2>

        <Carder
                imageSrc={Brownies}
                text="Brownies" 

    />



<Carder
            imageSrc={Cupcakes2} 
            text="Cupcakes" 
    />

<Carder
            imageSrc={Oreos} 
            text="Oreos Bañadas en Chocolate Blanco" 
    />

        <Carder
            imageSrc={Paletas} 
            text="Paletas" 
    />
            
            <Carder
            imageSrc={Tiramisu} 
            text="Tiramisu" 
    />

<Carder
            imageSrc={Chocotorta} 
            text="Chocotorta" 
    />

<Carder
            imageSrc={LemonPie} 
            text="Lemon Pie" 
    />

<Carder
            imageSrc={BrownieMerengue} 
            text="Brownie con Merengue y Dulce de Leche" 
    />



<Carder
            imageSrc={TartaFrutosRojos} 
            text="Tarta de Frutos Rojos" 
    />
    
    <Carder
            imageSrc={TartaFrutal} 
            text="Tarta de Frutas" 
    />
    
    <Carder
            imageSrc={TartaFrutilla} 
            text="Tarta de Frutillas" 
    />
        </div>
    )
}

export default Inicio;