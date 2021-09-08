import logo from "../../Assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Button } from "./Style";
import { sendSignUpInfo } from "../../Services/trackit";
import { useState } from "react";

const SignUp = () => {
    const history = useHistory();
    const signUpInfo = {
        email: "",
        name: "",
        image: "",
        password: "",
    };
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    const updateSignUpInfo = () => {
        signUpInfo.email = email;
        signUpInfo.name = name;
        signUpInfo.image = image;
        signUpInfo.password = password;
        sendSignUpInfo(signUpInfo).then(
            response => {
                history.push("/");
            },
            error => {
                console.log(error);
            }
        );
    };

    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form>
            <Button onClick={updateSignUpInfo}>Cadastrar</Button>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    );
};

export default SignUp;
