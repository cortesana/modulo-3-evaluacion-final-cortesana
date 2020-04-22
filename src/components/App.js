import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';
import {fetchData} from '../services/dataAPI';
import Header from './Header';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData: []
      /* inputValue: ''*/
    }
  }

  componentDidMount() {
    fetchData()
    .then(data => {
      this.setState({
        characterData: data.results
      })
    });
  }

  render() {
    const {characterData} = this.state;
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route>
            {/* <SearchBar/> */}
            <CharacterList
            characterData = {characterData} />
          </Route>
          <Route>
            {/* CharacterDetails */}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
