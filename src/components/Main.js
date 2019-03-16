import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';


class Main extends Component{
    render(){
        return(
            <Container className='main'>
                <Row>
                    <Col lg='7' md='7' xs='12' className='main-text'>
                        <h2>Well! Hello I am <span className='name'>Shivam Rungta</span><br/>I am a <span className='desig'>Full - Stack Developer</span></h2>
                    </Col>
                    <Col className='main-img' lg='5' md='5' xs='12'>
                        <img src="https://github.com/rungta08/portfolio/blob/gh-pages/assets/images/Home-Img.png?raw=true" alt='welcome' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;