import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";

function App() {
    const [token, setToken] = useState("");

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login setToken={setToken}></Login>
                </Route>
                <Route path="/cadastro" exact component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
