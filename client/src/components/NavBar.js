import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useUser} from "../contexts/userContext"
import logout from '../services/logout';

const NavBar = () => {

    const {user,setUser} = useUser();
    const navigate = useNavigate()

    const logOut = async() => {
        const {success} = await logout();
        if(success) setUser(null)
        else window.alert("Error. No se pude desloguear")
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand title-font" to={"/"}>Cuncuna</Link>
                    <div className="d-flex">
                        {user && <Link to={"/admin"} className='saludo-nav'>Hola! {user.firstName} {user.lastName} </Link> }
                        {user? <button className="btn btn-outline-warning" onClick={logOut} >Log out</button> : <button className="btn btn-outline-warning" onClick={()=>navigate("/login")} >Log in</button>}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

