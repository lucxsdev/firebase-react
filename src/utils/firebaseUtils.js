import firebase from 'firebase';

const config = {
  //keys aqui
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
