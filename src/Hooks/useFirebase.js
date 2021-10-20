import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebaseAuthentication from '../Firebase/firebase.init';

initializeFirebaseAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState( {} );
    const [ error, setError ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( true );

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading( true );
        signInWithPopup( auth, googleProvider )
            .then( result => {
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } )
            .finally( () => setIsLoading( false ) );
    }

    const verifyEmail = () => {
        sendEmailVerification( auth.currentUser )
            .then( () => {
                setUser( user );
            } )
            .catch( error => {
                setError( error );
            } );
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
            .then( () => {
                setError( 'Password reset mail sent' );
            } )
            .catch( error => {
                setError( error.message )
            } );
    }

    useEffect( () => {
        onAuthStateChanged( auth, user => {
            if ( user ) {
                setUser( user );
            }
            else {
                setUser( {} );
            }
            setIsLoading( false );
        } );
    }, [ auth ] );

    const logout = () => {
        setIsLoading( true );
        signOut( auth ).then( () => {
            setUser( {} );
            setError( 'User Logged Out!' )
        } )
            .catch( ( error ) => {
                setError( error.message );
            } )
            .finally( () => setIsLoading( false ) );
    }

    return {
        user,
        error,
        signInUsingGoogle,
        registerNewUser,
        processLogin,
        processPasswordReset,
        logout,
        isLoading
    }
}

export default useFirebase;