import React from 'react';
import SignOut from '../signout/signout';
import './header.scss';
class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'>MESSENGER</div>
                {this.props.signin ? <SignOut>sign out</SignOut> : null}

            </div>
        )
    }
}
export default Header;