import React from 'react';
import { Badge, Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import bannerImage from '../../images/bannerImage.png';

//component for banner section
const Banner = () => {
    return (
        <div>
            <header className='m-5'>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <div className="mt-5 pt-5 px-3 rounded-3">
                            <h2 className="text-warning mb-3 fw-bold">World Record</h2>
                            <hr className="text-danger" />
                            <h1 className="text-danger fw-bold"><Badge bg="danger" className="fs-1">45000+</Badge></h1>
                            <h4 className="text-danger fw-bold">IVF/ICSI BABIES DELIVERED WORLDWIDE</h4>
                            <hr className="text-danger" />
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img className="img-fluid rounded-3" src={ bannerImage } alt="bannerImage" />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <div className="mt-4 px-5 text-start rounded-3">
                            <Form>
                                <h3 className="text-info fw-bold">Book An Appointment</h3>
                                <p className="text-secondary"><small>Contact us to kick start your journey towards joyous parenthood</small></p>
                                <FormControl
                                    type="text"
                                    placeholder="Name"
                                    className="mb-2"
                                    aria-label="Text"
                                />
                                <FormControl
                                    type="email"
                                    placeholder="Email"
                                    className="mb-2"
                                    aria-label="Email"
                                />
                                <FormControl
                                    type="text"
                                    placeholder="Mobile No."
                                    className="mb-2"
                                    aria-label="Number"
                                />
                                <FormControl
                                    type="text"
                                    placeholder="Location"
                                    className="mb-2"
                                    aria-label="Text"
                                />
                                <Button className="mt-3" variant="outline-info">Submit</Button>
                            </Form >
                        </div>
                    </Col>
                </Row>
            </header>
        </div>
    );
};

export default Banner;