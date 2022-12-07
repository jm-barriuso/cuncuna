import React, { useState } from 'react';
import { useEffect } from 'react';
import { simpleGet } from '../services/simpleGet';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [reviews, setReviews] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = async() => {
        const response = await simpleGet("http://localhost:8000/api/reviews");
        console.log(response);
        setReviews(response.data.reviews)
    }

    return (
        <div>
            <br/>
            <Container>

                <h2>Coleccion cuncuna</h2>
                {<div className='admin-container-flex'>
                    {reviews?.map((review,index)=>{
                        console.log(review);
                        return(<Card  key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={review.img} />
                        <Card.Body>
                            <Card.Title>{review.title}</Card.Title>
                            <Card.Text>
                                {review.description}
                            </Card.Text>
                            <Button variant="warning" onClick={()=>navigate(`/${review._id}`)}>Saber más</Button>

                        </Card.Body>
                    </Card>)
                    })}
                </div>}
            </Container>
            <br />
        </div>
    );
}

export default Home;
