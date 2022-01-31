import React from 'react';
import { NavLink }  from 'react-router-dom';

const Menu=()=>{
    return(
        <>
            <NavLink exact activeClassName="active_class" to="/" >About</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact" >Contact</NavLink>
            <NavLink exact activeClassName="active_class" to="/user/:fname/:lname" >User</NavLink>
        </>
    );
};

export default Menu;

