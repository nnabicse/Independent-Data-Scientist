import React from 'react';
import useExperinces from '../../../hooks/useExperiences/useExperiences';
import Experience from '../Experience/Experience';

const Experiences = () => {
    const [experiences] = useExperinces();
    return (
        <div>
            <h1>All Services: {experiences.length}</h1>
            {
                experiences.map(experience => <Experience
                    key={experience.key}
                    experience={experience}
                ></Experience>)
            }
        </div>
    );
};

export default Experiences;