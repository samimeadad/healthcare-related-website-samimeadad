import React from 'react';
import { Button, Col } from 'react-bootstrap';

// component for Treatments to be displayed on the Treatment page
const Treatment = ( props ) => {
    const { name, specialist, description, price, image } = props.treatment;
    return (
        // div for each column
        <Col sm={ 12 } md={ 4 }>
            {/* card for each Treatment Service*/ }
            <div className="card h-100 p-3 rounded-3 text-center">
                <img src={ image } className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{ name }</h5>
                    <p className="card-text">{ description.slice( 0, 200 ) }</p>
                    <p className="card-text"><b>Doctor:</b> { specialist }</p>
                    <h3 className="card-text fw-bold">Cost: Tk.{ price }</h3>
                </div>
                <div>
                    <Button className="w-100 me-3">Details</Button>
                </div>
            </div>
        </Col>
    );
};

export default Treatment;