import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';



const RenderInput = ({input, type, className, pattern, placeholder, required})=>{


    return(
        <FormControl>
            <TextField className={className} required={required}  {...input} pattern={pattern} type={type}  label={placeholder} variant="outlined" />
        </FormControl>
    )
};
export default RenderInput;