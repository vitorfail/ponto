import React from "react";
import './Loader.scss'
import { Authcontext } from "../Store/Context";
import { useContext } from "react";
export default function Loader(){
    const {load} = useContext(Authcontext)
    return(
        <div className={load}>
            <div id="loading-bar-spinner" className="spinner" >
                <div className="spinner-icon"></div>
            </div>
        </div>
    )
}