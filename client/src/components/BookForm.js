import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ImageUpload from './ImageUpload';

const BookForm = (props) => {

const {title,author,ilustrator,number,description,image,onUpload,onSubmitProp,images,setImages,urlImage,setUrlImage,loading} = props

const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    defaultValues: {
        title: title,
        author: author,
        ilustrator: ilustrator,
        number: number,
        description:description
    }
});

useEffect(() => {
    reset({
        title: title,
        author: author,
        ilustrator: ilustrator,
        number: number,
        description:description
    });
},[]);


const password = useRef({});
password.current = watch("password", "");

const onSubmit = (data) => {
    data.img = urlImage;
    console.log(data)
    onSubmitProp(data)
};


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
                    {...register("title",
                        {required: "Este campo es requerido",}
                    )}
                    />
                    {errors.title && <Form.Text className="text-danger">{errors.title?.message}</Form.Text>}
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
            <ImageUpload 
            image={image} 
            onUpload={onUpload}
            images={images}
            setImages={setImages}
            urlImage= {urlImage}
            setUrlImage={setUrlImage}
            loading={loading}
            />
        <Button variant="warning" size="lg" type="submit">
            Enviar Reseña
        </Button> 
        <Button variant="outline-danger" type="button" onClick={()=>{
            reset({
                title: title,
                author: author,
                ilustrator: ilustrator,
                number: number,
                description:description
            });
        }}>Shame</Button>
        </Form>
    </Container>
    );
}  
export default BookForm;
