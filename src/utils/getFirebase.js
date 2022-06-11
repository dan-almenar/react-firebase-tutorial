import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA6mZDAKq-ThZ582D_AgPY4h8DyGAr3MDY",
    authDomain: "videoteca-eadf0.firebaseapp.com",
    projectId: "videoteca-eadf0",
    storageBucket: "videoteca-eadf0.appspot.com",
    messagingSenderId: "827991493838",
    appId: "1:827991493838:web:86b19fd33fbbfece45949f"
  };

const app = initializeApp(firebaseConfig);

export { app }