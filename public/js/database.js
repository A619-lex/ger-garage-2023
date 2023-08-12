// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA64HReCyvT1QCHpI_DSPwcEoSqAualVyA",
    authDomain: "garage2023-4c7ef.firebaseapp.com",
    databaseURL: "https://garage2023-4c7ef-default-rtdb.firebaseio.com",
    projectId: "garage2023-4c7ef",
    storageBucket: "garage2023-4c7ef.appspot.com",
    messagingSenderId: "214540517209",
    appId: "1:214540517209:web:f850d754e01b3a49b3d648"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value

    var username = document.getElementById('username').value
    var message = document.getElementById('message').value

  
    database.ref('users/' + username).set({
      email : email,

      username : username,
      message : message,

    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value

  
    var updates = {
      email : email,

    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }