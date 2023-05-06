import './App.css';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
class MapContainer extends Component{
  render(){
    return(
      <Map
      google={this.props.google}
      style={{
        width:"100%",height:"100%"
      }}
      zoom={10}
      initialCenter={
        {
          lat:28.704060,
          lng:7.102493
        }
      }/>
    );
  }
}
export default GoogleApiWrapper({apiKey:"AIzaSyDValEWSwm1kgfVd4l8CJwoQJBRFEVeE5k"})
(MapContainer)

 