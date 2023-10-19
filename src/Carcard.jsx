 
import {Link} from "react-router-dom" 

const   Carcard = ({car, cars, setCar }) => {
    const {_id ,brand, model, price, from, experience ,category ,details , photo} = car

    return (
        <div>
        <div className=" md:flex p-4 md:bg-[#bad8fc3b] md:first-letter:shadow-lg md:h-[450px] w-full h-full md:border rounded-[15%]">
         <div className='sm:m-auto md:w-[450px] w-[350px] sm:mt-8 md:py-20 md:ml-10 my-auto '><img src={photo} alt="" className='rounded-md w-full'/></div>
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
         </div>
     </div>
     </div>
    );
};

export default Carcard;