import './App.css';
import Toolbar from './Toolbar';
import Upload from './Upload';
import ReviewPDF from './ReviewPDF';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "", 
      dbResponse: ""

    }

  };

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  };

  callDB() {
    fetch("http://localhost:9000/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        .catch(err => err);
  };

  componentWillMount() {
      this.callAPI();
      this.callDB();
  };
  render(){
    return (
      <div className="App">
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.dbResponse}</p>
        <Toolbar/>
        <Upload/>
        <ReviewPDF/>
      </div>
    );
  }

}

export default App;
