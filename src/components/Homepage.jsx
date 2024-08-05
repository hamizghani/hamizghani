import React from 'react';
import profilePic from '../assets/profilepic.jpg';
import hiPic from '../assets/hiPic.png';
import decor1 from '../assets/decor1.png';
import decor2 from '../assets/decor2.png';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
        <div className='flex flex-row justify-between w-full overflow-hidden'>
            <div className="hidden md:flex w-1/4 -ml-10">
                <img src={decor1} alt="" className='max-h-screen max-w-96 -ml-20' />
            </div>
            <div className="mx-auto">
                <div>
                    <img src={profilePic} alt="profile pic" className="w-40 h-40 rounded-full mx-auto border-8 border-slate-800 -mb-6"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className="flex flex-row h-16">
                        <img src={hiPic} alt="Hi!" className='w-16 h-16'/>
                        <h1 className='font-semibold text-2xl text-gray-300 self-end -ml-7 -mb-2'>my name is..</h1>
                    </div>
                    <h1 className="text-blue-400 text-5xl font-bold tracking-wide">Hamiz Ghani</h1>
                </div>
            </div>
            <div className="hidden md:flex w-1/4 -mr-10">
                <img src={decor2} alt="" className='max-h-screen max-w-96 -mr-20 -mt-5' />
            </div>
        </div>
    </div>
  );
}

export default Homepage;
