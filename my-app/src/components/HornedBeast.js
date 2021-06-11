import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup'


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOfClicks: 0
        }
    }

    NumClicks = (cardprops) => {
        let value = this.state.NumOfClicks;
        this.setState({ NumOfClicks: value += 1 })

        this.props.handleClose(cardprops);

    }


    render() {

        return (
            <div>
                
                <CardGroup>
                <Card style={{ width: '18rem', height: '35rem' }}>
                    <Card.Img variant="top" src={this.props.image}
                        onClick={() => {
                            this.NumClicks(this.props);
                            
                        }}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Text>

                            ❤️ = {this.state.NumOfClicks}

                        </Card.Text>

                        <Card.Text>
                            {this.props.description}
                            {this.props.keyword} 
                            {this.props.horns}
                        </Card.Text>

                    </Card.Body>
                </Card>
                </CardGroup>
                
            </div>
        )
    }
}

export default HornedBeast;