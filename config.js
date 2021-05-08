import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8DOCt9Dpa9PtZgri2Tb_j5o3hnjeihZ0",
    authDomain: "wireless-buzzer-24ced.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-24ced-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-24ced",
    storageBucket: "wireless-buzzer-24ced.appspot.com",
    messagingSenderId: "560888857525",
    appId: "1:560888857525:web:2a21522996a90d888b0ffc",
    measurementId: "G-29CMMLLJ4Q"
};



// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()