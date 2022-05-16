import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque rem eaque tenetur laboriosam odio officiis assumenda ipsam soluta qui harum magni nemo ea, repellendus alias libero! Mollitia, veniam sint.</p>
    <div className="flex items-center">
      
    <div className="avatar">
  <div className="rounded-full ring ring-primary">
    <img src={review.img} />
  </div>
</div>
      <div className='pl-4'>
          <h4 className="text-xl">
              {review.name}
          </h4>
          <p>{review.location}</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;