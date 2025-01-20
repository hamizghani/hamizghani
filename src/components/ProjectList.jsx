import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectList(props) {
  return (
    <div className="bg-gray-800 rounded-xl w-3/4">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-r-none"
            src={props.src}
            alt="Project"
          />
        </div>
        <div className="p-4 md:w-1/2">
          <div className="uppercase text-white font-semibold text-xl">{props.title}</div>
          <p className="mt-0 text-green-300 text-normal">Role: {props.role}</p>
          <p className='mt-4 text-gray-400 text-sm'>{props.desc}</p>
          <div className="mt-6 flex flex-col lg:flex lg:flex-row w-full gap-2">
            <a href={props.linkweb} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full lg:w-1/2 flex items-center justify-center">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
              Visit Site
            </a>
            <a href={props.linkgit} target="_blank" rel="noopener noreferrer" className="bg-gray-950 text-white px-4 py-2 rounded-md w-full lg:w-1/2 flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;