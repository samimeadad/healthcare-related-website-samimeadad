import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Doctor = ( props ) => {
    const { name, degree, designation, image } = props.doctor;
    return (
        // div for each column
        <Col sm={ 12 } md={ 4 }>
            {/* card for each Treatment Service*/ }
            <div className="card h-100 rounded-3 text-center bg-light p-3">
                <img style={ { height: '300px', borderRadius: '50%' } } src={ image } className="card-img-top img-fluid p-5" alt="..." />
                <div className="card-body">
                    <h4 className="card-title fw-bold text-danger">{ name }</h4>
                    <p className="card-text">{ degree }</p>
                    <p className="card-text fw-bold">{ designation }</p>
                </div>
                <div>
                    <Button className="w-100">Contact</Button>
                </div>
            </div>
        </Col>
    );
};

export default Doctor;