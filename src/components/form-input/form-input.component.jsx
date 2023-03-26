import { StyledGroup } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <StyledGroup>
            <input className='form-input' {...otherProps}/>
            {label && ( 
                <label 
                    className={`${ 
                        otherProps.value.length ? 'shrink' : '' 
                    } form-input-label`}>
                        {label}
                </label> 
            )}
            
        </StyledGroup>
    );
}

export default FormInput;