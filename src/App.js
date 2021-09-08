import Login from "./Components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Components/Login/Register";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
