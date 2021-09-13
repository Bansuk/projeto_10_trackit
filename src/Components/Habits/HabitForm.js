import {
    NewHabitForm,
    CancelButton,
    SaveButton,
    Buttons,
    Checkbox,
    InnerNewHabitForm,
} from "./HabitsStyles";
import { useEffect, useState } from "react";
import { setUserHabit } from "../../Services/Trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import Loader from "react-loader-spinner";
import Day from "./Day";

const HabitForm = ({ setIsHabitFormActive, weekDays, setUpdateHabits }) => {
    const token = useContext(UserContext);
    const [name, setName] = useState("");
    const [isEnabled, setIsEnabled] = useState(true);
    const days = [];

    useEffect(() => {
        const json = JSON.stringify(window.localStorage.getItem("name"));
        const cleanJSON = JSON.parse(json);
        setName(cleanJSON);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("name", name);
    }, [name]);

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
        if (days.length === 0 || name === "") {
            alert("Por favor, preencha os campos!");
            return;
        }
        setIsEnabled(false);
        setUserHabit(token.token, body)
            .then(res => {
                setName("");
                days.splice(0, days.length);
                setIsEnabled(true);
                setIsHabitFormActive(false);
                setUpdateHabits(true);
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
                            key={index}
                            selectDay={selectDay}
                            weekDay={weekDay}
                            index={index}
                            isEnabled={isEnabled}
                        />
                    ))}
                </Checkbox>
                <Buttons>
                    <CancelButton
                        onClick={() => {
                            setIsHabitFormActive(false);
                        }}
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
