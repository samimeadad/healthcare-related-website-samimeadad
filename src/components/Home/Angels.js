import React from 'react';
import { Carousel } from 'react-bootstrap';

//component for angels of the month section/carousel
const Angels = () => {
    return (
        <div className="container w-25 mx-auto my-5">
            <h2 className="text-center mb-5 text-info fw-bold">Angels of the Month</h2>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://chennaifertilitycenter.com/assets/images/angel1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://chennaifertilitycenter.com/assets/images/angel4.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://chennaifertilitycenter.com/assets/images/angel2.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://chennaifertilitycenter.com/assets/images/angel5.png"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://chennaifertilitycenter.com/assets/images/angel.png"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Angels;