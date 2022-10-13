import React,{useState} from 'react'

const NewTeammateForm = ({addATeammate}) => {

  const [teammateFormData, setTeammateFormData]=useState({name:"", email:""})

 
  function handleInputChange(event){
      setTeammateFormData({...teammateFormData,[event.target.name]:event.target.value})
  }

  function handleFormSubmit(event){

    // console.log(teammateFormData)
    event.preventDefault('')

    fetch('http://localhost:4000/teammates',{
      method:'POST',
      headers:{
        'Content-Type':'Application/json',
        'Accept':'Application/json'
      },
      body:JSON.stringify(teammateFormData)
    })
    .then(response=>response.json())
    .then(data=>{
         console.log('Succes:',data)  
        setTeammateFormData({name:"",email:""})
        addATeammate(data);
    })
    .catch(error=>console.log(error))

  }

  return (
    <div>
        
        <div className='teammateform'>
                <form className='form' >
                    <div>
                      <label>Name</label>
                      <input className='input' type="name" name="name" value={teammateFormData.name} onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label>Email</label>
                      <input className='input' type="email" name="email" value={teammateFormData.email} onChange={handleInputChange} />
                    </div>

                    <div>
                      <button className='addteammate' onClick={handleFormSubmit} >Add Teammate</button>
                   </div>

                   {/* <div>
                      
                       <input type="submit" className='addteammate'  value="Add" />  
                  </div>  */}

                </form>
            </div>
        
    </div>
  )
}

export default NewTeammateForm