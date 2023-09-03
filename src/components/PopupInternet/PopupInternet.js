import { useContext } from "react"
import "./PopupInternet.css"
import "../animation.css"
import Excluir from "../../images/exclamacao.png"
import { Authcontext } from "../Store/Context"
export default function PopupInternet(){
    const {popup_internet, setpopup_internet} = useContext(Authcontext)
    return(
        <div className={popup_internet}>
            <div className="menu">
                <img src={Excluir} width="50px" height="50px" alt="Excluir"/>
                <p>Não foi possível se conectar a internet. Verifique sua internet e tente deonovo.</p>
                <div className="fechar">
                    <button onClick={() => setpopup_internet("popup_internet")}>OK</button>
                </div>
            </div>
        </div>
    )
}