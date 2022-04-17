import React from 'react';
import useExperinces from '../../../hooks/useExperiences/useExperiences';
import Experience from '../Experience/Experience';
import './Experiences.css'

const Experiences = () => {
    const [experiences] = useExperinces();
    return (
        <div className='experiences'>
            <h1 className='experiences-header-container'>Experiences</h1>
            <div className='all-experiences-container'>
                {
                    experiences.map(experience => <Experience
                        key={experience.key}
                        experience={experience}
                    ></Experience>)
                }
            </div>
        </div>
    );
};

export default Experiences;