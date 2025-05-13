import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  mx-auto w-11/12">
            <div className="hero-content flex-col lg:flex-row-reverse">
            
                    
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold flex justify-center text-blue-400">Login now!</h1>
                    
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn  mt-4 bg-blue-300 text-blue-950">Login</button>
                        </fieldset>
                        <p className="text-center font-semibold">Don't Have An Account ? <Link className="text-red-500" to="/register" >Register</Link></p>
                    </div>
                </div>
            </div>
        
    );
};

export default Login;