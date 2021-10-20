import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

//component for specialists page
const Doctors = () => {
    const [ doctors ] = useDoctors();
    return (
        <Row className="container mx-auto my-5">
            <h2 className="mt-5 text-center fw-bold">Our Specialists</h2>
            <Row className="g-4">
                {
                    doctors.map( doctor => <Doctor
                        key={ doctor.id }
                        doctor={ doctor }>
                    </Doctor> )
                }
            </Row>
            <hr className="mt-5 text-danger" />
        </Row >
    );
};

export default Doctors;