import React from 'react';
import ExperiencesHome from '../../Experiences/ExperiencesHome/ExperiencesHome';
import ServicesHome from '../../Services/ServicesHome/ServicesHome';
import Banner from '../Banner/Banner';
import Query from '../Query/Query';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='header-title'>
                <h1 className='header-title-text'>Independent Data Scientist</h1>
                <p className='header-title-desc'>Artificial Intelligence and Machine Learning Expert</p>
            </div>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <ExperiencesHome></ExperiencesHome>
            <Query></Query>
        </div>
    );
};

export default Home;