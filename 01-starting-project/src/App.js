import React, { useState } from 'react';
import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Swith from './components/MainHeader/Swith';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [state, setState] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{
        state: state,
        setState: setState,
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler}}>
      <MainHeader  />
      <Swith/>
      <main style={{backgroundColor: !state ? '': 'gray', height: "800px"}}>
     
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
     
    </React.Fragment>
  );
}

export default App;
