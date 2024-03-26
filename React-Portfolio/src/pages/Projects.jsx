import React from 'react';
import ProjectItem from '../components/ProjectItem';
// import Img

function Projects() {
    return (
    <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
            <ProjectItem />
            <ProjectItem />
        </div>
    </div>
    ) 
}

export default Projects