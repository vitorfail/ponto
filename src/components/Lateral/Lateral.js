import Remover from "../../Exit"
import "./Lateral.css"
import {useHistory} from "react-router-dom"
import Home from "../../images/home.png"
import Cad from "../../images/cad.png"
import Exit from "../../images/exit.png"

export default  function Lateral(){
    const history = useHistory()

    function sair(){
        Remover()
        history.push("/login")
        window.location.reload()

    }
    return(
        <div className="lateral">
            <div className="logo">TOQUE DE OURO</div>
            <div className="items">
                <a><img src={Home}/>Home</a>
                <a onClick={() => history.push("/cadastro")}><img src={Cad}/>Cadastro</a>
                <a onClick={() => sair()}><img src={Exit}/>Sair</a>
            </div>
        </div>
    )
}