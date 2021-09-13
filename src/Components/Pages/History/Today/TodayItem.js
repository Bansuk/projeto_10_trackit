import { useContext } from "react";
import { checkHabit, uncheckHabit } from "../../../../Services/Trackit";
import {
    HabitCard,
    InnerHabitCard,
    HabitSequenceTracker,
    TodayCheckbox,
    HabitDaysTracker,
} from "../../../Habits/HabitsStyles";
import checkicon from "../../../../Assets/check.png";
import UserContext from "../../../../Contexts/UserContext";

const TodayItem = ({ habit }) => {
    const { token } = useContext(UserContext);

    const verifyHabit = () => {
        habit.done
            ? uncheckHabit(token, habit.id)
            : checkHabit(token, habit.id);
    };

    return (
        <HabitCard>
            <InnerHabitCard>
                <div>
                    <h1>{habit.name}</h1>
                    <HabitSequenceTracker>
                        <div>
                            Sequência atual:{" "}
                            <HabitDaysTracker isSelected={habit.done}>
                                {habit.currentSequence} dias
                            </HabitDaysTracker>
                        </div>
                        <div>
                            Seu recorde:{" "}
                            <HabitDaysTracker
                                isSelected={
                                    habit.done &&
                                    habit.currentSequence ===
                                        habit.highestSequence
                                }
                            >
                                {habit.highestSequence} dias
                            </HabitDaysTracker>
                        </div>
                    </HabitSequenceTracker>
                </div>
                <TodayCheckbox onClick={verifyHabit} isSelected={habit.done}>
                    <img src={checkicon} alt={"Ícone de marcação"} />
                </TodayCheckbox>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default TodayItem;
