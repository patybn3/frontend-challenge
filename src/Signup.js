import React from 'react';
import FormSubmit from './Form.js'
import { useForm } from "react-hook-form";

const Signup = () => {

  const { register, handleSubmit, reset, errors } = useForm()
  const onSubmit = (data, event) => {
    event.target.reset()
    console.log(JSON.stringify(data))

  }

  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  }

  return (
    <div>
    <FormSubmit
    register={register}
    handleSubmit={handleSubmit}
    errors={errors}
    onSubmit={onSubmit}
    reset={reset}
    initialValue={initialValue}
    />
    </div>
  )
}

export default Signup
