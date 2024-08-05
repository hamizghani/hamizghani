import React from "react";
import ExperienceList from "./ExperienceList";
import decor4 from "../assets/decor4.png";
import decor6 from "../assets/decor6.png";

function Experience() {
    return (
        <div className="flex flex-col items-center bg-gray-950 grid-rows-2 px-10 md:pt-20">
            <div className="flex flex-row w-full justify-center items-center gap-2 mb-10 mt-8">
                <h1 className="text-purple-400 font-bold text-4xl tracking-normal">My Experiences</h1>
                <img src={decor6} alt="" className="w-16 h-16" />
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-center items-center lg:w-2/5 hidden lg:flex">
                    <img src={decor4} alt="" className="w-4/5" />
                </div>
                <div className="w-full lg:w-3/5 sm:w-4/5 flex flex-col">
                    <div className="flex flex-col gap-8 w-full items-center">
                        <ExperienceList
                            title="Competitive Programming Blogger"
                            companies="Kokocoder Group"
                            startDate="Okt 2023"
                            endDate="Nov 2023"
                            description="Develop and share insightful content on algorithms, data structures, and problem-solving techniques to help fellow programmers improve their skills."
                        />
                        <ExperienceList
                            title="Coach of Computer Olympiad Team"
                            companies="SMA Al-Azhar BSD"
                            startDate="Feb 2024"
                            endDate="Apr 2024"
                            description="Teaching for my Beloved School's Informatics Olympiad Team in accordance with the Indonesia NOI (National Olympiad of Informatics) syllabus."
                        />
                        <ExperienceList
                            title="Staff of Sponsorship"
                            companies="UI Innovation War"
                            startDate="Jul 2024"
                            endDate="present"
                            description="Secured partnerships and funding from various organizations as Staff of Sponsorship for UI Innovation War, enhancing the event's resources and overall impact."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
