import "./Conteudo.css"

export default function Conteudo(props){
    return(
        <div className="conteudo">
            {props.children}
        </div>
    )
}