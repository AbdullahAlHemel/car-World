import React from 'react';

const CarShow = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-10" style={{backgroundImage: 'url(https://i.ibb.co/hHBv84R/pexels-s-von-hoerst-2920064.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                       <div className="max-w-md">
                       <h1 className="mb-5 text-5xl font-bold">JOIN IN CAR SHOW</h1>
                       <p className="mb-5">"I feel more myself when I'm driving than I do anywhere else." "There's no feeling like hitting the gas and just going." "I love being able to go anywhere I want, anytime I want." "I can't imagine a life without my car". - A car lover</p>
                     <button className="btn btn-primary">Get Started free</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default CarShow;