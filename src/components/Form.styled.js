import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: stretch;
	padding: 1rem;
`;

const Input = styled.input`
	font-size: 20px;
	padding: 0.5rem;
	border: 2px solid #555;
	border-radius: 1rem;
	color: black;
`;

const Button = styled.button`
	margin-left: 0.5rem;
	font-size: 20px;
	background-color: white;
	padding: 0.5rem;
	border: 2px solid #555;
	border-radius: 1rem;
	color: black;

	&:hover {
		color: #555;
	}
`;

export { Form, Input, Button };
