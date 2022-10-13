import React,{useState} from 'react'
import TeammateList from '../Teammate/TeammateList'

const ProjectItem = ({id,title,deleteAProject}) => {

  const[showteam,setShowteam]=useState(false)

  //add delete function
  function handleDelete(id){
    // console.log("deleted")
      fetch(`http://localhost:4000/projects/${id}`,{
        method:'DELETE'
      })
      .then(response=>response.json())
      .then(data=>{
        // console.log(data)
        deleteAProject(id)})
      .catch(error=>console.log(error))
    }

  return (

    <div className='projectitemholder'> 
        
        <div >
            <div className='titlewrapper'>
                <h3 className='title'>project title:{title}</h3>
            </div>

            <div className='buttonholder'>
                <button className='deleteproject' onClick={()=>handleDelete(id)}><span></span>Delete</button>
            {/* </div>

            <div  className='buttonholder'> */}
              <button className='showhideteam' onClick={()=>setShowteam(!showteam)} ><span></span>{showteam? "Hide":"Team"}</button>
            </div>
            </div>
            <div>
                {
                  showteam?<h4>{<TeammateList/>}</h4>:null
                }
            
        </div>
    </div>
  );
}

export default ProjectItem