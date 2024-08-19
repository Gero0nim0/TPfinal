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
import TartaCabsha from '../assets/imagen/TartaCabsha.jpg';
import Trufas from '../assets/imagen/trufas.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio(){
return(
<div>
    

    <div className='main-container'>
        <div className="carousel-container">
            <ControlledCarousel />
        </div>

        <h2 className='subtitulo'>Disfrutá de la Pasteleria 100% Casera</h2>

        <div className="cards-container">
            <Carder imageSrc={ComboDulce} title="Combo de Mesa Dulce" text='Dependerá de lo que se pide' />
            <Carder imageSrc={Brownies} title="Brownies" text='12.000$ por 6 unidades' />
            <Carder imageSrc={Cupcakes2} title="Una docena de Cupcakes" text='13.000$' />
            <Carder imageSrc={Oreos} title="Una docena de Choco Oreos" text='12.000$' />
            <Carder imageSrc={Alfajores} title="Una docena de Alfajores de Maizena" text='10.000$' />
            <Carder imageSrc={Paletas} title="Icepops" text='1300 cada uno$' />
            <Carder imageSrc={Trufas} title="Una docena de Cakepops" text='10.000$' />
            <Carder imageSrc={CookiesRosas} title="Una docena de Cookies Decoradas" text='14.000$' />
            <Carder imageSrc={Tiramisu} title="Tiramisu" text='16.000$' />
            <Carder imageSrc={Chocotorta} title="Chocotorta" text='15.000$' />
            <Carder imageSrc={LemonPie} title="Lemon Pie" text='14.000$' />
            <Carder imageSrc={TartaCabsha} title="Tarta Cabsha" text='15.000$' />
            <Carder imageSrc={BrownieMerengue} title="Tarta Brownie" text='15.000$' />
            <Carder imageSrc={TartaFrutosRojos} title="Tarta de Frutos Rojos" text='17.000$' />
            <Carder imageSrc={TartaFrutal} title="Tarta Frutal" text='14.000$' />
            <Carder imageSrc={TartaFrutilla} title="Tarta de Frutillas" text='15.000$' />
            <Carder imageSrc={TortaAjedrez} title="Tortas Temáticas" text='$$$' />
        </div>
    </div>
</div>

    )
}

export default Inicio;