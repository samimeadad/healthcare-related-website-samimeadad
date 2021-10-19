import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import loginImage from '../../images/login.jpg';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, processLogin, processPasswordReset, error } = useAuth();
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ errMessage, setErrMessage ] = useState( '' );

    const emailInputFieldChange = e => {
        setEmail( e.target.value );
    }

    const passwordInputFieldChange = e => {
        setPassword( e.target.value );
    }

    const handleUserLogin = e => {
        e.preventDefault();
        if ( !email ) {
            setErrMessage( 'Please input a valid email!' );
            return;
        }
        else if ( !password ) {
            setErrMessage( 'Please input your password' );
        }
        else if ( password.length < 6 ) {
            setErrMessage( 'Password must be at least 6 characters long' );
            return;
        }

        else {
            processLogin( email, password );
            setErrMessage( 'Yeah! User Logged In!' )
        }
    }

    const handleResetPassword = () => {
        if ( !email ) {
            setErrMessage( 'Please input a valid email' );
        }
        else {
            processPasswordReset( email );
            setErrMessage( 'Mail sent for reset password!' )
        }
    }

    return (
        <div className="container mx-auto my-5">
            <Row className="text-center">
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div className="container mt-5">
                        <form onSubmit={ handleUserLogin }>
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
                        {
                            !error ? <div className="row mt-3 text-danger">{ errMessage }</div> : <div className="row mt-3 text-danger">{ error }</div>
                        }
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