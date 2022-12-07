import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { simpleGet } from '../services/simpleGet';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const {id} = useParams()
    const [review, setReview] = useState();
    const navigate = useNavigate()
    

    const getReview = async() => {
        const response = await simpleGet("http://localhost:8000/api/reviews/" + id)
        setReview(response.data.review)
    }

    useEffect(() => {
        getReview();
    }, []);

    return (
        <div>
            <br></br>
            <Container>
                <Card className="bg-dark text-white">
                <Card.Body>
                    <Card.Title>{review?.title}</Card.Title>
                    <Card.Text>
                    {review?.description}
                    </Card.Text>
                    <Card.Text>Autor: {review?.author}</Card.Text>
                    <Card.Text>Ilustrador: {review?.ilustrator}</Card.Text>
                    <Card.Text>número de publicación: {review?.number}</Card.Text>
                <Button variant="warning" onClick={()=>navigate(`/`)}>Volver</Button>
                </Card.Body>
                <Card.Img src={review?.img} variant="bottom" />
                </Card>
            </Container>
            <br />
        </div>
    );
}

export default Detail;
