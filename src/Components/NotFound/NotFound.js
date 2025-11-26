import React from 'react';
import notPageImg from '../../images/paradise_404.gif'
import './NotFound.css'
import { Nav } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <div className='notFound'><h3>404 Not Found</h3></div>
            <div className="homeButton">
                <Nav.Link href="/home">Go To Home</Nav.Link>
            </div>
        </div>
    );
};

export default NotFound;