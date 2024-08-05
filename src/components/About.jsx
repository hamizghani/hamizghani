import React from "react";
import decor3 from '../assets/decor3.png'

function About(){
    return (
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center bg-gray-950 md:pb-0 px-10 md:pl-16 overflow-hidden">
            <div className="flex flex-col mx-auto w-full md:w-3/5 mt-20 md:mt-0 px-8 md:px-0">
                <h1 className="text-purple-400 font-bold text-4xl mb-4 tracking-normal">About me</h1>
                <p className="text-white">Ghani is a freshman Computer Science student at the University of Indonesia, deeply interested in Data Science, Data Analysis, and Artificial Intelligence. He aims to solve many cases and help businesses grow by providing insights from data and offering AI-based solutions for companies and startups. <br></br><br></br>

    In addition to his academic pursuits, Ghani has designed a marketplace solution for waste management challenges faced by F&B companies, winning 1st place in a competition. Outside his studies, he actively participates in and wins various organizations and competitions. His vision is to create a positive impact by using tech-driven approaches to solve complex problems.</p>
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
