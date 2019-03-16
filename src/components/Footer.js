import React from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';


function Footer() {
    return (
        <div className='footer'>
            <Navbar dark color='primary'>
                <div className='container'>
                    <NavbarBrand href="/">Portfolio</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}

export default Footer;