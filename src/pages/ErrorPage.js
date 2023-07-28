import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {Object.keys(error).map((e,i) => e === 'error' ? <p key={i}><u>{e}</u>:{error[e].message}</p> : <p key={i}><u>{e}</u>: {error[e]}</p>)}
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage