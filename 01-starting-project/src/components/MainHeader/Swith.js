import React from "react";
import AuthContext from "../../store/auth-context";
import './Swith.css'
import { useContext } from 'react';

function Swith () {
    const context = useContext(AuthContext)
   
return (
    <label className="switch">
    <input type="checkbox" onClick={() => context.setState((prevState) => !prevState)}/>
    <span className="slider"></span>
    </label>
)
}

export default Swith;



