import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    .form-group {
        width:100%;
        margin-bottom: 2rem;
    }

    button[type="submit"] {
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

    button[type="submit"]:hover {
        background: transparent;
        color: ${({ theme }) => theme.primaryDark};
        border: 2px solid ${({ theme }) => theme.primaryDark};
    }
`;