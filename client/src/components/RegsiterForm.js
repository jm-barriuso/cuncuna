import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const RegsiterForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group as={Col} className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control 
                isInvalid={ !!errors.firstName}
                type="text" 
                placeholder="Nombre" 
                {...register("firstName", {
                  required: "Este campo es requerido",
                  minLength: {
                    value:3,
                    message:"no debe de tener menos de 3 caracteres"
                    },
                  maxLength: {
                    value:12,
                    message:"no debe de tener mas de 12 caracteres"
                    },
                  pattern:{
                    value:/^[a-zA-Z ]*$/,
                    message: "Este campo solo acepta texto"}
                  }
                )}
              />
            {errors.firstName && <Form.Text className="text-danger">{errors.firstName?.message}</Form.Text>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                isInvalid={ !!errors.lastName}
                type="text"
                placeholder="Apellido" 
                {...register("lastName", {
                  required: "Este campo es requerido",
                  minLength: {
                    value:3,
                    message:"no debe de tener menos de 3 caracteres"
                    },
                  maxLength: {
                    value:12,
                    message:"no debe de tener mas de 12 caracteres"
                    },
                  pattern:{
                    value:/^[a-zA-Z ]*$/,
                    message: "Este campo solo acepta texto"}
                  }
                )}
              />
              {errors.lastName && <Form.Text className="text-danger">{errors.lastName?.message}</Form.Text>}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicRut">
        </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                isInvalid={ !!errors.email}
                type="text" 
                placeholder="Email" 
                {...register("email", {
                  required: {
                    value:true,
                    message:"Este campo es requerido"}, 
                  pattern: {
                    value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i},
                    message:"No es un correo valido"
                  }
                )} 
              />
              {errors.email && <Form.Text className="text-danger">{errors.email?.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  isInvalid={ !!errors.password}
                  type="password" 
                  placeholder="password" 
                  {...register("password", {
                    required: {
                      value:true,
                      message:"Este campo es requerido"
                    }, 
                      minLength: {
                        value: 8,
                        message: "La Contraseña debe tener al 8 caracteres"
                      }
                    }
                  )} 
                />
              {errors.password && <Form.Text className="text-danger">{errors.password?.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Confirmar Contraseña:</Form.Label>
                <Form.Control
                  isInvalid={ !!errors.confirmPassword}
                  type="password" 
                  placeholder="password" 
                  {...register("confirmPassword", {
                    validate: value =>
                    value === password.current || "Las contraseñas no coinciden"
                    }
                  )} 
                />
              {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword?.message}</Form.Text>}
            </Form.Group>


        <Button variant="primary" type="submit">
          Registrarse
        </Button>  
      </Form>
    </Container>
  );
}

export default RegsiterForm;

