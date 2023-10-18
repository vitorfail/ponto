import { useContext } from "react"
import Ok from "../../images/correto.png"
import "./PopupOk.css"
import "../animation.css"
import { Authcontext } from "../Store/Context"
export default function PopupOk(){
    const {popup_ok, setpopup_ok} = useContext(Authcontext)
    return(
        <div className={popup_ok}>
            <div className="menu">
                <img alt="ok" src={Ok}></img>
                <h3>Cadastro feito com sucesso</h3>
                <button onClick={() => setpopup_ok("popup_ok")}>OK</button>
            </div>
        </div>
    )
}