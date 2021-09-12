import styled from "styled-components";
import { getUserHabits } from "../../Services/Trackit";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import HabitForm from "./HabitForm";
import UserHabits from "./UserHabits";

const Habits = () => {
    const token = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [isHabitFormActive, setIsHabitFormActive] = useState(false);

    useEffect(() => {
        getUserHabits(token.token)
            .then(res => {
                setHabits(res.data);
            })
            .catch(err => {
                alert("Erro ao obter dados do servidor. Tente novamente!");
            });
    }, [token.token]);

    return (
        <Container>
            <HeaderContainer>
                <span>Meus hábitos</span>
                <button onClick={() => setIsHabitFormActive(true)}>+</button>
            </HeaderContainer>
            {isHabitFormActive ? (
                <HabitForm setIsHabitFormActive={setIsHabitFormActive} />
            ) : (
                ""
            )}
            <div>
                {habits.map(habit => (
                    <UserHabits key={habit.id} />
                ))}
                {/* {
                    habits
                    ? ""
                    : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} */}
            </div>
        </Container>
    );
};

export default Habits;

const Container = styled.div`
    font-family: "Lexend Deca", sans-serif;
    width: 90vw;
    margin: 90px auto 0 auto;

    & div {
        margin-top: 30px;
        font-size: 18px;
        color: #666;
    }
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
