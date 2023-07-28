import React from 'react'
import { Form, useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const redirectFrom = location?.state?.from
  return (
    <div className='login__container'>
      <Form method="post" action={`/login?redirectFrom=${redirectFrom}`}>
        <fieldset>
          <legend>Login:</legend>
          <input type='text' name="username" placeholder='Username' />
          <br/>
          <input type='password' name="password" placeholder='Password' />
          <br/>
          <button type='submit'>Submit</button>
        </fieldset>
      </Form>
    </div>
  )
}

export default Login