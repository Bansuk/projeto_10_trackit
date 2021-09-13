import styled from "styled-components";

const Form = styled.div`
    background-color: grey;
    border-radius: 5px;
    height: 180px;
    width: 100%;
    display: flex;
`;

const TodaySubtitle = styled.div`
    color: ${props => (props.isDone ? "#8FC549" : "#bababa")};
    font-size: 18px;
    margin: -15px 0 30px 0;
`;

const HabitCard = styled.div`
    background-color: #fff;
    border-radius: 5px;
    height: 90px;
    margin-bottom: 10px;
    width: 100%;
`;

const InnerHabitCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto 0 auto;
    padding-top: 15px;
    width: 80vw;

    & h1 {
        color: #666;
        font-size: 20px;
        word-wrap: break-word;
    }
`;

const HabitSequenceTracker = styled.div`
    color: #666;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    margin-top: 7px;
`;

const HabitDaysTracker = styled.span`
    color: ${props => (props.isSelected ? "#8FC549" : "")};
`;

const TodayCheckbox = styled.div`
    align-items: center;
    background-color: ${props => (props.isSelected ? "#8FC549" : "#ebebeb")};
    border-radius: 5px;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    display: flex;
    height: 70px;
    justify-content: center;
    margin-left: 35px;
    width: 70px;

    & img {
        height: 28px;
        width: 35px;
    }
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

const Container = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 90vw;
    margin: 90px auto 0 auto;
`;

const Text = styled.div`
    margin-top: 30px;
    font-size: 18px;
    color: #666;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 20px;

    & button {
        background-color: #52b6ff;
        border-radius: 4.5px;
        width: 40px;
        height: 35px;
        color: #fff;
        font-size: 27px;
    }
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
    Container,
    HeaderContainer,
    Text,
    InnerHabitCard,
    HabitSequenceTracker,
    TodayCheckbox,
    TodaySubtitle,
    HabitDaysTracker,
};
