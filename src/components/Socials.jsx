import React from "react";
import instagramPic from "../assets/instagram.png";
import linkedinPic from "../assets/linkedin.png";
import gmailPic from "../assets/gmail.png";


function Socials(){
    return(
        <div className="flex flex-col items-center bg-gray-950 pb-20 pt-20">
            <h1 className="text-green-400 font-bold text-4xl tracking-normal mb-6">Connect with me!</h1>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                    <img src={instagramPic} alt="" className="w-6 h-6"/>
                    <h1 className="font-mono text-white hover:text-blue-300"><a href="https://www.instagram.com/hamizghaniiii">hamizghaniiii</a></h1>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={linkedinPic} alt="" className="w-6 h-6"/>
                    <h1 className="font-mono text-white mt-1 hover:text-blue-300"><a href="https://www.linkedin.com/in/muhammad-hamiz-ghani-ayusha-9a061928b/">hamizghaniiii</a></h1>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src={gmailPic} alt="" className="w-6 h-6"/>
                    <h1 className="font-mono text-white mt-1">hamizghaniiii.work@gmail.com</h1>
                </div>
            </div>
        </div>
    );
}

export default Socials;