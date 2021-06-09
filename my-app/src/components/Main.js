import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Main extends React.Component {

    render() {
        return (
            <div>

                <Form>
                    <Form.Group controlId="chooseHorns">
                        <Form.Label>Choose Horns</Form.Label>
                        <Form.Control as="select">
                            <option>all</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>more</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>

                </Form>


                <CardGroup>

                    {Data.map((value) => {
                        return (
                            < HornedBeast

                                title={value.title}
                                description={value.description}
                                image={value.image_url}
                                keyword={value.keyword}
                                horns={value.horns}
                                handleClose={this.props.handleClose}

                            />)
                    })}

                </CardGroup>


            </div>
        )
    }
}

export default Main;