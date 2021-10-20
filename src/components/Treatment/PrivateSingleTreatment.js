import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useTreatments from '../../Hooks/useTreatments';

const PrivateSingleTreatment = () => {
    const { treatmentId } = useParams();
    const [ treatments ] = useTreatments();

    const privateTreatment = ( treatments.find( treatment => treatmentId === treatment.id ) );

    return (

        <div className="container my-5 bg-info">
            <h1 className="text-dark my-3 p-3"><span className="text-danger">{ privateTreatment?.name }</span> Treatment Overview in Details</h1>
            <Card className="px-5 py-2">
                <Card.Img variant="top" src={ privateTreatment?.image } className="img-fluid" style={ { width: '400px' } } />
                <Card.Body>
                    <Card.Title className="fs-1">{ privateTreatment?.name }</Card.Title>
                    <hr className="text-secondary" />
                    <Card.Text>
                        <p>{ privateTreatment?.description }</p>
                        <hr className="text-secondary" />
                        <p><b>Treatment Specialist:</b> { privateTreatment?.specialist }</p>
                        <hr className="text-secondary" />
                        <p><b>Treatment Cost:   </b>BDT. { privateTreatment?.price }</p>
                        <hr className="text-secondary" />
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Please contact our clinic for the procedure. Thank you for visiting us.</small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default PrivateSingleTreatment;