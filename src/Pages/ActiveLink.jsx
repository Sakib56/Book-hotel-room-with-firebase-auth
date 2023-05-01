import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive}) =>isActive?'text-orange-300':''}
         
        >
          {children}
        {/* other code */}
      </NavLink>
    );
};

export default ActiveLink;