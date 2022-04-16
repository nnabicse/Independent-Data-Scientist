import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, name, price, description } = props.service;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-primary'>BOOK SERVICE</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;