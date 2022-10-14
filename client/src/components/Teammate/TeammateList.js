import React from 'react'
import { useState,useEffect } from 'react'
import TeammateItem from './TeammateItem'
import NewTeammateForm from './NewTeammateForm'

const TeammateList = ({team,id}) => {
  
      const[teammates,setTeammates]=useState(team)
      const[showForm,setShowForm]=useState(false)

      console.log(teammates)

      // useEffect(() => {
       
      //   fetch("/teammates")
      //     .then((r) => r.json())
      //     .then((data) => {
      //       console.log(data)
      //       setTeammates(data )
      //     } 
      //   );
      // }, []);

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
                  <p key={index}><TeammateItem   key={index} id={teammate.id} name={teammate.name} email={teammate.email} deleteATeammate={deleteATeammate}/></p>
               )
            }
        </div>
        <button className='showhideteam' onClick={()=>setShowForm(!showForm)} ><span></span>Person</button>

                {
                  showForm?<p>{<NewTeammateForm id={id} addATeammate={addATeammate} />}</p>:null
                }
        
    </div>
  )
}

export default TeammateList