import React from 'react';
import './header.css'
import {Nav, Navbar, Form, FormControl, Button, Image} from 'react-bootstrap';

export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Navbar className="nav-header">
                    <Nav className="mr-auto">
                        <Nav.Link className="font-header" href="#home">Kênh người bán</Nav.Link>
                        <Nav.Link className="font-header" href="#home">Tải ứng dụng</Nav.Link>
                        <Nav.Link className="font-header" href="#features">Kết nối
                            <Image src="/shopee/public/header-icon/header_icon_fb" roundedCircle />
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}