import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImage2 from '../../images/aboutImage2.png';

const AboutUs = () => {
    return (
        <div>
            <Row className="m-5">
                <h2 className="text-center text-info fw-bold mb-5">About Us – DreamBaby Fertility Center</h2>
                <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                    <img className="img-fluid rounded-3" src={ aboutImage2 } alt="bannerImage" />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
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

export default AboutUs;