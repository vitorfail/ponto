import { BrowserRouter, Route, Router,Switch} from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import RoutesPrivate from "./RotaPrivada";
import Cadastro from "./page/Cadastro/Cadastro";


const Rout = () => (
    <BrowserRouter>
        <Switch>
            <RoutesPrivate exact path="/" component={Home}></RoutesPrivate>
            <RoutesPrivate exact path="/cadastro" component={Cadastro}></RoutesPrivate>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
)
export default Rout