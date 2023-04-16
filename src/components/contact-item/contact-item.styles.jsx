import styled from "styled-components";

export const ItemStyles = styled.div`
    padding: 1rem;
    background-color: #9E9DAF;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
   
    .icon {
        color: ${({ theme }) => theme.primaryDark};
        background-color: ${({ theme }) => theme.secondaryDark};
        padding: .5rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        
    }
    svg {
        font-size: 2rem;
    }
`;