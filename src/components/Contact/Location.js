import React from 'react';
import { Col, Row } from 'react-bootstrap';


//component for location section
const Location = () => {
    return (
        <div className="container mx-auto my-5">
            <h2 className="fw-bold text-center">Contact Us</h2>
            <hr className="text-info m-5" />
            <Row className="text-center my-5">
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Dhaka</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Uttara, Dhaka</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Sylhet</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Mirabazar, Sylhet</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Chittagong</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Khulshi, Chittagong</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Rajshahi</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Shaheb Bazar, Rajshahi</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Khulna</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Kali Bari Mor, Khulna</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <h3 className="fw-bold text-danger">Rangpur</h3>
                    <hr className="text-secondary w-75 mx-auto" />
                    <span className="text-secondary fw-bold">DreamBaby Fertility Center</span>
                    <br />
                    <span className="text-secondary fw-bold">House#abc, Road#xyz, Sector#def</span>
                    <br />
                    <span className="text-secondary fw-bold">Kachari Bazar Road, Rangpur</span>
                    <br />
                    <br />
                    <p className="text-primary fw-bold">info@dreambabyivf.com</p>
                    <p className="text-success fw-bold">+880 2 891000000, +880 17 000000</p>
                </Col>
            </Row>
        </div>
    );
};

export default Location;