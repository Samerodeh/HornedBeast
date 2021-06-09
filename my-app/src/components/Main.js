import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';




class Main extends React.Component {
    render() {
        return (
            <div>
                <CardGroup>

                    {this.props.useState.map((items, index) => {
                        return (<
                            HornedBeast title={items.title}
                            description={items.description}
                            image={items.image_url}
                            handleShow={this.props.handleShow}

                        />)
                    })}
                </CardGroup>


            </div>
        )
    }
}

export default Main;