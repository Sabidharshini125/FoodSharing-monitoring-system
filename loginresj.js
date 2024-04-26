const firebaseConfig = {
    apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
    authDomain: "waste-food-management-3d458.firebaseapp.com",
    databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
    projectId: "waste-food-management-3d458",
    storageBucket: "waste-food-management-3d458.appspot.com",
    messagingSenderId: "423228747816",
    appId: "1:423228747816:web:e4b20539f860001c34851d",
    measurementId: "G-Z8FJDGN1Z8"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref("RegistrationForm");

var form = document.querySelector('form');
var message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var username = form.username.value;
    var password = form.password.value;

    // Fetch data from Firebase
    db.orderByChild("Username").equalTo(username).once("value", (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const userData = childSnapshot.val();
                if (userData.Password === password) {
                    message.textContent = 'Login successful!';
                    // Redirect to dashboard or homepage
                    window.location.href = './Dashboard.html';
                } else {
                    message.textContent = 'Incorrect password. Please try again.';
                }
            });
        } else {
            message.textContent = 'Username not found. Please sign up.';
        }
    }).catch((error) => {
        console.error('Error fetching user data: ', error);
        message.textContent = 'Error logging in. Please try again.';
    });
});
