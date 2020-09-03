import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDI8AvbbdjZHuK6bPdZwIiTLgKNIQxGPWY",
        authDomain: "reactnativesignupin.firebaseapp.com",
        databaseURL: "https://reactnativesignupin.firebaseio.com",
        projectId: "reactnativesignupin",
        storageBucket: "reactnativesignupin.appspot.com",
        messagingSenderId: "542697700239",
        appId: "1:542697700239:web:f0e6a64e3fab26119469fa",
        measurementId: "G-FQCPMRPG6H",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
