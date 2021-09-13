import {
    InnerHabitCard,
    Checkbox,
    CheckboxButton,
    HabitCard,
    InnerHabitCardDelete,
} from "./HabitsStyles";
import { deleteHabit } from "../../Services/Trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import garbage from "../../Assets/delete.png";

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
                <InnerHabitCardDelete>
                    <div>
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
                    </div>
                    <div>
                        {" "}
                        <img
                            onClick={confirmDeletion}
                            src={garbage}
                            alt={"Íconde de deltar hábito"}
                        />
                    </div>
                </InnerHabitCardDelete>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default UserHabits;
