
// import React from "react";
// import './App.css';
// import Homepage from './components/Homepage';
// import {Routes,Route} from "react-router-dom";
// import Login from './components/Login'
// import TeammateList from "./components/Teammate/TeammateList";
// import Signup from "./components/Signup";
// import ProjectList from "./components/Project/ProjectList"


// export default function App() {
  
//   // const[projects, setProjects]=useState([])
//   const [user, setUser] = useState(null);


  
//   return (
   
//       <div className="app">
//         <Routes>
//             <Route path="/" element={<Homepage/>} />
//             <Route path="/login" element={<Login/>}/>
//             <Route path="/signup" element={<Signup/>}/>
//             {/* <Route path="/projectlist" element={<ProjectList projects={projects} setProjects={setProjects}/> }/> */}
//             <Route path="/projectlist" element={<ProjectList /> }/>
//             <Route path="/teammatelist" element={<TeammateList/>}/>
//         </Routes>
//       </div>
//   );
// }



import React from "react";
import './App.css';
import Homepage from './components/Homepage';
import {Routes,Route} from "react-router-dom";
import LoginForm from './components/Login/LoginForm'
import TeammateList from "./components/Teammate/TeammateList";
import Signup from "./components/Signup";
import ProjectList from "./components/Project/ProjectList"
 import { useState } from "react";


export default function App() {
  
  // const[projects, setProjects]=useState([])
    
   const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;


  
  return (
   
      <div className="app">
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<LoginForm user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* <Route path="/projectlist" element={<ProjectList projects={projects} setProjects={setProjects}/> }/> */}
            <Route path="/projectlist" element={<ProjectList /> }/>
            <Route path="/teammatelist" element={<TeammateList/>}/>
        </Routes>
      </div>
  );
}


// Third Trial


// import React from "react";
// import './App.css';
// import Homepage from './components/Homepage';
// import {Routes,Route} from "react-router-dom";
// import LoginForm from './components/Login/LoginForm'
// import TeammateList from "./components/Teammate/TeammateList";
// import Signup from "./components/Signup";
// import ProjectList from "./components/Project/ProjectList"
//  import { useState,useEffect } from "react";
//  import {Navigate} from "react-router-dom";


// export default function App() {
  
//   // const[projects, setProjects]=useState([])
    
//   const [user, setUser] = useState({});
//    const [loggedIn, setLoggedIn] = useState(false);

//    function setCurrentUser(currentUser) {
//     setUser(currentUser);
//     setLoggedIn(true);
//   }

//   function logOut() {
//     setUser({});
//     setLoggedIn(false);
//     localStorage.token = '';
//   }

//   useEffect(() => {
//     const token = localStorage.token;
//     if (typeof token !== 'undefined' && token.length > 1
//       && token !== 'undefined'
//     ) {
//       fetch('http://localhost:3000/auto_login', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token }),
//       })
//         .then((r) => r.json())
//         .then((user) => setCurrentUser(user));
//     } else {
//       console.log('No token found, try logging in!');
//     }
//   }, []);

  
//   return (
   
//       <div className="app">
//         <Routes>
//             <Route path="/" element={<Homepage  logOut={logOut}/>} />
//             {/* <Route path="/login" element={<LoginForm setCurrentUser={setCurrentUser} user={user}/>}/> */}

//             <Route path="/login" element={loggedIn ? (
//               <Navigate to="/" />
//             ) : (
//               <LoginForm setCurrentUser={setCurrentUser } user={user} />
//             )} />
            
          

//             <Route path="/signup" element={<Signup/>}/>
//             {/* <Route path="/projectlist" element={<ProjectList projects={projects} setProjects={setProjects}/> }/> */}
//             <Route path="/projectlist" element={<ProjectList /> }/>
//             <Route path="/teammatelist" element={<TeammateList/>}/>
//         </Routes>
//       </div>
//   );
// }



