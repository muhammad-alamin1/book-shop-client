import "firebase/auth";
import "firebase/compat/auth";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./signup.css";

export default function SignUp() {
    const { signup } = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [loading, setLoading] = useState();

    const history = useHistory();

    // Sign up with email and password
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return setError(`Password does not match.!`)
        }

        try {
            setLoading(true);
            setError("");
            setSuccess('Successfully create an account.!');

            await signup(email, password, username);

            history.push('/');
        } catch (error) {
            setLoading(false);
            setSuccess("");
            setError(`Failed to create an account.`);
        }
    };

    return (
        <div className="sing-up">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="name (Unique)*"
                    required
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="demo@gmail.com *"
                    required
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password *"
                    required

                /><br />
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password *"
                    required

                />
                <br />
                <br />
                <div className="text-center">
                    <button
                        className="btn btn-outline-success"
                        type="submit"
                        disabled={loading}
                    >Create an account</button>
                </div>
            </form>
            <div className="py-2 text-center">
                <span>
                    Already have an account? <Link to="/login">login</Link>
                </span>
            </div>
            <div></div>
        </div>
    );
}
