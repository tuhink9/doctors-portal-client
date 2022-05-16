import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 grid-cols-3 gap-5 mb-12">
            <InfoCard bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl" cardTitle={"Opening Hours"} img={clock}></InfoCard>
            <InfoCard bgclassName="bg-accent" cardTitle={"Our Locations"} img={marker}></InfoCard>
            <InfoCard bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl" cardTitle={"Contact Us"} img={phone}></InfoCard>
        </div>
    );
};

export default Info;