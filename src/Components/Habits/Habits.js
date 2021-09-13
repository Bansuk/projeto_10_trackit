import { getUserHabits } from "../../Services/Trackit";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import HabitForm from "./HabitForm";
import UserHabits from "./UserHabits";
import { Container, HeaderContainer, Text } from "./HabitsStyles.js";

const Habits = () => {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [isHabitFormActive, setIsHabitFormActive] = useState(false);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    useEffect(() => {
        getUserHabits(token)
            .then(res => {
                setHabits(res.data);
            })
            .catch(err => {
                alert("Erro ao obter dados do servidor. Tente novamente!");
            });
    }, [token]);

    return (
        <Container>
            <HeaderContainer>
                <span>Meus hábitos</span>
                <button onClick={() => setIsHabitFormActive(true)}>+</button>
            </HeaderContainer>
            {isHabitFormActive ? (
                <HabitForm
                    setIsHabitFormActive={setIsHabitFormActive}
                    weekDays={weekDays}
                />
            ) : (
                ""
            )}
            <Text>
                {habits.length !== 0
                    ? habits.map(({ id, name, days }) => (
                          <UserHabits
                              key={id}
                              name={name}
                              days={days}
                              weekDays={weekDays}
                          />
                      ))
                    : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
            </Text>
        </Container>
    );
};

export default Habits;
