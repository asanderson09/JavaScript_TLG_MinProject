// import firebase from "firebase";

// class Fire {
//   constructor() {
//     this.init();
//     this.observeAuth();
//   }

//   init = () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: "AIzaSyDI8AvbbdjZHuK6bPdZwIiTLgKNIQxGPWY",
//         authDomain: "reactnativesignupin.firebaseapp.com",
//         databaseURL: "https://reactnativesignupin.firebaseio.com",
//         projectId: "reactnativesignupin",
//         storageBucket: "reactnativesignupin.appspot.com",
//         messagingSenderId: "542697700239",
//       });
//     }
//   };

//   observeAuth = () =>
//     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

//   onAuthStateChanged = (user) => {
//     if (!user) {
//       try {
//         firebase.auth.signInAnonymously();
//       } catch ({ message }) {
//         alert(message);
//       }
//     }
//   };

//   get uid() {
//     return (firebase.auth.currentUser || {}).uid;
//   }

//   get ref() {
//     return firebase.database().ref("messages");
//   }

//   on = (callback) =>
//     this.ref
//       .limitToLast(20)
//       .on("child_added", (message) => callback(this.parse(message)));

//   parse = (message) => {
//     const { timestamp, text, user } = message.val();
//     const { key: _id } = message;
//     const timestamp = new Date(timestamp);
//     return {
//       _id,
//       createdAt,
//       text,
//       user,
//     };
//     return message;
//   };

//   get timestamp() {
//     return firebase.database.ServerValue.TIMESTAMP;
//   }

//   send = (messages) => {
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i];
//       const message = {
//         text,
//         user,
//         timestamp: this.timestamp,
//       };
//       console.log(message);
//       firebase.database().ref("messages").push(message);
//       //this.append(message);
//     }
//   };

//   append = (message) => this.ref.push(message);

//   off() {
//     this.ref.off();
//   }
// }

// Fire.shared = new Fire();

// export default Fire;

import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/functions";
// import "firebase/storage";

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
