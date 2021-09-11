import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useHistory } from "react-router";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const Footer = () => {
    const history = useHistory();

    const redirectUser = to => {
        switch (to) {
            case "/habitos":
                history.push(to);
                break;
            case "/hoje":
                history.push(to);
                break;
            case "/historico":
                history.push(to);
                break;
            default:
                history.push("/hoje");
                break;
        }
    };

    return (
        <Container>
            <Button onClick={() => redirectUser("/habitos")}>Hábitos</Button>
            <ProgressButton onClick={() => redirectUser("/hoje")}>
                <CircularProgressbar
                    value={0}
                    text={"Hoje"}
                    styles={buildStyles({
                        textSize: "18px",
                        textColor: "#f88",
                        trailColor: "#52B6FF",
                        backgroundColor: "red",
                        pathColor: `rgba(1, 152, 199, 10)`,
                    })}
                />
            </ProgressButton>
            <Button onClick={() => redirectUser("/historico")}>
                Histórico
            </Button>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    align-items: center;
    background-color: #fff;
    bottom: 0;
    display: flex;
    font-family: "Lexend Deca", sans-serif;
    height: 70px;
    justify-content: space-evenly;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
`;

const Button = styled.button`
    background-color: transparent;
    color: #52b6ff;
    font-size: 18px;
`;

const ProgressButton = styled.button`
    background-color: red;
    font-family: inherit;
    margin-bottom: 35px;
    position: relative;
    width: 100px;
`;
