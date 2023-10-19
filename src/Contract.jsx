import React from 'react';

const Contract = () => {
    return (
        <div className='md:mx-[90px]'>
            <h2 className='border text-center rounded text-[20px] border-lime-400 text-cyan-600 my-4 py-4'>Email : car24@gmail.com <span className='ml-[20px]'>Phone: +0122232435352</span></h2>
           <div className="join join-vertical w-full  md:mb-16 text-[#ad5656] border-lime-400 border">
            <div className="collapse collapse-arrow join-item border ">
                <input type="radio" name="my-accordion-4" checked="checked" /> 
                <div className="collapse-title text-2xl font-medium ">
                25 of the most common problems found in newer cars
                </div>
                <div className="collapse-content"> 
                <p className='text-[20px]'>From time to time everyone finds they have an issue with their car. If you do develop a problem it is never a good idea to ignore it; taking care of a minor issue as soon as it occurs is the best way of avoiding huge repair bills later on. Safety is another concern too, keeping your car in good condition is the best way of keeping your family safe when out on the road.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-2xl font-medium">
                A Warning Light Shows
                </div>
                <div className="collapse-content"> 
                <p className='text-[20px]'>Warning lights appear when one of the sensors detect an error and highlights it to the engine control unit. There are around 200 warning codes so you will need to take this to a professional who can then check the system, find out the source of the warning and carry out the necessary repairs.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-2xl font-medium">
                Electrical Issues
                </div>
                <div className="collapse-content"> 
                <p className='text-[20px]'>One of the most common problems that Mercedes A-Class owners may experience is electrical issues. These can manifest in a variety of ways, such as dashboard warning lights, faulty sensors, or problems with the car’s infotainment system.

Some common electrical issues include problems with the car’s battery, alternator or starter motor. If the battery is not holding a charge or the alternator is not charging it properly, you may experience starting issues or find that the car won’t start at all. In addition, faulty sensors can cause warning lights to appear on the dashboard, which can be frustrating and sometimes expensive to diagnose and fix.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contract;