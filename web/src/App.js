import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./components/Register/Register"
function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
			</Route>
			<Route
				path="register"
				element={<Register />}
			/>

		</Routes>
	);
}

export default App;
