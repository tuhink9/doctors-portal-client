import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Harry',
            location: 'California',
            img: people1,
        },
        {
            _id: 2,
            name: 'Watson',
            location: 'Los Angels',
            img: people2,
        },
        {
            _id: 3,
            name: 'Shawn',
            location: 'New York',
            img: people3,
        }
    ]
    return (
        <section className='my-12 mb-12'>
            <div>
                <div>
                    <h4 className='text-xl text-primary'>Testimonials</h4>
                    <h2 className='text-3xl'>What our patient say</h2>
                </div>
                <div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;