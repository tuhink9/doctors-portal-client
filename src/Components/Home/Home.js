import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Group from '../Group/Group';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Info from './Info';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appoinment></Appoinment>
            <Testimonials></Testimonials>
            <Group></Group>
            <Footer></Footer>
        </div>
    );
};

export default Home;