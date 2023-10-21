import React from 'react';
import Swal from 'sweetalert2'
const SingleMyCard = ({car}) => {
    const {_id ,brand, model, price, from, experience ,category ,details , photo} = car;

    const dCard = _id =>{
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
              Swal.fire(
                'Deleted!',
                'Your car has been deleted.',
                'success'
              )
            }
          })
      }
             
    return ( <>
        <div className='border p-1'>
            <h3 className='text-[18px] font-semibold text-center my-3'>{model} </h3>
            <img className='md:w-[270px] md:h-[140px]' src={photo} alt="" />
            <h2 className='text-center text-fuchsia-500 text-[15px] mt-2'>Price: {price}</h2>
            <button onClick={dCard} className='btn my-2 md:mx-12'>Delete</button>
        </div>

        
        </>
    );
};

export default SingleMyCard;