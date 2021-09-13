import { getUserHabits } from "../../Services/Trackit";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import HabitForm from "./HabitForm";
import UserHabits from "./UserHabits";
import { Container, HeaderContainer, Text } from "./HabitsStyles.js";

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
            <Text>
                {habits.map(habit => (
                    <UserHabits key={habit.id} />
                ))}
                {/* {
                    habits
                    ? ""
                    : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} */}
            </Text>
        </Container>
    );
};

export default Habits;
