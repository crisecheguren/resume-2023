import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 calc(33.333% - 1rem);
    max-width: calc(33.333% - 1rem);
    width: 100%;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: .3s;
    border: 2px solid transparent;

    .bodyStyle {
        margin-bottom: 1rem;
    }
    
    .btnContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .btnStyle {
        border: none;
        outline: none;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        border-radius: 0.5rem;
        max-width: 120px;
        width: 100%;
        height: 2rem;
        margin-top: 1rem;
        transition: .3s;
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.primaryLight};

    }

    .btnStyle:hover {
        background: transparent;
        color: ${({ theme }) => theme.primaryDark};
        border: 2px solid ${({ theme }) => theme.primaryDark};
    }

    .imgStyle {
        height: 10rem;
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    &:hover {
        border: 2px solid ${({ theme }) => theme.primaryDark};
        transform: scale(1.02);
    }

    @media only screen and (max-width: 1170px) {
        flex: 0 0 calc(50% - 1rem);
        max-width: calc(50% - 1rem);
        padding: 0.5rem;
        margin: 0.5rem;
    }

    @media only screen and (max-width: 768px) {
        flex: 0 0 calc(100% - 1rem);
        max-width: calc(100% - 1rem);
        padding: 1rem;
        margin: 1rem;
    }

`;