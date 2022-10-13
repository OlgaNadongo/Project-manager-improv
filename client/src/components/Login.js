import React from 'react'
// import ProjectList from './Project/ProjectList';



function Login() {
    return (
      <div className='banner'>
        <div className='loginwrapper'>
          <div className='formcontainer'>
                <form className='form' >
                    <div>
                      <label>Email</label>
                      <input className='input' type="email" name="email" />
                    </div>
                    <div>
                      <label>Password</label>
                      <input className='input' type="password" name="password" />
                    </div>

                    <div>
                      <button className='submitbtn'>Log In</button>
                   </div>
                </form>
            </div>
        </div>
           
           {/* <ProjectList/> */}
      </div>
    );
  }

export default Login