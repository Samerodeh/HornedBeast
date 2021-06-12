import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//import CardDeck from 'react-bootstrap/CardDeck';

class SelectedBeast extends React.Component {

    render() {
        return (
            <div>
                  
                <Modal show={this.props.show}>

                    <Modal.Header>

                        <Modal.Title >

                            {this.props.upImage.title}

                        </Modal.Title>

                    </Modal.Header>

                    <Modal.Body>
                    
                        <Card>
                            <Card.Img variant="top" src={this.props.upImage.image} />

                            <Card.Body>


                                <Card.Title>{this.props.upImage.title}</Card.Title>

                                <Card.Text>
                                    {this.props.upImage.description},


                                    {this.props.upImage.keyword},


                                    {this.props.upImage.horns},
                                    

                                </Card.Text>

                            </Card.Body>

                        </Card>
                        

                    </Modal.Body>

                    <Modal.Footer>

                        <Button onClick={this.props.handleClose} variant="info">Close</Button>

                    </Modal.Footer>

                </Modal>
               
            </div >
        );
    }
}

export default SelectedBeast;