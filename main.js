// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
  authDomain: "waste-food-management-3d458.firebaseapp.com",
  databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
  projectId: "waste-food-management-3d458",
  storageBucket: "waste-food-management-3d458.appspot.com",
  messagingSenderId: "423228747816",
  appId: "1:423228747816:web:e4b20539f860001c1c34851d",
  measurementId: "G-Z8FJDGN1Z8"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed Up")
          console.log(result)
          // ...
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          // ..
      });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed In")
          console.log(result)
          window.location.href=""
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}