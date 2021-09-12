import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button } from "./Style";
import { sendSignInInfo } from "../../Services/Trackit";
import Loader from "react-loader-spinner";
import logo from "../../Assets/logo.png";

const Login = ({ setToken, setUser }) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);

    const signIn = e => {
        e.preventDefault();

        const body = {
            email,
            password,
        };

        setIsEnabled(false);
        sendSignInInfo(body)
            .then(res => {
                setToken(res.data.token);
                setUser(res.data);
                history.push("/hoje");
            })
            .catch(err => {
                alert("Usuário ou senha incorretos!");
                setIsEnabled(true);
            });
    };

    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form onSubmit={signIn} isEnabled={isEnabled}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={!isEnabled}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={!isEnabled}
                    required
                />
                <Button
                    type="submit"
                    isEnabled={isEnabled}
                    disabled={!isEnabled}
                >
                    {isEnabled ? (
                        "Entrar"
                    ) : (
                        <Loader
                            type="ThreeDots"
                            color="#FFF"
                            height={45}
                            width={100}
                        />
                    )}
                </Button>
            </Form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    );
};

export default Login;
