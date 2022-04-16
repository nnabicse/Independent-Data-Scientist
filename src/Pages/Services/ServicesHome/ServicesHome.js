import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import Service from '../Service/Service';


const ServicesHome = () => {
    const [services] = useServices();
    return (
        <div>
            <h1>Services: {services.length}</h1>
            {
                services.slice(0, 12).map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)
            }
            <button className='btn btn-primary'>ALL SERVICES</button>
        </div>
    );
};

export default ServicesHome;