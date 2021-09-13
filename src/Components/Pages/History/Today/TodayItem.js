import {
    HabitCard,
    InnerHabitCard,
    HabitSequenceTracker,
    TodayCheckbox,
} from "../../../Habits/HabitsStyles";
import checkicon from "../../../../Assets/check.png";
import { checkHabit, uncheckHabit } from "../../../../Services/Trackit";
import UserContext from "../../../../Contexts/UserContext";
import { useContext } from "react";

const TodayItem = ({ habit }) => {
    const token = useContext(UserContext);

    const verifyHabit = () => {
        habit.done
            ? uncheckHabit(token.token, habit.id)
            : checkHabit(token.token, habit.id);
    };

    return (
        <HabitCard>
            <InnerHabitCard>
                <div>
                    <h1>{habit.name}</h1>
                    <HabitSequenceTracker isSelected={habit.done}>
                        <div>
                            Sequência atual:{" "}
                            <span>{habit.currentSequence} dias</span>
                        </div>
                        <div>Seu recorde: {habit.highestSequence} dias</div>
                    </HabitSequenceTracker>
                </div>
                <TodayCheckbox onClick={verifyHabit} isSelected={habit.done}>
                    <img src={checkicon} alt={"Ícone de marcarção"} />
                </TodayCheckbox>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default TodayItem;
