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
import MyCard from './components/MyCard';
import Bmw from './components/brand/Bmw';
import SingleBugatti from './SingleBugatti';
import Buggatti from './Buggatti';
import Tesla from './5boxin/Tesla';
import TeslaUpdate from './5boxin/TeslaUpdate';
import SingleTesla from './5boxin/singleTesla';
import Honda from './5boxinH/Honda';
import HondaUpdate from './5boxinH/HondaUpload';
import SingleHonda from './5boxinH/SingleHonda';
import SingleToyota from './Toyota/SingleToyota';
import Toyota from './Toyota/Toyota';
import ToyotaUpdate from './Toyota/ToyotaUpdata';
import MbenzUpdate from './Toyota/MBez/MbenzUpdate';
import SingleMbenz from './Toyota/MBez/SingleMbenz';
import MBenz from './Toyota/MBez/MBenz';



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
      path: '/bmw',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/bmw'),
      element:<PrivateRoute><Bmw></Bmw></PrivateRoute>
    },

    {
      path: '/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bmw/${params.id}`),
      element: <PrivateRoute><SingleCar></SingleCar></PrivateRoute>
    },
    {
      path: '/bugatti/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bugatti/${params.id}`),
      element: <SingleBugatti></SingleBugatti>
    },
     //bugatti
    {
      path: '/bugatti',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/bugatti'),
      element:<PrivateRoute><Buggatti></Buggatti></PrivateRoute>
    },
    // {
    //   path: '/bugatti/:id',
    //   loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bugatti/${params.id}`),
    //   element: <SingleBugatti></SingleBugatti>
    // },
     //tesla
    {
      path: '/tesla',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/tesla'),
      element:<PrivateRoute><Tesla></Tesla></PrivateRoute>
    },
    {
      path: '/tesla/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/tesla/${params.id}`),
      element: <SingleTesla></SingleTesla>
    },
     //toyota
    {
      path: '/toyota',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/toyota'),
      element:<PrivateRoute><Toyota></Toyota></PrivateRoute>
    },
    {
      path: '/toyota/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/toyota/${params.id}`),
      element: <SingleToyota></SingleToyota>
    },
     //mbenz
    {
      path: '/mbenz',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/mbenz'),
      element:<PrivateRoute><MBenz></MBenz></PrivateRoute>
    },
    {
      path: '/mbenz/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/mbenz/${params.id}`),
      element: <SingleMbenz></SingleMbenz>
    },
     //honda
    {
      path: '/honda',
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/honda'),
      element:<PrivateRoute><Honda></Honda></PrivateRoute>
    },
    {
      path: '/honda/:id',
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/honda/${params.id}`),
      element: <SingleHonda></SingleHonda>
    },

    // {
    //   path: '/bugatti/:id',
    //   loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bugatti/${params.id}`),
    //   element: <PrivateRoute><SingleCar></SingleCar></PrivateRoute>
    // },




        // {
    //   path: '/car/:id',
    //   loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/car/${params.id}`),
    //   element: <PrivateRoute><SingleCar></SingleCar></PrivateRoute>
    // },
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
      path: 'updatebmw/:id',
      element: <UpdateCar></UpdateCar>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bmw/${params.id}`)
    },
    {
      path: 'updatebugatti/:id',
      element: <UpdateCar></UpdateCar>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/bugatti/${params.id}`)
    },
    {
      path: '/updatetesla/:id',
      element: <TeslaUpdate></TeslaUpdate>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/tesla/${params.id}`)
    },
    {
      path: 'updatetoyota/:id',
      element: <ToyotaUpdate></ToyotaUpdate>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/toyota/${params.id}`)
    },
    {
      path: '/updatembenz/:id',
      element: <MbenzUpdate></MbenzUpdate>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/mbenz/${params.id}`)
    },
    {
      path: '/updatehonda/:id',
      element: <HondaUpdate></HondaUpdate>,
      loader: ({params}) => fetch(`https://car-server-abdullahalhemel.vercel.app/honda/${params.id}`)
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
    {
      path:'/mycard',
      element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
      loader: () => fetch('https://car-server-abdullahalhemel.vercel.app/mbenz'),

    }
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
