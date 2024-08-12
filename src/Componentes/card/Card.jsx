import './Card.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Carder({ imageSrc, title, text }) {
  const navigate = useNavigate(); // Hook para navegación

  const handleButtonClick = () => {
    navigate('/Pedidos'); // Redirige a la ruta Pedidos
  };

  return (
    <Card className='card'>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>
          Hacer un Pedido
        </Button>
      </Card.Body>
    </Card>
  );
}

Carder.propTypes = {
  imageSrc: PropTypes.string.isRequired, // imageSrc debe ser una string y es requerida
  title: PropTypes.string.isRequired,    // title debe ser una string y es requerida
  text: PropTypes.string.isRequired      // text debe ser una string y es requerida
};

export default Carder;
