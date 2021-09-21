import React from 'react';
import { Card } from 'react-bootstrap';


const ShipCard = (props) => {
console.log(props)
  return (

    
      <Card
        variant = 'top'
        key={props.id}
        style={{ width: '200' }}
        className="mb-2"
        >
      
        <Card.Img src={props.pictureUrl} alt='Ship' />

          <Card.Title>
        <h4 className = 'text-center'>{props.name}</h4>
        </Card.Title>
       
      </Card>

  )

}

export default ShipCard
