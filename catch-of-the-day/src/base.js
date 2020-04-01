import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTlEekAxstyPhj92kcZLuNpS2tO1oWonI",
  authDomain: "catch-of-the-day-weili-shi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-weili-shi.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
