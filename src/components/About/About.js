import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImage from '../../images/aboutImage.png';
import aboutImage2 from '../../images/aboutImage2.png';

const About = () => {
    return (
        <div className="m-5">
            <Row>
                <Col xs={ 12 } md={ 6 }>
                    <div className="mt-4">
                        <h2 className="text-warning mb-3 fw-bold">DreamBaby Fertility Center</h2>
                        <h2 className="text-info mb-3 fw-bold">The Best Fertility Center in Bangladesh</h2>
                    </div>
                    <div className="w-75">
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
                <Col xs={ 12 } md={ 6 }>
                    <img className="img-fluid rounded-3" src={ aboutImage } alt="bannerImage" />
                </Col>
            </Row>
            <hr className="m-5 text-info" />
            <Row className="mt-5">
                <h2 className="text-center text-info fw-bold mb-5">About Us – DreamBaby Fertility Center</h2>
                <Col xs={ 12 } md={ 5 }>
                    <img className="img-fluid rounded-3" src={ aboutImage2 } alt="bannerImage" />
                </Col>
                <Col xs={ 12 } md={ 7 }>
                    <div className="ms-5">
                        <p>
                            DreamBaby Fertility Center is one of the best fertility centers in Bangladesh founded and managed by Dr. Tasnuva Kawsar the renowned Embryologist and fertility specialist. Bangladesh Fertility was founded in the year 2010 by Dr. Tasnuva Kawsar after the realization of the need for quality fertility care and specialization in solving the issues couples faced with respect to infertility.
                        </p>

                        <p>
                            Dr. Tasnuva Kawsar is one of the forerunners who brought in fertility treatments, he brought in the most high-end and cutting edge fertility treatments within a highly appealing hospital atmosphere. DreamBaby Fertility Center has the best progress over the years with the number of patients flowing in and getting the kind of care & treatment they deserve.
                        </p>

                        <p>
                            DreamBaby Fertility Center is known to be that one source of healthcare solution with unparalleled quality of care, highest success rate and immensely experienced physicians for the specialty. DreamBaby Fertility Center over the years has achieved unshakable trust with the added strength of Dr. V M Thomas’s practice, state-of-the-art infrastructure and excellent capabilities of the team at DreamBaby Fertility Center.
                        </p>
                        <p>
                            There are several high-end and rare treatments at DreamBaby Fertility Center that are performed with excellent accuracy and utmost care to achieve success for the patients. The best part about DreamBaby Fertility Center is that all facilities under one roof.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;