import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentService from '../AppoinmentService/AppoinmentService';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='py-12'>
            <p className='text-xl text-bold text-center text-primary'>You picked {format(date, 'PP')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                services.map(service => <AppoinmentService
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></AppoinmentService>)
            }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;