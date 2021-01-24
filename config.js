import * as firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "",
    authDomain: "wireless-library-16936.firebaseapp.com",
    projectId: "wireless-library-16936",
    storageBucket: "wireless-library-16936.appspot.com",
    messagingSenderId: "71835878785",
    appId: "1:71835878785:web:357e32b3398ba262e49480"
  };

 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();
