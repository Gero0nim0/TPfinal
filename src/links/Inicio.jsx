import './Inicio.css';
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
import CookiesRosas from '../assets/imagen/CookiesRosas.jpg';
import TortaAjedrez from '../assets/imagen/tortaAjedrez.jpg';
import Alfajores from '../assets/imagen/Alfajores.png';
import ComboDulce from '../assets/imagen/ComboDulce.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio(){
return(
<div>
    <h2 className='subtitulo'>Disfrutá de la Pasteleria 100% Casera</h2>

    <div className='main-container'>
        <div className="carousel-container">
            <ControlledCarousel />
        </div>

        <div className="cards-container">
            <Carder imageSrc={ComboDulce} title="Combo de Mesa Dulce" text='$$$' />
            <Carder imageSrc={Brownies} title="Brownies" text='$$$' />
            <Carder imageSrc={Cupcakes2} title="Cupcakes" text='$$$' />
            <Carder imageSrc={Oreos} title="Oreos Bañadas en Chocolate Blanco" text='$$$' />
            <Carder imageSrc={Alfajores} title="Alfajores de Maizena" text='$$$' />
            <Carder imageSrc={Paletas} title="Paletas" text='$$$' />
            <Carder imageSrc={CookiesRosas} title="Cookies Personalizadas" text='$$$' />
            <Carder imageSrc={Tiramisu} title="Tiramisu" text='$$$' />
            <Carder imageSrc={Chocotorta} title="Chocotorta" text='$$$' />
            <Carder imageSrc={LemonPie} title="Lemon Pie" text='$$$' />
            <Carder imageSrc={BrownieMerengue} title="Brownie con Merengue y Dulce de Leche" text='$$$' />
            <Carder imageSrc={TartaFrutosRojos} title="Tarta de Frutos Rojos" text='$$$' />
            <Carder imageSrc={TartaFrutal} title="Tarta de Frutas" text='$$$' />
            <Carder imageSrc={TartaFrutilla} title="Tarta de Frutillas" text='$$$' />
            <Carder imageSrc={TortaAjedrez} title="Tortas Temáticas" text='$$$' />
        </div>
    </div>
</div>

    )
}

export default Inicio;