import React, {Component} from 'react';
// import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {DataTable} from '../DataTable/DataTable';
import FirebaseService from '../../services/FirebaseService';


const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});



class App extends Component {
  state = {
    data: []
};

componentDidMount() {
    FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
}

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            My Awesome React App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DataTable data={this.state.data}/>
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

export default App;


// Passo 4: 
// https://blog.tecsinapse.com.br/criando-uma-aplica%C3%A7%C3%A3o-react-firebase-passo-a-passo-9ebc5a8a442f