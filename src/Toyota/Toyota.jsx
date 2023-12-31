


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyotaCard from './ToyotaCars';

const  Toyota= () => {
    const loadedCar =  useLoaderData();
    const [cars, setCar] = useState(loadedCar);
    return (
        <div>
            
            <h2 className=' m-5 text-center text-3xl font-bold font-serif my-10 mt-16'>Toyota store</h2>
     <h2 className="pb-20 grid grid-cols-1  gap-8 w-3/4 m-auto">{cars.map(car => <ToyotaCard
      key={car._id}
      car = {car}
      cars = {cars}
      setCar={setCar}
     ></ToyotaCard>)}</h2>
        </div>
    );
};

export default Toyota;


