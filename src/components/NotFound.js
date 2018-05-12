import React, {Component} from 'react';
import {Container} from 'reactstrap';

export default class NotFound extends Component {
    componentWillMount() {
        document.title = "Not Found 404";
    }

    render() {
        return (
            <Container>
                <h1 align="center">Page not found</h1>
            </Container>
        )
    }
}