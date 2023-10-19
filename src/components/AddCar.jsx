import React from 'react';
import Swal from 'sweetalert2'

const AddCar = () => {
    const handleAddCar = event => {
        event.preventDefault()

        const form = event.target;

        const brand = form.brand.value;
        const model = form.model.value;
        const price = form.price.value;
        const from = form.from.value;
        const experience = form.experience.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCar = {brand, model, price, from, experience,category, details, photo}
        console.log(newCar);

        //send data to the server
        fetch('https://car-server-abdullahalhemel.vercel.app/car', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Added',
                    text: 'Thanks',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div className='bg-[#ff7000] p-20'>
        <h2 className='text-3xl font-extrabold text-center mb-4'>Add a Car</h2>
        <form onSubmit={handleAddCar}>
           {/* form name and quantity row*/}
           <div className='md:flex mb-8'>
              <div className="form-control md:w-1/2">
               <label className="label">
                   <span className="label-text">Brand Name</span>
               </label>
               <label className="input-group">
                   <input type="text" name='brand' placeholder="Brand Name" 
                   className="input input-bordered w-full" />
               </label>
              </div>

              <div className="form-control md:w-1/2 ml-4">
               <label className="label">
                   <span className="label-text">Model</span>
               </label>
               <label className="input-group">
                   <input type="text" name='model' placeholder="Model"
                    className="input input-bordered w-full" />
               </label>
              </div>
           </div>
           {/* from supplier row */}
           <div className='md:flex mb-8'>
              <div className="form-control md:w-1/2">
               <label className="label">
                   <span className="label-text">Price</span>
               </label>
               <label className="input-group">
                   <input type="text" name='price' placeholder="Price" 
                   className="input input-bordered w-full" />
               </label>
              </div>

              <div className="form-control md:w-1/2 ml-4">
               <label className="label">
                   <span className="label-text">From</span>
               </label>
               <label className="input-group">
                   <input type="text" name='from' placeholder="From"
                    className="input input-bordered w-full" />
               </label>
              </div>
           </div>
           {/* from Category and Details Row */}
           <div className='md:flex mb-0'>
              <div className="form-control md:w-1/2">
               <label className="label">
                   <span className="label-text">Experience</span>
               </label>
               <label className="input-group">
                   <input type="text" name='experience' placeholder="Experience" 
                   className="input input-bordered w-full" />
               </label>
              </div>

              <div className="form-control md:w-1/2 ml-4">
               <label className="label">
                   <span className="label-text">Category</span>
               </label>
               <label className="input-group">
                   <input type="text" name='category' placeholder="Category"
                    className="input input-bordered w-full" />
               </label>
              </div>
           </div>
           {/* form Photo URL row */}
           <div className='mb-8'>
              <div className="form-control w-full ">
              <label className="label">
                   <span className="label-text">Details</span>
               </label>
              <label className="input-group my-2">
                   <input type="text" name='details' placeholder="Details"
                    className="input input-bordered w-full" />
               </label>
               <label className="label">
                   <span className="label-text">Photo URL</span>
               </label>
               <label className="input-group">
                   <input type="text" name='photo' placeholder="Image" 
                   className="input input-bordered w-full" />
               </label>
              </div>
           </div>
           <input type="submit" value="Add Car" className='btn btn-neutral w-full' />
        </form>
       </div>
    );
};

export default AddCar;