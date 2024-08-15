import Carder from '../Componentes/card/Card';
import Brownies from '../assets/imagen/Screenshot_1.png';
import Cupcakes2 from '../assets/imagen/Cupcakes2.png';
import Oreos from '../assets/imagen/Oreos.jpg';
import Paletas from '../assets/imagen/paletas.jpg';
import CookiesRosas from '../assets/imagen/CookiesRosas.jpg';

function CandyBar(){
    return(
        <div className='main-container'>
            <Carder imageSrc={Brownies} title="Brownies" text='$$$'/>
            <Carder imageSrc={Cupcakes2} title="Cupcakes" text='$$$'/>
            <Carder imageSrc={Oreos} title="Oreos Bañadas en Chocolate Blanco" text='$$$'/>
            <Carder imageSrc={Paletas} title="Paletas" text='$$$'/>
            <Carder imageSrc={CookiesRosas} title="Cookies Personalizadas" text='$$$'/>
        </div>
    )
}

export default CandyBar;