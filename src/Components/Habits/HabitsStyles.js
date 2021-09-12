import styled from "styled-components";

const Form = styled.div`
    background-color: grey;
    border-radius: 5px;
    height: 180px;
    width: 100%;
    display: flex;
`;

const HabitCard = styled.div`
    background-color: grey;
    border-radius: 5px;
    height: 90px;
    width: 100%;
    display: flex;
`;

const Content = styled.div`
    width: 80vw;
    background-color: grey;
    margin: 15px auto 0 auto;
    height: 150px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    & input {
        background-color: ${props => (props.isEnabled ? "" : "#f2f2f2")};
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        height: 45px;
        width: 100%;
    }

    & input::placeholder {
        color: #dbdbdb;
        font-size: 20px;
        font-family: "Lexend Deca", sans-serif;
        padding-left: 10px;
    }
`;

const Checkbox = styled.div`
    margin-top: 10px;
`;

const CheckboxButton = styled.button`
    background-color: ${props => (props.isSelected ? "#cfcfcf" : "#fff")};
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    color: #dbdbdb;
    font-size: 20px;
    height: 30px;
    margin-right: 5px;
    width: 30px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 30px;
    width: 100%;
`;

const SaveButton = styled.button`
    background-color: #52b6ff;
    border-radius: 4.5px;
    color: #fff;
    width: 84px;
    height: 30px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
    margin-left: 10px;
    opacity: ${props => (props.isEnabled ? 1 : 0.7)};
`;

const CancelButton = styled.button`
    background-color: transparent;
    color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    font-size: 16px;
`;

export {
    Form,
    CancelButton,
    SaveButton,
    Buttons,
    Checkbox,
    CheckboxButton,
    Content,
    HabitCard,
};
