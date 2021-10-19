import { useParams } from 'react-router';
import useTreatments from '../../Hooks/useTreatments';

const PrivateSingleTreatment = () => {
    const { treatmentId } = useParams();
    const [ treatments ] = useTreatments();

    console.log( treatments );

    const privateTreatment = treatments.find( treatment => treatmentId === treatment.id );
    console.log( privateTreatment )
    return (
        <div>
            <h2>{ treatmentId }</h2>
        </div>
    );
};

export default PrivateSingleTreatment;