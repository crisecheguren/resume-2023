import styled from "styled-components";

const shrinkLabel = `
    top: -16px; 
    font-size: 12px; 
    color: ${({ theme }) => theme.primaryDark}; 
`;

export const StyledGroup = styled.div`



    position: relative;
    margin: 35px 0;
    .form-text-area {
        background: none;
        background-color: white;
        color: ${({ theme }) => theme.primaryDark};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 8px;
        border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
        margin: 25px 0;
        min-height: 150px;
        resize: vertical;
        &:focus {
            outline: none;
        }
        &:focus ~ .form-text-area-label {
            ${shrinkLabel}
            
        }
    }
    input[type='password'] {
        letter-spacing: 0.3em;
    }
    .form-text-area-label {
        color: ${({ theme }) => theme.primaryDark};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
        &.shrink {
            ${shrinkLabel}
            
        }
    }
`;