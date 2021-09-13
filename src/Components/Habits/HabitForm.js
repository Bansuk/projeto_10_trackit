import {
    NewHabitForm,
    CancelButton,
    SaveButton,
    Buttons,
    Checkbox,
    CheckboxButton,
    InnerNewHabitForm,
} from "./HabitsStyles";
import { useState } from "react";
import { setUserHabit } from "../../Services/Trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import Loader from "react-loader-spinner";
import Day from "./Day";

const HabitForm = ({ setIsHabitFormActive, weekDays }) => {
    const token = useContext(UserContext);
    const [name, setName] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);
    const days = [];

    const selectDay = day => {
        if (days.includes(day)) {
            const index = days.indexOf(day);
            days.splice(index, 1);
        } else {
            days.push(day);
            days.sort();
        }
    };

    const saveHabit = () => {
        const body = {
            name,
            days,
        };
        setIsEnabled(false);
        setUserHabit(token.token, body)
            .then(res => {
                setName("");
                days.splice(0, days.length);
                setIsEnabled(true);
                setIsHabitFormActive(false);
            })
            .catch(err => {
                alert("Erro ao criar hábito! Tente novamente.");
                setIsEnabled(true);
            });
    };

    return (
        <NewHabitForm>
            <InnerNewHabitForm isEnabled={isEnabled}>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={!isEnabled}
                ></input>
                <Checkbox>
                    {weekDays.map((weekDay, index) => (
                        <Day
                            selectDay={selectDay}
                            weekDay={weekDay}
                            index={index}
                            isEnabled={isEnabled}
                        />
                    ))}
                </Checkbox>
                <Buttons>
                    <CancelButton
                        onClick={() => setIsHabitFormActive(false)}
                        disabled={!isEnabled}
                    >
                        Cancelar
                    </CancelButton>
                    <SaveButton
                        onClick={saveHabit}
                        isEnabled={isEnabled}
                        disabled={!isEnabled}
                    >
                        {isEnabled ? (
                            "Salvar"
                        ) : (
                            <Loader
                                type="ThreeDots"
                                color="#FFF"
                                height={30}
                                width={70}
                            />
                        )}
                    </SaveButton>
                </Buttons>
            </InnerNewHabitForm>
        </NewHabitForm>
    );
};

export default HabitForm;
