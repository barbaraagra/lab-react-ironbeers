import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function navbar() {
    return (
        <div>
            <NavLink to='/' ><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="header" /></NavLink>
        </div>
    )
}

export default navbar