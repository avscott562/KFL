


function checkIfUserExistsInDatabase( userEmail, userPass, callback){



    // this is how you woukd "log in" a user 
    firebase.database().ref('/users').once('value').then(function(snapshot) {
        let users = snapshot.val() 

        for (index in users){
            for (i in users[index]){
                let email = users[index][i].email
                let pass = users[index][i].password
                    

                //console.log(email, userEmail, pass, userPass)

                if(email == userEmail && userPass == pass) {

                    window.localStorage.setItem('user', JSON.stringify(users[index]))
                    window.localStorage.setItem('userid', index)
                    
                    let user = JSON.parse(localStorage.getItem('user'))
                    callback(user)
                    // save a copy of the user object locally to localStorage 
                    // and use that as authentication for the entire site


                    // if user object does not exist, then you are "logged out"

                    // to log out, just delete user object from localStorage 
                    return true 
                }
                    
                //console.log( "user object is: " , email, pass)
            }
        }
        callback(null)
    });

}



$('#sign-in-button').click( (event) => {
    
    let userEmail = $('#sign-in-email').val().trim()
    let userPass = $('#sign-in-password').val().trim()

    checkIfUserExistsInDatabase(userEmail, userPass, function(user){

        if(user){
            console.log("USER FROM LOCAL STORAGE IS", user)
        } else {
            // give error message 
            //
    
            console.log('user does not exist')
        }
    })



})