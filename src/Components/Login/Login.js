import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const { value1 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div className="text-center w-50 mx-auto my-5 bg-info p-5 rounded">
            <h1 className="text-info mb-5">Please! Log In.</h1>


            <button type="button" className="btn btn-success btn-lg" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faEnvelope} /> Sign In With Google</button>

        </div>
    );
};


export default Login;