import React from "react";

function AchievementList(props){
    return(
        <div className="bg-gray-800 rounded-xl text-white p-3 shadow-sm">
            <h1 className="text-lg font-semibold mb-1 text-blue-300">{props.title}</h1>
            <h2 className="">Issued by {props.issuedBy} · {props.date}</h2>
        </div>
    );
}

export default AchievementList;