import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, img, name, price, description } = props.service;
    const navigate = useNavigate();
    const handleBookServiceButton = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='service-container'>
            <Card className='service-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='service-title'>{name}</Card.Title>
                    <Card.Title>${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center border-0 bg-white'>
                    <button onClick={() => handleBookServiceButton(id)} className='btn w-100 btn-primary'>BOOK SERVICE</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;