import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

const SignUp = () => {

    const navigate = useNavigate();

    const { createNewUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({ name, photo, email, password });

        // Password validation using regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 6 characters and include both uppercase and lowercase letters.");
            return;
        }

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("register successful!");
                e.target.reset();

                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message);
                toast.error("failed to login." + error.message)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto w-11/12 mb-4">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold flex justify-center text-blue-400">Sign Up now!</h1>

                <div className="card-body ">
                    <form onSubmit={handleSubmit} className="form">
                        <label className="label">Your Name</label>
                        <input type="text"
                            name="name"
                            className="input" placeholder="Name"
                            required />
                        <label className="label mt-2">Photo URL</label>
                        <input type="text"
                            name="photo" className="input" placeholder="PhotoURL"
                            required />
                        <label className="label mt-2">Email</label>
                        <input type="email"
                            name="email" className="input" placeholder="Email"
                            required />

                        <label className="label mt-2">Password</label>
                        <div className="flex items-center gap-2 relative">
                            <input type="password"
                            name="password" className="input" placeholder="Password"
                                required />
                            <button className="btn btn-xs absolute right-6">
                                <FaEye></FaEye>
                            </button>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-neutral w-full bg-blue-300 text-blue-950 ">Register</button>
                        </div>

                    </form>
                    <p className="font-semibold text-center">Already Have An Account ? <Link className="text-red-500 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;