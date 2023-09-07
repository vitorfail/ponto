import { useContext } from "react"
import "./PopupSenha.css"
import "../animation.css"
import Excluir from "../../images/exclamacao.png"
import { Authcontext } from "../Store/Context"
export default function PopupSenha(){
    const {popup_senha, setpopup_senha} = useContext(Authcontext)
    return(
        <div className={popup_senha}>
            <div className="menu">
                <img src={Excluir} width="50px" height="50px" alt="Excluir"/>
                <p>Sua senha pode estar errada. Ou o seu usuário não tem acesso permissão de acessar esse módulo</p>
                <div className="fechar">
                    <button onClick={() => setpopup_senha("popup_senha")}>OK</button>
                </div>
            </div>
        </div>
    )
}