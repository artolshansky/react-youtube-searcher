import './App.css';
import React from 'react';
import Request from 'react-http-request';
import SearchForm from './SearchForm';
import Result from './Result';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as getQuery from '../actions/GetQuery'
let Router = require('react-router-dom').BrowserRouter;

class App extends React.Component {
  submit(query) {
    this.props.actions.getQuery(query);
  }

  render() {
    const query = this.props.query.query;
    const request = `https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&q=${query}+&key=AIzaSyCH2MCF0WEy93XpxrRmxfF6FEqxxwVsLFI`;
    
    return (
      <div className="container">
        <SearchForm submit={this.submit.bind(this)}/>
        <Request
          url={request}
          method='get'
          accept='application/json'
          verbose={true}>
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div className="center">
                          <div className="loader"></div>
                       </div>;
              } else {
                return (
                  <Router>
                    <div>
                      <Result result={result} />
                    </div>
                  </Router>
                )
              }
            }
          }
        </Request>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(getQuery, dispatch) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);