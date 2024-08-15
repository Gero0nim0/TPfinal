import './CardNB.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


function CarderNB({ imageSrc, title, text }){
    return (
        <Card className='cardNB'>
          <Card.Img variant="top" src={imageSrc} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      );
}

CarderNB.propTypes = {
    imageSrc: PropTypes.string.isRequired, // imageSrc debe ser una string y es requerida
    title: PropTypes.string.isRequired,    // title debe ser una string y es requerida
    text: PropTypes.string.isRequired      // text debe ser una string y es requerida
  };

export default CarderNB;