import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import ElementContainer from "../../components/ElementContainer";
const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            console.log(user)
            navigate("/")
        }
        catch (error) {
            const errorMessage = (error as Error).message
            console.log(errorMessage)

        }
    }
    return (
        <ElementContainer>
            <form className="form-sign sign-up-form " onSubmit={onSubmit}>
                <div className="form-sign-wrapper">
                    <div className="form-sign-container">
                        <div className="form-sign-content">
                            <label htmlFor="email-address">Email Address</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                required placeholder="Email address" />
                        </div>
                        <div className="form-sign-content">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                                required placeholder="Create your password" />
                        </div>
                        <button type="submit">Sign Up</button>

                        <div>
                            <p>
                                Already have an account? {" "}
                                <NavLink to="/signin">
                                    Sign In
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </ElementContainer>
    );
}

export default SignUp;