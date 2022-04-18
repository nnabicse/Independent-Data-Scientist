import React from 'react';
import { Form } from 'react-bootstrap';
import './Query.css'

const Query = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='query-container'>
            <div className='query-header-container'>
                <h1 className='query-header'>Further Query</h1>
            </div>
            <div className='query-form-container'>
                <Form onSubmit={handleSubmit} className='query-form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Name</Form.Label>
                        <Form.Control type="text" placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Phone</Form.Label>
                        <Form.Control type="number" placeholder="+1111111111111" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Prefered Meeting Date</Form.Label>
                        <Form.Control type="date" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='form-label'>Message</Form.Label>
                        <Form.Control placeholder='some information about your project' as="textarea" rows={3} />
                    </Form.Group>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary'>SUBMIT</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Query;