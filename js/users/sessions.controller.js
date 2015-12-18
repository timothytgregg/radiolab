// js/users/sessions.controller.js
(function(){
  angular
  .module("radio")
  .controller("SessionsController", function($auth, $state){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go('songsIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };
  });
})();
