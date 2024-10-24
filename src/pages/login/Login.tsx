import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();

	const onSubmit = () => {
		localStorage.setItem("auth", JSON.stringify({ isAuth: true }))

		navigate("/")
	}

	return (
		<form onSubmit={onSubmit}>
			<TextField variant="outlined" label="Email" type="email" />
			<TextField variant="outlined" label="Password" type="password" />
			<Button type="submit" variant="contained">Submit</Button>
		</form>
	);
}
