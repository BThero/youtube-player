import styled from 'styled-components';

const UL = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	align-items: stretch;
`;

const LI = styled.li`
	border: 2px solid ${({ active }) => (active ? 'magenta' : 'white')};
	border-radius: 1rem;
	padding: 0.5rem;

	&:hover {
		border-color: #555;
	}
`;

const Div = styled.div`
	display: flex;
	margin-top: 1rem;
	align-items: center;
	justify-content: space-between;
`;

export { UL, LI, Div };
