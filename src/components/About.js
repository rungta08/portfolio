import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component{
    render(){
        return(
            <Container className='about'>
                <Row className='title'>
                    <Col lg='12'>
                        <h2>About Me.</h2>
                    </Col>
                </Row>
                <Row className='content'>
                    <Col xl='1' lg='2' md='2' sm='3' xs='3'>
                        <div className='text'>
                                I am
                        </div>
                   </Col>
                   <Col xl='11' lg='11' md='11' sm='10' xs='10'>
                        <div className='divider'>
                        </div>
                   </Col>
                </Row>
                <Row>
                    <Col className='text-block'>
                        <span style={{color: 'green'}}>thinking,</span> reading,<br />
                        collecting, <span style={{color: 'red'}}>designing,</span><br/>
                        editing, writing, making, <br/>
                        and <span style={{color: ' #2B9DFF'}}>playing around...</span>
                    </Col>
                </Row>
                <Row className='content'>
                    <Col xl='12'>
                        <div className='divider'></div>
                   </Col>
                </Row>
            </Container>
        );
    }
}

export default About;