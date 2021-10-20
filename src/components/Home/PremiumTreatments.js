import React from 'react';
import { Row } from 'react-bootstrap';
import useTreatments from '../../Hooks/useTreatments';
import Treatment from '../Treatment/Treatment';

//component for premium treatment section
const PremiumTreatments = () => {
    const [ treatments ] = useTreatments();
    const premiumTreatments = treatments.filter( treatment => treatment.premium === true );

    return (
        <Row className="container mx-auto">
            <h2 className="text-center fw-bold text-info">What We Are Offering</h2>
            <Row className="g-4">
                {
                    premiumTreatments.map( treatment => <Treatment
                        key={ treatment.id }
                        treatment={ treatment }>
                    </Treatment> )
                }
            </Row>
        </Row >
    );
};

export default PremiumTreatments;