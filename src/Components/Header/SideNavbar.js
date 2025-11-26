import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SideNavbar.css'

const SideNavbar = () => {
    return (
    //    <div class="sidebar">
    //             <a class="active" href="#home">Home</a>
    //                   <a href="#news">News</a>
    //         <a href="#contact">Contact</a>
    //          <a href="#about">About</a>
    //             </div>
<div class="nav-bar">
    <h2>All Links Here</h2>
    <a href="/onlineSubmission">Online Submission</a>
    <a href="#">Journal Of Science</a>
    <a href="#">Journal Of Life & Earth Sciences</a>
    <a href="#">Journal Of Arts</a>
    <a href="#">Journal Of Social Science</a>
    <a href="#">Journal Of Business Studies</a>
  </div>

    );
};

export default SideNavbar;