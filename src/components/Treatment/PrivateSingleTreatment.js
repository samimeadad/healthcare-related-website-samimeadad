import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PrivateSingleTreatment = () => {
    const { treatmentId } = useParams();
    const [ treatments, setTreatments ] = useState( [] );


    useEffect( () => {
        fetch( '/treatments.json' )
            .then( res => res.json() )
            .then( data => setTreatments( data ) );
    }, [ treatmentId ] );

    console.log( treatments );

    const privateTreatment = ( treatments.find( treatment => treatmentId === treatment.id ) );

    return (
        <div className="container">
            <h1 className="text-center">Our Treatment is { treatmentId }</h1>
            <h2 className="text-center">{ privateTreatment?.id }</h2>
            <h2 className="text-center">{ privateTreatment?.id }</h2>
            <h2 className="text-center">{ privateTreatment?.name }</h2>
            <h3 className="text-center">{ privateTreatment?.description }</h3>
            <h4 className="text-center">{ privateTreatment?.specialist }</h4>
        </div>
    );
};

export default PrivateSingleTreatment;