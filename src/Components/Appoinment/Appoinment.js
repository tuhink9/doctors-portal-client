import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'

const Appoinment = () => {
    return (
        <section className='flex justify-center items-center mt-12'
        style={{
          background: `url(${appointment})`
        }}
        >
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="mt-[-200px]" />
    <div>
      <h3>makeAppoinment</h3>
      <h2 className="text-5xl font-bold">Make an makeAppoinment Today</h2>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</section>
    );
};

export default Appoinment;