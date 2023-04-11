import Image from 'next/image';
import { Container } from './style'
import Router from 'next/router'


export default function BoxSuccess(props) {

    const handlClickButton = () => {
        Router.reload(window.location.pathname)
        console.log("clickou")
    }

    return (
        <Container>
            <Image
                src="/icon-complete.svg"
                alt="Image success"
                width={64}
                height={64}
            />
            <p>THANK YOU!</p>
            <p>We've added your card details</p>
            <button onClick={handlClickButton}> Continue </button>
        </Container>
    )
}
