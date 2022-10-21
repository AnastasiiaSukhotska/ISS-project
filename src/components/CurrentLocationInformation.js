export const CurrentLocationInformation = ({ center }) => {
    
    return (
        <div className='current-location-container'>
            <h2>ISS is now located at:</h2>
            <div> {`latitude: ${center.lat}, longtitude: ${center.lng}`}</div>
        </div>
    )
}