import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button } from "./Style";
import { sendSignUpInfo } from "../../Services/Trackit";
import Loader from "react-loader-spinner";
import logo from "../../Assets/logo.png";

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);

    const updateSignUpInfo = () => {
        const body = {
            email,
            name,
            image,
            password,
        };
        setIsEnabled(false);
        sendSignUpInfo(body)
            .then(res => {
                history.push("/");
            })
            .catch(err => {
                alert("");
                setIsEnabled(true);
            });
    };

    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form isEnabled={isEnabled}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={!isEnabled}
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={!isEnabled}
                />
                <input
                    type="text"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    disabled={!isEnabled}
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={!isEnabled}
                />
            </Form>
            <Button onClick={updateSignUpInfo} disabled={!isEnabled}>
                {isEnabled ? (
                    "Cadastrar"
                ) : (
                    <Loader
                        type="ThreeDots"
                        color="#FFF"
                        height={45}
                        width={100}
                    />
                )}
            </Button>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    );
};

export default SignUp;
