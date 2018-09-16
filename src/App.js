import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction'
import MetisMenu from 'react-metismenu'
import MenuComponent from './component/MenuComponent';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          <div className="col-sm-3">
            <MenuComponent />
          </div>
          <div className="col-sm-9" >
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            <button onClick={this.simpleAction}>test redux action</button>
            <pre>simpleReducer: {
              JSON.stringify(this.props)
            }
            </pre>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
