import React from 'react';
import myPic from '../../images/aboutpic.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='image-container'>
                <img className='image' src={myPic} alt="" />
            </div>
            <div className='detail'>
                <h1 className='name'>Nurun Nabi</h1>
                <h3>CSE Engineer</h3>
                <h4 className='equal'>M.S, B.S in CSE</h4>
            </div>
            <div className='mission'>
                <h1 className='mission-header'>Mission</h1>
                <p>I want to be a good Software Engineer in future. I have already started working on that. I have started learning web development from programming hero. After that I will go for learing competetive programming. That wull make my software engineering fundation stronger. Then I will try to find a job or internship to gather experience as a software engineer. I will forllow this process to be a good Software Engineer.</p>
            </div>
        </div>
    );
};

export default About;