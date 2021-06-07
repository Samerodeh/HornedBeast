import React from 'react';

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
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt={this.props.keyword} onClick={this.NumOfClicks} />
                <p> {this.props.description}</p>
                <p> {this.state.NumOfClicks} </p>
            </div>
        )
    }
}



export default HornedBeast;


