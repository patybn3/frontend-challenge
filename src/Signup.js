import React, { useState, useEffect } from 'react';
import { validateForm, submitForm } from './helperFunctions';
import FormSubmit from './Form.js'

const Signup = props => {
  const [values, setBody] = useState(
    { firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: ''
    })
  const [error, setError] = useState()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setBody(values)
  }, [values])

  const handleChange = event => {
    event.persist()
    setBody(values => ({ ...values, [event.target.name] : event.target.value}))

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setError({
      error: validateForm(values)
    }, () => {

      if (Object.keys(error).length === 0 && submitted) {
        submitForm(values).then(data => {
          if (data.status === 200) {
            setSubmitted(true)
          }
        })
      }
    })
  }

  return (
    <div>
    <FormSubmit
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Signup
