import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user);

    // for sign up or register
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // for sign in or login
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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
        })
        return () => {
            unSubscribe();
        }
    }, [])

    

    const authInfo = {
        user,
        createNewUser,
        signInUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;