var firebaseConfig = {
    apiKey: "AIzaSyCAmtmNRAEkkm-QgIn6Piwzf7NpZxTqLbg",
    authDomain: "pro-94.firebaseapp.com",
    databaseURL: "https://pro-94-default-rtdb.firebaseio.com",
    projectId: "pro-94",
    storageBucket: "pro-94.appspot.com",
    messagingSenderId: "511040257433",
    appId: "1:511040257433:web:9a3700786137794ca06708"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + " !";
function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
