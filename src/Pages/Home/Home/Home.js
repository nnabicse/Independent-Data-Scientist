import React from 'react';
import ExperiencesHome from '../../Experiences/ExperiencesHome/ExperiencesHome';
import ServicesHome from '../../Services/ServicesHome/ServicesHome';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    return (
        <div className='w-75 m-auto'>
            <div className='header-title'>
                <h1 className='header-title-text'>Independent Data Scientist</h1>
                <p className='header-title-desc'>Artificial Intelligence and Machine Learning Expert</p>
            </div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <ExperiencesHome></ExperiencesHome>
        </div>
    );
};

export default Home;