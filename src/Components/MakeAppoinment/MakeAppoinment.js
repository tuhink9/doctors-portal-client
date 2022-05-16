import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';
import Footer from '../Footer/Footer';

const MakeAppoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default MakeAppoinment;