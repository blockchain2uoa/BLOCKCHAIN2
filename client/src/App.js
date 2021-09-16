import './App.css';
import Toolbar from './Toolbar';
import Upload from './Upload';
import ReviewPDF from './ReviewPDF';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  };

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  };

  componentWillMount() {
      this.callAPI();
  };
  render(){
    return (
      <div className="App">
        {this.state.apiResponse}
        <Toolbar/>
        <Upload/>
        <ReviewPDF/>
      </div>
    );
  }

}

export default App;
