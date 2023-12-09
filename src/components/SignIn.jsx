import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Link , useLocation, useNavigate } from 'react-router-dom';
 import swal from 'sweetalert'




const SignIn = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const location = useLocation(); 
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
          navigate(location?.state? location.state : '/' );   

                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                //update last logged at in the database
                fetch('https://car-server-abdullahalhemel.vercel.app/users', {
                    method:'PATCH',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                        
        })
        .catch(error =>{
          return swal({
            title: "Error?",
            text: "try again with correct password and email",
            icon: "warning",
            
            dangerMode: true,
          })    
          
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            
            <div className="hero pt-4 border-t mb-16 pt-8">
    <div data-aos="zoom-in " className="pb-12 md:w-3/4 lg:w-1/2 mx-auto border px-5 rounded py-8">
        <h2 className='text-center text-3xl font-semibold text-gray-600'>Login now</h2>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-100">Login</button>
        </div>
      </form>
       <p className='text-center'>Don't have a account? <Link to='/signup' className='underline text-blue-700 font-semibold'>Register</Link></p>
       <h1 className='ml-[100px] mt-4 text-[18px]] text-pink-500'>Login With</h1>
       <button onClick={handleGoogleSignIn} className='flex rounded text-2xl font-semibold w-[200px] md:mx-[80px] border-blue-400 md:px-[120px] bg-blue-200 p-2  md:w-[400px] border text-green-700'>
        <FaGoogle className='mr-3 '/>
        Google</button>

    </div>
    
</div>
        </div>
    );
};

export default SignIn;