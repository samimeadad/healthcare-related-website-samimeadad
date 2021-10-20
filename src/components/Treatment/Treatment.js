import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component for Treatment card to be displayed on the Treatment page
const Treatment = ( props ) => {
    const { id, name, specialist, description, price, image } = props.treatment;
    return (
        // div for each column
        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            {/* card for each Treatment Service*/ }
            <div className="card h-100 p-3 rounded-3 text-center">
                <img src={ image } className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{ name }</h5>
                    <p className="card-text">{ description.slice( 0, 150 ) }</p>
                    <p className="card-text"><b>Doctor:</b> { specialist }</p>
                    <h3 className="card-text fw-bold">Cost: Tk.{ price }</h3>
                </div>
                <div>
                    <Link to={ `/treatment/${ id }` }><Button className="btn btn-primary">Details</Button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Treatment;