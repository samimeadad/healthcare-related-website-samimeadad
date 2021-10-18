import React from 'react';
import errorPage from '../../images/404.png';

const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="h-100" src={ errorPage } alt="" />
        </div>
    );
};

export default ErrorPage;