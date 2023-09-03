import React, { useState } from "react";

export const Authcontext = React.createContext({}); 
export const StoreContext = (props) =>{
    const [popup_ok, setpopup_ok] = useState('popup_ok')
    const [popup_banco, setpopup_banco] = useState('popup_banco')
    const [popup_internet, setpopup_internet] = useState('popup_internet')
    const [func, setfunc] = useState('')
    const [load, setload] = useState('spin')

    return(
        <Authcontext.Provider value={{popup_ok, setpopup_ok, load, setload, popup_banco, 
        setpopup_banco, popup_internet, setpopup_internet, func, setfunc}}>
            {props.children}
        </Authcontext.Provider>
    )
}