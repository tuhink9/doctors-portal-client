import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id:"1",
            name:"Fluoride",
            img:fluoride,
            description:"Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F (also written [F] ), whose salts are typically white or colorless."
        },
        {
            _id:"2",
            name:"Cavity",
            img:cavity,
            description:"Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes."
        },
        {
            _id:"3",
            name:"Whitening",
            img:whitening,
            description:"The Best Teeth Whitening Products, According to Dentists. The Glo Science Teeth Whitening Device will help brighten your smile"
        }
    ]
    return (
        <div>
            <div className='text-center my-5 mb-12'>
                <h3 className='text-center text-primary text-xl'>Our Services</h3>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className="hero my bg-white mb-12">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Services;