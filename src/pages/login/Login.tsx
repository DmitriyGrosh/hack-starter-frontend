import {TextField} from "@mui/material";

export const Login = () => {
	return (
		<>
			<TextField variant="outlined" label="Email" type="email" />
			<TextField variant="outlined" label="Password" type="password" />
		</>
	);
}
