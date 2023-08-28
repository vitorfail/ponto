import React, { useState } from "react";

export const Authcontext = React.createContext({}); 
export const StoreContext = (props) =>{
    const [popup_ok, setpopup_ok] = useState('popup_ok')
    const [load, setload] = useState('spin')

    return(
        <Authcontext.Provider value={{popup_ok, setpopup_ok, load, setload}}>
            {props.children}
        </Authcontext.Provider>
    )
}