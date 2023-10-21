

import {useLoaderData} from "react-router-dom";
import Swal from 'sweetalert2'
const MbenzUpdate = () => {
    const car = useLoaderData();
    const {_id, brand, model, price, from, experience,category, details, photo} = car

    const updateCar = event => {
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
        fetch(`https://car-server-abdullahalhemel.vercel.app/mbenz/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Car Updated successfully',
                    text: 'Thanks',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }
    return (
        <div>
        <div className=' px-20'>
         <h2 className='text-3xl font-extrabold text-center'>Update details</h2>
         <form onSubmit={updateCar}>
            {/* form name and quantity row*/}
            <div className='md:flex mb-8'>
               <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name='brand' defaultValue={brand} 
                    className="input input-bordered w-full" />
                </label>
               </div>

               <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Model</span>
                </label>
                <label className="input-group">
                    <input type="text" name='model' defaultValue={model}
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
                    <input type="text" name='price' defaultValue={price} 
                    className="input input-bordered w-full" />
                </label>
               </div>

               <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">From</span>
                </label>
                <label className="input-group">
                    <input type="text" name='from' defaultValue={from}
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
                   <input type="text" name='experience' defaultValue={experience}
                   className="input input-bordered w-full" />
               </label>
              </div>

              <div className="form-control md:w-1/2 ml-4">
               <label className="label">
                   <span className="label-text">Category</span>
               </label>
               <label className="input-group">
                   <input type="text" name='category' defaultValue={category}
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
                   <input type="text" name='details' defaultValue={details}
                    className="input input-bordered w-full" />
               </label>
               <label className="label">
                   <span className="label-text">Photo URL</span>
               </label>
               <label className="input-group">
                   <input type="text" name='photo' defaultValue={photo} 
                   className="input input-bordered w-full" />
               </label>
              </div>
           </div>
           <input type="submit" value="Update Car" className='btn btn-neutral w-full' />
        </form>
       </div>
       </div>
    )
};

export default MbenzUpdate;

