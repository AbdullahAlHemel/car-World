import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import SingUp from './components/SignUp.jsx';
import AddCar from './components/AddCar.jsx';
import Users from './components/Users.jsx';
import UpdateCar from './components/UpdateCar.jsx';
import ErrorPage from './ErrorPage.jsx';
import Route from './Route.jsx';
import SpecialCar from './components/SpecialCar';
import SingleCar from './components/SingleCar';
import Home from './components/Home';
import PrivateRoute from './Privateroute';
import Contract from './Contract';
// import MyCard from './components/MyCard';



const router = createBrowserRouter([
{
  path: '/',
  element: <Route></Route>,
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
      path: '/',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/car'),
      element: <Home></Home>
    },
    {
      path: '/car/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/car/${params.id}`),
      element: <PrivateRoute><SingleCar></SingleCar></PrivateRoute>
    },
    {
      path: "/addcar",
      element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
    },
    {
      path: 'updatecar/:id',
      element: <UpdateCar></UpdateCar>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/car/${params.id}`)
    },
    {
      path: '/signup',
      element: <SingUp></SingUp>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path: '/users',
      element: <Users></Users>,
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/users')
    },
    {
      path: '/special',
      element: <PrivateRoute><SpecialCar></SpecialCar></PrivateRoute>
    },
    {
      path: '/contract',
      element: <Contract></Contract>
    },
    // {
    //   path:'/mycard',
    //   element: <MyCard></MyCard>,
    //   loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/car'),

    // }
  ]
 }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
