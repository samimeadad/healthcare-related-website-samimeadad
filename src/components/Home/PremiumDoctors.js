import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

//component for premium doctors section
const PremiumDoctors = () => {
    const [ doctors ] = useDoctors();
    const premiumDoctors = doctors.filter( doctor => doctor.premium === true );

    return (
        <Row className="container mx-auto">
            <h2 className="text-center fw-bold text-info">Our Specialists</h2>
            <Row className="g-4">
                {
                    premiumDoctors.map( doctor => <Doctor
                        key={ doctor.id }
                        doctor={ doctor }>
                    </Doctor> )
                }
            </Row>
        </Row >
    );
};

export default PremiumDoctors;