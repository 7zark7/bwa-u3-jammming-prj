import React from 'react';
import './Track.css';
// type at step 28 says: Create a searchBar class? What on earth?
class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  };


  renderAction(){
    if(this.props.isRemoval){
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }else{
      return <a className="Track-action" onClick={this.addTrack} >+</a>
    }
  }

  addTrack(event){
    this.props.onAdd(this.props.track);
    //console.log(this.props.onAdd);
    //console.log(this.props.track);
    //
    //this.props.onAdd = this.props.track;
  };

  removeTrack(event){
    this.props.onRemove(this.props.track);
    //console.log('Add this track: ');
    //console.log(this.props.track);
    // add this to playlist
    //this.setState({playlistTracks:this.props.track });
    //console.log(this.props.playlistTracks);
    //console.log(this.props.children);

  }

}

export default Track;
