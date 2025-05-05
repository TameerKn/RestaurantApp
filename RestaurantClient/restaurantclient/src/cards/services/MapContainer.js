import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {} 
    };
  }


  componentDidMount() {
    this.geocodeAddress();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.geocodeAddress();
    }
  }

  geocodeAddress = () => {
    const { address, google } = this.props;

    if (!address) return;

    const geocoder = new google.maps.Geocoder();
    const fullAddress = `${address.houseNumber} ${address.street}, ${address.city}, ${address.state}, ${address.country}`;

    geocoder.geocode({ address: fullAddress }, (results, status) => {
      if (status === 'OK') {
        this.setState({
          mapCenter: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          }
        });
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });

    render() {
        const { mapCenter } = this.state;
        return (
          <Map containerStyle={{width: 780, height: 400, mb: 1, mt:1}}
            google={this.props.google}
            zoom={14}
            center={mapCenter}
          >
          <Marker
          position={mapCenter}
          onClick={this.onMarkerClick}
          name={this.state.selectedPlace.name}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}
        >
        </InfoWindow>
        </Map>
 
        );
      }
    }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAgxngHTQjFCHYaKqCx704I7bvRbMB27fg")
})(MapContainer)