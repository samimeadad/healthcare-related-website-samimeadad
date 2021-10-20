import { useEffect, useState } from "react";

// custom hook for specialists api call
const useDoctors = () => {
    const [ doctors, setDoctors ] = useState( [] );

    useEffect( () => {
        fetch( './doctors.json' )
            .then( res => res.json() )
            .then( data => setDoctors( data ) );
    }, [] );

    //return doctors/specialists state variable and setDoctors function
    return [ doctors, setDoctors ];
}

//export the entire function for external use
export default useDoctors;