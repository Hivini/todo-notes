import React, {Component} from 'react';
import {
    Container,
    Col,
    Row,
    Jumbotron

} from 'reactstrap';

export default class Main extends Component {
    render() {
        return (
            <Container><br/>
                <Jumbotron>
                    <h1 className="display-3">Todo Notes</h1>
                    <p className="lead">This is the final project of the class of Interactive Design</p>
                    <hr className="my-2" />
                    <p>Below will be the information about the technologies used in the project</p>
                </Jumbotron>

                <Row>
                    <Col>
                        <h4><strong>React</strong></h4>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col xs="5">
                    </Col>
                    <Col xs="2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="img-fluid" height="auto"/>
                    </Col>
                    <Col cs="5">
                    </Col>
                </Row>

                <Row className="text-md-center">
                    <Col xs="2">
                    </Col>
                    <Col>
                        <p><strong>React</strong> is one of the best options out there to make an app, although I made a simple one, it has many options available to optimatize the speed of the production.<br/><br/>In make project, I use it for the whole logic of the program, all the sections are divided in components and each one has a job in a way it can interact with the other elements.</p>
                    </Col>
                    <Col xs="2">
                    </Col>
                </Row><br/><hr/>

                <Row>
                    <Col>
                        <h4><strong>Boostrap</strong></h4>

                    </Col>
                </Row>

                <Row className="text-center">
                    <Col xs="5">
                    </Col>
                    <Col xs="2">
                        <img src="https://www.ligu.net/uploads/technology/bootstrap-framework-logo-149051" alt="Bootstrap" className="img-fluid" height="auto"/>
                    </Col>
                    <Col cs="5">
                    </Col>
                </Row>

                <Row className="text-md-center">
                    <Col xs="2">
                    </Col>
                    <Col>
                        <p><strong>Bootstrap</strong> for me is the best CSS Framework and easy to use of them all, it has a variaty of options you cant use, also has a lot of documentation.<br/><br/>For this project I use an alternative version called reacstrap, which uses it using components, which is better for interaction in React</p>
                    </Col>
                    <Col xs="2">
                    </Col>
                </Row><br/><hr/>

                <Row>
                    <Col>
                        <h4><strong>Firebase</strong></h4>

                    </Col>
                </Row>

                <Row className="text-center">
                    <Col xs="5">
                    </Col>
                    <Col xs="2">
                        <img src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" alt="Firebase" className="img-fluid" height="auto"/>
                    </Col>
                    <Col cs="5">
                    </Col>
                </Row>

                <Row className="text-md-center">
                    <Col xs="2">
                    </Col>
                    <Col>
                        <p><strong>Firebase</strong> the teacher of the class recommend us to use this to handle the databases, but it's so good to only use that, it has a bunch of stuff to help in every aspect of the project, having a way to have everything in a single space.<br/><br/>On this project I use it for the auth of the users, and also to store the data of their notes depending on the token of each one.</p>
                    </Col>
                    <Col xs="2">
                    </Col>
                </Row><br/><hr/>

                <Row>
                    <Col>
                        <h4><strong>Uploadcare</strong></h4>

                    </Col>
                </Row>

                <Row className="text-center">
                    <Col xs="5">
                    </Col>
                    <Col xs="2">
                        <img src="https://pbs.twimg.com/profile_images/697060691384143872/BJBk_knC_400x400.png" alt="Uploadcare" className="img-fluid" height="auto"/>
                    </Col>
                    <Col cs="5">
                    </Col>
                </Row>

                <Row className="text-md-center">
                    <Col xs="2">
                    </Col>
                    <Col>
                        <p><strong>Uploadcare</strong> is a very cool way to store images and files to not overload your server with stuff, also it has many options for the users, expanding the experience and use of the whole app.</p>
                    </Col>
                    <Col xs="2">
                    </Col>
                </Row><br/><hr/>

                <Row>
                    <Col>
                        <h4><strong>GIPHY</strong></h4>

                    </Col>
                </Row>

                <Row className="text-center">
                    <Col xs="5">
                    </Col>
                    <Col xs="2">
                        <img src="https://giphy.com/static/img/giphy_logo_square_social.png" alt="Giphy" className="img-fluid" height="auto"/>
                    </Col>
                    <Col cs="5">
                    </Col>
                </Row>


                <Row className="text-md-center">
                    <Col xs="2">
                    </Col>
                    <Col>
                        <p><strong>GIPHY</strong> adds a little touch at the end :)</p>
                    </Col>
                    <Col xs="2">
                    </Col>
                </Row><br/><hr/>

            </Container>
        )
    }
}
