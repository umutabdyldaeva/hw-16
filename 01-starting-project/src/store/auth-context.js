import React from "react";

const AuthContext = React.createContext({
    // isLoggedIn: true,
    // onLogout: () => {},
    state: false,
    setState: true
});

export default AuthContext;