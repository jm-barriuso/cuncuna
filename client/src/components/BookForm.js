import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ImageUpload from './ImageUpload';

const BookForm = () => {

const { register, handleSubmit, formState: { errors }, watch } = useForm();
const password = useRef({});
password.current = watch("password", "");
const onSubmit = data => console.log(data);
console.log(errors);


return (
    <Container className="my-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Col>
                <Form.Group as={Col} className="mb-3" controlId="formBasicFirstTitulo">
                    <Form.Label>Titulo:</Form.Label>
                    <Form.Control 
                    isInvalid={ !!errors.titulo}
                    type="text" 
                    placeholder="Titulo" 
                    {...register("titulo",
                        {required: "Este campo es requerido",}
                    )}
                    />
                    {errors.titulo && <Form.Text className="text-danger">{errors.titulo?.message}</Form.Text>}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Autor(a):</Form.Label>
                    <Form.Control
                    isInvalid={ !!errors.author}
                    type="text"
                    placeholder="Nombre del autor(a)" 
                    {...register("author", {
                        required: "Este campo es requerido",}
                    )}
                    />
                    {errors.author && <Form.Text className="text-danger">{errors.author?.message}</Form.Text>}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicIlustrator">
                    <Form.Label>Ilustrador(a):</Form.Label>
                    <Form.Control
                    isInvalid={ !!errors.ilustrator}
                    type="text"
                    placeholder="Nombre del ilustrador(a)" 
                    {...register("ilustrator", {
                        required: "Este campo es requerido",}
                    )}
                    />
                    {errors.ilustrator && <Form.Text className="text-danger">{errors.ilustrator?.message}</Form.Text>}
                </Form.Group>
            </Col>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Numero:</Form.Label>
                <Form.Control
                isInvalid={ !!errors.number}
                type="text" 
                placeholder="Numero" 
                {...register("number", {
                    required:"Este campo es requerido", 
                    }
                )} 
                />
                {errors.number && <Form.Text className="text-danger">{errors.number?.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicDescription">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                    isInvalid={ !!errors.description}
                    as="textarea"
                    rows={5}
                    placeholder="Agrega una pequeña descripción" 
                    {...register("description", {
                    required: "Este campo es requerido"
                    }
                    )} 
                />
                {errors.description && <Form.Text className="text-danger">{errors.description?.message}</Form.Text>}
            </Form.Group>
            <Form.Label>Portada:</Form.Label>
            <ImageUpload/>
        <Button variant="primary" size="lg" type="submit">
            Enviar Reseña
        </Button>  
        </Form>
    </Container>
    );
}  
export default BookForm;
