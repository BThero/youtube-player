import styled from 'styled-components';

const UL = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	align-items: center;
`;

const LI = styled.li`
	border: 1px solid white;
	border-radius: 1rem;
	padding: 0.5rem;

	&:hover {
		border-color: #555;
		cursor: pointer;
	}
`;

const Div = styled.div`
	display: flex;
	margin-top: 1rem;
	align-items: center;
	justify-content: space-between;
`;

export { UL, LI, Div };
