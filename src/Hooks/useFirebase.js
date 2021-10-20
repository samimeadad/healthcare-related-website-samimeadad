import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebaseAuthentication from '../Firebase/firebase.init';

//initialize the firebase configuration for authentication
initializeFirebaseAuthentication();

//Main hook for firebase authentication
const useFirebase = () => {
    //state variable for user, error and data loading progress
    const [ user, setUser ] = useState( {} );
    const [ error, setError ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( true );

    //get the authentication token
    const auth = getAuth();
    //google auth provider object for google authentication
    const googleProvider = new GoogleAuthProvider();

    //function for google sign-in
    const signInUsingGoogle = () => {
        setIsLoading( true );
        signInWithPopup( auth, googleProvider )
            .then( result => {
                setError( '' );
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } )
            .finally( () => setIsLoading( false ) );
    }

    //function for email verification
    const verifyEmail = () => {
        sendEmailVerification( auth.currentUser )
            .then( () => {
                setUser( user );
            } )
            .catch( error => {
                setError( error );
            } );
    }

    //function for sign-up a new user with email and password
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

    //function for password reset
    const processPasswordReset = ( email ) => {
        sendPasswordResetEmail( auth, email )
            .then( () => {
                setError( 'Password reset mail sent' );
            } )
            .catch( error => {
                setError( error.message )
            } );
    }

    //function for process login with email and password
    const processLogin = ( email, password ) => {
        setIsLoading( true );
        signInWithEmailAndPassword( auth, email, password )
            .then( result => {
                setError( '' );
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } )
            .finally( () => setIsLoading( false ) );
    }

    //Set the observer on auth object to get the current user status on real-time
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, user => {
            if ( user ) {
                setUser( user );
            }
            else {
                setUser( {} );
            }
            setIsLoading( false );
        } );
        return () => unsubscribe();
    }, [ auth ] );


    //function for logout
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

    //return all the necessary variables and function for further use
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