import "firebase/auth";
import "firebase/compat/auth";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./login.css";

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const history = useHistory();

    // form submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError("");
            setSuccess('Login successfully!');
            await login(email, password);

            history.push('/');
        } catch (error) {
            setSuccess("");
            setError(`Failed to create an account.`);
        }
    };

    return (
        <div className="login">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                />
                <br />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                <br />
                <br />
                <div className="text-center">
                    <input className="btn btn-outline-success" type="submit" value="Login" />
                </div>
            </form>
            <div className="py-2 text-center">
                <span>
                    Don't have an account? <Link to="/signup">Create an account?</Link>
                </span>
            </div>
            <div></div>
        </div>
    );
}
