import React from 'react'

const TeammateItem = ({id,name,email,deleteATeammate}) => {
    
  

  function handleDelete(id){
   
    
      fetch(`http://localhost:4000/teammates/${id}`,{
        method:'DELETE'
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        deleteATeammate(id)
    })
  }

  return (
    <div className='teamitemholder'>
      
      <div className='teamitemholderwithin'>
        <div className='nameitem'>
              <h4>{name}</h4>
          </div>
          <div className='emailitem'>
              <h4>{email}</h4>
          </div>
      </div>
          <div>
              <button className='deleteteamitem' onClick={()=>handleDelete(id)}><span></span>Remove</button>
          </div>
      
        
    </div>
  )
}

export default TeammateItem