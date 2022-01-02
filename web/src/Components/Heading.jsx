import styled from "styled-components";
export default function Heading(props) {
	return <MainWrapper>{props.children}</MainWrapper>;
}

const MainWrapper = styled.h3`
	font-weight: 600;
	text-align: center;
`;
