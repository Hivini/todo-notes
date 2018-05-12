import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import NotesSection from "./components/NotesSection";
import Login from "./components/Login";
import Logout from './components/Logout';
import {app} from './config/Config';
import {
    Container,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



class App extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            currentPage: "",
            authenticated: false,
            loading: true
        };
    }

    componentWillMount() {
        document.title = "Home";
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false
                })
            } else {
                this.setState({
                    authenticated: false,
                    loading: false
                })
            }
        })
    }

    componentWillUnmount() {
        this.removeAuthListener();
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

  render() {
      let mainComponent = "";
      switch (this.props.location) {
          case "":
              mainComponent = <Main {...this.props}/>;
              break;
          case "notes":
              mainComponent = this.state.authenticated ? <NotesSection /> : <NotFound/>;
              break;
          case "login":
              // TODO: Add validation in case the user is already logged
              mainComponent = !this.state.authenticated ? <Login/> : <NotFound/>;
              break;
          case "logout":
              mainComponent = <Logout {...this.props}/>;
              break;
          default:
              mainComponent = <NotFound />;
      }

      if (this.state.loading === true) {
          return (
              <Container className="text-center" style={{position:"absolute", top: "25%", left: "10%"}}>
                  <h3>Loading page</h3><br/><br/><br/><br/><br/><br/>
                  <div style={{position: "absolute", top: "30%", left: "47%"}}>
                      <div className="spinner spinner-1"></div>
                  </div>
              </Container>
          )
      }

    return (
        <div className="App">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Todo Notes</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>

                        {this.state.authenticated
                            ? <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/notes">
                                        My notes
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/logout">
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            : <NavItem>
                                <Button href="/login" color="primary">Login</Button>
                            </NavItem>
                        }

                    </Nav>
                </Collapse>
            </Navbar>
            <Container>
                {mainComponent}
                <br/>
                <footer>
                    <p><em>@ 2018 Hivini</em></p>
                </footer>
            </Container>

        </div>

    );
  }
}

export default App;
