import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "./Style";

const Register = () => {
    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="foto" />
            </Form>
            <Button>Cadastrar</Button>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    );
};

export default Register;
