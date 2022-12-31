import { useState } from 'react'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import StudioElLogo from '../img/studioEl-header.png'
import UserLoginForm from '../user/userLoginForm'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Navbar className='header' sticky = 'top' expand = 'md'>
            <NavbarBrand className='ms-5' href='/'>
                <img className='float-start' src = {StudioElLogo} alt="Studio El Logo" />
                <h2 className='d-none d-lg-block mt-1 rocksalt'>Teaching Resources</h2>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link nav-text' to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link nav-text' to='/resources'>Resources</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link nav-text' to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link nav-text' to='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    )
}

export default Header