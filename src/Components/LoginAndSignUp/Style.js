import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: "Lexend Deca", sans-serif;
    justify-content: center;
    margin-top: 68px;

    & img {
        width: 180px;
        height: 180px;
    }

    & a {
        color: #52b6ff;
        font-size: 14px;
        margin-top: 36px;
    }
`;

const Form = styled.form`
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    margin-top: 33px;

    & input {
        background-color: ${props => (props.isEnabled ? "" : "#f2f2f2")};
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        height: 45px;
        margin-bottom: 5px;
        width: 303px;
    }

    & input::placeholder {
        color: #dbdbdb;
        font-size: 20px;
        font-family: "Lexend Deca", sans-serif;
    }
`;

const Button = styled.button`
    background-color: #52b6ff;
    border-radius: 4.64px;
    color: #fff;
    font-family: inherit;
    font-size: 21px;
    height: 45px;
    opacity: ${props => (props.isEnabled ? 1 : 0.7)};
    width: 303px;
`;

export { Container, Form, Button };
