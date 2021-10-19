import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import loginImage from '../../images/login.jpg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ error, setError ] = useState( '' );
    const [ isLogin, setIsLogin ] = useState( false );

    const emailInputFieldChange = e => {
        setEmail( e.target.value );
    }

    const passwordInputFieldChange = e => {
        setPassword( e.target.value );
    }

    const nameInputFieldChange = ( e ) => {
        setName( e.target.value );
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
                setError( '' );
                console.log( email, password );
                const user = result.user;
                console.log( user );
                setError( '' );
                verifyEmail();
                setUserName();
            } )
            .catch( error => {
                setError( error.message );
            } );
    }

    const processLogin = ( email, password ) => {
        signInWithEmailAndPassword( auth, email, password )
            .then( result => {
                const user = result.user;
                setError( '' );
                console.log( user );
            } )
            .catch( error => {
                setError( error.message );
            } );
    }

    const setUserName = () => {
        updateProfile( auth.currentUser, { displayName: name } )
            .then( result => { } )
    }

    const handleRegister = e => {
        e.preventDefault();
        if ( !email ) {
            setError( 'Please input a valid email!' );
            return;
        }
        else if ( !password ) {
            setError( 'Please input your password' );
        }
        else if ( password.length < 6 ) {
            setError( 'Password must be at least 6 characters long' );
            return;
        }

        else {
            isLogin ? processLogin( email, password ) : registerNewUser( email, password );
        }
    }

    const toggleLogin = e => {
        setIsLogin( e.target.checked );
    }

    const handleResetPassword = () => {
        if ( !email ) {
            setError( 'Please input a valid email' );
        }
        else {
            sendPasswordResetEmail( auth, email )
                .then( result => {
                    setError( 'Password reset mail sent' );
                } )
        }
    }

    return (
        <div className="container mx-auto my-5">
            <Row className="text-center">
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div className="container mt-5 pt-5">
                        <form onSubmit={ handleRegister }>
                            <h3 className="text-primary fw-bold">Please { isLogin ? 'Login' : 'Register' }</h3>
                            {
                                !isLogin && <div className="row mb-3">
                                    <div className="col-sm-12">
                                        <input onBlur={ nameInputFieldChange } type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                            }
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input onBlur={ emailInputFieldChange } type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input onBlur={ passwordInputFieldChange } type="password" className="form-control" id="inputPassword3" placeholder="Password (Minimum 6 Characters)" required />
                                </div>
                            </div><div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input onChange={ toggleLogin } className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Already Registered?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button onClick={ handleRegister } type="submit" className="btn btn-primary"> { isLogin ? 'Login' : 'Register' } With Email</button>
                            <button onClick={ handleResetPassword } type="button" className="btn btn-secondary btn-sm ms-2">Reset Password</button>
                        </form>
                        <button onClick={ signInUsingGoogle } className="mt-2 btn btn-primary"> { isLogin ? 'Login' : 'Register' } With Google</button>
                        <div className="row mt-3 text-danger">{ error }</div>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <img src={ loginImage } alt="loginImage" className="img-fluid" />
                </Col>
            </Row>
        </div >
    );
};

export default Login;