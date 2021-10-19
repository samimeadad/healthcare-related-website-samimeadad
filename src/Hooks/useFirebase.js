import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeFirebaseAuthentication from '../Firebase/firebase.init';

initializeFirebaseAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState( {} );
    const [ error, setError ] = useState( '' );

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup( auth, googleProvider )
            .then( result => {
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } );
    }

    const logout = () => {
        signOut( auth ).then( () => {
            setUser( {} );
        } )
            .catch( ( error ) => {
                setError( error.message );
            } );
    }

    useEffect( () => {
        onAuthStateChanged( auth, user => {
            if ( user ) {
                console.log( 'inside state change', user );
                setUser( user );
            }
        } )
    }, [ auth ] );

    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;