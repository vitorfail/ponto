import "./BarraPesquisa.css"
export default function BarraPesquisa(){
    return(
        <div className="barra-pesquisa">
            <div className="pesquisa">
                <select>
                    <option>Nome</option>
                    <option>Codigo</option>
                </select>
                <input></input>
                <div className="btn">Pesquisar</div>
            </div>
        </div>
    )
 }