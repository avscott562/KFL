// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXLmhDBi4-2M61o5ehdYQHWIILbwePfG8",
    authDomain: "kflp-87d67.firebaseapp.com",
    databaseURL: "https://kflp-87d67.firebaseio.com",
    projectId: "kflp-87d67",
    storageBucket: "kflp-87d67.appspot.com",
    messagingSenderId: "231728782178",
    appId: "1:231728782178:web:a095e0f0c16636a23caa3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $('#openLeagueButton').on("click", function() {
     console.log('modal has been clicked');
      //show modal
      $('#leagueModalForm').addClass('show');
      //add dim background
    //   var background = $('<div id="background">').addClass('modal-backdrop show');
    //   $('body').append(background);
  });

 
