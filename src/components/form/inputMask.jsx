import { Container } from "./style";
import { forwardRef, useState } from "react";

import { IMaskInput } from 'react-imask';

function InputMask({ name, label, error = null, setValue, showMessageError, ...rest }, ref) {

    const handleAccept = value => {
        setValue(`${name}`, value);
    };

    return (

        <Container {...rest} error={error}>
            {!!label && <label htmlFor={name}>{label}</label>}

            <IMaskInput
                id={name}
                name={name}
                radix="."
                ref={ref}
                onAccept={handleAccept}
                {...rest}
            />

            {showMessageError && !!error && (
                <span>
                    {error.message}
                </span>
            )}
        </Container>
    )

}

export default forwardRef(InputMask);