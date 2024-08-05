import React from "react";

function ExperienceList(props){
    return(
        <div className="w-4/5 text-white">
            <h1 className="font-mono font-bold text-xl text-green-300">{props.title}</h1>
            <h1 className="text-md font-semibold"><span className="text-green-400">@ </span>{props.companies} <span className="text-gray-400 font-mono italic ml-2">{props.startDate} - {props.endDate}</span> </h1>
            <p className="mt-2">{props.description}</p>
        </div>
    );
}

export default ExperienceList;