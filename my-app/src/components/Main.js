/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-mixed-operators */
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            show: 0,
            horns: 0
        }
    }

    filter = (event) => {
        this.setState({ horns: event.target.value });
    }
    render() {
        return (
            <div>
                      <Form>
                    
                    <Form.Group controlId="chooseHorns">
                        <Form.Label>Choose Horns</Form.Label>
                        <Form.Control as="select" onChange={(event) => this.filter(event)}
                            aria-label="Choose Numbers Of Horns">


                            <option value="true" checked> Choose Numbers Of Horns </option>

                            <option value="1">one</option>
                            <option value="2">two</option>
                            <option value="3">three</option>
                            <option value="100">more</option>
                            <option value="0">all</option>



                        </Form.Control>

                    </Form.Group>
                    
                </Form>
                <Row xs={1} md={5}>
              

                    


                    {Data.map((value) => {
                        return (
                            <>


                                {(Number)(this.state.horns) === Number(value.horns) && (

                                    < HornedBeast

                                        title={value.title}
                                        description={value.description}
                                        image={value.image_url}
                                        keyword={value.keyword}
                                        horns={value.horns}
                                        handleClose={this.props.handleClose}

                                    />

                                ) || (Number)(this.state.horns) === 0 && (

                                    < HornedBeast

                                        title={value.title}
                                        description={value.description}
                                        image={value.image_url}
                                        keyword={value.keyword}
                                        horns={value.horns}
                                        handleClose={this.props.handleClose}

                                    />

                                )}

                            </>
                        );
                    })}
                </Row>
            </div>
        );
    }
}

export default Main;



