import React from 'react';

const AppoinmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary">{name}</h2>
    <p>
        {
        slots.length > 0 ?
        <span>{slots[0]}</span>
        :
        <span className='text-rose-600'>Try Another Date</span>
        }
        </p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
    <div className="card-actions justify-center">
      <label onClick={()=>setTreatment(service)} for="booking-modal" disabled={slots.length === 0} className="btn btn-secondary modal-button justify-center">Book Appoinment</label>
    </div>
  </div>
</div>
    );
};

export default AppoinmentService;