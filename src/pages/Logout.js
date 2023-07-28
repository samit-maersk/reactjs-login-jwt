import React, { useEffect } from 'react'
import { useLocation, useSubmit } from 'react-router-dom';

const Logout = () => {
    const submit = useSubmit();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            submit(null, { method: "post", action: "/logout" });
          }, "2000");
          return () => clearTimeout(timer);
    }, [submit, location])

    return <p>We are Logging you out...</p>
}

export default Logout