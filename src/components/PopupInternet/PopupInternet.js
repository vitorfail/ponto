import { useContext } from "react"
import "./PopupInternet.css"
import "../animation.css"
import { Authcontext } from "../Store/Context"
export default function PopupInternet(){
    const {popup_banco, setpopup_banco} = useContext(Authcontext)
    return(
        <div className={popup_banco}>
            <div className="menu">
                <div className="fechar">
                    <p>Não foi possível se conectar a internet. Verifique sua internet e tente deonovo.</p>
                    <button onClick={() => setpopup_banco("popup_banco")}>OK</button>
                </div>
            </div>
        </div>
    )
}