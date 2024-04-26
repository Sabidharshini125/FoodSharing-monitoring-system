// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC8GMtqL24u1T-TFK5KAhenvb5U1GgHmWo",
    authDomain: "waste-food-management-3d458.firebaseapp.com",
    databaseURL: "https://waste-food-management-3d458-default-rtdb.firebaseio.com",
    projectId: "waste-food-management-3d458",
    storageBucket: "waste-food-management-3d458.appspot.com",
    messagingSenderId: "423228747816",
    appId: "1:423228747816:web:3ad447612618fcb334851d",
    measurementId: "G-8ZDL2SYTLK"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref("donationForm");

// Form submission
var form = document.getElementById('donationForm');
var message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var donorName = getElementVal('donorName');
    var orphanageName = getElementVal('orphanageName');
    var foodQuantity = parseFloat(getElementVal('foodQuantity'));
    var newdonationform= db.push();
    // Add donation to Firestore
    newdonationform.set({
        donor: donorName,
        orphanage: orphanageName,
        quantity: foodQuantity,
        date: new Date().toISOString()
    })
    .then(() => {
        message.textContent = 'Thank you for your donation!';
        form.reset();
    })
    .catch((error) => {
        console.error('Error adding donation: ', error);
        message.textContent = 'Error submitting donation. Please try again.';
    });
});
const getElementVal = (id) => {
window.location.href='display.html';    
  };