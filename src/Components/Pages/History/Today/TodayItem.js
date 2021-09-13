import {
    HabitCard,
    InnerHabitCard,
    HabitSequenceTracker,
    TodayCheckbox,
} from "../../../Habits/HabitsStyles";
import checkicon from "../../../../Assets/check.png";
import { checkHabit, uncheckHabit } from "../../../../Services/Trackit";
import UserContext from "../../../../Contexts/UserContext";
import { useContext, useState } from "react";

const TodayItem = ({ habit }) => {
    const [isSelected, setIsSelected] = useState(false);
    const token = useContext(UserContext);

    const verifyHabit = () => {
        if (isSelected) {
            setIsSelected(false);
            uncheckHabit(token.token, habit.id);
        } else {
            setIsSelected(true);
            checkHabit(token.token, habit.id);
        }
    };

    return (
        <HabitCard>
            <InnerHabitCard>
                <div>
                    <h1>{habit.name}</h1>
                    <HabitSequenceTracker>
                        <span>
                            Sequência atual: {habit.currentSequence} dias
                        </span>
                        <span>Seu recorde: {habit.highestSequence} dias</span>
                    </HabitSequenceTracker>
                </div>
                <TodayCheckbox onClick={verifyHabit} isSelected={isSelected}>
                    <img src={checkicon} alt={"Ícone de marcarção"} />
                </TodayCheckbox>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default TodayItem;
