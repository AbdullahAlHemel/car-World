import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2' 

const SingleCar = () => {
    const carData = useLoaderData();
    const {_id ,brand, model, price, from, experience ,category ,details , photo} = carData
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`https://car-server-abdullahalhemel.vercel.app/car/${_id}`,{
                method:'DELETE',

              }
              )
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = cars.filter(c => c._id !== _id)
                      setCar(remaining)
                }
              })
            }
          })
    }
    return (
        <div className='bg-lime-200 py-10'>
        <div className='m-auto w-[1000px] flex '>
            <div>
            <div className='flex w-[600px]'>
                <h3 className='text-[50px] font-bold text-sky-400'>{brand}</h3>
                </div>
            <img className='w-[600px] my-10 m-auto' src={photo} alt="" />
            </div>
            <div className='w-[300px] ml-5 my-20 mt-36'>
                 <h4 className='text-[30px] font-bold text-pink-400'>Model : {model}</h4>
                 <h1 className='text-[30px] my-3 text-yellow-600 font-semibold mb-2 font-medium'>Price: {price}</h1>
                 <h3 className='text-[28px] my-3 text-yellow-700 font-medium'>From : {from}</h3>
                 <h1 className='text-[25px] my-3 text-yellow-800 my-1 font-medium'>Experience: {experience}</h1>
                 <h4 className='text-[25px] text-yellow-900 mb-3 font-medium'>Category: {category}</h4>

            </div>
            <div>
            <div className='btn-group btn-group-vertical space-y-4 my-44 md:float-left'>
                  <Link to={`/updatecar/${_id}`}>
                  <button className=' bg-green-400 font-semibold hover:bg-green-500 p-5 rounded hover:text-white'>Update</button>
                  </Link>
                 <button className=' bg-red-300 rounded font-semibold hover:bg-red-500 p-5 hover:text-white'
                   onClick={() => handleDelete(_id)}>Delete</button>
                
             </div>
            </div>
            </div>
            <div className='m-auto text-[20px] font-medium text-amber-800 w-[900px]'>{details}</div>
           
            </div>
        
    );
};

export default SingleCar;