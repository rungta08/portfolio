import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function CardRender(){
    return(
        <div className='Card'>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h1>Card title</h1></CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

class About extends Component{
    render(){
        return(
            <Container className='about'>
                <Row>
                    <Col lg='6' md='6' xs='12' className='main-text'>
                        <CardRender/>
                    </Col>
                    <Col className='main-img' lg='6' md='6' xs='12'>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;