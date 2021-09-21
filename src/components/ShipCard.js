import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const ShipCard = (props) => {

  return (


      <Card
        variant = 'top'
        key={props.id}
        style={{ width: '200' }}
        className="mb-2"
        >
      
        <Card.Img src={props.pictureUrl} alt='prehistoric world' />

          <Card.Title>
        <h4 className = 'text-center'>{props.name}</h4>
        </Card.Title>
       
      </Card>

  )

}

export default ShipCard
