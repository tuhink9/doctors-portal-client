import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, slots, name } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">Booking For: <span className='text-secondary'>{name}</span></h3>
    <form action="" onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        <input id="date" disabled value={format(date, 'pp')} name="date" type="text" className="input input-bordered input-info w-full " />
        <select name="slot" className="select select-bordered select-info w-full">
        {
            slots.map(slot => <option value={slot}>{slot}</option>)
        }
        </select>
        <input id="name" name="name" type="text" placeholder="Your Name" className="input input-bordered input-info w-full " />
        <input id="email" name="email" type="email" placeholder="Email address" className="input input-bordered input-info w-full " />
        <input id="phone" name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-info w-full " />
        <input id="submit" name="submit" type="submit" value="Submit" className="btn btn-secondary input-info w-full color-secondary" />
    </form>
    <div className="modal-action">
      <label for="booking-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
</div>
    );
};

export default BookingModal;