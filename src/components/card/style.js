import styled from 'styled-components';

export const Front = styled.div`
    background-image: url("bg-card-front.png");
    background-repeat: no-repeat;
    width: 27.8rem;
    height: 15.2rem;
    padding: 1.8rem;
    border-radius: 8px;


    .card-number{
        margin-top: 4rem;
        font-size: 26px;
        letter-spacing: 4px;
        color: #FFFFFF;
    }


    div{
        
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;

        p{
            margin-top: 0.5rem;
            font-size: 14px;
            letter-spacing: 2px;
            color: var(--light-grayish-violet);
        }
    }


    @media screen and (max-width: 375px) {
        position: relative;
        top: 4.8rem;
        right: 0.2rem;
        z-index: 3;
        background-size: 17rem;
        order: 2;
        width: 17rem;
        height: 9.1rem;
        padding: 1rem;


        div{
        
            margin-top: 0rem;

            p{
                margin-top: 1rem;
                font-size: 8px;
                letter-spacing: 2px;
                color: var(--light-grayish-violet);
            }
        }

        .card-number{
            margin-top: 1.5rem;
            font-size: 14px;
            letter-spacing: 4px;
            color: #FFFFFF;
        }
    }
`;

export const Back = styled.div`
    background-image: url("bg-card-back.png");
    background-repeat: no-repeat;
    margin: 1rem 6rem;
    width: 28rem;
    height: 16rem;

    p{
        padding-top: 6.8rem;
        padding-left: 22rem;
    } 

    @media screen and (max-width: 375px) {
        position: relative;
        bottom: 10.6rem;
        right: 2.5rem;
        z-index: 2;
        background-size: 17rem;
        order: 3;
        width: 17rem;
        height: 9.1rem;
        padding-top: 3rem;
        padding-left: 2rem;

        p{
            padding-top: 1.2rem;
            padding-left: 11.5rem;
            font-size: 10px;
            letter-spacing: 2px;
        }
    }
`;