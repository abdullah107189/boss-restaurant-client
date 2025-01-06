import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const googleProvider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
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
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt-sing', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data?.token)
                        }
                    })
                setLoading(false)
                setUser(currentUser)
            } else {
                localStorage.clear('access-token')
                setLoading(false)
                setUser(null)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user, setUser,
        createUser,
        updateUserProfile,
        logoutUser,
        loginInUser,
        loading, setLoading,
        createUserWithGoogle,
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;