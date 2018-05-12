import React, {Component} from 'react';
import { app} from '../config/Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    Card,
    CardTitle,
} from 'reactstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        Login.notify = Login.notify.bind(this);
    }

    componentWillMount() {
        document.title = "Login";
    }

    static notify(message) {
        toast.info("" + message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value, password: this.state.password})
    }

    handlePassChange(event) {
        this.setState({email: this.state.email, password: event.target.value})
    }

    authWithEmailPassword(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        app.auth().fetchProvidersForEmail(email)
            .then((providers) => {
                if (providers.length === 0) {
                    return app.auth().createUserWithEmailAndPassword(email, password)
                } else if (providers.indexOf("password") === -1) {
                    Login.notify("Sorry, there was an error, try with another account");
                } else {
                    return app.auth().signInWithEmailAndPassword(email, password)
                }
            })
            .then((user) => {
                if (user && user.email) {
                    // TODO laskdjfasd
                }
                this.setState({redirect: true});
            })
            .catch((error) => {
                Login.notify(error);
                this.setState({email: "", password: ""})
            })
    }

    render() {
        if (this.state.redirect === true) {
            window.location.href = "/notes"
        }
        return (
            <Container><br/>
                <ToastContainer/>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Form onSubmit={(event) => { this.authWithEmailPassword(event)}}>
                        <Card body className="text-center">

                            <img src="https://www.jayamagul.lk/wp-content/themes/jayamagul/assets/images/sprites/login.png" className="mx-auto" alt="Login" width="120"/><br/>
                            <CardTitle>Register or Login</CardTitle>

                            <FormGroup>
                                <Input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Password"/>
                            </FormGroup>
                            <Button color="info" type="submit" value="Log in">Login</Button>
                        </Card>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}