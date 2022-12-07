import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { simpleGet } from '../services/simpleGet';
import { simplePut } from '../services/simplePut';
import { imgUpload } from '../services/imgUpload';
import Container from 'react-bootstrap/esm/Container';


const EditBooks = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [review, setReview] = useState();
    const [images, setImages] = useState([]);
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getReview();
    }, []);

    const getReview = async () =>{
        const response = await simpleGet(`http://localhost:8000/api/reviews/${id}`);
        console.log(response);
        setReview(response.data.review)
        setUrlImage(response.data.review.img)

    }

    const updateReview = async (values) =>{
        const response = await simplePut(`http://localhost:8000/api/reviews/update/${id}`,values);
        console.log(response);
        navigate("/admin")
    }

    const onUpload = async () => {
        setLoading(true);
        const url = await imgUpload(images[0].file);
        setLoading(false);
        console.log("URL",url)

        if (url) setUrlImage(url);
        else alert('Error, trate nuevamente más tarde. ❌')
    }


    return (
        <div>
            <br/>
            <Container>
                <h2>Editar libro {review?.title} </h2>
            </Container>
            
            <BookForm 
            title={review?.title} 
            author={review?.author} 
            ilustrator={review?.ilustrator} 
            number={review?.number}
            description={review?.description} 
            onSubmitProp={updateReview}
            onUpload={onUpload}
            images={images}
            setImages={setImages}
            urlImage= {urlImage}
            setUrlImage={setUrlImage}
            loading={loading}
            />
        </div>
    );
}

export default EditBooks;
