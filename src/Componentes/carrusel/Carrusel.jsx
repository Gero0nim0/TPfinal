import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TortaLinea from '../../assets/imagen/TortasLinea.jpg';
import TortaLinea2 from '../../assets/imagen/TortasLinea2.jpg';
import TortaLinea3 from '../../assets/imagen/TortasLinea3.jpg';
import './Carrusel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='arreglo' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={TortaLinea} height={500} />
        <div className='cuadradoRojo'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={TortaLinea2} height={500}/>
        <div className='cuadradoVerde'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='cuadradoAzul'/>
        <img src={TortaLinea3} height={500}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;