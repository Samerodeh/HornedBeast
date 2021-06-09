import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOfClicks: 0
        }
    }

    NumOfClicks = () => {
        let value = this.state.NumOfClicks;
        this.setState({ NumOfClicks: value += 1 })

        this.props.handleShow();
    }
    

    render() {

        return (
            <div>
                <Card onClick={this.upTheImage} style={{ width: '18rem', height: '35rem' }}>
                    <Card.Img variant="top" src={this.props.image} onClick={this.NumOfClicks} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ = {this.state.NumOfClicks}
                        </Card.Text>

                        <Card.Text>
                            {this.props.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;