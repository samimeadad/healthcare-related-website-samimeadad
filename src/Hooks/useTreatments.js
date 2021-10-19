import { useEffect, useState } from "react";

// custom hook for treatments/services api call
const useTreatments = () => {
    const [ treatments, setTreatments ] = useState( [] );

    useEffect( () => {
        fetch( '/treatments.json' )
            .then( res => res.json() )
            .then( data => setTreatments( data ) );
    }, [] );

    //return treatments/services state variable and setTreatments function
    return [ treatments, setTreatments ];
}

//export the entire function for external use
export default useTreatments;