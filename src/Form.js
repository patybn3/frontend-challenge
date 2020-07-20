import React from 'react'
// import { Link } from 'react-router-dom'
// This file will use styled components for styling
// import styled, { css } from 'styled-components'
import Form from 'react-bootstrap/Form'
//
// <form className="Signup">
//   <label htmlFor="firstname">First Name:
//   <input
//     type="text"
//     id="firstname"
//     name="firstName"
//     value={this.state.fields.firstName}
//     onChange={this.handleChange}
//     className={'firstName' in this.state.errors ? 'error' : ''} />
//     {'firstName' in this.state.errors ? <span className="error-message">{this.state.errors.firstName}</span> : ''}
//   </label>
//   <label htmlFor="lastname">Last Name:
//     <input
//       type="text"
//       id="lastname"
//       name="lastName"
//       value={this.state.fields.lastName}
//       onChange={this.handleChange}
//       className={'lastName' in this.state.errors ? 'error' : ''} />
//       {'firstName' in this.state.errors ? <span className="error-message">{this.state.errors.firstName}</span> : ''}
//   </label>
//   <label htmlFor="email">Email:
//     <input
//       type="text"
//       id="email"
//       name="email"
//       value={this.state.fields.email}
//       onChange={handleChange}
//       className={'email' in this.state.errors ? 'error' : ''} />
//     {'email' in this.state.errors ? <span className="error-message">{this.state.errors.email}</span> : ''}
//   </label>
//   <label htmlFor="company">Company Name:
//     <input
//       type="text"
//       id="company"
//       name="company"
//       value={this.state.fields.company}
//       onChange={this.handleChange}
//       className={'company' in this.state.errors ? 'error' : ''} />
//     {'company' in this.state.errors ? <span className="error-message">{this.state.errors.company}</span> : ''}
//   </label>
//   <label htmlFor="role">Your Role:
//     <select
//       type="text"
//       id="role"
//       name="role"
//       defaultValue={this.state.fields.role}
//       onChange={this.handleChange}
//       className={'role' in this.state.errors ? 'error' : ''}>
//         <option value="" disabled></option>
//         <option value="Investor">Investor</option>
//         <option value="Mentor">Mentor</option>
//         <option value="Founder">Founder</option>
//         <option value="Network Member">Network Member</option>
//     </select>
//     {'role' in this.state.errors ? <span className="error-message">{this.state.errors.role}</span> : ''}
//   </label>
//   <button onClick={handleClick}>Sign-up</button>
// </form>

const FormField = ({ values, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      {/* onSubmit will make create call at ProfileCreate.js work at the click
        of submit */}
      <Form onSubmit={handleSubmit}>

          <div action="" className="row">
            {/* Name set up to display as a collum */}
            <div className="col">
              {/* inline style when tag cannot be used on styled components */}
              <Form.Group >
                <Form.Label>
                First Name</Form.Label>
                <Form.Control
                  required
                  placeholder="First Name"
                  name="firstName"
                  maxLength={20}
                  onChange={handleChange}
                  value = {values.firstName}
                />
              </Form.Group>
            </div>
            {/* Title set up as a collumn */}
            <div className="col">
              <Form.Group>
                <Form.Label>
                Last Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Last Name"
                  name="lastName"
                  maxLength={20}
                  onChange={handleChange}
                  value = {values.lastName}
                />
              </Form.Group>
            </div>
            {/* this set up ends here */}
          </div>
          {/* row displays education and location side by side */}
          <div action="" className="row">
            {/* Education set up as collumn */}
            <div className="col">
              <Form.Group>
                <Form.Label>
                Email Address:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value = {values.email}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group>
                <Form.Label>
                Company</Form.Label>
                <Form.Control
                  required
                  placeholder="Company"
                  name="company"
                  onChange={handleChange}
                  value = {values.company}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                Role</Form.Label>
                <Form.Control
                  required
                  placeholder="Position"
                  name="role"
                  onChange={handleChange}
                  value = {values.role}
                />
              </Form.Group>
            </div>
            {/* This row ends here */}

          <button type="submit" primary>Submit</button> {' '}
          </div>
      </Form>


    </div>
  </div>
)

export default FormField
