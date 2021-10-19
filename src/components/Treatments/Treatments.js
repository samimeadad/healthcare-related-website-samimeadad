import React from 'react';
import { Row } from 'react-bootstrap';
import useTreatments from '../../Hooks/useTreatments';
import Treatment from '../Treatment/Treatment'

const Treatments = () => {
    const [ treatments ] = useTreatments();
    return (
        <Row className="container mx-auto my-5">
            <h2 className="mt-5 text-center fw-bold">Our Services</h2>
            <Row className="g-4">
                {
                    treatments.map( treatment => <Treatment
                        key={ treatment.id }
                        treatment={ treatment }>
                    </Treatment> )
                }
            </Row>
            <hr className="mx-2 my-5 text-info" />
        </Row >
    );
};

export default Treatments;