import './TortasTematicas.css';
import Carder from '../Componentes/card/Card';
import CardNB from '../Componentes/card/CardNB';
import TortaAjedrez from '../assets/imagen/tortaAjedrez.jpg';
import TortaArcoiris from '../assets/imagen/TortaArcoiris.jpg';
import TortaRiver from '../assets/imagen/TortaRiver.jpg';
import TortaBocaG from '../assets/imagen/TortaBocaG.jpg';
import TortaChocholate from '../assets/imagen/TortaChocolate.jpg';
import TortaCorazon from '../assets/imagen/TortaCorazon.jpg';
import TortaAqua from '../assets/imagen/TortaAqua.jpg';
import TortaHarry from '../assets/imagen/TortaHarry.png';
import TortaMedico from '../assets/imagen/TortaMedico.jpg';
import TortaBreakingBad from '../assets/imagen/TortaBreakingBad.jpg';
import TortaChorreada from '../assets/imagen/TortaChorreada.jpg';
import TortaPool from '../assets/imagen/TortaPool.png';
import TortaCivil from '../assets/imagen/TortaCivil.png';

function TortasTematicas(){
    return(
        <div>
            <div className='main-container'>
            <Carder imageSrc={TortaAjedrez} title="Tortas Temáticas" text='$$$'/>
            </div>

        <h2 className='mensaje'>Las Tortas temáticas tienen un precio, dependiendo del tamaño del bizcochuelo, el relleno y, sobre todo, la decoración.
            Pueden pedir un diseño ya publicado en alguna de mis páginas o también sacada de internet o de otra pagina de repostería. No se preocupen,
            la torta tendrá el nombre del cumpleñaro.
        </h2>
        <h2 className='mensaje'>Deben tener en cuenta que lleva horas de trabajo y se debe obtener una ganancia por el tiempo, la calilad y el gasto de materiales.</h2>
        <h2 className='mensajeDos'> Algunos Ejemplos</h2>

        <div className='main-container'>
            <div className='cards-container'>
            <CardNB imageSrc={TortaBocaG}/>
            <CardNB imageSrc={TortaChocholate}/>
            <CardNB imageSrc={TortaArcoiris}/>
            <CardNB imageSrc={TortaRiver}/>
            <CardNB imageSrc={TortaCorazon}/>
            <CardNB imageSrc={TortaAqua}/>
            <CardNB imageSrc={TortaMedico}/>
            <CardNB imageSrc={TortaHarry}/>
            <CardNB imageSrc={TortaBreakingBad}/>
            <CardNB imageSrc={TortaChorreada}/>
            <CardNB imageSrc={TortaPool}/>
            <CardNB imageSrc={TortaCivil}/>
            </div>
        </div>

    </div>

    )
}

export default TortasTematicas;