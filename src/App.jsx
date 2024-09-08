import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Box } from '@mui/material';
// import MenuAppBar from './components/AppBar';
import StudentRegistration from './pages/StudentRegistration';
import TeacherRegistration from './pages/TeacherRegistration'
import Subjects from './pages/Subjects';
import Syllabus from './pages/Syllabus'
import LoginUser from './pages/LoginUser';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        
         <Navbar />
        <Sidebar /> 
      
        <Box component="main" sx={{ flexGrow: 1, p: 3  }}>
          <Routes>
          <Route path="/" element={<LoginUser/>}/>
            
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Syllabus" element={<Syllabus/>}/>
            <Route path="/Subjects" element={<Subjects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/TeacherRegistration" element={<TeacherRegistration/>}/>
            <Route path="/student-registration" element={<StudentRegistration/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;


// import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './components/Home'
// function App() {
//   return (
//     <>

//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Home/>}/>



//     </Routes>
//     </BrowserRouter>
    
    
    
//     </>
//   )
// }

// export default App