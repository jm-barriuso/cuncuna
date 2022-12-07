import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = () => navigate("/admin");
    console.log(errors);


    return (
        <Container className="my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Col} className="mb-3" controlId="formBasicFirstName"> 
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" placeholder="Email" {...register("email", {required: true, pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i})} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicFirstName"> 
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password", {required: true, min: 8})} />
            </Form.Group>
            <Button className="me-2" variant="primary" type="submit">
                Ingresar
            </Button>
            <Button className="me-2" variant="secondary" type="submit" onClick={()=>navigate("/register")}>
                Registrarse
            </Button>  

            </Form>
        </Container>
    );
}

export default LoginForm;