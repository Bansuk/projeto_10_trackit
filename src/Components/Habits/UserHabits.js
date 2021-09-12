import { Content, Checkbox, CheckboxButton, HabitCard } from "./HabitsStyles";

const UserHabits = () => {
    return (
        <HabitCard>
            <Content>
                <Checkbox>
                    <CheckboxButton disabled={true}>D</CheckboxButton>
                    <CheckboxButton disabled={true}>S</CheckboxButton>
                    <CheckboxButton disabled={true}>T</CheckboxButton>
                    <CheckboxButton disabled={true}>Q</CheckboxButton>
                    <CheckboxButton disabled={true}>Q</CheckboxButton>
                    <CheckboxButton disabled={true}>S</CheckboxButton>
                    <CheckboxButton disabled={true}>S</CheckboxButton>
                </Checkbox>
            </Content>
        </HabitCard>
    );
};

export default UserHabits;
