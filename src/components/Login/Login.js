import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import loginImage from '../../images/login.jpg';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, processLogin } = useAuth();
    const auth = getAuth();
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ error, setError ] = useState( '' );
    const [ isLogin, setIsLogin ] = useState( false );
    const [ user, setUser ] = useState( {} );

    const emailInputFieldChange = e => {
        setEmail( e.target.value );
    }

    const passwordInputFieldChange = e => {
        setPassword( e.target.value );
    }

    const handleUserLogin = e => {
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
            processLogin( email, password );
        }
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
                    <div className="container mt-5">
                        <form onSubmit={ handleLogin }>
                            <h3 className="text-primary fw-bold">Please Login</h3>

                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input onBlur={ emailInputFieldChange } type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <input onBlur={ passwordInputFieldChange } type="password" className="form-control" id="inputPassword3" placeholder="Password (Minimum 6 Characters)" required />
                                </div>
                            </div>
                            <button onClick={ handleUserLogin } type="submit" className="btn btn-primary"> Login With Email</button>
                            <button onClick={ handleResetPassword } type="button" className="btn btn-secondary btn-sm ms-3">Reset Password</button>
                        </form>
                        <hr className="text-danger" />
                        <button onClick={ signInUsingGoogle } className="my-3 btn btn-success"> Login With Google</button>
                        <hr className="text-danger" />
                        <p className="my-3"><Link to="/register" className="btn btn-danger">New User?</Link></p>
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