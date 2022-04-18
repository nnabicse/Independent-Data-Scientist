import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Checkout.css'
const Checkout = () => {
    const { serviceId } = useParams()
    const [bookedServices, setBookedServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setBookedServices(data))
    }, [])
    let bookedService = {};
    bookedServices.filter(booked => booked.id == serviceId).map(filterdService => bookedService = { ...filterdService })
    console.log(bookedService);
    const { name, price, description, img } = bookedService;

    const handleSubnbmit = (event) => {
        event.preventDefault();
        toast("Thanks for Booking")

    }
    return (
        <div className='checkout-container'>
            <div className='checkout-header-container'>
                <h1 className='checkout-header'>Checkout Here</h1>
            </div>
            <div className='card-and-form-container'>
                <div className='card-container'>
                    <h1 className='card-container-header'>Booked Service</h1>
                    <Card className='card'>
                        <Card.Img className='w-75 m-auto' variant="top" src={img} />
                        <Card.Body>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Title> Service:
                                {name}
                            </Card.Title>
                            <Card.Title>Price: $
                                {price}
                            </Card.Title>
                            <Card.Title> Tax: $
                                {(parseInt(price) / 100 * 5)}
                            </Card.Title>
                            <Card.Title>Total: $
                                {parseInt(price) + (parseInt(price) / 100 * 5)}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='form-container'>
                    <div className='billing-header-container'>
                        <h1 className='billing-header'>Billing Informations</h1>
                    </div>
                    <Form onSubmit={handleSubnbmit} className='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adress</Form.Label>
                            <Form.Control placeholder='Billing Adress' as="textarea" rows={3} />
                        </Form.Group>
                        <div className='text-center'>
                            <button className='btn btn-primary text-center' type='submit'>Proceed Checkout</button>
                        </div>
                    </Form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Checkout;