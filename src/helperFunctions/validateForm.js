// use this function to validate your form

export default (values) => {
  // replace this code with your validation

  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const error = {}

  if(!values.email){
    error.email = "Invalid Email"
  } else if (!emailValidation.test(values.email)) {
    error.email = "Invalid Email"
  }

  if (!values.firstName){
    error.firstName = "First Name is Required"
  } else if (!values.lastName) {
    error.lastName = "Last Name is Required"
  } else if (!values.company){
    error.company = "Company is Required"
  } else if (!values.role){
    error.role = "Role is Required"
  }

  return error
}
