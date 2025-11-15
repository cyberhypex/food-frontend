import { useState } from "react";
import api from "../axios";

export default function InputForm({ setIsOpen }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignUp ? "signUp" : "login";

        try {
            // ✅ Correct API call (matches backend route /user/login or /user/signUp)
            const res = await api.post(`/user/${endpoint}`, { email, password });

            // ✅ Save user & token to localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // ✅ Close modal properly
            setIsOpen(false);

            console.log("Response:", res.data);
        } catch (err) {
            console.log("Error:", err);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-control">
                <label>Email</label>
                <input
                    type="email"
                    className="input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Password</label>
                <input
                    type="password"
                    className="input"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">
                {isSignUp ? "Sign Up" : "Login"}
            </button>

            {error && <h6 className="error">{error}</h6>}

            <div>
                <p
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => setIsSignUp(!isSignUp)}
                >
                    {isSignUp
                        ? "Already have an account? Login"
                        : "Create a new account"}
                </p>
            </div>
        </form>
    );
}
