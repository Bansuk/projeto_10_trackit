import { getUserHabits } from "../../Services/Trackit";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import HabitForm from "./HabitForm";
import UserHabits from "./UserHabits";
import { Container, HeaderContainer, Text } from "./HabitsStyles.js";

const Habits = ({ setUpdateHabits, updateHabits }) => {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [isHabitFormActive, setIsHabitFormActive] = useState(false);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    useEffect(() => {
        setUpdateHabits(false);
        getUserHabits(token)
            .then(res => {
                setHabits(res.data);
            })
            .catch(err => {
                alert("Erro ao obter dados do servidor. Tente novamente!");
            });
    }, [setUpdateHabits, updateHabits, token, setHabits]);

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
                    setHabits={setHabits}
                    setUpdateHabits={setUpdateHabits}
                />
            ) : (
                ""
            )}
            <Text>
                {habits.length !== 0
                    ? habits.map(({ id, name, days }) => (
                          <UserHabits
                              key={id}
                              id={id}
                              name={name}
                              days={days}
                              weekDays={weekDays}
                              setHabits={setHabits}
                              setUpdateHabits={setUpdateHabits}
                          />
                      ))
                    : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
            </Text>
        </Container>
    );
};

export default Habits;
