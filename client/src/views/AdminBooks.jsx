import React, { useState } from 'react';
import { useEffect } from 'react';
import {useUser} from "../contexts/userContext"
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete';
import Card from 'react-bootstrap/Card';
import {EditOutlined,DeleteTwoTone,PlusCircleTwoTone } from '@ant-design/icons'
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';

const AdminBooks = () => {

    const navigate = useNavigate()
    const {user,setUser} = useUser();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = async() => {
        const response = await simpleGet("http://localhost:8000/api/reviews");
        console.log(response);
        setReviews(response.data.reviews)
    }
    const deleteReview = async(idReview) => {
        const deleted = await simpleDelete(`http://localhost:8000/api/reviews/delete/${idReview}`);
        console.log(deleted)
        setReviews(reviews.filter(review => review._id !==idReview))

    }



    return (
        <div>
            <Container className="separate-from-nav">
                <div className='admin-header'>
                    
                        <h2>Administrador de libros</h2>
                        {user && <PlusCircleTwoTone  twoToneColor="#FFC006" style={{ fontSize: '3em'}} onClick={()=> navigate("/admin/create")}/>}
                </div>

                {user && 
                <div className='admin-container-flex'>
                    {reviews?.map((review,index)=>{
                        console.log(review);
                        return(<Card  key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={review.img} />
                        <Card.Body>
                            <Card.Title>{review.title}</Card.Title>
                            <Card.Text>
                                {review.description}
                            </Card.Text>
                            <div className="flex-edit-delete">
                                <EditOutlined onClick={()=>navigate(`/admin/${review._id}`)}/>
                                <DeleteTwoTone twoToneColor="#eb2f96" onClick={()=>deleteReview(review._id)}/>
                            </div>

                        </Card.Body>
                    </Card>)
                    })}
                </div>}
            </Container>
                
            
        </div>
    );
}

export default AdminBooks;
