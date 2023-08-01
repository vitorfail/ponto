import "./Cards.css"
import People from "../../images/people.png"
import Dinner from "../../images/dinner.png"
import Ferias from "../../images/ferias.png"
export default function Cards(){
    return(
        <div className="cards">
            <div className="card">
                <div className="info">
                    <p>28</p>
                    <h4>Funcionários</h4>
                </div>
                <img src={People} alt="people"></img>
            </div>
            <div className="card">
                <div className="info">
                    <p>5</p>
                    <h4>Em Almoço</h4>
                </div>
                <img src={Dinner} alt="people"></img>
            </div>
            <div className="card">
                <div className="info">
                    <p>12</p>
                    <h4>Férias</h4>
                </div>
                <img src={Ferias} alt="people"></img>
            </div>

        </div>
    )
}