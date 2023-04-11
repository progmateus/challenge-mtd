import { Container } from "./style";
import { forwardRef } from "react";

function Input({ name, label, error = null, showMessageError, ...rest }, ref) {

    return (

        <Container {...rest} error={error}>
            {!!label && <label htmlFor={name}>{label}</label>}

            <input
                name={name}
                id={name}
                {...rest}
                ref={ref}
            />

            {showMessageError && !!error && (
                <span>
                    {error.message}
                </span>
            )}
        </Container>
    )

}

export default forwardRef(Input);