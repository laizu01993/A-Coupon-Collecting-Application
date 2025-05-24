import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const navigate = useNavigate();

    const { createNewUser, signInWithGoogle } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("login successful!");
                navigate('/')
            })
            .catch(error => {
                console.log('ERROR', error.message);
                toast.error("failed to login." + error.message)
            })
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        // const form = new FormData(e.target);
        // const name = form.get("name")
        // const photo = form.get("photo")
        // const email = form.get("email")
        // const password = form.get("password")
        // console.log({ name, photo, email, password });
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(name, photo, email, password, terms);

        // terms condition
        if (!terms) {
            toast.error("Please accept our terms and condition")
            return;
        }


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
                            <input type={showPassword ? "text" : "password"}
                                name="password" className="input" placeholder="Password"
                                required />
                            <button
                                onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-6">
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </button>
                        </div>

                        {/* checkbox */}
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">

                            <label className="label">
                                <input type="checkbox"
                                    name="terms" className="checkbox" />
                                Accept Our Terms And Conditions
                            </label>
                        </fieldset>
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-neutral w-full bg-blue-300 text-blue-950 ">Register</button>
                        </div>

                    </form>
                    <p className="font-semibold text-center">Already Have An Account ? <Link className="text-red-500 font-bold" to="/login">Login</Link></p>
                    <p className="flex justify-center">
                        <button onClick={handleGoogleSignIn} className="btn ">Google</button>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;