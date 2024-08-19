import Carder from '../Componentes/card/Card';
import Brownies from '../assets/imagen/Screenshot_1.png';
import Cupcakes2 from '../assets/imagen/Cupcakes2.png';
import Oreos from '../assets/imagen/Oreos.jpg';
import Paletas from '../assets/imagen/paletas.jpg';
import CookiesRosas from '../assets/imagen/CookiesRosas.jpg';
import ComboDulce from '../assets/imagen/ComboDulce.jpg';
import Alfajores from '../assets/imagen/Alfajores.png';
import Trufas from '../assets/imagen/trufas.jpg';

function CandyBar(){
    return(
        <div className='main-container'>
            <div className='cards-container'>
            <Carder imageSrc={ComboDulce} title="Combo de Mesa Dulce" text='Dependerá de lo que se pide' />
            <Carder imageSrc={Brownies} title="Brownies" text='12.000$ por 6 unidades' />
            <Carder imageSrc={Cupcakes2} title="Una docena de Cupcakes" text='13.000$' />
            <Carder imageSrc={Oreos} title="Una docena de Choco Oreos" text='12.000$' />
            <Carder imageSrc={Alfajores} title="Una docena de Alfajores de Maizena" text='10.000$' />
            <Carder imageSrc={Paletas} title="Paletas" text='1300 cada uno$' />
            <Carder imageSrc={Trufas} title="Una docena de Cakepops" text='10.000$' />
            <Carder imageSrc={CookiesRosas} title="Una docena de Cookies Decoradas" text='14.000$' />
            </div>
        </div>
    )
}

export default CandyBar;