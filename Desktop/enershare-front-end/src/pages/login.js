import {
	Container,
	Button,
	Grid,
	TextField,
	IconButton,
	InputAdornment,
	Typography,
	Card
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState, useEffect } from "react";
import AuthService from '../services/auth';
import { omit } from 'lodash';
// import { ACCESS_TOKEN_NAME, USERNAME } from '../constants/apiConstants';
import './login.css';
import './LoginCard.css';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontSize: 20, // Aumenta la dimensione del testo
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					marginTop: "auto", // Imposta il marginTop a "auto"
				},
			},
		},
	},
});
const Login = () => {
	useEffect(() => {

	}, []);
	//console.log(props)
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPass: false,
		successMessage: null,
	});
	const [errors, setErrors] = useState({});

	const handlePassVisibilty = () => {
		setValues({
			...values,
			showPass: !values.showPass,
		});
	};
	const handleChange = (e) => {
		//To stop default events    
		e.persist();
		const { id, value } = e.target
		validate(id, value);

		setValues({
			...values,
			[id]: value,
		})
		console.log(values)
		// setState(prevState => ({
		//     ...prevState,
		//     [id]: value
		// }))
		//setState({disabled:false})
	}
	const validate = (name, value) => {
		//A function to validate each input values
		switch (name) {
			case 'email':
				if (value.length <= 0) {
					// we will set the error state
					setErrors({
						...errors,
						email: '*required',
						// disabledUsername:true
					})
				} else {
					// set the error state empty or remove the error for username input
					//omit function removes/omits the value from given object and returns a new object
					let newObj = omit(errors, "email");
					//setState({disabledUsername:false})
					setErrors(newObj);

				}
				break;

			case 'password':
				if (value.length <= 0) {
					setErrors({
						...errors,
						password: '*required',
						// disabledPassword:true
					})
				} else {
					let newObj = omit(errors, "password");
					//setState({disabledPassword:false})
					setErrors(newObj);
				}
				break;

			default:
				break;
		}
	}
	// function isValidEmail(email) {
	// 	const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	// 	return expression.test(String(email).toLowerCase());
	//   }
	const handleSubmitClick = (e) => {
		console.log("send data")
		e.preventDefault();
		if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
			const payload = {
				"email": values.email,
				"password": values.password,
			}

			AuthService.login(payload)
				.then((response) => {
					//console.log(response)
					if (response.status === 200 || response.status === 201) {
						setValues({
							...values,
							successMessage: response.data.message,
						})
						redirectToHome();
					}
					else {
						setValues({
							...values,
							successMessage: "email or password error",
						});
					}
					sessionStorage.setItem("ACCESS_TOKEN_NAME", response.data.token);
				})
				.catch(function (error) {
					console.log(error);
					setValues({
						...values,
						successMessage: "email or password error",
					})
					//props.showError("Username does not exists");
				});
		}
		else {

		}
	}
	const redirectToHome = () => {
		console.log("redirect")

		navigate('/')
		//this.props.history.push('/')
	}


	return (
		<ThemeProvider theme={theme}>
			<div style={{ minHeight: "100vh", backgroundColor: '#343b41', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Container style={{ minHeight: "80vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
					<Card variant="outlined" sx={{ padding: '50px', width: '100%', maxWidth: '600px', backgroundColor: '#212529' }}>
						<Grid container direction="column" spacing={4}>
							<Grid item>
								<Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
									<img src='/Logo_Enershare.png' alt='logo' style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
								</Typography>
							</Grid>
							<Grid item>
								<div className="card">
									<h3>Welcome Back!</h3>
									<p>Sign in to access your account and manage your preferences.</p>
								</div>
							</Grid>
							<Grid item>
								<form>
									<Grid container direction="column" spacing={4}>
										<Grid item>
											<TextField
												type="email"
												fullWidth
												label="Email"
												placeholder="Enter your email"
												variant="outlined"
												focused
												required
												id="email"
												margin="normal"
												value={values.email}
												onChange={handleChange}
												InputProps={{
													style: { color: '#f0f8ff' }
												}}
												InputLabelProps={{
													style: { color: '#f0f8ff' }
												}}
												FormHelperTextProps={{
													style: { color: '#f0f8ff' },
												}}
											/>
											{errors.email && <span className="danger">{errors.email}</span>}
										</Grid>
										<Grid item>
											<TextField
												type={values.showPass ? "text" : "password"}
												fullWidth
												label="Password"
												placeholder="Enter your password"
												variant="outlined"
												required
												id="password"
												focused
												value={values.password}
												onChange={handleChange}
												InputProps={{
													style: { color: '#f0f8ff', borderColor: '#f0f8ff' },
													endAdornment: (
														<InputAdornment position="end">
															<IconButton
																onClick={handlePassVisibilty}
																aria-label="toggle password"
																edge="end"
																style={{ color: '#f0f8ff' }}
															>
																{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
															</IconButton>
														</InputAdornment>
													),
												}}
												InputLabelProps={{
													style: { color: '#f0f8ff' },
												}}
												FormHelperTextProps={{
													style: { color: '#f0f8ff' },
												}}
											/>
											{errors.password && <span className="danger">{errors.password}</span>}
										</Grid>
										<Grid item>
											<Button
												onClick={handleSubmitClick}
												style={{ 'background': 'linear-gradient(to right, #661aff, #5717d6)', color: '#ffffff' }}
												disabled={!values.email || !values.password}
												type="submit"
												fullWidth
												variant="contained"
											>
												Sign In
											</Button>
										</Grid>
										<Grid item>
											<Typography sx={{ color: '#f0f8ff' }}>
												Need an account? <a href="/sign_up" style={{ color: '#5717d6' }}>Sign Up</a>
											</Typography>
										</Grid>
										{values.successMessage && (
											<Grid item>
												<div className="alert alert-success" style={{ maxWidth: "100%", display: values.successMessage ? 'block' : 'none' }} role="alert">
													{values.successMessage}
												</div>
											</Grid>
										)}
									</Grid>
								</form>
							</Grid>
						</Grid>
					</Card>
				</Container>
			</div>
		</ThemeProvider>
	);
};
export default Login;