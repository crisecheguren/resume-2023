import { StyledGroup } from './form-text-area.styles';

const FormTextArea = ({ label, ...otherProps }) => {
    return (
        <StyledGroup>
            <textarea className='form-text-area' {...otherProps}/>
            {label && ( 
                <label 
                    className={`${ 
                        otherProps.value.length ? 'shrink' : '' 
                    } form-text-area-label`}>
                        {label}
                </label> 
            )}
            
        </StyledGroup>
    );
}

export default FormTextArea;