import styled from "styled-components";
import BeatingHeart from "../Components/BeatingHeart";
import Heading from "../Components/Heading";

export default function HeartRate({ data }) {
	return (
		<MainWrapper>
			<Heading> Heart Rate </Heading>
			<Content>
				<BeatingHeart />
				<BPM>
					{data} <span> / bpm</span>
				</BPM>
				&nbsp; &nbsp;
			</Content>
		</MainWrapper>
	);
}
//styled
const MainWrapper = styled.div``;
const Content = styled.div`
	padding: 20px 40px;
	position: relative;
	transform: translateX(-50%);
`;
const BPM = styled.span`
	font-size: 35px;
	font-weight: bold;
	position: absolute;
	top: 20px;
	margin-left: 40px;
	width: 200px;

	span {
		font-size: 20px;
		font-weight: normal;
	}
`;
