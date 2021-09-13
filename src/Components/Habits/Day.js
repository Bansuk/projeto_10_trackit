import { useState } from "react/cjs/react.development";
import { CheckboxButton } from "./HabitsStyles";

const Day = ({ selectDay, weekDay, index, isEnabled }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <CheckboxButton
            onClick={() => {
                selectDay(index);
                isSelected ? setIsSelected(false) : setIsSelected(true);
            }}
            disabled={!isEnabled}
            isSelected={isSelected}
        >
            {weekDay}
        </CheckboxButton>
    );
};

export default Day;
