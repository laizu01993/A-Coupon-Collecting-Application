import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto w-11/12">
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold flex justify-center text-blue-400">Sign Up now!</h1>

                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Name"
                        required />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="PhotoURL"
                        required />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email"
                        required />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password"
                        required />
                        
                        <button className="btn bg-blue-300 text-blue-950 mt-4">Register</button>
                    </fieldset>
                    <p className="font-semibold text-center">Already Have An Account ? <Link className="text-red-500 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>

    );
};

export default SignUp;