
import Swal from 'sweetalert2'  
import {Link} from "react-router-dom" 


const Carcard = ({car, cars, setCar }) => {
    const {_id ,brand, model, price, from, experience ,category ,details , photo} = car

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
             
    //           fetch(`https://car-server-r8qyv23nu-abdullahalhemel.vercel.app/car/${_id}`,{
    //             method:'DELETE',

    //           }
    //           )
    //           .then(res => res.json())
    //           .then(data => {
    //             console.log(data);
    //             if(data.deletedCount > 0){
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your file has been deleted.',
    //                     'success'
    //                   )
    //                   const remaining = cars.filter(c => c._id !== _id)
    //                   setCar(remaining)
    //             }
    //           })
    //         }
    //       })
    // }
    return (
        <div>
        <div className=" md:flex p-4 md:bg-[#bad8fc3b] md:first-letter:shadow-lg md:h-[450px] w-full h-full md:border rounded-[15%]">
         <div className='sm:m-auto md:w-[360px] w-[350px] sm:mt-8 md:py-8 md:ml-10 my-auto '><img src={photo} alt="" className='rounded-md w-full'/></div>
         <div className='flex p-10'>
             <div className="md:float-right md:w-[450px] w-[200px]">
               <h6 className='text-[15px] font-semibold text-slate-500 text-center underline'>Brand name</h6>
                 <h2 className="font-serif text-[35px] font-bold text-sky-600 text-center tracking-widest">{brand}</h2>
                 <h4 className='text-[22px] font-semibold text-pink-400 text-center tracking-wider'>Model : {model}</h4>
                 <h1 className='text-[21px] text-yellow-600 font-semibold mb-2 text-center tracking-wider'>Price: {price}</h1>
                 <h3 className='text-[18px] text-yellow-700 text-center tracking-wide'>From : {from}</h3>
                 <h1 className='text-[17px] text-yellow-800 my-1 text-center tracking-wider'>Experience: {experience}</h1>
                 <h4 className='text-[16px] text-yellow-900 mb-3 text-center tracking-wider'>Category: {category}</h4>




                 <div className="rating rating-sm w-[100px] md:mx-[190px] mx-[50px]">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-300" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-200" />
                </div>



{/* 
              <h2 className='text-slate-500 leading-8 md:w-full'>{details}  
              <Link  to={`/car/${_id}`} className="rounded btn-primary hover:translate-y-1 underline p-1.5 m-2 text-white bg-yellow-900 ">Details</Link>
              </h2> */}

              <p>
              {
                        details.length > 100? <p className='text-slate-500 leading-8 md:w-full'>{details.slice(0,100)} 
                        <Link to={`/car/${_id}`} className='rounded btn-primary hover:translate-y-1 underline p-1.5 m-2 text-white bg-yellow-900 '>Details</Link>

                        </p>
                        :
                        <p >{details}</p>
                    }

              </p>



             </div>
             {/* <div className='btn-group btn-group-vertical space-y-4 my-24 md:float-left'>
                  <Link to={`/updatecar/${_id}`}>
                  <button className=' bg-green-200 hover:bg-green-400 p-1 rounded'>Update</button>
                  </Link>
                 <button className=' bg-red-300 rounded hover:bg-red-500 p-1 hover:text-white'
                   onClick={() => handleDelete(_id)}>Delete</button>
                
             </div> */}
         </div>
     </div>
     </div>
    );
};

export default Carcard;