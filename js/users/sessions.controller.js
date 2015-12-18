(function(){
  angular
  .module("radio")
  .controller("SessionsController", function($auth, $state, $scope){

    this.signinForm = {};
    this.signupForm = {};

    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        console.log("Signin success:", resp);
        $state.go('songsIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signup = function() {
        $auth.submitRegistration(this.signupForm)
        .then(function(resp) {
          $state.go('songsIndex');
        })
        .catch(function(resp) {
          console.log('signup failure', resp);
        });
      };

    $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'signout') {
            $auth.signOut();
          }
        });
  });
})();
