import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;

/* We are GRABBING the 'USER' OBJECT -> uid for authentication
user
: 
UserImpl
accessToken
: 
"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkMjNmMzc0MDI1ZWQzNTNmOTg0YjUxMWE3Y2NlNDlhMzFkMzFiZDIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmFydG9zeiBTd2llcnp5bnNraSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1raEFvV2ZSVVRFSl90SkZ5dTVETUVzTVZOVGlEbUlqWjF1SXRuUD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jcnduLWNsb3RoaW5nLWRiLTY2MTgxIiwiYXVkIjoiY3J3bi1jbG90aGluZy1kYi02NjE4MSIsImF1dGhfdGltZSI6MTY2MzQxMTQ4NywidXNlcl9pZCI6Ik5GQmtzSlpqdk1lZnpQVldYdUlBcU1tOU5nSzIiLCJzdWIiOiJORkJrc0paanZNZWZ6UFZXWHVJQXFNbTlOZ0syIiwiaWF0IjoxNjYzNDExNDg3LCJleHAiOjE2NjM0MTUwODcsImVtYWlsIjoiYmFydG9zenN3aWVyenluc2tpN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDg3ODQxMTcyMTMzOTgzODI4MCJdLCJlbWFpbCI6WyJiYXJ0b3N6c3dpZXJ6eW5za2k3QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.FrlbkpVzHI-Xj0Yu6kooQEg3HoHmG3vesakfv3b3pchrMMALYCrD6kJ2WIoRy4oltu5ua37aQyT56RKmAb0--P7ce4ZHBfplpbWRx1CoiuZyH8z-oqSyj9Fw7tGxD-C4oGvqrh0FyGWNmd-68Fl1aBrIv29dpyelLiZmrWuOg_yFbZ7ZE9_UEs1ifYg-aKYM42mZzyl7PHjf75tTP3tf7ukKOM-A4phLmvGTdB-iefzFIfPQqgeIo25SmwoYSoaUklKK1_9cMt8_Z-fPXm6zCl8NFcVTyz8dFlvMubGDXQqqjLCC3pKmj4JO7z1Kg_MOxOxp3KsZ218O1jwcKPGXPQ"
auth
: 
AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, config: {…}, currentUser: UserImpl, emulatorConfig: null, …}
displayName
: 
"Bartosz Swierzynski"
email
: 
"bartoszswierzynski7@gmail.com"
emailVerified
: 
true
isAnonymous
: 
false
metadata
: 
UserMetadata {createdAt: '1663407318046', lastLoginAt: '1663407318047', lastSignInTime: 'Sat, 17 Sep 2022 09:35:18 GMT', creationTime: 'Sat, 17 Sep 2022 09:35:18 GMT'}
phoneNumber
: 
null
photoURL
: 
"https://lh3.googleusercontent.com/a/AItbvmkhAoWfRUTEJ_tJFyu5DMEsMVNTiDmIjZ1uItnP=s96-c"
proactiveRefresh
: 
ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
providerData
: 
[{…}]
providerId
: 
"firebase"
reloadListener
: 
null
reloadUserInfo
: 
{localId: 'NFBksJZjvMefzPVWXuIAqMm9NgK2', email: 'bartoszswierzynski7@gmail.com', displayName: 'Bartosz Swierzynski', photoUrl: 'https://lh3.googleusercontent.com/a/AItbvmkhAoWfRUTEJ_tJFyu5DMEsMVNTiDmIjZ1uItnP=s96-c', emailVerified: true, …}
stsTokenManager
: 
StsTokenManager {refreshToken: 'AOEOulbbePUn1mrYfnOXDjn4VR1z2lkiX79aXqES2GGROhXnNP…SKA1zqqKmIgDqa4CY5m2hFHdJpf3fIYMwTxixmawzUVS_ZUWQ', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkMjNmMzc0MDI1ZWQzNT…bGDXQqqjLCC3pKmj4JO7z1Kg_MOxOxp3KsZ218O1jwcKPGXPQ', expirationTime: 1663397088311}
tenantId
: 
null
uid
: 
"NFBksJZjvMefzPVWXuIAqMm9NgK2"
*/
