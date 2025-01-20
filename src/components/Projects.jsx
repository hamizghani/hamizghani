import React from 'react';
import ProjectList from './ProjectList';
import decor7 from '../assets/decor7.png';
import csui from "../assets/csui2024-web.jpg";
import chiefx from "../assets/chiefx-web.jpg";
import masteruniv from "../assets/masteruniv-web.jpg";
import seasalon from "../assets/seasalon-web.jpg";

const Projects = () => {
    return (
        <div className='flex flex-col items-center bg-gray-950 px-10 py-20'>
            <div className="flex flex-row justify-center mb-10">
                <h1 className="text-purple-400 font-bold text-4xl">Projects</h1>
                <img src={decor7} alt="" className="w-10 h-10 ml-2"/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <ProjectList 
                    src={csui}
                    title="CS UI 2024 Website" 
                    desc="A website built for the Computer Science class of 2024 at the University of Indonesia, designed to provide information and resources for batch 2024 students."
                    linkweb="https://csui24.vercel.app/"
                    linkgit="https://github.com/CSUI24/csui24-web"
                    role="Project Manager"
                />
                <ProjectList 
                    src={seasalon} 
                    title="Sea Salon" 
                    desc="An innovative platform that connects beauty professionals with clients, offering a seamless booking experience and showcasing various salon services and products."
                    linkweb="https://sea-salon-eight-iota.vercel.app/"
                    linkgit="https://github.com/hamizghani/sea-salon"
                    role="Software Engineer"
                />
                <ProjectList 
                    src={chiefx} 
                    title="Chief X" 
                    desc="A dynamic clothing brand created for Labschool Rawamangun Entrepreneur Day, featuring a stylish website built with pure HTML, CSS, and JavaScript."
                    linkweb="https://chief-x.vercel.app/"
                    linkgit="https://github.com/hamizghani/chief"
                    role="Software Engineer"
                />
                <ProjectList 
                    src={masteruniv} 
                    title="Masteruniv" 
                    desc="An educational platform designed to help students prepare for the UTBK exams, offering comprehensive study materials and resources to ensure success."
                    linkweb="www.masteruniv.com"
                    linkgit="https://github.com/hamizghani/masteruniv"
                    role="Software Engineer"
                />
            </div>
        </div>
    );
};

export default Projects;