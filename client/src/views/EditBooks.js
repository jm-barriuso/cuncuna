import React from 'react';
import { useParams } from 'react-router-dom';

const EditBooks = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>editar libro {id} </h2>
        </div>
    );
}

export default EditBooks;
