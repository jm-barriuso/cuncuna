import React, { useState } from 'react';
import { imgUpload } from '../services/imgUpload';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { simplePost } from '../services/simplePost';

const CreateBooks = () => {

    const navigate = useNavigate();

    const createReview = async(values) => {
        console.log("VALORES DESDE Form, EN createbooks",values);
        const response = await simplePost("http://localhost:8000/api/reviews/new",values);
        console.log(response)
        navigate("/admin")

    }

    const [images, setImages] = useState([]);
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);

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
            <h2>Creacion de libro</h2>
            <BookForm 
            title= ""
            author= ""
            ilustrator= ""
            number= ""
            description=""
            image=""
            onUpload={onUpload}
            onSubmitProp={createReview}
            images={images}
            setImages={setImages}
            urlImage= {urlImage}
            setUrlImage={setUrlImage}
            loading={loading}

            /> 
        </div>
    );
}

export default CreateBooks;
