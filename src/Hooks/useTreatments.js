import { useEffect, useState } from "react";

// custom hook for courses api call
const useTreatments = () => {
    const [ treatments, setTreatments ] = useState( [] );

    useEffect( () => {
        fetch( './treatments.json' )
            .then( res => res.json() )
            .then( data => setTreatments( data ) );
    }, [] );

    //return courses state variable and setCourses function
    return [ treatments, setTreatments ];
}

//export the entire function for external use
export default useTreatments;