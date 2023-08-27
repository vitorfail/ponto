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
    const [ dados, setdados] = useState([])
    useEffect( ()=>{
        const iniciar = async() => {
            Axios.post("api/home").then( res =>{
            console.log(res.data.result.funcionarios)
              if(res.data.result.status === "ok"){
                settotal(res.data.result.total)
                settrabalhando(res.data.result.trabalhando)
                setalmoco(res.data.result.almoco)
                setdados(res.data.result.funcionarios)
              }
              else{
                console.log(res.data)
              }  
            }).catch( error => {
                console.log(error)
            })
    
        }
        iniciar()
        }, [])
    function status(s){
        if(s === "hora_saida_almoco"){
            return "Almoçando"
        }
        if(s === "horaEntrada" || s ==="hora_entrada_almoco"){
            return "Trabalhando"
        }
        if(s === "horaSaida" || s === null){
            return "Saiu"
        }
    }
    return(
        <div className="tudo">
            <Lateral></Lateral>
            <Conteudo>
                <Cards content={[total,trabalhando,almoco]}></Cards>
                <div className="funcionarios">
                {dados.map((item, index) => (
                        <div key={index} className="func">
                            <p>{item.user}</p>
                            <p className="status">
                                <div className={status(item.status)}></div>
                                {status(item.status)}
                            </p>
                        </div>
                    ))}
                </div>
            </Conteudo>

        </div>
    )
}