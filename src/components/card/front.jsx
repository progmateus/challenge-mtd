import Image from 'next/image'
import { Front } from './style'

export default function CardFront(props) {

    const {
        cardholder_name,
        cardholder_number,
        exp_date_mm,
        exp_date_yy
    } = props;

    const defaultValues = {
        cardholder_name: "Jane Applesed",
        cardholder_number: "0000 0000 0000 0000",
        exp_date_mm: "00",
        exp_date_yy: "00",
    }

    return (
        <Front>
            <Image
                src="/card-logo.svg"
                alt="Logo credit card"
                width={64}
                height={36}
            />

            <p className="card-number">{cardholder_number ? cardholder_number : defaultValues.cardholder_number}</p>

            <div>
                <p>{cardholder_name ? cardholder_name.toUpperCase() : defaultValues.cardholder_name.toUpperCase()}</p>

                <p>{`${exp_date_mm ? exp_date_mm : defaultValues.exp_date_mm}/${exp_date_yy ? exp_date_yy : defaultValues.exp_date_yy}`}</p>
            </div>
        </Front>
    )
}
