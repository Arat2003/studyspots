import React, { useState } from "react";
// import { Wrapper } from "@googlemaps/react-wrapper";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map.js";

// const Home = () => {
// 	return (
// 		<Wrapper
// 			apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
// 			version="beta"
// 			libraries={["marker"]}
// 		>
// 			<Map />
// 		</Wrapper>
// 	);
// };

const Home = () => {
	const [libraries] = useState(["places"]);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return <Map />;
};

// const Home = () => {
// 	const { isLoaded } = useJsApiLoader({
// 		id: "google-map-script",
// 		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
// 	});

// 	return isLoaded ? <Map /> : <div>Loading...</div>;
// }

export default Home;
