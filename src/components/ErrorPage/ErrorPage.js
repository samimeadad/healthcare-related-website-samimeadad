import React from 'react';
//import 404 image from the /src/images folder
import errorPage from '../../images/404.png';

//component of 404 error page
const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="h-100" src={ errorPage } alt="" />
        </div>
    );
};

export default ErrorPage;