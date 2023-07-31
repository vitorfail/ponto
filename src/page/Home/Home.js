import Conteudo from "../../components/Conteudo/Conteudo"
import Lateral from "../../components/Lateral/Lateral"
import "./Home.css"

export default function Home(){
    return(
        <div className="tudo">
            <Lateral></Lateral>
            <Conteudo></Conteudo>

        </div>
    )
}