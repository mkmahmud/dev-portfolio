import React, { useEffect, useState } from 'react';
import Project from '../../Components/Project/Project';
import useTitle from '../../Hooks/useTitle';

const Projects = () => {
    useTitle('Projects')

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        fetch('https://timothykroll.github.io/projects/projects.json')
         .then(res => res.json())
         .then(data => setProjects(data))
    },[])

    

    return (
        <div>
            <div className="project-title text-left py-24">
                <h2 className='text-4xl text-[#E84949]'>Projects</h2>
                <h1 className='text-5xl font-bold py-4'>Some highlights of my favorite projects I've done for <br /> forward thinking clients.</h1>
                <div className='mt-24 grid grid-cols-1 gap-4 md:grid-cols-2'>
                    {
                        projects?.map(project => <Project data={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;