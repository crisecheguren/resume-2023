import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50%;

`;

export const StyledLogo = styled(Logo)`
    width: 40vh;
    height: 35vh;
    fill: ${({ theme }) => theme.primaryDark};
    transition: fill 0.3s linear;
    &:hover {
        fill: ${({ theme }) => theme.primaryHover};
    }
`;
