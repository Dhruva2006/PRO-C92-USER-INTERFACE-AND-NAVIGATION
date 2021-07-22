import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCNjWr72bPs9SrD4O-GE3roX_73w47pLzM",
  authDomain: "book-santa-c7f2d.firebaseapp.com",
  projectId: "book-santa-c7f2d",
  storageBucket: "book-santa-c7f2d.appspot.com",
  messagingSenderId: "282059953609",
  appId: "1:282059953609:web:43c98c6e04f0ce11158418"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
