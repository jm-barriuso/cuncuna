import React, { useState } from 'react';
import ImageUploading from "react-images-uploading";
import { imgUpload } from '../services/imgUpload';
import {UploadOutlined, SwapOutlined, DeleteTwoTone,LoadingOutlined, FileImageOutlined } from '@ant-design/icons'



const ImageUpload = () => {
    
    const [images, setImages] = useState([]);
    const [urlImage, setUrlImage] = useState('')
    const [loading, setLoading] = useState(false);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log("Llegue al onChange")
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    };

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
            <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg","png"]}
            >
        {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
        }) => (
          // write your building UI
            <div className="upload__mage-wrapper">
                {
                    images[0]?
                    imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <div className="image-container-upload">
    
                                <img  src={image.data_url} alt="" width="150" />
                                <div className="image-item__btn-wrapper">
                                    {
                                        loading?
                                                <p className='loading-label'>Subiendo imagen <LoadingOutlined /></p>
                                                :
                                            <div className='btn-container-icon'>
                                                <div className="icon-buton" >
                                                    <UploadOutlined className="me-2" style={{ fontSize: '2em', color: '#000' }}onClick={onUpload}/>
                                                    <p className='icon-text'>Subir imagen</p>
                                                </div>
                                                <div className="icon-buton">
                                                    <SwapOutlined style={{ fontSize: '2em', color: '#08c' }} className="me-2"onClick={() => {
                                                        onImageUpdate(index)
                                                        setUrlImage('')
                                                        }}/>
                                                    <p className='icon-text'>Cambiar imagen</p>
                                                </div>
                                                <div className="icon-buton">
                                                    <DeleteTwoTone twoToneColor="#eb2f96"  style={{ fontSize: '2em'}}className="me-2"onClick={() => {
                                                        onImageRemove(index)
                                                        setUrlImage('')
                                                        }}/>
                                                    <p className='icon-text'>Borrar imagen</p>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            {urlImage?<p>{urlImage}</p>:null}
                        </div>
                    ))
                    :
                    <div className="img-btn"
                    variant= {isDragging ? "success":"secondary"}
                    onClick={onImageUpload}
                    {...dragProps}>
                        <FileImageOutlined style={{fontSize: '2em', color: isDragging ? "#08c":"#D4D7D90"}}/>
                        <p className='icon-text'style={{color: isDragging ? "#08c":"#D4D7D90"}}>Arrastre imagen aquí</p>
                    </div>
                }
            </div>
        )}
    </ImageUploading>
        </div>
    );
}

export default ImageUpload;
