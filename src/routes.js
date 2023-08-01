import { BrowserRouter, Route, Router,Switch} from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import RoutesPrivate from "./RotaPrivada";


const Rout = () => (
    <BrowserRouter>
        <Switch>
            <RoutesPrivate exact path="/" component={Home}></RoutesPrivate>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
)
export default Rout