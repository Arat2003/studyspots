import React, {
	useMemo,
	useState,
	useEffect,
	useRef,
	useCallback,
} from "react";
import {
	GoogleMap,
	Marker,
	MarkerClusterer,
	InfoWindow,
} from "@react-google-maps/api";

// type LatLngLiteral = google.maps.LatLngLiteral;
// type MapOptions = google.maps.MapOptions;

import Markers from "./Markers";
import "./Map.css";
import Location from "../Location/Location";

const Map = () => {
	const mapRef = useRef();

	// coordinates of center of usc upc
	const center = useMemo(
		() => ({ lat: 34.02127561489714, lng: -118.2866354425022 }),
		[]
	);

	// map options
	const options = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
			mapId: "f3947d79eba2c6f", // add 6d4eef745a305731 for dark mode
		}),
		[]
	);

	const onLoad = useCallback((map) => (mapRef.current = map), []);
	const [data, setData] = useState(generateRandomData(center));
	const [highlight, setHighlight] = useState(null);

	const handleMarkerClick = useCallback((marker) => {
		setHighlight(marker);
	}, []);

	const handleInfoWindowClose = useCallback(() => {
		setHighlight(null);
	}, []);

	return (
		<GoogleMap
			zoom={15}
			center={center}
			mapContainerClassName="map-container"
			options={options}
			ref={mapRef}
			onLoad={onLoad}
		>
			<>
				{data.map((location) => (
					<Marker
						key={location.id}
						position={location.position}
						onClick={() => handleMarkerClick(location)}
					/>
				))}
				{highlight && (
					<InfoWindow
						position={highlight.position}
						onCloseClick={handleInfoWindowClose}
					>
						<Location location={highlight} />
					</InfoWindow>
				)}
			</>
		</GoogleMap>
	);
};

export default Map;

// HARD CODED VALUES
// CHANGE WHEN BACKEND IS CONNECTED
const generateRandomData = (position) => {
	const randomLocations = [];
	for (let i = 0; i < 100; i++) {
		const direction = Math.random() < 0.5 ? -2 : 2;
		let newLat = position.lat + Math.random() / direction;
		let newLng = position.lng + Math.random() / direction;
		randomLocations.push({
			id: i,
			name: `po${i}p`,
			address: `west ${i}th street`,
			lat: newLat,
			lng: newLng,
			position: { lat: newLat, lng: newLng },
		});
	}
	return randomLocations;
};

// const Map = () => {
// 	const [map, setMap] = useState();
// 	const ref = useRef();

// 	const mapOptions = useMemo(
// 		() => ({
// 			mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID,
// 			center: { lat: 34.02127561489714, lng: -118.2866354425022 },
// 			zoom: 15,
// 			disableDefaultUI: true,
// 		}),
// 		[]
// 	);

// 	// Creates an instance of the map
// 	useEffect(() => {
// 		setMap(new window.google.maps.Map(ref.current, mapOptions));
// 	}, [mapOptions]);

// 	return (
// 		<>
// 			<div
// 				ref={ref}
// 				id="map"
// 				className="map-container"
// 			/>
// 			{map && <Markers map={map} />}
// 		</>
// 	);
// };
