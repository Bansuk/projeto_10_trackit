import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "./Style";

const Home = () => {
    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
            </Form>
            <Button>Entrar</Button>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    );
};

export default Home;
