import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle/globalStyles";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Header from "./Components/Header/Header";
import UserContext from "./Contexts/UserContext";
import Footer from "./Components/Footer/Footer";
import Habits from "./Components/Habits/Habits";

function App() {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, token }}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login setToken={setToken} setUser={setUser}></Login>
                    </Route>
                    <Route path="/cadastro" exact component={SignUp} />
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/hoje" exact component={Habits} />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
