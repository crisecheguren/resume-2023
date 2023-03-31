import styled from "styled-components";
import MapImg from "../../assets/mapEdit.png";

export const StyledMap = styled.div`
    background: url(${MapImg}) no-repeat center center/cover;
    min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .mapCard {
        position: absolute;
        right: 52%;
        bottom:12%;
        padding: 2rem;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .mapCardHeading {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    .mapCardLink {
        display: inline-block;
        font-size: 1rem;
        margin-top: 2rem;
        text-decoration: underline;
        color: ${({ theme }) => theme.primaryLight};
    }
    
    @media only screen and (max-width: 1800px) {
        .mapCard {
            bottom: 9%;
            right: 50%;
        }
    @media only screen and (max-width: 1750px) {
        .mapCard {
            bottom: 9%;
            right: 50%;
        }
`;
