import styled from 'styled-components';


export const Container = styled.div`
    label{
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 1.5px;
    }

        
    input{
        display: flex;
        margin-top: 5px;
        border: 1px solid var(--light-grayish-violet);
        font-weight: 600;
        font-size: 16px;
        border-radius: 8px;
        align-items: center;
        padding: 0 1rem;
        width: ${props => props.width};
        height: ${props => props.height}; 

        ${props => props.error && (`border: 1px solid #FF3E30;`)}

            ::placeholder {
                color: var(--light-grayish-violet);
                opacity: 1;
            }

            :focus{
                outline: none;
                padding: 0 1rem;
                border: double 1px transparent;
                border-radius: 8px;
                background-image: linear-gradient(white, white), 
                                    linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
                background-origin: border-box;
                background-clip: padding-box, border-box;
            }
        }



        span{
            color: var(--danger);
            padding: 1rem 0;
            font-size: 12px;
        }

        
`;
