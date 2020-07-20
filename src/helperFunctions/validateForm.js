// use this function to validate your form

export default (values) => {
  const errors = {}
  const emailValidation = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

  for (const key in values) {
    if (values[key] === '') {
      errors[key] = 'This field is required';
    } else if (key === 'email' && !emailValidation.test(values[key])) {
      errors[key] = 'Please enter a valid email address';
    }
  }
  return errors
}
