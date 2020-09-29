import React, { Component } from "react";
import {
    Icon,
    Accordion,
    AccordionItem,
    Container,
    Dropdown,
    Button
} from 'uikit-react';
import {
    Alert
} from "shards-react";
import 'wingcss';
import './Main.css';


class Main extends Component {
    render() {
        return (
            <div>
                <h1>VISHAL DUBEY</h1>
                <h4>Student, Software Engineer, Food Enthusiast</h4>
                <Icon options="menu" button/>
                <Button width="1-2">Hi</Button>
                <Accordion options="multiple: true">
                    <AccordionItem  title="Item 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    <AccordionItem  title="Item 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    <AccordionItem  title="Item 3"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </Accordion>
                <Container> <Button>Dropdown</Button> <Dropdown>Just look at that clickable!</Dropdown> </Container>
                <Alert theme="primary">
                    Alert - Primary Theme (default) -{" "}
                    <a className="alert-link" href="#">
                        Example Link
                    </a>
                </Alert>
            </div>
        );
    }
}
 
export default Main;