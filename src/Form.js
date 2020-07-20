import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col, Row } from 'react-bootstrap'

function FormField({ initialValue, value, handleSubmit, onSubmit, reset, errors, register}) {
  return (
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
      {errors.firstName && <p>This is required</p>}
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
      {errors.lastName && <p>This is required</p>}
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
      {errors.email && <p>This is required</p>}
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
      {errors.company && <p>This is required</p>}
      </Form.Group>

      <Form.Group>
      <Form.Label>Role</Form.Label>
      <Form.Control as="select"
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
      </Form.Control>
      {errors.role && <p>This is required</p>}
      </Form.Group>


      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormField
