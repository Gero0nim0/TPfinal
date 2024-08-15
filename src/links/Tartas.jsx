import Carder from '../Componentes/card/Card';
import Tiramisu from '../assets/imagen/tiramisu.jpg';
import Chocotorta from '../assets/imagen/Chocotorta.png';
import LemonPie from '../assets/imagen/lemonPie.jpg';
import BrownieMerengue from '../assets/imagen/BrownieMerengue.png';
import TartaFrutosRojos from '../assets/imagen/tartaFrutosRojos.jpg';
import TartaFrutal from '../assets/imagen/TartaFrutal.jpg';
import TartaFrutilla from '../assets/imagen/TartaFrutilla.jpg';
function Tartas(){
    return(
        <div className='main-container'>
            <div className='cards-container'>
            <Carder imageSrc={Tiramisu} title="Tiramisu" text='$$$'/>
            <Carder imageSrc={Chocotorta} title="Chocotorta" text='$$$'/>
            <Carder imageSrc={LemonPie} title="Lemon Pie" text='$$$'/>
            <Carder imageSrc={BrownieMerengue} title="Brownie con Merengue y Dulce de Leche" text='$$$'/>
            <Carder imageSrc={TartaFrutosRojos} title="Tarta de Frutos Rojos" text='$$$'/>
            <Carder imageSrc={TartaFrutal} title="Tarta de Frutas" text='$$$'/>
            <Carder imageSrc={TartaFrutilla} title="Tarta de Frutillas" text='$$$'/>
            </div>
        </div>
    )
}

export default Tartas;