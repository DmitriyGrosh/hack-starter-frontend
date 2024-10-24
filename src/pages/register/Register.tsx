import {TextField} from "@mui/material";

export const Register = () => {
	return (
		<>
			<TextField variant="outlined" label="Username" />
			<TextField variant="outlined" label="Email" type="email" />
			<TextField variant="outlined" label="Password" type="password" />
		</>
	)
}
