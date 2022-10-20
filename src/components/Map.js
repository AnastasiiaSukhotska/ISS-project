import { useCallback, useRef } from "react";
import { GoogleMap, Marker, MarkerF } from '@react-google-maps/api';

const defaulOptions = {
  panControl: true,
  zoomControl: true,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  fullScreenControll: false,
}
export const Map = ({ center }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function (map) {
    mapRef.current = map;
  }, [])

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])
  return (
    <div className='map-container'>
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaulOptions}
        mapContainerClassName='map'
        classNme='map'
      >
        {center ? <MarkerF position={center} /> : 'Marker'}
      </GoogleMap>
    </div>
  )
}