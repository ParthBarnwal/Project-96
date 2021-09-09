//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDugUZh1BLgrwUFJpuGKFt--tVHyYw2vsE",
      authDomain: "kwitter-cfa90.firebaseapp.com",
      databaseURL: "https://kwitter-cfa90-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfa90",
      storageBucket: "kwitter-cfa90.appspot.com",
      messagingSenderId: "371312300282",
      appId: "1:371312300282:web:1a51f6eb8f8c4455603943"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("User name");

function send()
{
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
