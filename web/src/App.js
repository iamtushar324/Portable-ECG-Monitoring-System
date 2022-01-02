import { useEffect, useState } from "react";
import styled from "styled-components";
import HeartRate from "./Containers/HeartRate";
import LiveECGChart from "./Containers/LiveECGChart";
const { io } = require("socket.io-client");

function App() {
	const [ECGData, setECGData] = useState([]);
	const [heartRate, setHeartRate] = useState(70);
	useEffect(() => {
		async function socketSetup() {
			const socket = await io("http://localhost:4204");
			socket.on("heartRate", (data) => {
				console.log(typeof data);
				if (typeof data === "number") {
					setHeartRate(data);
				}
			});
			socket.on("ecg", (data) => {
				console.log(typeof data);
				if (typeof data === "object") {
					setECGData(data);
				}
			});
			console.log(socket);
		}
		socketSetup();
	}, []);
	return (
		<StyledApp>
			<Heading>Tushar's Live Health Monitoring</Heading>
			<HeartRate data={heartRate} />
			<LiveECGChart data={ECGData} />
		</StyledApp>
	);
}
const StyledApp = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Heading = styled.h3``;

export default App;
