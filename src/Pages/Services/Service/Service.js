import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { id, img, name, price, description } = props.service;
    const navigate = useNavigate();
    const handleBookServiceButton = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center'>
                <button onClick={() => handleBookServiceButton(id)} className='btn w-100 btn-primary'>BOOK SERVICE</button>
            </Card.Footer>
        </Card>
    );
};

export default Service;