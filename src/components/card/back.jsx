import { Back } from './style'

export default function CardBack(props) {
    const { cvc } = props;

    const defaultValues = {
        cvc: "000"
    }
    return (
        <Back>
            <div>
                <p>{cvc ? cvc : defaultValues.cvc}</p>
            </div>
        </Back>
    )
}
