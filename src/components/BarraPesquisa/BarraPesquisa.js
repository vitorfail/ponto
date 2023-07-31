import "./BarraPesquisa.css"
export function BarraPesquisa(){
    return(
        <div className="barra-pesquisa">
            <input></input>
            <select>
                <option>Nome</option>
                <option>Codigo</option>
            </select>
            <div className="btn"></div>
        </div>
    )
 }