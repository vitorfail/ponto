import { useContext } from "react"
import Ok from "../../images/ok.png"
import "./PopupOk.css"
import { Authcontext } from "../Store/Context"
export default function PopupOk(){
    const {popup_ok, setpopup_ok} = useContext(Authcontext)
    return(
        <div className={popup_ok}>
            <div className="menu">
                <img src={Ok}></img>
                <p>Cadastro feito com sucesso</p>
                <button onClick={() => setpopup_ok("popup_ok")}>OK</button>
            </div>
        </div>
    )
}