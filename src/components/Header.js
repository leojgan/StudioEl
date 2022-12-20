import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto">
                reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                    </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;