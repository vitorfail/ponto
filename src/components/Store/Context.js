import React, { useState } from "react";

export const Authcontext = React.createContext({}); 
export const StoreContext = (props) =>{
    const [popup_ok, setpopup_ok] = useState('popup_ok')
    const [popup_banco, setpopup_banco] = useState('popup_banco')
    const [load, setload] = useState('spin')

    return(
        <Authcontext.Provider value={{popup_ok, setpopup_ok, load, setload, popup_banco, setpopup_banco}}>
            {props.children}
        </Authcontext.Provider>
    )
}