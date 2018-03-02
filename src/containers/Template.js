import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton';
import Router from '../routes'

injectTapEventPlugin()

export default class Template extends Component {

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <header>
            <h1>Tic-Tac-Toe</h1>
            <RaisedButton
              label={'Test Button'}
              primary={true}
              onTouchTap={() => alert('I work') }
            />
          </header>
          <main>
            <Router/>
          </main>
          <footer>
          </footer>
        </div>
      </MuiThemeProvider>
    )
  }
}
