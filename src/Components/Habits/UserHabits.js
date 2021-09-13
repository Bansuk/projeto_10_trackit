import {
    InnerHabitCard,
    Checkbox,
    CheckboxButton,
    HabitCard,
} from "./HabitsStyles";

const UserHabits = ({ name, days, weekDays }) => {
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
                    <img src="../../Assets/check.png" />
                </div>
            </InnerHabitCard>
        </HabitCard>
    );
};

export default UserHabits;
