import React from 'react';
//import logo from './logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList.js';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:[
        {name: 'Tiny Dancer',artist: 'Elton John',album: 'Madman Across the Water'},
        {name: 'Tiny Dancer',artist: 'Elton John',album: 'Madman Across the Water'},
        {name: 'Tiny Dancer',artist: 'Elton John',album: 'Madman Across the Water'},
        {name: 'Tiny Dancer',artist: 'Elton John',album: 'Madman Across the Water'}
      ],
      playlistName: 'Daves List',
      playlistTracks: [{
          name: 'smooth criminal',
          artist: 'Michael Jackson',
          album: 'Thriller'
        }]

    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);


  }

  render(){
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

        <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                                  onAdd={this.addTrack}
                                  onRemove={this.removeTrack}/>
            <PlayList playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onNameChange = {this.updatePlaylistName}
                      onSave = {this.savePlayList}
                      />
          </div>
        </div>
      </div>
    );
  }

  search(term){
    console.log(term);
  }


  savePlayList(){
    const trackURIs = this.state.playlistTracks.map(track=>track.uri);
    // add code later
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(!tracks.includes(track)){
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  };

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    // Step 49 - filter it out of playlistTracks
    if(tracks.includes(track)){
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
      // Step 49 - Set the new state of the playlist.
      this.setState({playlistTracks: tracks});
    }
  }

  updatePlaylistName(name){
    this.setState({playlistName:name});
  }

}

export default App;
