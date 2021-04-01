import React from 'react';
import { SignInWithGoogle } from '../firebaseutlis';
import './signin.scss';
const SignIn = () => {
    // const SignInWithGoogle = () => {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   auth.signInWithPopup(provider);
    // }
    return (
        <div className='main-page'>
            <button onClick={SignInWithGoogle} className='google'>Sign in With Google</button>

        </div>
    )
}
export default SignIn;