import axios from "axios";

const SIGNUP_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

const sendSignUpInfo = data => {
    return axios.post(SIGNUP_URL, data);
};

export { sendSignUpInfo };
