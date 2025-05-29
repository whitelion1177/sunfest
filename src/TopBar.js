import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";





export function TopBar(props) {

    

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark"   >            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/news">Edizione 2025</Nav.Link>                                         
                    <NavDropdown title="Edizioni Precedenti" id="basic-nav-dropdown">
                    {props.editions.map((value, index) => {
                        return <NavDropdown.Item as={Link} to={"/" + value.year}>{value.year}</NavDropdown.Item>
                     })}
                        
                    </NavDropdown>
                </Nav>
                

                    
                    


                
            </Navbar.Collapse>
        </Navbar>
    );



}

export default TopBar;