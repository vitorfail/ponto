import { useContext, useState } from "react"
import "./PopupBanco.css"
import "../animation.css"
import Axios from "../../Axios"
import { Authcontext } from "../Store/Context"
export default function PopupBanco(){
    const {popup_banco, setpopup_banco, setload, func} = useContext(Authcontext)
    const [ ano, setano] = useState(0)
    const [ mes, setmes] = useState(0)
    const [ horas, sethoras] = useState(0)
    const [ minutos, setminutos] = useState(0)
    const [ segundos, setsegundos] = useState(0)
    function pesquisa(){
        setload("spin show")
        Axios.post('api/banco', {mes:mes, ano:ano}).then(res =>{
            console.log(res.data)
            if(res.data.result.horas.length>0){
                if(res.data.result.status === "ok"){
                    var h = res.data.result.horas[0].diferenca_de_datas["hours"] !== undefined? res.data.result.horas[0].diferenca_de_datas.hours:'0'
                    var m = res.data.result.horas[0].diferenca_de_datas["minutes"] !==undefined? res.data.result.horas[0].diferenca_de_datas.minutes: '0'
                    var s = res.data.result.horas[0].diferenca_de_datas["seconds"]!== undefined? res.data.result.horas[0].diferenca_de_datas.seconds:'0' 
                    sethoras(h)
                    setminutos(m)
                    setsegundos(s)
                }    
            }
            setload("spin")
        })
        .catch(err => {
            console.log(err)
            setload("spin")
        })
    }
    return(
        <div className={popup_banco}>
            <div className="menu">
                <p className="titulo">Banco de Horas de {func}</p>
                <div className="horas">
                    <div className="pesquisa">
                        <select onChange={(e) => setano(e.target.value)} className="ano">
                            <option value={"TODOS"}>TODOS</option>
                            <option value={1999}>1999</option>
                            <option value={2000}>2000</option>
                            <option value={2001}>2001</option>
                            <option value={2002}>2002</option>
                            <option value={2003}>2003</option>
                            <option value={2004}>2004</option>
                            <option value={2005}>2005</option>
                            <option value={2006}>2006</option>
                            <option value={2007}>2007</option>
                            <option value={2009}>2009</option>
                            <option value={2010}>2010</option>
                            <option value={2011}>2011</option>
                            <option value={2012}>2012</option>
                            <option value={2013}>2013</option>
                            <option value={2014}>2014</option>
                            <option value={2015}>2015</option>
                            <option value={2016}>2016</option>
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>
                            <option value={2024}>2024</option>
                            <option value={2025}>2025</option>
                            <option value={2026}>2026</option>
                            <option value={2027}>2027</option>
                            <option value={2028}>2028</option>
                            <option value={2029}>2029</option>
                            <option value={2030}>2030</option>
                            <option value={2031}>2031</option>
                            <option value={2032}>2032</option>
                            <option value={2033}>2033</option>
                            <option value={2034}>2034</option>
                            <option value={2035}>2035</option>
                            <option value={2036}>2036</option>
                            <option value={2037}>2037</option>
                            <option value={2038}>2038</option>
                            <option value={2039}>2039</option>
                            <option value={2040}>2040</option>
                        </select>
                        <select onChange={(e) => setmes(e.target.value)} className="mes">
                            <option value={"TODOS"}>TODOS</option>
                            <option value={1}>JANEIRO</option>
                            <option value={2}>FEVEREIRO</option>
                            <option value={3}>MARÇO</option>
                            <option value={4}>ABRIL</option>
                            <option value={5}>MAIO</option>
                            <option value={6}>JUNHO</option>
                            <option value={7}>JULHO</option>
                            <option value={8}>AGOSTO</option>
                            <option value={9}>SETEMBRO</option>
                            <option value={10}>OUTUBRO</option>
                            <option value={11}>NOVEMBRO</option>
                            <option value={12}>DEZEMBRO</option>
                        </select>
                        <button onClick={() => pesquisa()}>PESQUISAR</button>
                    </div>
                    <p>{horas+" Horas, "+minutos+" Minutos, "+segundos+" Segundos"}</p>
                </div>
                <div className="fechar">
                    <button onClick={() => setpopup_banco("popup_banco")}>Fechar</button>
                </div>
            </div>
        </div>
    )
}