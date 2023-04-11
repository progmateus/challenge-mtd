import styled from 'styled-components';

export const Container = styled.main`
    min-height: 100vh;
    display: flex;
    background-image: url("bg-main-desktop.png");
    background-repeat: no-repeat;
    background-color: #ffffff;
    padding-top: 5rem;
    padding-left: 11rem;

    @media screen and (max-width: 375px) {
        display: block;
        background-image: url("bg-main-mobile.png");
        padding-top: 3rem;
        padding-left: 1.5rem;
    }

    @media (max-width: 700px) {
    }
  
`;


export const Form = styled.form`
    padding-top: 7rem;
    width: 19rem;

    form {
        & + form {
            margin-top: 1.2rem;
        }
    }

        > div:nth-child(3){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 1.2rem;

            > div:nth-child(1){
                margin-right: 1rem;

                > div{
                    display: flex;

                    input:first-child{
                        margin-right: 0.5rem;
                    }

                    form{
                        margin: 0;
                    }
                }
            }

            
        }

        .error_message{
                color: var(--danger);
                position: relative;
                top: 2px;
                font-size: 12px;
            }

        .div_error_message{
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            span:nth-child(2){
                margin-left: 0.5rem;
            }
        }


    .label_form_card{
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 1.5px;
    }

    button{
        margin: 1.5rem 0;
        width: 100%;
        height: 3rem;
        background-color: var(--very-dark-violet);
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 10px;
        border: none;

        :hover{
            cursor: pointer;
        }
    }

    @media screen and (max-width: 375px) {
        padding-top: 0rem;
        width: 20rem;
        position: relative;
        bottom: 4.5rem;
    }
`;