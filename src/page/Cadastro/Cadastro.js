import Conteudo from "../../components/Conteudo/Conteudo"
import Lateral from "../../components/Lateral/Lateral"
import "./Cadastro.css"
import Axios from "../../Axios"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"
import { Authcontext } from "../../components/Store/Context"
import { useContext } from "react";
import Loader from "../../components/Loader/Loader"


export default function Cadastro(){
    const {setpopup_ok, setload} = useContext(Authcontext)
    const [isLoading, setLoading] = useState("fundo")
    const [user, setuser] = useState("")
    const [email, setemail] = useState("")
    const [nivel, setnivel] = useState(0)
    useEffect( ()=>{
        setTimeout(() => {
            setLoading("fundo desaparecer")
        }, 1000);
        setTimeout(() => {
            setLoading("fundo sumir");
          }, 1000);

        }, [])
    function cadastrar(){
        setload("spin show")
        Axios.post("api/cadastro", {user: String(user), email:email, nivel:nivel, senha:""})
        .then(res =>{
            console.log(res.data)
            if(res.data.result.status === "ok"){
                setload("spin")
                setpopup_ok("popup_ok show")
            }
        })
    }
    return(
        <div className="tudo">
            <Loader></Loader>
            <Loading>{isLoading}</Loading>
            <Lateral></Lateral>
            <Conteudo>
                <div className="cadastro">
                    <div className="cad">
                        <div className="info">
                            <p>Nome:</p>
                            <input onChange={(e) => setuser(e.target.value)}></input>
                        </div>
                        <div className="info">
                            <p>Email:</p>
                            <input onChange={(e) => setemail(e.target.value)}></input>
                        </div>
                        <div className="info">
                            <p>Nivel</p>
                            <select onChange={(e) => setnivel(parseInt(e.target.value))}>
                                <option value="1">1 Administrativo</option>
                                <option value="2">2 Operacional</option>
                            </select>
                        </div>
                        <div className="info">
                            <button onClick={() => cadastrar()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </Conteudo>

        </div>
    )
}