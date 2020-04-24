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
      value: ''
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  }
  
  getInputValue(value) {
    this.setState({
      value: value
    })
  }

  renderCharacterDetails(props) {
    const id = props.match.params.id;
    const character = this.state.characterData.find(character =>
    character.id === parseInt(id));
    console.log(character);
    return <CharacterDetails character={character} />
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
    const {characterData, value} = this.state;
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <SearchBar
            getInputValue = {this.getInputValue}
            value = {value}
            />
            <CharacterList
            characterData = {characterData}
            value = {value}
            />
          </Route>
          <Route
            path="/character/:id" 
            render={this.renderCharacterDetails}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
