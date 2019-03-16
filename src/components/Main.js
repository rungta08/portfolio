import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';


class Main extends Component{
    render(){
        return(
            <Container className='main'>
                <Row>
                    <Col lg='7' md='7' xs='12' className='main-text'>
                        <h2>Well! Hello I am <span>Shivam Rungta</span><br/>I am a Full - Stack Developer</h2>
                    </Col>
                    <Col className='main-img' lg='5' md='5' xs='12'>
                        <img src="/assets/images/Home-Img.png" alt='welcome' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;