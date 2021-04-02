
import './App.css';
//import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from './components/firebaseutlis';
import Header from './components/header/header';
import SignIn from './components/signin/signin';
import ChatRoom from './components/chatcomponent/chatcomponent';
function App() {
  const [user] = useAuthState(auth);
  const [signin, setsignin] = useState(false);
  if (signin === false && user) {
    setsignin(true);
  }
  if (signin === true && user === null) {
    setsignin(false);
  }
  console.log('data dekh', signin);
  return (
    <div className="App">
      <Header signin={signin} setsignin={setsignin} />
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


export default App;
