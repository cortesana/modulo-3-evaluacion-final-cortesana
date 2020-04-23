import React from 'react';
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
      characterData: [],
      inputValue: ''
    };
    this.getInputValue = this.getInputValue.bind(this);
  }
  
  getInputValue(inputValue) {
    this.setState({
      inputValue: inputValue
    })
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
    const {characterData, inputValue} = this.state;
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route>
            <SearchBar
            getInputValue = {this.getInputValue}
            inputValue = {inputValue}
            />
            <CharacterList
            characterData = {characterData}
            inputValue = {inputValue}
            />
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
