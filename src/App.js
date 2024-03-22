import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './navbar';
import Create from './create';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import userContext from './context';
import Home from './home';
import Login from './Login';

function App() {
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Define setLoggedIn function

  const addUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <userContext.Provider value={{ users, setTotal, addUser, loggedIn, setLoggedIn }}> {/* Include loggedIn and setLoggedIn in the context value */}
      <HashRouter>
        <>
          <MyNavbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deposit' element={<Deposit total={total} setTotal={setTotal} />} />
            <Route path='/withdraw' element={<Withdraw total={total} setTotal={setTotal} />} />
            <Route path='/alldata' element={<AllData total={total} />} />
          </Routes>
        </>
      </HashRouter>
    </userContext.Provider>
  );
}

export default App;
