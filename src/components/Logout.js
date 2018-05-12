import React, {Component} from 'react';
import "../App.css";
import { app } from '../config/Config';
import { Container } from 'reactstrap';

export default class Logout extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,

        }
    }

    componentWillMount() {
        app.auth().signOut().then((user) => {
            this.setState({redirect: true})
        })
    }

    render() {
        if (this.state.redirect === true) {
            window.location.href = "/"
        }

        return(
            <Container style={{textAlign: "center", position:"absolute", top: "25%"}}>
                <h3>Logging out</h3><br/><br/><br/><br/><br/><br/>
                <div style={{position: "absolute", top: "30%", left: "46%"}}>
                    <div class="spinner spinner-1"></div>
                </div>
            </Container>
        )
    }
}