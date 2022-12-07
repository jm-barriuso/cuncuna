import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { simplePost } from '../services/simplePost';
import Form from 'react-bootstrap/Form';
import {useUser} from "../contexts/userContext"
import { simpleGetAuthenticated } from '../services/simpleGetAuthenticated';

const Login = () => {

    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const {setUser} = useUser();

    const loginUsuario = async(values) => {
        const response = await simplePost("http://localhost:8000/api/login ",values)

        if(response.data.message===""){
            console.log("USUARIO LOGUEADO",response.data)
            const response2 = await simpleGetAuthenticated(`http://localhost:8000/api/user/${response.data._id}`)
            setUser(response2.data);
            navigate("/admin")
        }else{
            const errorResponse = response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            {errors.map((err, index) => <Form.Text className="text-danger" key={index}>{err}</Form.Text>)}
            <LoginForm onSubmitProp={loginUsuario} />
        </div>
    );
}

export default Login;
