import React from 'react';
import { auth } from '../firebaseutlis';
import './signout.scss';
function SignOut() {
    return (
        <button onClick={() => auth.signOut()} className='button'>Sign Out</button>
    )
}
export default SignOut;