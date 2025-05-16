import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log('ERROR', error.message);
            
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto w-11/12 mb-4">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold flex justify-center text-blue-400">Sign Up now!</h1>

                <div className="card-body ">
                    <form onSubmit={handleSubmit} className="form">
                        
                        <label className="label mt-2">Email</label>
                        <input type="email"
                            name="email" className="input" placeholder="Email"
                            required />
                        <label className="label mt-2">Password</label>
                        <input type="password"
                            name="password" className="input" placeholder="Password"
                            required />
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-neutral w-full bg-blue-300 text-blue-950 ">Login</button>
                        </div>

                    </form>
                    <p className="text-center font-semibold">Don't Have An Account ? <Link className="text-red-500" to="/register" >Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;