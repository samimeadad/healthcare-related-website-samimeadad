import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImage from '../../images/aboutImage.png';

const AboutTop = () => {
    return (
        <div>
            <Row className="mt-5 mx-auto w-75">
                <Col xs={ 12 } md={ 7 }>
                    <div className="mt-5">
                        <h2 className="text-warning mb-3 fw-bold">DreamBaby Fertility Center</h2>
                        <h2 className="text-info mb-3 fw-bold">The Best Fertility Center in Bangladesh</h2>
                    </div>
                    <div className="me-5">
                        <p>
                            DreamBaby Fertility Center is a top-rated fertility centre in Bangladesh dedicated to helping childless couples to build families. We take pride in calling ourselves the best fertility hospital in Bangladesh with the most effective IVF treatment. Over 45,000+ IVF/ICSI babies delivered worldwide. Schedule your Appointment Today.
                        </p>

                        <p>
                            DreamBaby Fertility Center has centralized laboratory facilities for IVF treatment. Our fertility specialists have extensive expertise in treating all types of fertility from basic to complex fertility services.
                        </p>

                        <p>
                            We have the highest success rate in ART pregnancies. We’re proud to say again that our team is currently holding a record of 45,000+ successful deliveries across the globe and we are consistently recognized as the best fertility clinics with top IVF specialists in Bangladesh.
                        </p>
                    </div>
                </Col>
                <Col xs={ 12 } md={ 5 }>
                    <img className="img-fluid rounded-3 mt-5" src={ aboutImage } alt="bannerImage" />
                </Col>
            </Row>
        </div>
    );
};

export default AboutTop;