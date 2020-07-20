import React, { useState, useEffect } from 'react';
import { validateForm, submitForm } from './helperFunctions';
import Form from 'react-bootstrap/Form'
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
    if (!Object.keys(error).length && submitted) {
      submitForm(values)
      .then(data => {
        if (data.status === 200) {
          setSubmitted(true)
        }
      })
      props()
    }
  }, [])


  const handleChange = event => {
    event.persist()
    setBody(values => ({ ...values, [event.target.name] : event.target.value}))

  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    setError(validateForm(values))
    setSubmitted(true)

    if (!Object.keys(error).length && submitted) {
      submitForm(values)
      .then(data => {
        if (data.status === 200) {
          setSubmitted(true)
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
}

export default Signup
