import {
    Form,
    CancelButton,
    SaveButton,
    Buttons,
    Checkbox,
    CheckboxButton,
    Content,
} from "./HabitsStyles";
import { useRef, useState } from "react";
import { setUserHabit } from "../../Services/Trackit";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import Loader from "react-loader-spinner";

const HabitForm = ({ setIsHabitFormActive }) => {
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
        <Form>
            <Content>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={!isEnabled}
                ></input>
                <Checkbox>
                    <CheckboxButton
                        onClick={() => {
                            selectDay(0);
                        }}
                        disabled={!isEnabled}
                    >
                        D
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(1)}
                        disabled={!isEnabled}
                    >
                        S
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(2)}
                        disabled={!isEnabled}
                    >
                        T
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(3)}
                        disabled={!isEnabled}
                    >
                        Q
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(4)}
                        disabled={!isEnabled}
                    >
                        Q
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(5)}
                        disabled={!isEnabled}
                    >
                        S
                    </CheckboxButton>
                    <CheckboxButton
                        onClick={() => selectDay(6)}
                        disabled={!isEnabled}
                    >
                        S
                    </CheckboxButton>
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
            </Content>
        </Form>
    );
};

export default HabitForm;
