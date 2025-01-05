import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logoutUser = () => {
        return signOut(auth)
    }
    const loginInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false)
                setUser(currentUser)
            } else {
                setLoading(false)
                setUser(null)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        createUser,
        updateUserProfile,
        logoutUser,
        loginInUser,
        loading, setLoading,

    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;