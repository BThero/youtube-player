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
	border-right-width: 1px;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
	color: black;

	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	font-size: 20px;
	background-color: white;
	padding: 0.5rem;
	border: 2px solid #555;
	border-left-width: 1px;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	color: black;

	&:hover {
		color: #555;
	}
`;

export { Form, Input, Button };
