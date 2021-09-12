import axios from "axios";

const SIGNUP_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

const SIGNIN_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

const HABITS_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

const sendSignUpInfo = body => {
    return axios.post(SIGNUP_URL, body);
};

const sendSignInInfo = body => {
    return axios.post(SIGNIN_URL, body);
};

const getUserHabits = token => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return axios.get(HABITS_URL, config);
};

const setUserHabit = (token, body) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return axios.post(HABITS_URL, body, config);
};

export { sendSignUpInfo, sendSignInInfo, getUserHabits, setUserHabit };
