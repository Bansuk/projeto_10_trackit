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
    const [todayProgress, setTodayProgress] = useState(0);
    const [updateHabits, setUpdateHabits] = useState(false);

    return (
        <UserContext.Provider value={{ user, token, todayProgress }}>
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
                            <Route path="/hoje" exact>
                                <Today setTodayProgress={setTodayProgress} />
                            </Route>
                            <Route path="/habitos" exact>
                                <Habits
                                    setUpdateHabits={setUpdateHabits}
                                    updateHabits={updateHabits}
                                />
                            </Route>
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
