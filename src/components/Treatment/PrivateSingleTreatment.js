import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useTreatments from '../../Hooks/useTreatments';


const PrivateSingleTreatment = () => {
    //destructure the route parameter from the Route in App.js
    const { treatmentId } = useParams();
    //destructuring the state variable from useTreatment hook to get API data from fake API
    const [ treatments ] = useTreatments();

    //search the required treatment element as per ID search
    const privateTreatment = ( treatments.find( treatment => treatmentId === treatment.id ) );

    //history hook for Go Back button
    const history = useHistory();

    return (
        <div className="container my-5 bg-info">
            <h1 className="text-dark my-3 p-3"><span className="text-danger fw-bold">{ privateTreatment?.name }</span> Treatment Overview in Details</h1>
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
                <Card.Footer className="d-flex justify-content-between">
                    <Button className="btn btn-danger" onClick={ () => history.goBack() }>Go Back</Button>
                </Card.Footer>
            </Card>

        </div >
    );
};

export default PrivateSingleTreatment;