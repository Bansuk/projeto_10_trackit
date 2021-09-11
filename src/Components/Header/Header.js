import { useContext } from "react";
import styled from "styled-components";
import logo from "../../Assets/TrackIt.png";
import UserContext from "../../Contexts/UserContext";

const Header = () => {
    const user = useContext(UserContext);

    return (
        <Container>
            <ImagesContainer>
                <img src={logo} alt="Logo da TrackIt" />
                <UserPicture src={user.image} alt="Foto de perfil do usuário" />
            </ImagesContainer>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    align-items: center;
    background-color: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    height: 70px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const ImagesContainer = styled.div`
    align-items: inherit;
    display: inherit;
    justify-content: space-between;
    width: 90vw;
`;

const UserPicture = styled.img`
    border-radius: 100px;
    height: 50px;
    width: 50px;
`;
