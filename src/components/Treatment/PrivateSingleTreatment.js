import React from 'react';
import { useParams } from 'react-router-dom';

const PrivateSingleTreatment = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Booking No.: { serviceId }</h2>
        </div>
    );
};

export default PrivateSingleTreatment;