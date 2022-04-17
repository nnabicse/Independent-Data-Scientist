import React from 'react';
import { useNavigate } from 'react-router-dom';
import useExperinces from '../../../hooks/useExperiences/useExperiences';
import Experience from '../Experience/Experience';
import './ExperiencesHome.css'

const ExperiencesHome = () => {
    const navigate = useNavigate()
    const handleAllExperincesButton = () => {
        navigate("/experiences")
    }
    const [experinces] = useExperinces();
    return (
        <div>
            <h1 className='home-experience-header'>Experiences</h1>
            <div className='home-experiences-container'>
                {
                    experinces.slice(0, 12).map(experience => <Experience
                        key={experience.key}
                        experience={experience}
                    ></Experience>)
                }
            </div>
            <button onClick={handleAllExperincesButton} className='btn btn-primary my-2'>ALL Experiences</button>
        </div>
    );
};

export default ExperiencesHome;