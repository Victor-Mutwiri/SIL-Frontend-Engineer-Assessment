import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Retrieve the user data from local storage if it exists
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
      });
    
      useEffect(() => {
        // Save user data to local storage whenever it changes
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.removeItem('user');
        }
      }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
