import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Messages from './pages/Messages';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Protected from './component/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Protected><Messages /></Protected>,
        errorElement: <ErrorPage />,
        shouldRevalidate: ({ currentUrl }) => {
          console.log(currentUrl)
          return false
        }
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: async ({ params, request }) => {
      console.log(params);
      console.log(params.redirectFrom)

      let formData = await request.formData();
      const u = formData.get("username")
      const p = formData.get("password");
      //do a api call and validate 
      console.log(u);
      console.log(p);
      if(u === p) {
        localStorage.setItem('token', "fake_token");
        return redirect("/");
      } else {
        // The Login page stay but you need to grab the api result some how and show it in the login page as you like
        return null;
      }
    }
  },
  {
    path: "/logout",
    element: <Logout />,
    action: async () => {
      console.log('Logout invoked')
      localStorage.removeItem('token')

      return redirect("/home");
    }
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
