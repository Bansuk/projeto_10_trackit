import dayjs from "dayjs";
import {
    Container,
    HeaderContainer,
    TodaySubtitle,
} from "../../../Habits/HabitsStyles";
import { getTodayHabits } from "../../../../Services/Trackit";
import UserContext from "../../../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import TodayItem from "./TodayItem";

const Today = ({ setTodayProgress }) => {
    require("dayjs/locale/pt-br");
    dayjs.locale("pt-br");
    const today = dayjs().format("dddd, DD/MM");
    const token = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [numDoneHabits, setnumDoneHabits] = useState(0);

    useEffect(() => {
        getTodayHabits(token.token)
            .then(res => {
                setHabits(res.data);
                setnumDoneHabits(habits.filter(habit => habit.done).length);
                setTodayProgress(
                    parseInt((numDoneHabits / habits.length) * 100)
                );
            })
            .catch(err => {
                alert("Erro ao obter dados do servidor. Tente novamente!");
            });
    }, [token.token, habits, numDoneHabits, setTodayProgress]);

    return (
        <Container>
            <HeaderContainer>{today}</HeaderContainer>
            <TodaySubtitle isDone={numDoneHabits}>
                {numDoneHabits
                    ? `${parseInt(
                          (numDoneHabits / habits.length) * 100
                      )}% dos hábitos concluídos`
                    : "Nenhum hábito concluído ainda"}
            </TodaySubtitle>
            {habits.map(habit => (
                <TodayItem habit={habit} />
            ))}
        </Container>
    );
};

export default Today;
