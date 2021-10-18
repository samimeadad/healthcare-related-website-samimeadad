import { useEffect, useState } from "react";

// custom hook for teachers api call
const useDoctors = () => {
    const [ doctors, setDoctors ] = useState( [] );

    useEffect( () => {
        fetch( './doctors.json' )
            .then( res => res.json() )
            .then( data => setDoctors( data ) );
    }, [] );

    //return teachers state variable and setTeachers function
    return [ doctors, setDoctors ];
}

//export the entire function for external use
export default useDoctors;