import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Group = () => {
    return (
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-12" style={{
    background: `url(${appointment})`
}}>
  <div className="max-w-md w-full space-y-8">
    <div>
        <h3 className="text-xl text-center text-primary">Contact Us</h3>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Stay Connected With Us</h2>
    </div>
    <form className="mt-8" action="#">
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" placeholder="Email address" className="input input-bordered input-info w-full my-4" />
        </div>
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" placeholder="Password" className="input input-bordered input-info w-full my-4" />
        </div>
        <div>
        <textarea className="textarea textarea-info w-full my-4" placeholder="Comment"></textarea>
        </div>
      <div>
      <button className="btn btn-primary w-full">Button</button>
      </div>

    </form>
  </div>
</div>

    );
};

export default Group;