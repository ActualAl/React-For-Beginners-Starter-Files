import Rebase from 're-base';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBPWfPVac67j9D5e20vXtTwiwN_5PA56AY",
    authDomain: "catch-of-the-day-f406c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-f406c.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;