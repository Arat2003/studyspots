import React, { useMemo, useState, useRef, useCallback } from "react";
import {
	GoogleMap,
	Marker,
	// MarkerClusterer,
	InfoWindow,
} from "@react-google-maps/api";

// type LatLngLiteral = google.maps.LatLngLiteral;
// type MapOptions = google.maps.MapOptions;
import "./Map.css";
import Location from "../Location/Location";
import purpleMarker from "../../img/purple_Marker.png";

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
	const [addingReview, setAddingReview] = useState(false);

	const handleMarkerClick = useCallback((marker) => {
		setHighlight(null);
		setTimeout(() => {
			setAddingReview(false);
			setHighlight(marker);
		}, 10);
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
						icon={purpleMarker}
					/>
				))}
				{highlight && (
					<InfoWindow
						position={highlight.position}
						onCloseClick={handleInfoWindowClose}
					>
						<Location
							location={highlight}
							addingReview={addingReview}
							setAddingReview={setAddingReview}
							data={data}
							setData={setData}
						/>
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
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, repellendus? Rerum soluta ipsam ad ea et, officiis culpa totam similique vel quasi cupiditate quo voluptatibus placeat quisquam doloremque omnis fugiat.",
			rating: Math.round(10 * Math.random() * 5) / 10, // Math.random() * 5 will give a random number from 0-5. The 10*num / 10 will round the number to the nearest tenth
			amenities: ["coffee", "bathroom", "outdoors"],
			images: [
				"https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200",
			],
			reviews: [
				{
					user: `User ${i}`,
					id: Math.random() * 999999,
					rating: 1.0,
					comment: `Coffee was ${i}$, too spenny`,
				},
				{
					user: `User ${i + 1}`,
					id: Math.random() * 999999,
					rating: 3.0,
					comment: `Coffee was ${i + 1}$, too asadljslad`,
				},
				{
					user: `User ${i + 2}`,
					id: Math.random() * 999999,
					rating: 5.0,
					comment: `Coffee was ${i + 2}$, too cheap`,
				},
			],
		});
	}
	return randomLocations;
};
