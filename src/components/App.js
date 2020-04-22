import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/App.scss';
import {fetchData} from '../services/dataAPI';
import Header from './Header';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';

class App extends React.Component {
  render() {
    return(
      <Header/>
    );
  }
}

export default App;
