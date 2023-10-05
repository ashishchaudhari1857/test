import React from 'react';
import { useState } from 'react';
import GuestDetails from './GuestDetails';

function Guest() {
  const [toggel ,settoggel]=useState(false)
  return (
    <div className='bg-light text-center bg-light mt-2 rounded-lg p-3 shodow-xl' style={{ borderRadius: "14px" }}>
      <div className="mb-1 mt-1 fs-8 fw-bold">guests</div>
      <span className='block fs-8' onClick={()=>settoggel(!toggel)}>1 guest, 1 room</span>
     {toggel && <GuestDetails></GuestDetails>  }

    </div>
  );
}

export default Guest;
