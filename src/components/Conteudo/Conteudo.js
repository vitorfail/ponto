import BarraPesquisa from "../BarraPesquisa/BarraPesquisa"
import "./Conteudo.css"

export default function Conteudo(props){
    return(
        <div className="conteudo">
            <BarraPesquisa></BarraPesquisa>
            {props.children}
        </div>
    )
}