import Cards from "../../components/Cards/Cards"
import Conteudo from "../../components/Conteudo/Conteudo"
import Lateral from "../../components/Lateral/Lateral"
import "./Home.css"
import Axios from "../../Axios"
import { useEffect } from "react"

export default function Home(){
    function iniciar(){
        Axios.post("/home").then( res =>{

        })

    }
    useEffect(()=>{
        iniciar()
    }, [])
    return(
        <div className="tudo">
            <Lateral></Lateral>
            <Conteudo>
                <Cards></Cards>
            </Conteudo>

        </div>
    )
}