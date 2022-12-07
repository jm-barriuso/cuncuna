import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                    Desarrollado por: <a href="#login">Familia Urde Males</a>
                </Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default Footer;
