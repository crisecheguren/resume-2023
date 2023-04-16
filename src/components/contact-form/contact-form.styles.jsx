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
        color: #C8C8D0;
        border-radius: 0.5rem;
        text-transform: uppercase;
        width: 100%;
        height: 2rem;
        margin-top: 1rem;
        transition: .3s;
        cursor: pointer;
        border: 2px solid #C8C8D0;
    }

    button[type="submit"]:hover {
        background: #C8C8D0;
        color: ${({ theme }) => theme.primaryDark};
        border: 2px solid ${({ theme }) => theme.primaryDark};
    }
`;