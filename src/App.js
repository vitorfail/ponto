import React from "react";
import Rout from "./routes";
import PopupOk  from "./components/PopupOK/PopupOk";
import PopupBanco from "./components/PopupBanco/PopupBanco";
function App(){
    return(
        <div>
            <PopupOk></PopupOk>
            <PopupBanco></PopupBanco>
            <Rout/>
        </div>
    )
} 
export default App;