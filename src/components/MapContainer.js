import { CurrentLocationInformation } from "./CurrentLocationInformation"
import { useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { Map } from "./Map"
import { ISS_API } from "../api/API";

export const MapContainer = () => {

    const [center, setCenter] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCMw-qmPiIoRy7gQqaDOenf4m8qXC86tQo"
    });

    async function getLocationData() {
        let data = await ISS_API.getLocationInformation();
        setCenter({ lat: Number(data.iss_position.latitude), lng: Number(data.iss_position.longitude) });
        setTimeout(getLocationData, 5000);
    }

    useEffect(() => {
        getLocationData();
    }, []);

    return (
        <div className='map-content-container'>
            {center ? <CurrentLocationInformation center={center} /> : 'Getting information...'}
            {isLoaded && center ? <Map center={center} /> : 'Map loading...'}
        </div>
    )
}