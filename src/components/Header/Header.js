import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/'>Home</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Login</NavLink>
            <NavLink>Register</NavLink>
        </div>
    );
};

export default Header;