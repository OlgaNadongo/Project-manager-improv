// import React,{useState} from 'react'
// // import ProjectList from './Project/ProjectList';



// function LoginForm({onLogin}) {
      

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     })
//       .then((r) => r.json())
//       .then((user) => onLogin(user));

//   }

//     return (
//       <div className='banner'>
//         <div className='loginwrapper'>
//           <div className='formcontainer'>
//                 <form className='form' onSubmit={handleSubmit}  >
//                     <div>
//                       <label>Email</label>
//                       <input className='input' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div>
//                       <label>Password</label>
//                       <input className='input' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//                     </div>

//                     <div>
//                       <button className='submitbtn'>Log In</button>
//                    </div>
//                 </form>
//             </div>
//         </div>
           
//            {/* <ProjectList/> */}
//       </div>
//     );
//   }

// export default LoginForm



import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import ProjectList from './Project/ProjectList';


   

function LoginForm({user,setUser}) {
      

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  // const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch(" http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => r.json())
       
      .then((user) =>{
        setUser(user)
        navigate("/projectlist")
      }) ;
      
  }



    return (
      <div className='banner'>
        <div className='loginwrapper'>
          <div className='formcontainer'>
                <form className='form' onSubmit={handleSubmit}  >
                    <div>
                      <label>Email</label>
                      <input className='input' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <label>Password</label>
                      <input className='input' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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

export default LoginForm


// Third Trial

// import React, { useState } from 'react';

//  function LoginForm({ setCurrentUser}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleLogin(event) {
//     event.preventDefault();
//     event.target.reset();

//     const user = { email, password };
//     // console.log(JSON.stringify( user))

//     fetch('http://localhost:3000/login', {
        
//        mode: 'no-cors',
//       method: 'POST',
//       headers: {
//         // Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify( user)
//     })
//       .then((r) => r.json())
//       .then((response) => {
//         localStorage.token = response.jwt;
//         setCurrentUser(response.user);
//       });
//   }



//     return (
//       <div>
//       <form onSubmit={handleLogin}>
//         <br />
//         <input
//           type="text"
//           name="email"
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <br />
//     </div>
//     );
//   }

// export default LoginForm

