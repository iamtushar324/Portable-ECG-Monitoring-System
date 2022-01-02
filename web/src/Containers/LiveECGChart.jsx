import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import Heading from "../Components/Heading";

export default function LiveECGChart({ data }) {
	const width = window.innerWidth;
	return (
		<MainWrapper>
			<Heading>Live ECG</Heading>

			<LineChart width={width} height={400} data={data}>
				<Line type="monotone" dataKey="v" stroke="#8884d8" dot={<></>} />
				<CartesianGrid stroke="#444" />
			</LineChart>
		</MainWrapper>
	);
}
const MainWrapper = styled.div``;
