import React from 'react';
import '../TrackList/TrackList.css';
import TrackList from '../TrackList/TrackList.js';

class PlayList extends React.Component{
  constructor(props){
    super(props);
    // this calls the function then sets the value so
    // it can be returned back to the render method
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'}
                    onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );

  }

}

export default PlayList;
