import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/Data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      useState: Data,
      show: false,
      UpImage: {}
    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }


  render() {
    return (

      <div>
        <Header />

        <Main
          useState={this.state.useState}
          handleShow={this.handleShow} />

        <Footer />

        <SelectedBeast

          show={this.state.show}
          chandleClose={this.handleClose}
          title={Data.title}
          image={Data.image}
          description={Data.description}

        />

      </div>
    )
  }
}
export default App;