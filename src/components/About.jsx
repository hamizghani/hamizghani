import React from "react";
import decor3 from '../assets/decor3.png'

function About(){
    return (
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center bg-gray-950 md:pb-0 px-10 md:pl-16 overflow-hidden">
            <div className="flex flex-col mx-auto w-full md:w-3/5 mt-20 md:mt-0 px-8 md:px-0">
                <h1 className="text-purple-400 font-bold text-4xl mb-4 tracking-normal">About me</h1>
                <p className="text-white">Hi! I’m a Computer Science freshman at the University of Indonesia, passionate about leveraging technology to create solutions for real-world challenges. With a strong interest in the intersection of Data Science and Business, I’m eager to deepen my expertise in these areas to deliver impactful, results-oriented outcomes. Beyond academics, I actively participate in organizations and competitions to broaden my skills and insights. I am always eager to contribute and make a meaningful impact on society, with the goal of inspiring others by sharing my journey—don’t hesitate to reach out, and let’s collaborate to create something great!</p>
            </div>
            <div className="overflow-hidden w-full md:w-96 mt-20 hidden md:flex md:-mr-60">
                <img src={decor3} alt="" className='w-full' />
            </div>
            <div>
            </div>
        </div>
    );
}

export default About;
