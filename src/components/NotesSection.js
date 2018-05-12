import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import { app, GIFCLIENT } from '../config/Config';
import { ToastContainer, toast } from 'react-toastify';
import {
    Container,
    Card,
    ListGroup,
    CardHeader,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Row,
    Col
} from 'reactstrap';

export default class NotesSection extends Component {

    constructor() {
        super();
        this.state = {
            notes: [
            ],
            modal: false,
            modalImgUrl: ''
        };

        this.user = app.auth().currentUser;

        this.db = app.database().ref().child(this.user.uid);

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.notify = this.notify.bind(this);
        this.notifyDeletion = this.notifyDeletion.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {

        this.setState({modal: !this.state.modal})

    }

    notify(message) {
        /*
        toast.success("" + message, {
            position: toast.POSITION.TOP_CENTER
        });*/

        if (!this.state.modal) {
            // let data = '';
            GIFCLIENT.random('gifs', {})
                .then((response) => {
                    /*
                    console.log(response);
                    data = JSON.parse(response).data.url;
                    console.log("This is me " + data);
                     */
                    let info = response["data"]["images"]["original"]["gif_url"];
                    console.log(info);
                    this.setState({modalImgUrl: info})
                })
                .catch((err) => {
                    console.log("Something happened " + err)
                });
        }

        this.setState({
            modal: !this.state.modal,
        });
    }

    notifyDeletion() {
        toast.error("The note has been deleted", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    componentWillMount() {
        document.title = "My Notes";
    }

    componentDidMount() {
        const {notes} = this.state;
        this.db.on('child_added', snap => {
            notes.push({
                noteId: snap.key,
                noteTitle: snap.val().noteTitle,
                noteContent: snap.val().noteContent,
                imageInfo: snap.val().imageInfo,
                startDate: snap.val().startDate,
                noteShowInfo: false
            });
            this.setState({notes});
        });

        this.db.on('child_removed', snap => {
            for (let i = 0; i < notes.length; i++) {
                if ((notes[i].noteId === snap.key)) {
                    notes.splice(i, 1);
                }
            }
            this.setState({notes});
        });
    }

    removeNote(noteId) {
        this.db.child(noteId).remove();

    }

    addNote(noteTitle, noteContent, imageInfo, startDate) {
        // let { notes } = this.state;
        // notes.push({
        //     noteId: notes.length + 1,
        //     noteTitle: noteTitle,
        //     noteContent: noteContent,
        //     noteShowInfo: false
        // });
        this.db.push().set({noteTitle: noteTitle, noteContent: noteContent, imageInfo: imageInfo, startDate: startDate});
    }

    render() {

        if (this.state.modal) {
            return (
                <Container><br/>

                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader toggle={this.toggleModal}>The task has been completed!</ModalHeader>
                        <ModalBody>
                            <Container className="text-center">
                                <Row>
                                    <Col>
                                        <img src={this.state.modalImgUrl} alt="Extra points" className="img-fluid"/>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>OK</Button>{' '}
                        </ModalFooter>
                    </Modal>
                    <NoteForm addNote={this.addNote}/><br/><br/>
                    <Card>
                        <CardHeader><h3>Notes</h3><br/><em>Click the note to show info</em></CardHeader>
                        <ListGroup>
                            {
                                this.state.notes.map(note => {
                                    return (
                                        <Note
                                            noteId = {note.noteId}
                                            noteTitle = {note.noteTitle}
                                            noteContent = {note.noteContent}
                                            noteShowInfo = {note.noteShowInfo}
                                            imageInfo = {note.imageInfo}
                                            startDate = {note.startDate}
                                            key = {note.noteId}
                                            removeNote = {this.removeNote}
                                            notify = {this.notify}
                                            notifyDeletion = {this.notifyDeletion}
                                            toggleModal = {this.toggleModal}
                                        />
                                    )
                                })
                            }
                        </ListGroup>
                    </Card>
                </Container>
            )
        }
        return (
            <Container><br/>
                <ToastContainer/>
                <NoteForm addNote={this.addNote}/><br/><br/>
                <Card>
                    <CardHeader><h3>Notes</h3><br/><em>Click the note to show info</em></CardHeader>
                    <ListGroup>
                        {
                            this.state.notes.map(note => {
                                return (
                                    <Note
                                          noteId = {note.noteId}
                                          noteTitle = {note.noteTitle}
                                          noteContent = {note.noteContent}
                                          noteShowInfo = {note.noteShowInfo}
                                          imageInfo = {note.imageInfo}
                                          startDate = {note.startDate}
                                          key = {note.noteId}
                                          removeNote = {this.removeNote}
                                          notify = {this.notify}
                                          notifyDeletion = {this.notifyDeletion}
                                          toggleModal = {this.toggleModal}
                                    />
                                )
                            })
                        }
                    </ListGroup>
                </Card>
            </Container>
        )
    }
}