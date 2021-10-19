import React from 'react';
import { useParams } from 'react-router-dom';

const PrivateSingleTreatment = ( props ) => {
    const { treatmentId } = useParams();
    return (
        <div>
            <h2>This is Booking No.: { treatmentId }</h2>
        </div>
    );
};

export default PrivateSingleTreatment;