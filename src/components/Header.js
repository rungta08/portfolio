import React, {Component} from 'react';
import { Nav, Navbar , NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';


class Header extends Component {
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return (
            <div className='header'>
                <Navbar fixed='top' expand="md" color="white" light>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href="/">Portfolio</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className='mr-2'/>
                        <Collapse className='side-panel' isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <div>Home</div>
                                </NavItem>
                                <NavItem>
                                    <div>About</div>
                                </NavItem>
                                <NavItem>
                                    <div>Projects</div>
                                </NavItem>
                                <NavItem>
                                    <div>Contact</div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;