import React from "react";
import decor5 from "../assets/decor5.png";
import AchievementList from "./AchievementList";

function Achievement(){
    return(
        <div className="flex flex-col items-center w-full bg-gray-950 pt-20">
            <div className="flex flex-row justify-center mb-10">
                <h1 className="text-purple-400 font-bold text-4xl">My Achievement</h1>
                <img src={decor5} alt="" className="w-10 h-10 ml-2"/>
            </div>
            <div className="flex justify-center w-4/5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <AchievementList 
                title="1st Winner of 180DC UGM Business Case Competition 2024"
                issuedBy="180 Degrees Consulting - Universitas Gadjah Mada (UGM)"
                date="Jul 2024"
                />  
                <AchievementList 
                title="4th Place in Computer Problem Solving Competition Pesta Sains IPB 2023"
                issuedBy="IPB University"
                date="Nov 2023"
                />
                <AchievementList 
                title="Finalist of OSN 2023 (Indonesia National Olympiad) in Informatics"
                issuedBy="Ministry of Education"
                date="Aug 2023"
                />
                <AchievementList 
                title="2nd Winner of Falcon Programming Competition UPH"
                issuedBy="Universitas Pelita Harapan"
                date="Okt 2023"
                />
                <AchievementList 
                title="Finalist of OSN 2022 (Indonesia National Olympiad) in Informatics"
                issuedBy="Ministry of Education"
                date="Okt 2022"
                />
                <AchievementList 
                title="Gold Medal in OSN (Indonesia National Olympiad) in Mathematics 2020"
                issuedBy="Ministry of Education"
                date="Apr 2020"
                />
                <AchievementList 
                title="Talenta Penggerak Pusat Prestasi Nasional"
                issuedBy="Pusat Prestasi Nasional"
                date="Apr 2020"
                />
                <AchievementList 
                title="Bronze Medal in OSN (Indonesia National Olympiad) in Mathematics 2017"
                issuedBy="Ministry of Education"
                date="Jul 2017"
                />
                <AchievementList 
                title="1st Place, Provincial Computer National Science Olympiad (OSN), Banten Region."
                issuedBy="Ministry of Education"
                date="Jul 2023"
                />

            </div>
        </div>
    );
}

export default Achievement;