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
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 2,
                    width: '3%',
                    marginRight:6,
                    marginLeft: '0%'
                }}
            />
        );
        return (
            <div className='header'>
                <Navbar fixed='top' expand="md" color="white" light>
                    <div className='container'>
                        <ColoredLine color='black'/>
                        <NavbarBrand className='mr-auto brand' href="/">Portfolio</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className='mr-2'/>
                        <Collapse className='side-panel' isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <div className='nav-option'>Home</div>
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