import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
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

    const verifyEmail = () => {
        sendEmailVerification( auth.currentUser )
            .then( result => {
                console.log( result );
            } )
    }

    const registerNewUser = ( email, password ) => {
        createUserWithEmailAndPassword( auth, email, password )
            .then( result => {
                setUser( result.user );
                setError( 'Yeah! User Registered' );
                verifyEmail();
            } )
            .catch( error => {
                setError( error.message );
            } );
    }

    const processLogin = ( email, password ) => {
        signInWithEmailAndPassword( auth, email, password )
            .then( result => {
                setError( '' );
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } );
    }

    const processPasswordReset = ( email ) => {
        sendPasswordResetEmail( auth, email )
            .then( result => {
                setError( 'Password reset mail sent' );
            } )
            .catch( error => {
                setError( error.message )
            } );
    }

    const logout = () => {
        signOut( auth ).then( () => {
            setUser( {} );
            setError( 'User Logged Out!' )
        } )
            .catch( ( error ) => {
                setError( error.message );
            } );
    }

    useEffect( () => {
        onAuthStateChanged( auth, user => {
            if ( user ) {
                setUser( user );
            }
        } )
    }, [ auth ] );

    return {
        user,
        error,
        signInUsingGoogle,
        registerNewUser,
        processLogin,
        processPasswordReset,
        logout
    }
}

export default useFirebase;