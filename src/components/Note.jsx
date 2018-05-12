import React, { Component } from 'react';
import {
    ListGroupItem,
    Container,
    Button,
    Collapse,
    Row,
    Col
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';


export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false};
        this.toggle = this.toggle.bind(this);
        this.onExited = this.onExited.bind(this);
        this.noteId = props.noteId;
        this.noteTitle = props.noteTitle;
        this.noteContent = props.noteContent;
        this.noteShowInfo= props.noteShowInfo;
        this.imageInfo = props.imageInfo;
        this.startDate = props.startDate;
    }

    onExited() {
        this.setState({ status: 'Closed' });
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleRemove(id) {
        this.setState({ collapse: !this.state.collapse });
        const response = window.confirm('Are you sure you want to delete this note?');
        if (response) {
            this.props.notifyDeletion();
            this.props.removeNote(id);
        }

    }

    notify(message) {
        //this.props.toggleModal();
        this.toggle();
        this.props.notify(message);
        this.props.removeNote(this.noteId);
    }

    render() {
        if (!(this.imageInfo === "")) {
            return (
                <ListGroupItem onClick={this.toggle}>
                    <Row>
                        <Col className="text-center" xs="8">
                            <strong>{this.noteTitle}</strong>
                        </Col>
                        <Col className="text-center" xs="4">
                            <Button color="success" onClick={() => this.notify("The note '" + this.noteTitle + "' was marked as completed!")}>Mark as completed</Button>
                        </Col>

                    </Row>

                    <Collapse isOpen={this.state.collapse}>
                        <hr/><br/>
                        <Container onClick={this.toggle}>

                            <Row>
                                <Col className="text-right">
                                    <p><em><strong>Due date: </strong> {this.startDate}</em></p>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="3">
                                    <p><strong>Remember:</strong></p>
                                </Col>
                                <Col xs="8" className="text-left">
                                    <p>{this.noteContent}</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <img src={this.imageInfo} alt="Note representation" className="img-fluid"/>
                                </Col>
                            </Row><br/>

                            <Row>
                                <Col className="text-center">
                                    <Button color="info" onClick={this.toggle}>Hide</Button>

                                </Col>
                                <Col className="text-center">
                                    <Button color="danger" onClick={() => this.handleRemove(this.noteId)}>Delete</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Collapse>
                </ListGroupItem>
                            )
        }
        return (
            <ListGroupItem onClick={this.toggle}>
                <Row>
                    <Col className="text-center" xs="8">
                        <strong>{this.noteTitle}</strong>
                    </Col>
                    <Col className="text-center" xs="4">
                        <Button color="success" onClick={() => this.notify("The note '" + this.noteTitle + "' was marked as completed!")}>Mark as completed</Button>
                    </Col>

                </Row>

                <Collapse isOpen={this.state.collapse}>
                    <hr/><br/>
                    <Container onClick={this.toggle}>

                        <Row>
                            <Col className="text-right">
                                <p><em><strong>Due date: </strong> {this.startDate}</em></p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="3">
                                <p><strong>Remember:</strong></p>
                            </Col>
                            <Col xs="8" className="text-left">
                                <p>{this.noteContent}</p>
                            </Col>
                        </Row><br/>

                        <Row>
                            <Col className="text-center">
                                <Button color="info" onClick={this.toggle}>Hide</Button>

                            </Col>
                            <Col className="text-center">
                                <Button color="danger" onClick={() => this.handleRemove(this.noteId)}>Delete</Button>
                            </Col>
                        </Row>


                    </Container>
                </Collapse>
            </ListGroupItem>
        )
    }
}