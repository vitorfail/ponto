import React from "react";
import Rout from "./routes";
import PopupOk  from "./components/PopupOK/PopupOk";
import PopupBanco from "./components/PopupBanco/PopupBanco";
import PopupInternet from "./components/PopupInternet/PopupInternet";
import Loader from "./components/Loader/Loader";
import PopupSenha from "./components/PopupSenha/PopupSenha";
function App(){
    return(
        <div>
            <Loader></Loader>
            <PopupSenha></PopupSenha>
            <PopupOk></PopupOk>
            <PopupBanco></PopupBanco>
            <PopupInternet></PopupInternet>
            <Rout/>
        </div>
    )
} 
export default App;