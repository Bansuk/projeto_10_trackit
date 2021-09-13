import dayjs from "dayjs";
import {
    Container,
    HeaderContainer,
    HabitCard,
    InnerHabitCard,
    HabitSequenceTracker,
    TodayCheckbox,
} from "../../../Habits/HabitsStyles";
import checkicon from "../../../../Assets/check.png";
import { getTodayHabits } from "../../../../Services/Trackit";
import UserContext from "../../../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";

const Today = () => {
    require("dayjs/locale/pt-br");
    dayjs.locale("pt-br");
    const today = dayjs().format("dddd, DD/MM");
    const token = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        getTodayHabits(token.token)
            .then(res => {
                setHabits(res.data);
            })
            .catch(err => {
                alert("Erro ao obter dados do servidor. Tente novamente!");
            });
    }, [token.token]);

    return (
        <Container>
            <HeaderContainer>{today}</HeaderContainer>
            {habits.map(habit => (
                <HabitCard>
                    <InnerHabitCard>
                        <div>
                            <h1>{habit.name}</h1>
                            <HabitSequenceTracker>
                                <span>
                                    Sequência atual: {habit.currentSequence}{" "}
                                    dias
                                </span>
                                <span>
                                    Seu recorde: {habit.highestSequence} dias
                                </span>
                            </HabitSequenceTracker>
                        </div>
                        <TodayCheckbox>
                            <img src={checkicon} alt={"Ícone de marcarção"} />
                        </TodayCheckbox>
                    </InnerHabitCard>
                </HabitCard>
            ))}
        </Container>
    );
};

export default Today;
