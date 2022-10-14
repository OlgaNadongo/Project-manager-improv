import React from 'react'
import { useEffect } from 'react';
import ProjectItem from "../Project/ProjectItem"
import { useState } from 'react';
import NewProjectForm from './NewProjectForm';



const ProjectList = () => {

    const[projects, setProjects]=useState([])

    useEffect(() => {
       
        fetch("/projects")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            setProjects(data )
          } 
        );
      }, []);


      // add a delete capability
      function deleteAProject(id){
        setProjects(projects.filter(project=>project.id !==id))
    }
   
    // add a addition capability
    function addAProject(newProject){
      setProjects([...projects,newProject])
    }

      

  return (
    <div className='projectbanner'>
             
        <div className='projectholder'>

          <div className='projectholderform'>
             <NewProjectForm   addAProject={addAProject}/>
          </div>
             
               <ol>
                      {
                            projects?.map((project,index)=>
                            <li className='projectlist' key={index}>
                                <ProjectItem  key={index} id={project.id} title={project.title} teammates={project.teammates} deleteAProject={deleteAProject}/>
                            </li>
                            )
                      }
                </ol> 
          </div>      
    </div>
  )
}

export default ProjectList