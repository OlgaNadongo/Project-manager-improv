import React from 'react'
import { useState,useEffect } from 'react'
import TeammateItem from './TeammateItem'
import NewTeammateForm from './NewTeammateForm'

const TeammateList = () => {
      const[teammates,setTeammates]=useState([])

      useEffect(() => {
       
        fetch("http://localhost:4000/teammates")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            setTeammates(data )
          } 
        );
      }, []);

      function addATeammate(newTeammate){
        setTeammates([...teammates,newTeammate])
      }

      function deleteATeammate(id){
        setTeammates(teammates.filter(teammate=>teammate.id !==id))
    }


  return (
    <div>
        
        <div>
            {
               teammates.map((teammate, index)=>
                  <p key={index}><TeammateItem   key={index} id={teammate.id} name={teammate.name} email={teammate.email}deleteATeammate={deleteATeammate}/></p>
               )
            }
        </div>
        
        <NewTeammateForm addATeammate={addATeammate} />
    </div>
  )
}

export default TeammateList