import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Mainpage.css"
import Footer from './Footer';
import './main.css'
const Mainpage = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const toggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <div>

      <div className="LOGIN container mx-auto h-[70vh] mt-[5%]">
        <div className='mt-14'>
          <h1>Welcome to Digital Netbanking</h1>
          <p>Manage your finances easily with our online banking services.</p>
        </div>

        <div className="cta flex flex-col items-center gap-3 mt-17">
          <NavLink to="/Login"><button type="submit " className='btn w-[300px] rounded-xl bg-gray-400 hover:bg-gray-500 '>Login</button></NavLink>
          <NavLink to="/CreatePage"><button type="submit " className='btn w-[300px] rounded-xl bg-gray-400 hover:bg-gray-500 '>Sign up</button></NavLink>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;