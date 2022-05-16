import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBackground from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className='mb-12' style={{
          background:`url(${chairBackground})`
        }}>
            <div className="hero my bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;