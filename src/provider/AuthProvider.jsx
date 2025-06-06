import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    // for sign up or register
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // for sign in or login
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    // for sign out user
    const logOut = () => {
        return signOut(auth);
    }

    // for observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User' , currentUser);
            
            setUser(currentUser);
            
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    

    const authInfo = {
        user,
        loading,
        createNewUser,
        signInUser,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;