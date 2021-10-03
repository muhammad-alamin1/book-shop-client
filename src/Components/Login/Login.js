import './login.css';
import React, { useContext } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { Link } from 'react-router-dom';
import { userContext } from './../../App';
import firebaseConfig from './../FirebaseConfig/Firebase.config';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import 'firebase/compat/auth';


export default function Login() {
    const [user, setUser] = useContext(userContext);
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChange = (event) => {
        let isFieldValid = true;
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);

        }
    }
    const handleSubmit = (event) => {
        // Sign In
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((response) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log("Sign in user ", response.user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        event.preventDefault();
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input onBlur={handleChange} className="form-control" type="email" name="email" placeholder="email" required /><br />
                <Input
                    onBlur={handleChange}
                    className="form-control" type="password" name="password" placeholder="password" required
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                /><br /><br />
                <div className="text-center">
                    <input className="btn btn-success" type="submit" value="Login" />
                </div>
            </form>
            <div className="py-2 text-center">
                <span >Don't have an account? <Link to="/signup">Create an account?</Link></span>
            </div>
            <div>
                {
                    user.success && <p style={{color:'green', textAlign:'center'}}>User login successfully</p>
                }
            </div>
        </div>
    )
}
