import React from 'react';
import { Link } from 'react-router-dom';


const index = () => {
    return (
        <div>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
        
                </li>
                <li>
                    <Link to="/tutorial">MyTut</Link>
                </li>
            </ul>
        </div>
    );
};

export default index;