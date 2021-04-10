var firebaseConfig = {
  apiKey: "AIzaSyC5TGD9UmSuBLfjITzmsm60eg4OKwZvDAc",
  authDomain: "kwitter-13e3e.firebaseapp.com",
  databaseURL: "https://kwitter-13e3e-default-rtdb.firebaseio.com",
  projectId: "kwitter-13e3e",
  storageBucket: "kwitter-13e3e.appspot.com",
  messagingSenderId: "641157074189",
  appId: "1:641157074189:web:8327707f6da85c5731b444"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("username");
 roomname=localStorage.getItem("roomname");
 document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+ Room_names);
     row      
 console.log()
      //End code
      });});}


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname", name);
window.location="kwitter_page.html";

}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}

function addroom(){
  roomname=document.getElementById("roomname").value;

  firebase.database().ref("/").child(roomname).update({
    purpose:"adding roomname"
  });
  localStorage.setItem("roomname",roomname);
  window.location="kwitter_page.html";
}
