import logo from "../../Assets/logo.png";
import { Container, Form, Button } from "./HomeStyle";

const Home = () => {
    return (
        <Container>
            <img src={logo} alt={"Logo da TrackIt"} />
            <Form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
            </Form>
            <Button>Entrar</Button>
            <a href="#">Não tem uma conta? Cadastre-se!</a>
        </Container>
    );
};

export default Home;
