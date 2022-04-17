import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../hooks/useServices/useServices';
import Service from '../Service/Service';
import './ServicesHome.css'


const ServicesHome = () => {
    const navigate = useNavigate()
    const handleAllServicesButton = () => {
        navigate("/services")
    }
    const [services] = useServices();
    return (
        <div>
            <h1 className='home-services-header'>Services</h1>
            <div className='home-services-container'>
                {
                    services.slice(0, 6).map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
            <button onClick={handleAllServicesButton} className='btn btn-primary my-2 all-services-button'>ALL SERVICES</button>
        </div>
    );
};

export default ServicesHome;