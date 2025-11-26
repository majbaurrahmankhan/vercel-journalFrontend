import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home/Home/Home';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
// import Detecttion from './Components/Classify/Detecttion';
import SideNavbar from './Components/Header/SideNavbar';
import Archives from './Components/Archives/Archives';
import Scope from './Components/Scope/Scope';
import Submission from './Components/Submission/Submission';
import CallForPapers from './Components/CallForPapers/CallForPapers';
import EditorialBoard from './Components/EditorialBoard/EditorialBoard';
import Contact from './Components/Contact/Contact';
import SubmissionForm from './Components/SubmissionForm/SubmissionForm';
import Profile from './Components/Login/Profile';
import Login from './Components/Login/Login/Login';
import { auth } from "./firebase"; 



function App() {
    const [refresh, setRefresh] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);
    auth.onAuthStateChanged((user) => {
    if (user && user.email === "majbaurkhan@gmail.com") {
      setAdminEmail(user.email);
    } else {
      setAdminEmail(null);
    }
  });


  return (
    <div className="App">
      <Header></Header>
      <div class='fullBodyParts'>
        <SideNavbar></SideNavbar>
        <div class='bodyParts'>
         <Routes>
                  <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


          <Route path="/onlineSubmission" element={
          <RequireAuth>
            <SubmissionForm onSubmitSuccess={() => setRefresh(!refresh)}/>
          </RequireAuth>
           }></Route>


        <Route path="/archives" element={<Archives refreshTrigger={refresh} adminEmail={adminEmail}/>}></Route>
        <Route path="/scope" element={<Scope></Scope>}></Route>
        <Route path="/submission" element={<Submission></Submission>}></Route>
        <Route path="/callForPapers" element={<CallForPapers></CallForPapers>}></Route>
        <Route path="/editorialBoard" element={<EditorialBoard></EditorialBoard>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

    <Route path='/userProfile' element={<Profile></Profile>}></Route>
        {/* <Route path='/detection' element={<Detecttion></Detecttion>}></Route> */}
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      {/* <LikeDislikeBtn></LikeDislikeBtn> */}
      </Routes>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
