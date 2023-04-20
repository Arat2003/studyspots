import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./components/Register/Register"
import Login from "./components/Login/Login";
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

			<Route
				path="login"
				element={<Login />}
			/>

		</Routes>
	);
}

export default App;
