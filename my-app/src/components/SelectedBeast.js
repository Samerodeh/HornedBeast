import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

                        <img width={480} src={this.props.upImage.image} alt={this.props.upImage.title} />
                        <p>{this.props.description} {this.props.keyword} {this.props.horns}</p>


                    </Modal.Body>

                    <Modal.Footer>

                        <Button onClick={this.props.handleClose} variant="info">Close</Button>

                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}

export default SelectedBeast;