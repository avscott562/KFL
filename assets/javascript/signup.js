

$('#sign-up-button').click( (event) => {
    event.preventDefault()
    // close the modal here 

    // grab our user variables 
    let email = $('#sign-up-email').val().trim()
    let pass = $('#sign-up-password').val().trim()
    let id = uuid()

   // send to firebase  
   firebase.database().ref('users/' + id).push({
       email: email,
       password: pass,
    });


    // print the user we just created 
    firebase.database().ref('/users/' + id).once('value').then(function(snapshot) {
        let user = snapshot.val() 
        console.log(user)
    })
})