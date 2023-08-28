import Cards from "../../components/Cards/Cards"
import Conteudo from "../../components/Conteudo/Conteudo"
import Lateral from "../../components/Lateral/Lateral"
import "./Home.css"
import Axios from "../../Axios"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"
import  PopupOk  from "../../components/PopupOK/PopupOk"

export default function Home(){
    const [total, settotal] = useState("")
    const [isLoading, setLoading] = useState("fundo")
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
        setTimeout(() => {
            setLoading("fundo desaparecer")
        }, 1000);
        setTimeout(() => {
            setLoading("fundo sumir");
          }, 1000);

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
            <Loading>{isLoading}</Loading>
            <Lateral></Lateral>
            <Conteudo>
                <Cards content={[total,trabalhando,almoco]}></Cards>
                <div className="funcionarios">
                    <div className="container">
                        {dados.map((item, index) => (
                                <div key={index} className="func">
                                    <div className="alarme">
                                        <div className={status(item.status)}></div>
                                        <p>{item.user.toUpperCase()}</p>
                                    </div>
                                    <p className="status">
                                        {status(item.status)}
                                    </p>
                                </div>
                        ))}
                    </div>
                </div>
            </Conteudo>

        </div>
    )
}