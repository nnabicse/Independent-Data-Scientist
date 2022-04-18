import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block banner-image"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='caption'>Business Analytics</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block banner-image"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption'>Survey Condution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-image"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption'>Data Analysis</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;