import { useState, useEffect } from 'react';
import Places from './Places.jsx';


export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places')
      const resData = await response.json();
      console.log(resData);
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching places...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
