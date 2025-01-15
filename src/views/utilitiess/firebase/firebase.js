// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken } from 'firebase/messaging';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQAsPlef1PHqyx70vaOh0dfY5WxYpkPI0',
  authDomain: 'push-notifications-3528e.firebaseapp.com',
  projectId: 'push-notifications-3528e',
  storageBucket: 'push-notifications-3528e.firebasestorage.app',
  messagingSenderId: '483649159324',
  appId: '1:483649159324:web:0bfebc40d557dc79faad59',
  measurementId: 'G-D1BEHYK3E1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);

  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey: 'BJDMOFu1oVtvycmYsMLjgQqA3J231TGSfFh4uRSHyRwLNLV6EznmJ2N4G6a9pcbPU2EF1ZHyA8T3_8tnj0I-e3M'
    });
    console.log(token);
  }
};
