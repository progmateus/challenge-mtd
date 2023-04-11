import styled from 'styled-components';

export const Container = styled.div`

    padding-top: 7rem;
    width: 19rem;
    text-align: center;
    
    p:nth-child(2){
        color: var(--very-dark-violet);
        font-weight: 600;
        letter-spacing: 4px;
        font-size: 24px;
        margin-top: 2rem;
    }

    p:nth-child(3){
        color: var(--very-dark-violet);
        font-weight: 600;
        font-size: 14px;
        opacity: 0.7;
        margin-top: 0.5rem;
    }

    button{
        margin: 2rem 0;
        width: 100%;
        height: 2.5rem;
        background-color: var(--very-dark-violet);
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 8px;
        border: none;

        :hover{
            cursor: pointer;
        }
    }


    @media screen and (max-width: 375px) {
        padding-top: 0rem;
        width: 20rem;
        position: relative;
        bottom: 3rem;
    }





`;