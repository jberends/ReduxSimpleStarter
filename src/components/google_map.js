import React, {Component} from 'react';

const API_KEY = 'AIzaSyCYTa9QyvGdAzFY_J-DLRZaNfn5RtzwN8Y';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lon: this.props.lon
            }
        })
    }

    render() {
        // this.refs.map  will refer to this div element somewhere else
        return <div ref="map" />;
    }
}


export default GoogleMap