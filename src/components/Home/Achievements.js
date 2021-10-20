import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

//component for achievement section
const Achievements = () => {
    return (
        <section className="text-center bg-dark text-info p-5 mx-5">
            <h2 className="text-info mb-5 fw-bold">Our Achievements</h2>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="mb-5">
                        <p><FontAwesomeIcon icon={ faUser } size="2x" /></p>
                        <h5 className="fs-2 fw-bold text-warning">80%</h5>
                        <h6>IVF Success Rate</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="mb-5">
                        <p><FontAwesomeIcon icon={ faHeartbeat } size="2x" /></p>
                        <h5 className="fs-2 fw-bold text-warning">70,000+</h5>
                        <h6>IVF Cycles</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <div className="mb-5">
                        <p><FontAwesomeIcon icon={ faBaby } size="2x" /></p>
                        <h5 className="fs-2 fw-bold text-warning">48,345</h5>
                        <h6>New Born Babies</h6>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Achievements;