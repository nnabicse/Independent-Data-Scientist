import React from 'react';
import useServices from '../../../hooks/useServices/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h1>All Services: {services.length}</h1>
            {
                services.map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;