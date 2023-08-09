import Cards from "../../components/Cards/Cards"
import Conteudo from "../../components/Conteudo/Conteudo"
import Lateral from "../../components/Lateral/Lateral"
import "./Home.css"
import Axios from "../../Axios"
import { useEffect, useState } from "react"

export default function Home(){
    const [total, settotal] = useState("")
    const [trabalhando, settrabalhando] = useState("")
    const [almoco, setalmoco] = useState("")
    function iniciar(){
        Axios.post("api/home").then( res =>{
          if(res.data.result.status == "ok"){
            settotal(res.data.result.total)
            settrabalhando(res.data.result.trabalhando)
            setalmoco(res.data.result.almoco)
          }
          else{
            console.log(res.data)
          }  
        }).catch( error => {
            console.log(error)
        })

    }
    useEffect(()=>{
        iniciar()
    }, [])
    return(
        <div className="tudo">
            <Lateral></Lateral>
            <Conteudo>
                <Cards content={[total,trabalhando,almoco]}></Cards>
            </Conteudo>

        </div>
    )
}