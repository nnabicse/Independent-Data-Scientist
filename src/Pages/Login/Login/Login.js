import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate()

    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className='login-container'>
            <h2 className='login-header'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </Form>
            <p>New to Genius Car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgot Password? <Link to='' className='text-danger pe-auto text-decoration-none' >Reset Password</Link></p>
        </div>
    );
};

export default Login;