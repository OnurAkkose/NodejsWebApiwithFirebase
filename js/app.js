
var firebaseConfig = {
   /*your firebase config */
};



!firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

firebase.auth.Auth.Persistence.LOCAL



$("#btn-login").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != "") {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        

        result.catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message : " + errorMessage);

        });

    }
    else {
        windows.alert("Lütfen tum alanları doldurunuz!");

    }


});



$("#btn-signup").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if (email != "" && password != "" && cPassword != "") {
        if (password == cPassword) {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);

            });
        } else {
            window.alert("Şifreler eşleşmiyor!");
        }


    }
    else {
        windows.alert("Lütfen tüm alanları doldurunuz!");

    }


});

$("#btn-update").click(function () {

    var phone = $("#phone").val();
    var adress = $("#adress").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);


    if (fName != "" && sName != "" && bio != "" && adress != "" && phone != "") {

        var userData = {
            "phone": phone,
            "address": adress,
            "bio": bio,
            "firstName": fName,
            "secondName": sName,
            "gender": gender,

        };

        usersRef.set(userData, function (error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);

            }
            else {

                window.location.href = "index.html"

            }
        });

    }
    else {
        window.alert("Lütfen tüm alanları doldurun!");
    }


});
$("#btn-logout").click(function () {
    firebase.auth().signOut();


});

function switchView(view) {
    $.get({
        url: view,
        cache: false,
    })
        .then(function (data) {
            $("#container").html(data);
        });
}


    
$("#profile-update").click(function () {

    var phone = $("#phone").val();
    var adress = $("#adress").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);


    if (fName != "" ) {

        var userData = {
            "phone": phone,
            "address": adress,
            "bio": bio,
            "firstName": fName,
            "secondName": sName,
            

        };

        usersRef.set(userData, function (error) {
            if (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);

            }
            else {

                window.alert("Güncellendi!");

            }
        });

    }
    else {
        window.alert("Lütfen isminizi giriniz.");
    }


});



