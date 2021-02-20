import React from "react";
import "./App.css";

function App() {
  const CLIENT_ID = 'CLIENT_ID';
  const SCOPE = "SCOPE";

  let auth2: gapi.auth2.GoogleAuth;

  function initClient() {
    gapi.load('auth2', function() {
      auth2 = gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: SCOPE
      });
    });
  }

  const signInWithGoogle = () => {
    auth2.grantOfflineAccess().then(signInCallback);
  }

  function signInCallback(authResult: any) {
    if (authResult['code']) {
      console.log('authorize code: ', authResult['code']);
    } else {
      // There was an error.
    }
  }

  React.useEffect(() => {
    initClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button id="signinButton" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default App;
