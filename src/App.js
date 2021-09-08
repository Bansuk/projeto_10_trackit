import Login from "./Components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/Login/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
