import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Toolbar from './components/toolbar/Toolbar';
import About from './components/about/About';
import Verify from './components/verify/VerifyPDF'
import Upload from './components/upload/Upload'
import Login from './components/login/Login';
import useToken from './components/login/useToken'
import Profile from './components/profile/Profile'

//const HEROKUENDPOINT = "https://blockchain2.herokuapp.com";
const LOCALENDPOINT = "http://localhost:9000";
const ENDPOINT = LOCALENDPOINT;

function App() {

  const { token, setToken } = useToken();

  const [apiResponse, getapiResponse] = useState("")

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
      <Router>
        <div className="App">
          <Toolbar/>
          <Switch>
            <Route path="/" exact component={Upload}/>
            <Route path="/verify" exact component={Verify}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/about" exact component={About}/>
          </Switch>
        </div>
      </Router>
    );
}


export default App;

/*
  // const [token, setToken ] = useState("")


  async function callAPI(){
    fetch(ENDPOINT + "/API")
        .then(res => {res.text(); console.log(res);})
        .then(res => getapiResponse(res));
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

*/
