import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: "Lexend Deca", sans-serif;
    justify-content: center;
    margin-top: 68px;

    img {
        width: 180px;
        height: 180px;
    }

    a {
        color: #52b6ff;
        font-size: 14px;
        margin-top: 36px;
    }
`;

const Form = styled.form`
    display: inherit;
    justify-content: inherit;
    flex-direction: inherit;
    margin-top: 33px;

    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        margin-bottom: 5px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
    }

    input::placeholder {
        color: #dbdbdb;
        font-size: 20px;
        font-family: "Lexend Deca", sans-serif;
    }
`;

const Button = styled.button`
    background-color: #52b6ff;
    border-radius: 4.64px;
    color: #fff;
    font-size: 21px;
    height: 45px;
    width: 303px;
    font-family: inherit;
`;

export { Container, Form, Button };
