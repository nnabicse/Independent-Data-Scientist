import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div className='services'>
            <h1 className='services-header-container'>Services</h1>
            <div className='all-services-container'>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;