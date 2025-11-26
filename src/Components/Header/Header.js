
// // import { signOut } from 'firebase/auth';
// // import React from 'react';
// // import './Header.css'
// // import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import { Link } from 'react-router-dom';
// // import auth from './../../firebase.init';

// // import logo from './cuLogo.png';
// // import Banner from '../Home/Banner/Banner';

// // const Header = () => 
// // {
// //     const [user] = useAuthState(auth);

// //     const handleSignout =() =>
// //     {
// //         signOut(auth);
// //     }
    
// //     return (
// //         <div>
         
// //         <div className='header'>
// //                     <Navbar className='navColor' style={{backgroundColor:'#bb8a6cff'}} collapseOnSelect expand="lg" sticky='top'  variant="dark">
// //                 <Container>
                    
// //                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //                     <Navbar.Collapse id="responsive-navbar-nav">
// //                         <Nav className="ms-auto">
                           
// //                           <div class="cu-header">
                            
                            
// //                                 <div class="logo">
   
// //                                    <a target='blank' href='https://cu.ac.bd/'> <img src={logo} alt="University Logo"></img></a> 
// //                                 </div>

// //                                             <div class="title">
// //                                                  <a target='blank' href='https://cu.ac.bd/'>
// //                                                     <h1>University of Chittagong</h1>
// //                                                     <h2>চট্টগ্রাম বিশ্ববিদ্যালয়</h2>
// //                                                 </a>
// //                                             </div>
// //                         </div>

// //                         </Nav>
// //                         <Nav>
// //                             {
// //                                 user && <>

                                                           
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Home</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/orders'>Archives</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Scope</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Submission GuideLines</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Call For Papers</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Editorial Board</Nav.Link>
// //                             <Nav.Link className='text-white' as={Link} to='/home'> Contact</Nav.Link>
                           
                            
// //                                 </>
// //                             }
// //                             {
// //                                 user ?
// //                                     <button className='btn btn-link text-white'style={{textDecoration: "none",textColor:'black'}} onClick={handleSignout}>sign out</button>
// //                                 :
// //                                 <Nav.Link as={Link} to="login">
// //                                 Login
// //                             </Nav.Link>}
// //                         </Nav>
// //                     </Navbar.Collapse>
// //                 </Container>
// //             </Navbar>
            
// //         </div>
// //        <Banner></Banner>

// //         </div>
// //     );
// // };

// // export default Header;


// import { signOut } from 'firebase/auth';
// import React from 'react';
// import './Header.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from './../../firebase.init';
// import logo from './cuLogo.png';

// const Header = () => {
//   const [user] = useAuthState(auth);

//   const handleSignout = () => signOut(auth);

//   return (
//     <>
//       <div className="header">
//         <Navbar expand="lg" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <div className="cu-header">
//                 <div className="logo">
//                   <a target="_blank" rel="noreferrer" href="https://cu.ac.bd/">
//                     <img src={logo} alt="University Logo" />
//                   </a>
//                 </div>
//                 <div className="title">
//                   <a target="_blank" rel="noreferrer" href="https://cu.ac.bd/">
//                     <h1>University of Chittagong</h1>
//                     <h2>চট্টগ্রাম বিশ্ববিদ্যালয়</h2>
//                   </a>
//                 </div>
//               </div>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ms-auto align-items-center">
//                 {user && <>
//                   <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                   <Nav.Link as={Link} to="/archives">Archives</Nav.Link>
//                   <Nav.Link as={Link} to="/scope">Scope</Nav.Link>
//                   <Nav.Link as={Link} to="/submission">Submission GuideLines</Nav.Link>
//                   <Nav.Link as={Link} to="/callForPapers">Call For Papers</Nav.Link>
//                   <Nav.Link as={Link} to="/editorialBoard">Editorial Board</Nav.Link>
//                   <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                   <button
//                     className="btn btn-link"
//                     style={{ textDecoration: 'none', color: 'white' }}
//                     onClick={handleSignout}
//                   >
//                     Sign Out
//                   </button>
//                 </>}
//                 {!user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>

//       {/* Banner padding to avoid being hidden by fixed header */}
//       <div style={{ paddingTop: '100px' }}>
//         <Banner />
//       </div>
//     </>
//   );
// };

// export default Header;


import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './cuLogo.png';
import Banner from '../Home/Banner/Banner';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => signOut(auth);
  return (
    <div>
      
    <header className="header">
    
      <div className="header-content">
          {
                                user && <>
        <div className="logo-section">
          <a target="_blank" href="https://cu.ac.bd/">
                     <img src={logo} alt="University Logo" className="logo" />
                   </a>
          <div className="title-text">
            <a target="_blank"  href="https://cu.ac.bd/">
            <h1>University of Chittagong</h1>
                     <h2>চট্টগ্রাম বিশ্ববিদ্যালয়</h2>
                     </a>
          </div>
        </div>

         <input style={{visibility:'hidden'}}  type="checkbox" id="menu-toggle" className="menu-toggle checkbox" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>
        <nav className="nav-links">
          <a href="/home">Home</a>
          <a href="/archives">Archives</a>
          <a href="/scope">Scope</a>
          <a href="/submission">Submission Guidelines</a>
          <a href="/callForPapers">Call For Papers</a>
          <a href="/editorialBoard">Editorial Board</a>
          <a href="/contact">Contact</a>
        </nav>
        </>
                            }
                            {
                                                          user ?
                                      <button className='btn btn-link text-white 'style={{textDecoration: "none",textColor:'black'}} onClick={handleSignout}>sign out</button>
                                          :
                                    <a className='btn btn-link text-white' href='/login' to="login">
                                      Login
                                      </a>}
      </div>
      
    </header>
       
       
    <Banner></Banner>
    </div>
  );
};

export default Header;
