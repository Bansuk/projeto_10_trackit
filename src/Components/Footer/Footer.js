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
                    value={50}
                    text={"Hoje"}
                    background
                    backgroundPadding={8}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        pathColor: "#fff",
                        textColor: "#fff",
                        textSize: "18px",
                        trailColor: "transparent",
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
    position: fixed;
    width: 100%;
    z-index: 1;
`;

const Button = styled.button`
    background-color: transparent;
    color: #52b6ff;
    font-size: 18px;
`;

const ProgressButton = styled.button`
    background-color: transparent;
    font-family: inherit;
    margin-bottom: 35px;
    position: relative;
    width: 100px;
`;
