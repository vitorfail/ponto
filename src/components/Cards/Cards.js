import "./Cards.css"
import People from "../../images/people.png"
import Dinner from "../../images/dinner.png"
import Work from "../../images/work.png"
export default function Cards(props){
    return(
        <div className="cards">
            <div className="card">
                <div className="info">
                    <p>{props.content[0]}</p>
                    <h4>Funcionários</h4>
                </div>
                <img src={People} alt="people"></img>
            </div>
            <div className="card">
                <div className="info">
                    <p>{props.content[1]}</p>
                    <h4>Trabalhando</h4>
                </div>
                <img src={Dinner} alt="people"></img>
            </div>
            <div className="card">
                <div className="info">
                    <p>{props.content[2]}</p>
                    <h4>Almoço</h4>
                </div>
                <img src={Work} alt="people"></img>
            </div>

        </div>
    )
}