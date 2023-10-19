import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMyCard from './SingleMyCard';

const MyCard = () => {
    const loadedCar =  useLoaderData();
    const [cars, setCar] = useState(loadedCar);


    return (
        <>
        <h2 className=' m-5 text-center text-2xl font-semibold font-serif my-10 mt-16 '>Choice from store</h2>
     <h2 className="pb-20 grid md:grid-cols-4  grid-cols-1  gap-8 w-3/4 m-auto">{cars.map(car => <SingleMyCard
      key={car._id}
      car = {car}
      cars = {cars}
      setCar={setCar}
     ></SingleMyCard>)}</h2>
        </>
    )
};

export default MyCard;