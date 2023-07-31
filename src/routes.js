import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import RoutesPrivate from "./RotaPrivada";

const Rout = () => {
    <BrowserRouter>
        <Switch>
            <RoutesPrivate exact path="/" element={<Home></Home>}></RoutesPrivate>
            <Route exact path="/login" element={<Login></Login>}></Route>
        </Switch>
    </BrowserRouter>
}
export default Rout