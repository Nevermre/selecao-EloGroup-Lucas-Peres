import React,{useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap';

  import {Link} from 'react-router-dom'
  
  const Header =() =>{
  
    const [open,setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
  
    } 
  
    return(<Navbar color='dark' light expand='md' >
        
          <NavbarBrand className='text-white' tag={Link} to ='/'>Lucas Peres</NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
            
              <Nav className='ml-auto text-white' navbar>

              <NavItem className='text-white'>
                  <NavLink className='text-white' tag={Link} to='/'>Início</NavLink>
  
                </NavItem>
  
                <NavItem className='text-white'>
                  <NavLink className='text-white' tag={Link} to='/Dados'>Dados Cadastrados</NavLink>
  
                </NavItem>

                <NavItem className='text-white'>
                  <NavLink className='text-white' tag={Link} to='/post-dados'>Cadastrar Dados</NavLink>
  
                </NavItem>
  
              </Nav>
  
            </Collapse>
            
        </Navbar>
    );
  }

  export default Header;