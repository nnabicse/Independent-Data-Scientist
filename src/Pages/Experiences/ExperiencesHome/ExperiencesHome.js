import React from 'react';
import { useNavigate } from 'react-router-dom';
import useExperinces from '../../../hooks/useExperiences/useExperiences';
import Experience from '../Experience/Experience';

const ExperiencesHome = () => {
    const navigate = useNavigate()
    const handleAllExperincesButton = () => {
        navigate("/experiences")
    }
    const [experinces] = useExperinces();
    return (
        <div>
            <h1>Experiences: {experinces.length}</h1>
            {
                experinces.slice(0, 12).map(experience => <Experience
                    key={experience.key}
                    experience={experience}
                ></Experience>)
            }
            <button onClick={handleAllExperincesButton} className='btn btn-primary'>ALL Experiences</button>
        </div>
    );
};

export default ExperiencesHome;