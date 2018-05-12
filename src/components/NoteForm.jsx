import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';
import Uploader from "./Uploader";

export default class NoteForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            content: '',
            imageInfo: '',
            uploadKey: 1,
            startDate: moment()
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleTitleChange(event) {
        this.setState({name: event.target.value})
    }

    handleContentChange(event) {
        this.setState({content: event.target.value})
    }

    addNote() {
        if ((this.state.content !== '') && (this.state.name !== '')) {
            this.props.addNote(this.state.name, this.state.content, this.state.imageInfo, this.state.startDate.calendar());
            this.setState({name: '', content: '', uploadKey: this.state.uploadKey + 1, imageInfo: ''});
            this.forceUpdate();
        } else {
            toast.warn("Your note needs to have a name and content", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    }

    render() {
        return(
            <Container>
                <ToastContainer/>
                <Row>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="noteTitle" className="mr-sm-2">Name</Label>
                            <Input type="title" name="title" id="noteTitle" value={this.state.name} onChange={this.handleTitleChange} placeholder="Note Name" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="noteContent" className="mr-sm-2">Content</Label>
                            <Input type="content" name="content" id="noteContent" value={this.state.content} onChange={this.handleContentChange} placeholder="Enter what you want to remember" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="noteContent" className="mr-sm-2">Due Date</Label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Form>
                </Row><br/>

                <Row>
                    <Col xs="6">
                        <Uploader
                            key={this.state.uploadKey}
                            id='file'
                            name='file'
                            onChange={(file) => {
                                console.log('File changed: ', file);

                                if (file) {
                                    file.progress(info => console.log('File progress: ', info.progress));
                                    file.done(info => (this.setState({ imageInfo: info["cdnUrl"]})))
                                }
                            }}
                            onUploadComplete={info => (this.setState({ imageInfo: info["cdnUrl"]}))}/>
                    </Col>
                    <Col xs="6">
                        <Button onClick={this.addNote}>Add Note</Button>
                    </Col>
                </Row>

            </Container>
        )
    }

}