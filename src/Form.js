import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'
import styled from 'styled-components';

const OutDiv = styled.div`
  margin-top: 40px;
  text-align: left;
`

const Error = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: red;
`

const ButtonS = styled.button`
  text-align: center;
  border-radius: 5px;
  background: #39c463;
  border: 2px solid #39c463;
  color: #000;
  padding: 5px 20px;
  margin: 20px 0 70px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
border: 2px solid #edb442;
background: #edb442;
cursor: pointer;
}
`

function FormField({ initialValue, value, handleSubmit, onSubmit, reset, errors, register}) {
  return (
    <OutDiv>
    <Form onSubmit={handleSubmit(onSubmit)}>

    <Form.Row>

    <Form.Group as={Col}>
      <Form.Label>First name</Form.Label>
      <Form.Control
      defaultValue={initialValue.firtName}
      type="text"
      name="firstName"
      placeholder="First Name"
      ref={register({
        validate: value => value !== '',
        required: true
      })}
      />
      <Error>
      {errors.firstName && <p>Required Field</p>}
      </Error>
      </Form.Group>

      <Form.Group as={Col}>
      <Form.Label>Last name</Form.Label>
      <Form.Control
      defaultValue={initialValue.lastName}
      type="text"
      name="lastName"
      placeholder="Last Name"
      ref={register({
        validate: value => value !== '',
        required: true
      })}
      />
      <Error>
      {errors.lastName && <p>Required Field</p>}
      </Error>
      </Form.Group>

      </Form.Row>

      <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control
      defaultValue={initialValue.email}
      type="email"
      name="email"
      placeholder="Email Address"
      ref={register({
        validate: value => value !== '',
        required: true
      })}
      />
      <Error>
      {errors.email && <p>Required Field</p>}
      </Error>
      </Form.Group>

      <Form.Group>
      <Form.Label>Company</Form.Label>
      <Form.Control
      defaultValue={initialValue.company}
      type="text"
      name="company"
      placeholder="Company"
      ref={register({
        validate: value => value !== '',
        required: true
      })}
      />
      <Error>
      {errors.company && <p>Required Field</p>}
      </Error>
      </Form.Group>

      <Form.Group>
      <Form.Label>Role</Form.Label>
      <Form.Control as="select"
      required
      defaultValue={initialValue.role}
      type="text"
      name="role"
      placeholder="Position"
      ref={register({
        validate: value => value !== '',
        required: true
      })}
      >
      <option>Select One</option>
      <option>Investor</option>
      <option>Mentor</option>
      <option>Founder</option>
      <option>Network Member</option>
      <option>Other</option>
      </Form.Control>
      <Error>
      {errors.role && <p>Required Field</p>}
      </Error>
      </Form.Group>

      <ButtonS type="submit">Submit</ButtonS>
    </Form>
    </OutDiv>
  );
}

export default FormField
