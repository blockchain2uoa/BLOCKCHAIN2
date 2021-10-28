import Toolbar from './components/toolbar/Toolbar';
import About from './components/about/About';
import Verify from './components/verify/VerifyPDF'
import Upload from './components/upload/Upload'

import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//const HEROKUENDPOINT = "https://blockchain2.herokuapp.com";
const LOCALENDPOINT = "http://localhost:9000";
const ENDPOINT = LOCALENDPOINT;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "", 
      dbResponse: ""

    }
  };
  
  callAPI() {
      fetch(ENDPOINT + "/API")
          .then(res => {res.text(); console.log(res);})
          .then(res => this.setState({ apiResponse: res }));
  };

  // callDB() {
  //   fetch(ENDPOINT + "/testDB")
  //       .then(res => {res.text(); console.log(res);})
  //       .then(res => this.setState({ dbResponse: res }))
  //       .catch(err => err);
  // };

  // componentWillMount() {
  //     this.callAPI();
  //     // this.callDB();
  // };

  render(){
    return (
      <Router>
        <div className="App">
          <Toolbar/>
          <Switch>
            <Route path="/" exact component={Upload}/>
            <Route path="/verify" exact component={Verify}/>
            <Route path="/about" exact component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
