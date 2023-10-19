import React from 'react';

const SingleMyCard = ({car}) => {
    const {_id ,brand, model, price, from, experience ,category ,details , photo} = car

    return (
        <div>
            <h3 className='text-[18px] font-semibold text-center my-3'>{brand} :  {model}</h3>
            <img className='md:w-[270px] md:h-[140px]' src={photo} alt="" />
        </div>
    );
};

export default SingleMyCard;