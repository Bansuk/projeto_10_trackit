import axios from "axios";

const SIGNUP_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

const SIGNIN_URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

const sendSignUpInfo = body => {
    return axios.post(SIGNUP_URL, body);
};

const sendSignInInfo = body => {
    return axios.post(SIGNIN_URL, body);
};

export { sendSignUpInfo, sendSignInInfo };
