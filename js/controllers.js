var firebaseConfig = {
    apiKey: "AIzaSyAGJLz3ViD5rOLzZ1ta4EQ8TmLpf71AMb0",
    authDomain: "maxapp-a88be.firebaseapp.com",
    databaseURL: "https://maxapp-a88be.firebaseio.com",
    projectId: "maxapp-a88be",
    storageBucket: "maxapp-a88be.appspot.com",
    messagingSenderId: "764443533758",
    appId: "1:764443533758:web:ba5dcda0475edd1ed559ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  MyApp=angular.module("MyApp",[])

    MyApp.controller('productoCtrl', function($scope) {
    $scope.guardar = function(producto){
      firebase.database().ref("producto").push(producto).then(function success(x){
    swal("Genial!", "Registro exitoso!", "success").catch(function(error){
        //An error happened.
      });
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  swal ("error",errorMessage)

});
    }
  
})