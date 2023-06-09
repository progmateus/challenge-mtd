import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";


import CardBack from '@/components/card/back';
import CardFront from '@/components/card/front';
import Input from '@/components/form/input';
import { Container, Form } from '@/styles'
import Head from 'next/head'
import { useState } from "react";
import InputMask from "@/components/form/inputMask";
import BoxSuccess from "@/components/boxSuccess";



const dataCardFormSchema = yup.object().shape({
  cardholder_name: yup.string().required("Can't be blank").min(3, "must be at least 3 characters"),
  cardholder_number: yup.string().required("Can't be blank"),
  exp_date_mm: yup.string().required("Can't be blank").matches(/^\d+$/, "Wrong format, numbers only").min(2, "must be 2 digits").max(2, "must be 2 digits"),
  exp_date_yy: yup.string().required("Can't be blank").matches(/^\d+$/, "Wrong format, numbers only").min(2, "must be 2 digits").max(2, "must be 2 digits"),
  cvc: yup.string().required("Can't be blank").matches(/^\d+$/, "Wrong format, numbers only").min(3, "must be 3 digits").max(3, "must be 3 digits")
})

export default function Home() {

  const { register, handleSubmit, setError, formState, watch, setValue } = useForm(({
    resolver: yupResolver(dataCardFormSchema)
  }));

  const [isSuccess, setIsSuccess] = useState(false)


  const handleSubmitForm = (values) => {
    setIsSuccess(true)
  }

  const { errors, isDirty } = formState;



  return (
    <>
      <Head>
        <title>Challenge MTD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

        <div>
          <CardFront
            cardholder_name={watch("cardholder_name")}
            cardholder_number={watch("cardholder_number")}
            exp_date_mm={watch("exp_date_mm")}
            exp_date_yy={watch("exp_date_yy")}
          />
          <CardBack
            cvc={watch("cvc")}
          />
        </div>

        {!isSuccess ? (
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
              name="cardholder_name"
              label="CARDHOLDER NAME"
              type="text"
              placeholder="e.g. Jane Appleseed"
              width="100%"
              height="2.5rem"
              showMessageError={true}
              {...register("cardholder_name")}
              error={errors.cardholder_name}



            />


            <InputMask
              label="CARD NUMBER"
              name="cardholder_number"
              placeholder='e.g. 1234 5678 9123 0000'
              error={errors.cardholder_number}
              showMessageError={true}
              {...register("cardholder_number")}
              setValue={setValue}
              mask="0000 0000 0000 0000"
              unmask={false}
              height="2.5rem"
              width="100%"

            />


            <div>
              <div>
                <label className="label_form_card" htmlFor="exp_date_mm">EXP. DATE (MM/YY)</label>

                <div>
                  <Input
                    name="exp_date_mm"
                    type="text"
                    placeholder="MM"
                    width="4rem"
                    height="2.5rem"
                    {...register("exp_date_mm")}
                    error={errors.exp_date_mm}
                  />

                  <Input
                    name="exp_date_yy"
                    type="text"
                    placeholder="YY"
                    width="4rem"
                    height="2.5rem"
                    {...register("exp_date_yy")}
                    error={errors.exp_date_yy}
                  />

                </div>
              </div>

              <div>
                <label className="label_form_card" htmlFor="cvc" >CVC</label>
                <Input
                  name="cvc"
                  type="text"
                  placeholder="e.g. 123"
                  width="100%"
                  height="2.5rem"
                  {...register("cvc")}
                  error={errors.cvc}
                />

              </div>

            </div>

            <div className="div_error_message">
              <span className="error_message">
                {errors.exp_date_mm?.message ? errors.exp_date_mm.message : errors.exp_date_yy?.message}
              </span>

              <span className="error_message">
                {errors.cvc?.message}
              </span>
            </div>

            <button type="submit"> Confirm </button>


          </Form>
        ) : (
          <BoxSuccess />
        )}





      </Container>
    </>
  )
}


export const getServerSideProps = (ctx) => {

  return {
    props: {
    }
  }
};
