import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className='banner'>
        <div className='loginwrapper'>
          <div className='formcontainer'>
                <form className='form' >
                   <div className='formfield'>
                      <label>Name</label>
                      <input className='input' type="name" name="name" />
                    </div>
                    
                    <div className='formfield'>
                      <label>Email</label>
                      <input className='input' type="email" name="email" />
                    </div>
                    <div className='formfield'>
                      <label>Password</label>
                      <input className='input' type="password" name="password" />
                    </div>
                    
                    <div className='formfield'>
                      <label>Confirm Password</label>
                      <input className='input' type="password" name="password" />
                    </div>
                    
                    <div>
                        <button className='submitbtn'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
           
      </div>
    </div>
  )
}

export default Signup