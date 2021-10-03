import './signup.css';
import React, { useContext, useState } from 'react';
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


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default function SignUp() {
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

    // handle change
    const handleChange = (event) => {
        // form validation
        let isFieldValid = true;
        // if (event.target.name == 'name') {
        //     isFieldValid = event.target.value;
        // }
        if (event.target.name == 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

        }
        if (event.target.name == 'password') {
            const isPasswordValid = event.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = (isPasswordValid && isPasswordHasNumber);

        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);

        }
        // console.log(event.target.value)
    }

    // Sign up with email and password
    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    // console.log(res.user);
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = '';
                    newUserInfo.name = res.user.displayName;
                    setUser(newUserInfo);
                    // updateUserName(user.name);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // console.log(errorMessage);
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
}
    // UpdateUser name 
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,

        })
            .then(() => {
                console.log("User name update successfully");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    
    return (
        <div className="sing-up">
            <form onSubmit={handleSubmit}>
                <input onBlur={handleChange} className="form-control" type="text" name="name" placeholder="name" required /><br />
                <input onBlur={handleChange} className="form-control" type="email" name="email" placeholder="demo@gmail.com" required /><br />
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
                    <input className="btn btn-success" type="submit" value="Create an account" />
                </div>
            </form>
            <div className="py-2 text-center">
                <span >Already have an account? <Link to="/login">login</Link></span>
            </div>
            <div>
                {
                    user.success && <p style={{ color: 'green', textAlign: 'center' }}>User created successfully</p>
                }
                {
                    user.error && <p style={{color:'red', textAlign:'center'}}>The email address is already in use by another account.</p>
                }
            </div>
            <div className="text-center">
                <button id="google-signIn">Continue with Google</button>
            </div>
        </div>
    )
}
