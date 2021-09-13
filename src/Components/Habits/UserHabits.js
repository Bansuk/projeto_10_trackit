import {
    InnerHabitCard,
    Checkbox,
    CheckboxButton,
    HabitCard,
} from "./HabitsStyles";
import { deleteHabit } from "../../Services/Trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

const UserHabits = ({ id, name, days, weekDays, setUpdateHabits }) => {
    const { token } = useContext(UserContext);

    const confirmDeletion = () => {
        if (
            window.confirm(`Vocễ tem certeza que quer deletar o item ${name}?`)
        ) {
            deleteHabit(token, id);
            setUpdateHabits(true);
        }
    };
    return (
        <HabitCard>
            <InnerHabitCard isUserHabits={true}>
                <h1>{name}</h1>
                <Checkbox>
                    {weekDays.map((weekDay, index) => (
                        <CheckboxButton
                            key={index}
                            isSelected={days.includes(index)}
                        >
                            {weekDay}
                        </CheckboxButton>
                    ))}
                </Checkbox>
                <div>
                    {" "}
                    <img
                        onClick={confirmDeletion}
                        src="../../Assets/check.png"
                    />
                </div>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default UserHabits;
