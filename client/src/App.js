// import React from 'react';
// import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Homepage from './components/Homepage';
// // import Login from './components/Login';
// // import ProjectItem from './components/Project/ProjectItem';





// function App() {
//   return (
//     <div className="App">
//          {/* <Homepage />
//          <Login/>
//          <ProjectItem/> */}
//           <BrowserRouter>
         
//                 <Routes>
//                     <Route path="/" element={<Homepage/>} />
//                 </Routes>
            
//         </BrowserRouter>


        

//     </div>
//   );
// }

// export default App;


import React from "react";
import './App.css';
import Homepage from './components/Homepage';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login'
import TeammateList from "./components/Teammate/TeammateList";
import Signup from "./components/Signup";
import ProjectList from "./components/Project/ProjectList"


export default function App() {
  
  // const[projects, setProjects]=useState([])

  
  return (
   
      <div className="app">
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* <Route path="/projectlist" element={<ProjectList projects={projects} setProjects={setProjects}/> }/> */}
            <Route path="/projectlist" element={<ProjectList /> }/>
            <Route path="/teammatelist" element={<TeammateList/>}/>
        </Routes>
      </div>
  );
}
