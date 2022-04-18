import React from 'react';
import ExperiencesHome from '../../Experiences/ExperiencesHome/ExperiencesHome';
import ServicesHome from '../../Services/ServicesHome/ServicesHome';
import Banner from '../Banner/Banner';
import Query from '../Query/Query';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='home-container'>
                <ServicesHome></ServicesHome>
                <ExperiencesHome></ExperiencesHome>
                <Query></Query>
            </div>
        </div>
    );
};

export default Home;