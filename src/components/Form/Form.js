import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Example = () => {
    return (
        <Form className='px-4'>
            <fieldset>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Check type="checkbox" label = "Remember Me" />
            </Form.Group>
            <Button type="submit" variant='primary'>Submit</Button>
            </fieldset>
        </Form>
    );
};

export default Example;