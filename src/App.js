import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./globalStyles";
import Login from "./Components/LoginAndSignUp/Login";
import SignUp from "./Components/LoginAndSignUp/SignUp";
import Header from "./Components/HeaderAndFooter/Header";
import UserContext from "./Contexts/UserContext";
import Footer from "./Components/HeaderAndFooter/Footer";
import Habits from "./Components/Habits/Habits";
import History from "./Components/Pages/History/History";
import Today from "./Components/Pages/History/Today/Today";

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
                        <GlobalStyle />
                        <Switch>
                            <Route path="/hoje" exact component={Today} />
                            <Route path="/habitos" exact component={Habits} />
                            <Route
                                path="/historico"
                                exact
                                component={History}
                            />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
