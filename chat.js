// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB2gY7a-88kIkODdMl3RJark8TR8uJY2mA",
    authDomain: "kwitter-database-d245d.firebaseapp.com",
    databaseURL: "https://kwitter-database-d245d-default-rtdb.firebaseio.com",
    projectId: "kwitter-database-d245d",
    storageBucket: "kwitter-database-d245d.appspot.com",
    messagingSenderId: "100363138472",
    appId: "1:100363138472:web:0699b343518fb3e636d99d"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



