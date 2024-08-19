import Carder from '../Componentes/card/Card';
import Tiramisu from '../assets/imagen/tiramisu.jpg';
import Chocotorta from '../assets/imagen/Chocotorta.png';
import LemonPie from '../assets/imagen/lemonPie.jpg';
import BrownieMerengue from '../assets/imagen/BrownieMerengue.png';
import TartaFrutosRojos from '../assets/imagen/tartaFrutosRojos.jpg';
import TartaFrutal from '../assets/imagen/TartaFrutal.jpg';
import TartaFrutilla from '../assets/imagen/TartaFrutilla.jpg';
import TartaCabsha from '../assets/imagen/TartaCabsha.jpg';
function Tartas(){
    return(
        <div className='main-container'>
            <div className='cards-container'>
            <Carder imageSrc={Tiramisu} title="Tiramisu" text='16.000$' />
            <Carder imageSrc={Chocotorta} title="Chocotorta" text='15.000$' />
            <Carder imageSrc={LemonPie} title="Lemon Pie" text='14.000$' />
            <Carder imageSrc={TartaCabsha} title="Tarta Cabsha" text='15.000$' />
            <Carder imageSrc={BrownieMerengue} title="Tarta Brownie" text='15.000$' />
            <Carder imageSrc={TartaFrutosRojos} title="Tarta de Frutos Rojos" text='17.000$' />
            <Carder imageSrc={TartaFrutal} title="Tarta Frutal" text='14.000$' />
            <Carder imageSrc={TartaFrutilla} title="Tarta de Frutillas" text='15.000$' />
            </div>
        </div>
    )
}

export default Tartas;